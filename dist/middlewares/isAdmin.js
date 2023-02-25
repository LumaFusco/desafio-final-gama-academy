"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ocheckAdmin = (req, res, next) => {
    const user = req.usario; // Supondo que o usuário esteja disponível no objeto de solicitação (req)
    if ((user === null || user === void 0 ? void 0 : user.tipo) === true) {
        next();
    }
    else {
        res.status(401).json({ message: 'Usuário não autorizado' });
    }
};
