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
const models_1 = require("../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const newSenha = {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { senha, newSenha, confirmNewSenha } = req.body;
            const senhaCripto = bcrypt_1.default.hashSync(newSenha, 10);
            const checkUsuario = yield models_1.Usuario.findById(id);
            try {
                if (!checkUsuario) {
                    return res.status(404).json("Id não encontrado");
                }
                const match = yield bcrypt_1.default.compareSync(senha, checkUsuario.senha);
                if (!match) {
                    return res.status(401).json('Senha invalida');
                }
                if (!(newSenha === confirmNewSenha)) {
                    return res.status(401).json('Senhas não coincidem');
                }
                yield checkUsuario.set({ senha: senhaCripto }).save();
                return res.status(200).json("Informações Atualizadas");
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = newSenha;
