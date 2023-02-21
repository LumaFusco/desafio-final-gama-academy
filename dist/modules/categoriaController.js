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
const categoriaController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome } = req.body;
            const checkCategoria = yield models_1.Categoria.count(nome);
            if (checkCategoria) {
                return res.status(500).json("categoria já cadastrada");
            }
            try {
                const newCategoria = yield models_1.Categoria.create({
                    id,
                    nome,
                });
                return res.status(201).json(newCategoria);
            }
            catch (error) {
                return res.status(400).json("Não foi possível realizar o cadastro");
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorias = yield models_1.Categoria.find();
                return res.json(categorias);
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
                const categoria = yield models_1.Categoria.findOne({
                    id: id,
                });
                return res.json(categoria);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome } = req.body;
            const checkCategoria = yield models_1.Categoria.findById(id);
            if (!checkCategoria) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
            try {
                const updated = yield models_1.Categoria.updateOne({
                    id: nome,
                }, {
                    $set: {
                        nome
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
            const checkCategoria = yield models_1.Categoria.findById(id);
            if (!checkCategoria) {
                return res.status(404).json("Id não encontrado");
            }
            try {
                yield models_1.Categoria.findByIdAndDelete({});
                return res.sendStatus(204);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = categoriaController;
