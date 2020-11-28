"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BrushTool_1 = __importDefault(require("./BrushTool"));
class Canvas {
    constructor() {
        this.currentTool = new BrushTool_1.default();
    }
    mouseDown() {
        this.currentTool.mouseDown();
    }
    mouseUp() {
        this.currentTool.mouseUp();
    }
    getCurrentTool() {
        return this.currentTool;
    }
    setCurrentTool(currentTool) {
        this.currentTool = currentTool;
    }
}
exports.default = Canvas;
//# sourceMappingURL=Canvas.js.map