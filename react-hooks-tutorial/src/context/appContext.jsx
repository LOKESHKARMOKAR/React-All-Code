import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=>{
    const phone = "+91 9382291059"
    const name = "lokesh"
    return (
        <AppContext.Provider value={[phone,name]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider