"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuditTrail_1 = __importDefault(require("./AuditTrail"));
const TransferMoney_1 = __importDefault(require("./TransferMoney"));
const main = () => {
    const auditTrail = new AuditTrail_1.default();
    const task = new TransferMoney_1.default(auditTrail);
    task.execute();
};
exports.default = main;
//# sourceMappingURL=index.js.map