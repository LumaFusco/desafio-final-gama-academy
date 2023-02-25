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
const Pedidos_1 = __importDefault(require("../models/Pedidos"));
const pedidoController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, produto, valorTotal } = req.body;
            try {
                const newPedido = yield Pedidos_1.default.create({
                    usuario,
                    produto,
                    valorTotal
                });
                return res.status(201).json(newPedido);
            }
            catch (error) {
                return res.status(400).json("Ocorreu um erro");
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pedidos = yield Pedidos_1.default.find();
                return res.json(pedidos);
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
                const pedido = yield Pedidos_1.default.findById(id);
                return res.json(pedido);
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { usuario, produto, valorTotal } = req.body;
            try {
                const updated = yield Pedidos_1.default.updateOne({
                    _id: id,
                }, {
                    $set: {
                        usuario,
                        produto,
                        valorTotal
                    },
                });
                return res.status(204).json("Pedido atualizado");
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
                yield Pedidos_1.default.findByIdAndDelete(id);
                return res.status(204).json("Pedido deletado");
            }
            catch (error) {
                return res.status(500).json("Não foi possível realizar a ação");
            }
        });
    },
};
exports.default = pedidoController;
