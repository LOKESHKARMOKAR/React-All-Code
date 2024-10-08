import { createContext } from "react";

export const AppContext = createContext();

const Footer = (props)=>{
    const phone = '+91 9382291059'
    return (
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}

export default contextProvider;
