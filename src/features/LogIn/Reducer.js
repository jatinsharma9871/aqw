import { USER_LOGIN, USER_LOGOUT } from "./ActionTypes";

const initState = {token:"", resetToken:""}

export const LogInReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                token: payload,
            }
        
        case USER_LOGOUT:
            return {
                ...state,
                token:state.resetToken,
            }
        default:
            return state;
    }
    
}  
