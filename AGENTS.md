# 🧪 AGENTS.md — Test Specifications

> This document defines the testing architecture, conventions, and runner assignments for the `100.shade` repository.

---

## 1. Runner Assignments

| Pivot          | Runner    | Why                                                                                                                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `100.shade`    | **AVA 6** | Shade is a CLI-bootstrapped PixiJS application. AVA's process isolation, serial-by-default execution, and zero-DOM assumptions make it the correct choice for testing stateful buzzers and reducers. |

**There is one runner.** All tests use AVA. This is non-negotiable.

---

## 2. Shade Test Specifications (`100.shade`)

### 2.1 Scope

Tests are scoped to the `00.shade.unit` within the `100.shade` pivot. The `995.library` layer contains terminal UI primitives (grid, console, choice, input, menu) that are tightly coupled to `blessed` and are not unit-testable without a TTY. Do not attempt to test library buzzers directly.

### 2.2 Configuration

AVA is configured in the root `package.json`:

```json
{
  "ava": {
    "files": ["test/**/*.test.ts"],
    "extensions": { "ts": "commonjs", "tsx": "commonjs" },
    "nodeArguments": ["--import=tsx"]
  }
}
```

Run with: `npm test`

### 2.3 Test Location

All shade tests live under:

```
test/
├── shade.buzz.test.ts
├── shade.reduce.test.ts
└── (future unit tests)
```

### 2.4 Conventions

- **File naming:** `<buzzer-name>.test.ts` — mirrors the source file it covers.
- **Mocking:** Use `sinon` (already a dependency) to stub external I/O. Tests must never make real HTTP calls or spawn real processes.
- **Isolation:** Each test receives its own `clone-deep`'d model instance, matching how the reducer operates in production.
- **bal.slv pattern:** Buzzer functions resolve through `bal.slv()`. In tests, provide a mock `slv` that captures the resolved value:

```typescript
import test from 'ava';
import sinon from 'sinon';

test('bodyShade resolves bal.slv with body-shade and src', async (t) => {
  const slv = sinon.fake();
  const cpy = new ShadeModel();
  const bal = { slv, src: 'test-src' } as any;
  const ste = {} as any;

  bodyShade(cpy, bal, ste);

  t.true(slv.calledOnce);
  t.deepEqual(slv.firstCall.args[0], { shdBit: { idx: 'body-shade', src: 'test-src' } });
});
```

### 2.5 Required Test Coverage (Shade Unit)

| Test File               | What It Covers                                                                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `shade.buzz.test.ts`    | `bodyShade` — bal.slv resolution with src passthrough                                                                  |
| `shade.buzz.test.ts`    | `testShade` — bal.slv resolution with test-shade bit                                                                   |
| `shade.buzz.test.ts`    | `buildShade` — bal.slv resolution with build-shade bit                                                                 |
| `shade.reduce.test.ts`  | Reducer dispatch — correct buzzer routing for `TEST_SHADE`, `BUILD_SHADE`, default passthrough                         |

---

## 3. What NOT to Test

- **`995.library` buzzers** — These are TTY-coupled (`blessed`). Testing them requires a virtual terminal, which is out of scope.
- **`BEE.ts` registration** — This is a generated wiring file. If it compiles, it works.
- **`99.core/state`** — The state dispatcher is infrastructure. Test the units that consume it, not the dispatcher itself.
- **Browser-side units** (application, surface, container, graphic, text, sprite, hexagon, focigon, loop, toon, video, frame, camera, spritesheet, visage, chrome) — These are PixiJS rendering units that require a browser context. They are not unit-testable in a Node.js environment.

---

## 4. CI Integration

The root `package.json` exposes these scripts:

| Script         | What It Does                                                                       |
| -------------- | ---------------------------------------------------------------------------------- |
| `npm test`     | Runs all unit tests (AVA)                                                          |
| `npm run dev`  | Starts the MQTT broker, compiles `995.library`, and initializes the library runtime |
| `npm run launch` | Starts the Parcel dev server for the browser frontend (`src/index.html`)         |

GitHub Actions CI (`.github/workflows/ci.yml`) runs `npm run test` on push to `main` and on pull requests.

---

## 5. Unit Creation & Modification — Mandatory `updateLibrary` Step

> **This section is critical. Failing to follow it will leave new or modified units invisible to the runtime.**

### 5.1 Background: How `BEE.ts` Works

Every **pivot** (e.g. `995.library`, `100.shade`) contains a `BEE.ts` file that serves as the central wiring manifest. `BEE.ts` is **not hand-written** — it is **generated** by the `updateLibrary` buzzer in `995.library/00.library.unit/buz/library.buzz.ts`.

