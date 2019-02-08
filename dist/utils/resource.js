"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.resourceResolver = {
    get(url) {
        return new Promise((resolve, reject) => {
            fs_1.readFile(url, 'utf-8', (err, content) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(content);
                }
            });
        });
    },
    getSync(url) {
        return fs_1.readFileSync(url).toString();
    }
};
//# sourceMappingURL=resource.js.map