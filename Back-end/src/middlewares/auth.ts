import { expressjwt } from "express-jwt";
import { secret } from "../config";

const authValidation = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"]
});

export default authValidation;