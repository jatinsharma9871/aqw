import { USER_LOGIN, USER_LOGOUT } from "./ActionTypes";

export const userLogin = (token) => ({
    type: USER_LOGIN,
    payload: token,
})


export const userLogOut = () => ({
    type: USER_LOGOUT
})

