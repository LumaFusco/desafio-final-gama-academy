import { expressjwt } from "express-jwt";
import { secret } from "../config";

const authValidation = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"],
    credentialsRequired: true,
    getToken: (req) => req.headers.authorization?.split(' ')[1],
});

export default authValidation