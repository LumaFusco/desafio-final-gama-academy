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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const clienteController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, tipo } = req.body;
            const newCliente = yield models_1.Cliente.create({
                nome,
                email,
                senha,
                tipo,
            });
            return res.status(201).json(newCliente);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield models_1.Cliente.find();
            return res.json(clientes);
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield models_1.Cliente.findOne({
                _id: id,
            });
            return res.json(cliente);
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email, senha } = req.body;
            const updated = yield models_1.Cliente.updateOne({
                _id: id,
            }, {
                $set: {
                    nome,
                    email,
                    senha,
                },
            });
            return res.sendStatus(204);
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield models_1.Cliente.findByIdAndDelete();
            return res.sendStatus(204);
        });
    },
};
exports.default = clienteController;
