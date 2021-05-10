"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var User = new Schema({
    Username: {
        type: String,
        require: true
    },
    Balance: {
        type: Number,
        default: 0
    },
    Refs: {
        type: Number,
        default: 0
    },
    is_paid: {
        type: Boolean,
        default: false
    },
    next_date_payment: {
        type: Date
    },
    UserID: {
        type: String
    }
});
exports.default = mongoose_1.default.model('@user', User);
