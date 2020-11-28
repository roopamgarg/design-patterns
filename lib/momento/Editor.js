"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorState_1 = __importDefault(require("./EditorState"));
class Editor {
    constructor() {
        this.content = '';
    }
    createState() {
        return new EditorState_1.default(this.content);
    }
    restore(state) {
        if (typeof state !== 'undefined') {
            this.content = state.getContent();
        }
        else {
            this.content = '';
        }
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
}
exports.default = Editor;
//# sourceMappingURL=Editor.js.map