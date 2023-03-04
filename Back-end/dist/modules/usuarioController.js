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
const usuarioController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, isAdmin } = req.body;
            const senhaCripto = bcrypt_1.default.hashSync(senha, 10);
            try {
                const newUsuario = yield models_1.Usuario.create({
                    nome: nome.toUpperCase(),
                    email: email.toLowerCase(),
                    senha: senhaCripto,
                    isAdmin,
                });
                return res.status(201).json(newUsuario);
            }
            catch (error) {
                return res.status(400).json("Não foi possível realizar o cadastro");
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield models_1.Usuario.find();
                return res.json(usuarios);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const checkUsuario = yield models_1.Usuario.findById(id);
            if (!checkUsuario) {
                return res.status(404).json("Id não encontrado");
            }
            try {
                const usuario = yield models_1.Usuario.findById(id);
                return res.json(usuario);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email } = req.body;
            const checkUsuario = yield models_1.Usuario.findById(id);
            if (!checkUsuario) {
                return res.status(404).json("Id não encontrado");
            }
            try {
                yield models_1.Usuario.updateOne({
                    _id: id,
                }, {
                    $set: {
                        nome: nome === null || nome === void 0 ? void 0 : nome.toUpperCase(),
                        email: email === null || email === void 0 ? void 0 : email.toLowerCase(),
                    },
                });
                return res.status(200).json("Informações Atualizadas");
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const checkUsuario = yield models_1.Usuario.findById(id);
            if (!checkUsuario) {
                return res.status(404).json("Id não encontrado");
            }
            try {
                yield models_1.Usuario.findByIdAndDelete(id);
                return res.status(200).json("Usuário Deletado");
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = usuarioController;
