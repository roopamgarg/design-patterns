"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BrushTool_1 = __importDefault(require("./BrushTool"));
const Canvas_1 = __importDefault(require("./Canvas"));
const SelectionTool_1 = __importDefault(require("./SelectionTool"));
const main = () => {
    const canvas = new Canvas_1.default();
    const brushTool = new BrushTool_1.default();
    const selectionTool = new SelectionTool_1.default();
    canvas.setCurrentTool(brushTool);
    canvas.mouseDown();
    canvas.mouseUp();
    canvas.setCurrentTool(selectionTool);
    canvas.mouseDown();
    canvas.mouseUp();
};
exports.default = main;
//# sourceMappingURL=index.js.map