import {Request, Response, NextFunction} from "express"
import * as jwt from "jsonwebtoken"
import { secret } from "../config"

const authValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers["authorization"]
    let jwtPayload
    try {
        jwtPayload = <any>jwt.verify(token, secret.key)
        res.locals.jwtPayload = jwtPayload
    } catch(error:any) {
        return res.status(401).send
    }
    const {id, email, isAdmin} = jwtPayload
    const newToken = jwt.sign({id, email, isAdmin}, secret.key, {
        expiresIn: "1h"
    })
    res.setHeader("token", newToken)
    next()
}

export default authValidation;