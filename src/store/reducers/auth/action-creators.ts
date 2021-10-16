import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setError: (message: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: message}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json')
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect username or password'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 2000)
        } catch (e) {
            dispatch(AuthActionCreators.setError('An error occurred while logging in'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setAuth(false))
    }
}