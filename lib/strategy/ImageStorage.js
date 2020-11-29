"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageStorage {
    store(fileName, compressor, filter) {
        compressor.compress(fileName);
        filter.filter(fileName);
    }
}
exports.default = ImageStorage;
//# sourceMappingURL=ImageStorage.js.map