`updateLibrary` scans the pivot directory for all `*unit` folders, reads a doT template (`data/redux/BEE.txt`), and writes a fully wired `BEE.ts` containing:

- Unit imports (e.g. `import ShadeUnit from './00.shade.unit/shade.unit';`)
- Interface & model imports
- Reducer imports and the `reducer` map
- The `list` array of all units
- The `UnitData` class with typed model fields

### 5.2 The Rule

**After creating a new unit, deleting a unit, or adding/removing/renaming actions (methods) within a unit inside any pivot, you MUST call `updateLibrary` with the pivot name.**

The call is made via the library buzzer:

```
updateLibrary({ src: '<pivot-name>' })
```

Where `<pivot-name>` is the directory name of the pivot you modified — for example `995.library`, `100.shade`, etc.

### 5.3 What Happens If You Skip This Step

- The new unit **will not** appear in `BEE.ts`.
- The runtime **will not** discover the unit's reducer or model.
- Actions dispatched to the new unit **will silently fail** — no error, no handler, nothing.
- The application will behave as if the unit does not exist.

### 5.4 Checklist for Coding Agents

When creating or modifying a unit within a pivot, follow this checklist **in order**:

1. **Create/modify the unit** — add the `*.unit` directory with its standard files (`*.unit.ts`, `*.model.ts`, `*.reduce.ts`, `*.action.ts`, `fce/*.interface.ts`, `fce/*.bit.ts`, `buz/*.buzz.ts`).
2. **Update the unit's action file** (`*.action.ts`) with any new or renamed actions.
3. **Update the unit's reducer** (`*.reduce.ts`) to route the new actions to their buzzer functions.
4. **Run `updateLibrary`** with `{ src: '<pivot-name>' }` where `<pivot-name>` is the pivot directory that contains the unit (e.g. `995.library`, `100.shade`).
5. **Verify** that the pivot's `BEE.ts` now includes imports and wiring for the new/modified unit.

> ⚠️ **Do NOT hand-edit `BEE.ts` directly.** It is a generated file and will be overwritten by the next `updateLibrary` call. All structural changes to `BEE.ts` must go through `updateLibrary`.

---

## 6. Architecture Overview

### 6.1 Pivots

| Pivot          | Purpose                                                                                              | Units |
| -------------- | ---------------------------------------------------------------------------------------------------- | ----- |
| `100.shade`    | Primary application pivot — PixiJS rendering engine with hexagonal grids, sprites, toons, and video  | 19    |
| `995.library`  | Shared terminal UI library — `blessed`-based TUI primitives, unit/action scaffolding, and `updateLibrary` | 11    |

### 6.2 Key Units in `100.shade`

| Unit                   | Responsibility                                     |
| ---------------------- | -------------------------------------------------- |
| `00.shade.unit`        | Bootstrap, launch, build, test, and update commands |
| `01.application.unit`  | PixiJS application lifecycle                       |
| `02.surface.unit`      | Rendering surface management                       |
| `03.container.unit`    | PixiJS container hierarchy                         |
| `04.graphic.unit`      | Vector graphics primitives                         |
| `05.text.unit`         | Text rendering                                     |
| `06.sprite.unit`       | Sprite management                                  |
| `07.hexagon.unit`      | Hexagonal grid system                              |
| `08.focigon.unit`      | Focused hexagon interactions                       |
| `09.loop.unit`         | Game/render loop management                        |
| `10.toon.unit`         | Animation/toon rendering                           |
| `11.video.unit`        | Video playback                                     |
| `12.frame.unit`        | Frame management                                   |
| `13.camera.unit`       | Camera/viewport control                            |
| `15.spritesheet.unit`  | Spritesheet loading and management                 |
| `21.visage.unit`       | Visual identity/appearance                         |
| `24.chrome.unit`       | UI chrome/overlay                                  |
| `97.collect.unit`      | Collection management                              |
| `99.bus.unit`          | MQTT message bus integration                       |

### 6.3 Key Units in `995.library`

| Unit                   | Responsibility                                                    |
| ---------------------- | ----------------------------------------------------------------- |
| `00.library.unit`      | Library init, `updateLibrary`, `countLibrary`, dev server launch   |
| `01.unit.unit`         | Unit scaffolding and creation                                     |
| `02.action.unit`       | Action scaffolding                                                |
| `80.terminal.unit`     | `blessed` terminal screen lifecycle                               |
| `81.grid.unit`         | Terminal grid layout                                              |
| `83.console.unit`      | Terminal console output                                           |
| `84.input.unit`        | Terminal text input                                               |
| `85.choice.unit`       | Terminal choice/selection prompts                                 |
| `97.collect.unit`      | Collection management                                             |
| `98.menu.unit`         | Terminal menu navigation                                          |
| `99.bus.unit`          | MQTT message bus integration                                      |
