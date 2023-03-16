"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailer_1 = require("../../config/mailer");
const SendService = ({ subject, text, to }) => __awaiter(void 0, void 0, void 0, function* () {
    let transporter;
    try {
        transporter = nodemailer_1.default.createTransport(mailer_1.smtpConfig);
        yield transporter.sendMail({
            from: 'no-reply@agriland11971.c42.integrator.host',
            to: to,
            subject: subject,
            html: text,
        });
        transporter.close();
        return { success: true, error: false };
    }
    catch (error) {
        return { success: false, error: true };
    }
});
exports.SendService = SendService;
