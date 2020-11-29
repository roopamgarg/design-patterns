"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrowserHistory {
    constructor() {
        // tslint:disable-next-line: max-classes-per-file
        this.ListIterator = class {
            constructor(history) {
                this.history = history;
                this.index = 0;
            }
            hasNext() {
                return this.index < this.history.urls.length;
            }
            current() {
                return this.history.urls[this.index];
            }
            next() {
                this.index++;
            }
        };
        this.urls = [];
    }
    push(url) {
        this.urls.push(url);
    }
    pop() {
        return this.urls.pop();
    }
    getUrls() {
        return this.urls;
    }
    createIterator() {
        return new this.ListIterator(this);
    }
}
exports.default = BrowserHistory;
//# sourceMappingURL=BrowserHistory.js.map