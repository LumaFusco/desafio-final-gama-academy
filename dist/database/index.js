"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDB = void 0;
const Connection_1 = __importDefault(require("./Connection"));
const mongoDB = new Connection_1.default("mongodb://127.0.0.1:27017/Teal_Book");
exports.mongoDB = mongoDB;
