"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConsole = exports.CREATE_CONSOLE = exports.DeleteConsole = exports.DELETE_CONSOLE = exports.RemoveConsole = exports.REMOVE_CONSOLE = exports.WriteConsole = exports.WRITE_CONSOLE = exports.ReadConsole = exports.READ_CONSOLE = exports.UpdateConsole = exports.UPDATE_CONSOLE = exports.InitConsole = exports.INIT_CONSOLE = void 0;
// Console actions
exports.INIT_CONSOLE = "[Console action] Init Console";
class InitConsole {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CONSOLE;
    }
}
exports.InitConsole = InitConsole;
exports.UPDATE_CONSOLE = "[Console action] Update Console";
class UpdateConsole {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CONSOLE;
    }
}
exports.UpdateConsole = UpdateConsole;
exports.READ_CONSOLE = "[Read action] Read Console";
class ReadConsole {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_CONSOLE;
    }
}
exports.ReadConsole = ReadConsole;
exports.WRITE_CONSOLE = "[Write action] Write Console";
class WriteConsole {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_CONSOLE;
    }
}
exports.WriteConsole = WriteConsole;
exports.REMOVE_CONSOLE = "[Remove action] Remove Console";
class RemoveConsole {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_CONSOLE;
    }
}
exports.RemoveConsole = RemoveConsole;
exports.DELETE_CONSOLE = "[Delete action] Delete Console";
class DeleteConsole {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_CONSOLE;
    }
}
exports.DeleteConsole = DeleteConsole;
exports.CREATE_CONSOLE = "[Create action] Create Console";
class CreateConsole {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_CONSOLE;
    }
}
exports.CreateConsole = CreateConsole;
//# sourceMappingURL=console.action.js.map