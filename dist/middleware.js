"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const middleware = (req, res, next) => {
    const date = (0, dayjs_1.default)().format('HH:MM:ss');
    console.log(`[ADMIN - ${req.method}] ${date} ${req.url}`);
    if (req.method === 'POST')
        console.log(req.body);
    return next();
};
exports.default = middleware;
