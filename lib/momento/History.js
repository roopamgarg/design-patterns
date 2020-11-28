"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class History {
    constructor() {
        this.states = [];
    }
    push(state) {
        this.states.push(state);
    }
    pop() {
        this.states.pop();
        const lastIndex = this.states.length - 1;
        return lastIndex >= 0 ? this.states[lastIndex] : undefined;
    }
}
exports.default = History;
//# sourceMappingURL=History.js.map