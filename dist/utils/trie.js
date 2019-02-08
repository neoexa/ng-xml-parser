"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor() {
        this.children = {};
    }
}
exports.Node = Node;
const defaultSplit = (str) => str.split('');
class Trie {
    constructor(splitFunction = defaultSplit) {
        this.splitFunction = splitFunction;
        this._root = new Node();
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    insert(key, data) {
        const keyParts = this.splitFunction(key);
        const node = this.findNode(key, true);
        node.data = data;
        this._size += 1;
    }
    get(key) {
        const node = this.findNode(key);
        if (node.data) {
            return node.data;
        }
        return null;
    }
    clear() {
        this._root = new Node();
        this._size = 0;
    }
    findNode(key, createIfDoesNotExist = false) {
        const parts = this.splitFunction(key);
        let currentNode = this._root;
        for (let i = 0; i < parts.length; i += 1) {
            let child = currentNode.children[parts[i]];
            if (!child) {
                if (createIfDoesNotExist) {
                    child = new Node();
                    currentNode.children[parts[i]] = child;
                }
                else {
                    return currentNode;
                }
            }
            currentNode = child;
        }
        return currentNode;
    }
}
exports.Trie = Trie;
//# sourceMappingURL=trie.js.map