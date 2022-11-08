import { createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const tokenAuth = createContext();

const TokenAuthProvider = ({ children }) => {

    const [currentModels, storeModels, clearStoredModels] = useLocalStorage("models", null);

    const handleTokenChange = (token, action) => {
        if (action === "login") {
            storeModels(token);
        }
        else {
            clearStoredModels();
        }
    };
    
    const modelsStatus = useMemo(
        () => ({ currentModels, handleTokenChange }),   
        [currentModels, handleTokenChange],
    );

    return (
        <tokenAuth.Provider value={modelsStatus}>
            {children}
        </tokenAuth.Provider>
    );
};
  
export default TokenAuthProvider;