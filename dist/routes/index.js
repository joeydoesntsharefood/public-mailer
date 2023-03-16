"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SendController_1 = require("../controllers/SendController");
const router = express_1.default.Router();
router.post('/confirmation', SendController_1.ConfirmationController);
router.post('/forget', SendController_1.ForgetPasswordController);
router.post('/invite', SendController_1.InviteController);
exports.default = router;
