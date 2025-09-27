"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var rx_lite_1 = require("rx-lite");
var rx_lite_2 = require("rx-lite");
var BEE_1 = __importDefault(require("../BEE"));
var Effect = __importStar(require("../BEE"));
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(init) {
        if (init === void 0) { init = new BEE_1["default"](); }
        var _this = _super.call(this, init) || this;
        _this.dispatcher = new rx_lite_2.Subject();
        _this.dispatcher
            .scan(function (state, action) { return _this.reducedApp(state, action); }, init)
            .subscribe(function (state) {
            _super.prototype.onNext.call(_this, state);
        });
        return _this;
    }
    State.prototype.reducedApp = function (nextState, key) {
        for (var k in Effect.reducer)
            Effect.reducer[k](nextState[k], key, this);
        return nextState;
    };
    State.prototype.dispatch = function (value) {
        var result = this.dispatcher.onNext(value);
        return result;
    };
    State.prototype.pat = function (value) {
        this.dispatch(value);
    };
    State.prototype.next = function (value) {
        this.dispatcher.onNext(value);
    };
    return State;
}(rx_lite_1.BehaviorSubject));
exports["default"] = State;
//# sourceMappingURL=state.js.map