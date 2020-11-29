"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import AuditTrail from './AuditTrail';
const Task_1 = __importDefault(require("./Task"));
class TransferMoney extends Task_1.default {
    doExecute() {
        console.log('Transferring Money');
    }
}
exports.default = TransferMoney;
//# sourceMappingURL=TransferMoney.js.map