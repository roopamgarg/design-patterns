"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(auditTrail) {
        this.auditTrail = auditTrail;
    }
    execute() {
        this.auditTrail.record();
        this.doExecute();
    }
}
exports.default = Task;
//# sourceMappingURL=Task.js.map