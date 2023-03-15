import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PageLogin from "../pages/Login";

export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);

        if(!auth.isAuthenticated){
            return <PageLogin/>;
        }

    return children;
}