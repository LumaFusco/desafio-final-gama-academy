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
const livroController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, foto, preco, descricao, categoria, autor } = req.body;
            try {
                const newLivro = yield models_1.Livro.create({
                    nome,
                    foto,
                    preco,
                    descricao,
                    categoria,
                    autor,
                });
                yield newLivro.populate('categoria');
                return res.status(201).json(newLivro);
            }
            catch (error) {
                return res.status(400).json("Não foi possível realizar o cadastro");
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const livros = yield models_1.Livro.find();
                return res.json(livros);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const checkLivro = yield models_1.Livro.findById(id);
            if (!checkLivro) {
                return res.status(500).json("Id não encontrado");
            }
            try {
                const livro = yield models_1.Livro.findById(id);
                yield (livro === null || livro === void 0 ? void 0 : livro.populate('categoria'));
                return res.json(livro);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, foto, preco, descricao, categoria, autor } = req.body;
            const checkLivro = yield models_1.Livro.findById(id);
            if (!checkLivro) {
                return res.status(500).json("Id não encontrado");
            }
            try {
                yield models_1.Livro.updateOne({
                    _id: id,
                }, {
                    $set: {
                        nome,
                        foto,
                        preco,
                        descricao,
                        categoria,
                        autor,
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
            const checkLivro = yield models_1.Livro.findById(id);
            if (!checkLivro) {
                return res.status(500).json("Id não encontrado");
            }
            try {
                yield models_1.Livro.findByIdAndDelete(id);
                return res.status(200).json("Livro deletado");
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = livroController;
