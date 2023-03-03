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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const models_1 = require("../models");
const authController = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const usuario = yield models_1.Usuario.findOne({ email });
            if (!usuario) {
                return res.status(400).json('Email não cadastrado');
            }
            const match = yield bcrypt_1.default.compareSync(senha, usuario.senha);
            if (!match) {
                return res.status(401).json('Senha invalida');
            }
            try {
                const token = jsonwebtoken_1.default.sign({
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    isAdmin: usuario.isAdmin
                }, config_1.secret.key, {});
                return res.json(token);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    }
};
exports.default = authController;
