"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BrowserHistory_1 = __importDefault(require("./BrowserHistory"));
const main = () => {
    const history = new BrowserHistory_1.default();
    history.push('a');
    history.push('b');
    history.push('c');
    const iterator = history.createIterator();
    while (iterator.hasNext()) {
        console.log(iterator.current());
        iterator.next();
    }
};
exports.default = main;
//# sourceMappingURL=index.js.map