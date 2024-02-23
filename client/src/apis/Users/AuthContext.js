import { faL, faListNumeric } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Login_success, fetch_profile_failed, fetch_profile_success, login_failed } from "./AuthContenyTypes";

const { createContext, useReducer } = require("react");


// creating a context
export const authContext = createContext();

// initial state
const initial_State = {
    userAuth: null,
    error:null,
    loading:false,
    profile: null,
}

// reducer function
const ReducerFunc = (state, action) => {
    switch(action.type){
        case Login_success:
            return {
                ...state,
                loading: false,
                error: null,
                userAuth: action.payload
            };

        case login_failed: 
            return {
                ...state,
                loading: false,
                error: action.payload,
                userAuth: null,
            };

        case fetch_profile_success: 
            return {
                ...state,
                loading: false,
                error: null,
                profile: action?.payload,
            }

        case fetch_profile_failed: 
            return {
                ...state,
                loading: false,
                error: action?.payload,
                profile: null,
            }
    }
}

// provider to give access to the component to get data
export const AuthContextProvider = ({children}) => {
    // useReducer
    const [state, dispatch] = useReducer(ReducerFunc, [initial_State]);

    // login Action
    const loginUserAction = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/login", formData, config);
            console.log(response);

            if(response?.data){
                dispatch({
                    type: Login_success,
                    payload: response.data,
                })
            }

        } catch (error) {
            console.log(error);
            dispatch({
                type: login_failed,
                payload: error?.response?.data?.message,
            })
        }
    }

    // getting the profile data
    const fetchProfileAction = async() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {
            const response = await axios.get("http://localhost:4000/api/v1/users/profile", config);

            if(response?.data?.status){
                dispatch({
                    type: fetch_profile_success,
                    payload: response?.data,
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: fetch_profile_failed,
                payload: error?.response?.data?.message
            })
        }
    }

    return (
        <authContext.Provider value={{
            isLogin: false,
            loginUserAction,
            fetchProfileAction,
            profile: state?.profile,
            error: state?.error,
        }}>
            {children}
        </authContext.Provider>
    )
}