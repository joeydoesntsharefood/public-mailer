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
exports.ForgetPasswordController = exports.InviteController = exports.ConfirmationController = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const SendBusiness_1 = require("../../business/SendBusiness");
const initial_1 = require("../../models/initial");
const SendService_1 = require("../../services/SendService");
const ConfirmationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = (0, dayjs_1.default)().format('MM-DD-YYYY HH:mm:ss');
    const { to, code, name } = req.body;
    const { subject, text } = initial_1.initial === null || initial_1.initial === void 0 ? void 0 : initial_1.initial.emailConfirmation({ code, name });
    const { success, error } = yield (0, SendService_1.SendService)({ subject, text, to });
    const { success: registerDBASuccesss, error: registerDBAError } = yield (0, SendBusiness_1.SendBusiness)({ template: 'confirmation', to, success, date });
    if (error)
        res.status(500).json({ message: 'Não foi possível enviar o e-mail', success: error });
    if (error)
        res.status(500).json({ message: 'Não foi possível registrar o envio do e-mail', success: registerDBAError });
    return res.json({ message: 'E-mail enviado', success: registerDBASuccesss });
});
exports.ConfirmationController = ConfirmationController;
const InviteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = (0, dayjs_1.default)().format('MM-DD-YYYY HH:mm:ss');
    const { to, eventDate, eventHour, eventLocation, eventName } = req.body;
    const { subject, text } = initial_1.initial.invite({ eventDate, eventHour, eventLocation, eventName });
    const { success, error } = yield (0, SendService_1.SendService)({ subject, text, to });
    const { success: registerDBASuccesss, error: registerDBAError } = yield (0, SendBusiness_1.SendBusiness)({ template: 'invite', to, success, date });
    if (error)
        res.status(500).json({ message: 'Não foi possível enviar o e-mail', success: error });
    if (error)
        res.status(500).json({ message: 'Não foi possível registrar o envio do e-mail', success: registerDBAError });
    return res.json({ message: 'E-mail enviado', success: registerDBASuccesss });
});
exports.InviteController = InviteController;
const ForgetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = (0, dayjs_1.default)().format('MM-DD-YYYY HH:mm:ss');
    const { to, code, name } = req.body;
    const { subject, text } = initial_1.initial.forgetPassword({ code, name });
    const { success, error } = yield (0, SendService_1.SendService)({ subject, text, to });
    const { success: registerDBASuccesss, error: registerDBAError } = yield (0, SendBusiness_1.SendBusiness)({ template: 'forgetPassword', to, success, date });
    if (error)
        res.status(500).json({ message: 'Não foi possível enviar o e-mail', success: error });
    if (error)
        res.status(500).json({ message: 'Não foi possível registrar o envio do e-mail', success: registerDBAError });
    return res.json({ message: 'E-mail enviado', success: registerDBASuccesss });
});
exports.ForgetPasswordController = ForgetPasswordController;
