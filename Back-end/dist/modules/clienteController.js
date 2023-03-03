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
const clienteController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, email, senha, tipo, } = req.body;
            const senhaCripto = bcrypt_1.default.hashSync(senha, 10);
            try {
                const newCliente = yield models_1.Cliente.create({
                    id,
                    nome,
                    email,
                    senha: senhaCripto,
                    tipo,
                });
                return res.status(201).json(newCliente);
            }
            catch (error) {
                return res.status(400).json("Não foi possível realizar o cadastro");
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield models_1.Cliente.find();
                return res.json(clientes);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const cliente = yield models_1.Cliente.findOne({
                    _id: id,
                });
                return res.json(cliente);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email, senha } = req.body;
            const senhaCripto = bcrypt_1.default.hashSync(senha, 10);
            const checkCliente = yield models_1.Cliente.findById(id);
            if (!checkCliente) {
                return res.status(404).json("Id não encontrado");
            }
            try {
                const updated = yield models_1.Cliente.updateOne({
                    id: id,
                }, {
                    $set: {
                        nome,
                        email,
                        senha: senhaCripto,
                    },
                });
                return res.sendStatus(204);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield models_1.Cliente.findByIdAndDelete({});
                return res.sendStatus(204);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = clienteController;
