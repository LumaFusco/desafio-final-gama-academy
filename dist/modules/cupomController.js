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
const cupomController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, desconto } = req.body;
            try {
                const newCupom = yield models_1.Cupom.create({
                    nome: nome.toUpperCase(),
                    desconto
                });
                return res.status(201).json(newCupom);
            }
            catch (error) {
                return res.status(400).json("Não foi possível realizar o cadastro");
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cupons = yield models_1.Cupom.find();
                return res.json(cupons);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const checkCupom = yield models_1.Cupom.findById(id);
            if (!checkCupom) {
                return res.status(500).json("Id não encontrado");
            }
            try {
                const cupom = yield models_1.Cupom.findById(id);
                return res.json(cupom);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, desconto } = req.body;
            const checkCupom = yield models_1.Cupom.findById(id);
            if (!checkCupom) {
                return res.status(500).json("Id não encontrado");
            }
            try {
                yield models_1.Cupom.updateOne({
                    _id: id,
                }, {
                    $set: {
                        nome: nome.toUpperCase(),
                        desconto
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
            const checkCupom = yield models_1.Cupom.findById(id);
            if (!checkCupom) {
                return res.status(500).json("Id não encontrado");
            }
            try {
                yield models_1.Cupom.findByIdAndDelete(id);
                return res.status(200).json("Cupom Deletado");
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = cupomController;
