"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlackAndWhiteFilter_1 = __importDefault(require("./BlackAndWhiteFilter"));
const ImageStorage_1 = __importDefault(require("./ImageStorage"));
const PNGCompressor_1 = __importDefault(require("./PNGCompressor"));
const main = () => {
    const imageStorage = new ImageStorage_1.default();
    imageStorage.store('file', new PNGCompressor_1.default(), new BlackAndWhiteFilter_1.default());
};
exports.default = main;
//# sourceMappingURL=index.js.map