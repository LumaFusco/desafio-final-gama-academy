import axios, {AxiosError} from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "../../errors/AuthTokenError";
import { loginOut } from "../../../contexts/AuthContext";

export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);

const API_BASE = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Headers ${cookies['@tealbook.token']}`
    }
})

    API_BASE.interceptors.response.use(response => {
        return response;
    },(error: AxiosError) => {
        if(error.response?.status === 401){
            // qualquer erro 401 (não autorizado) devemos deslogar o usuário
            if(typeof window !== undefined){
                // Chamar a função para deslogar o usuario
                loginOut()
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(error);
    })
    
    return API_BASE;
}

