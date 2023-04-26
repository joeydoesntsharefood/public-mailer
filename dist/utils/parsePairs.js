"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePairs = void 0;
const parsePairs = (value) => value.match(/.{1,2}/g);
exports.parsePairs = parsePairs;
