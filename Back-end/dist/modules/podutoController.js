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
const produtoController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, foto, preco, descricao, categoria } = req.body;
            try {
                const newProduto = yield models_1.Produto.create({
                    id,
                    nome,
                    foto,
                    preco,
                    descricao,
                    categoria,
                });
                return res.status(201).json(newProduto);
            }
            catch (error) {
                return res.status(400).json("Não foi possível realizar o cadastro");
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtos = yield models_1.Produto.find();
                return res.json(produtos);
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
                const produto = yield models_1.Produto.findOne({
                    _id: id,
                });
                return res.json(produto);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, foto, preco, descricao, categoria } = req.body;
            try {
                const updated = yield models_1.Produto.updateOne({
                    _id: id,
                }, {
                    $set: {
                        nome,
                        foto,
                        preco,
                        descricao,
                        categoria
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
            try {
                const { id } = req.params;
                yield models_1.Produto.findByIdAndDelete({});
                return res.sendStatus(204);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = produtoController;
