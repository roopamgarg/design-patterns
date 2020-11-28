"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editor_1 = __importDefault(require("./Editor"));
const History_1 = __importDefault(require("./History"));
const main = () => {
    const editor = new Editor_1.default();
    const history = new History_1.default();
    editor.setContent('a');
    history.push(editor.createState());
    editor.setContent('b');
    history.push(editor.createState());
    editor.setContent('c');
    history.push(editor.createState());
    editor.restore(history.pop());
    console.log(editor.getContent());
};
exports.default = main;
//# sourceMappingURL=index.js.map