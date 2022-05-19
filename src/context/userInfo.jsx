import { createContext, useReducer } from "react";

const UserInfoContext = createContext();

const initialState = {
    userName: {},
    birth: {},
    contactInfo: {},
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'USER-NAME':
            return {
                ...state,
                userName: action.payload
            }
        case 'CUMPLEANIOS':
            return {
                ...state,
                birth: action.payload
            }
        case 'DATOS-CONTACTO':
            return {
                ...state,
                contactInfo: action.payload
            }
        default:
            return state;
    }
}

const UserInfoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const data = {state, dispatch}

    return (
        <UserInfoContext.Provider value={data}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoContext;
export {UserInfoContextProvider}