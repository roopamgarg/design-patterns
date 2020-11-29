"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("./Task"));
class GenerateReport extends Task_1.default {
    doExecute() {
        console.log('Generate Report');
    }
}
exports.default = GenerateReport;
//# sourceMappingURL=GenrateReport.js.map