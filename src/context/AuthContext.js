import { createContext } from "react";
import { useReducer } from "react";
import AuthReducer from "./AuthReducer";


const INITIAL_STATE = {
    user: {
        _id: "66bf7b23f852ebe552b8d4d9",
        username: "Jennifer",
        email: "jennifer@gmail.com",
        profilePicture: "Photos/11.jpg",
        coverPicture: "",
        followers: ["66bf79bbf852ebe552b8d4c9","66ba0915d69845595be86e68"],
        following: [],
        isAdmin: false
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}

        </AuthContext.Provider>
    )
}