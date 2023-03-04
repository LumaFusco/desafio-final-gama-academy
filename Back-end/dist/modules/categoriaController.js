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
            const { nome } = req.body;
            try {
                const newCategoria = yield models_1.Categoria.create({
                    nome: nome.toUpperCase(),
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
            const checkCategoria = yield models_1.Categoria.findById(id);
            if (!checkCategoria) {
                return res.status(500).json("Id não encontrado");
            }
            try {
                const categoria = yield models_1.Categoria.findById(id);
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
                return res.status(500).json("Id não encontrado");
            }
            try {
                yield models_1.Categoria.updateOne({
                    _id: id,
                }, {
                    $set: {
                        nome: nome.toUpperCase()
                    },
                });
                return res.status(200).json("Informações atualizadas");
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
                return res.status(500).json("Id não encontrado");
            }
            try {
                yield models_1.Categoria.findByIdAndDelete(id);
                return res.status(200).json("Categoria Deletada");
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = categoriaController;
