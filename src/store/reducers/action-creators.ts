import {authReducer, User} from "./auth";
import {AppDispatch} from "../index";
import axios from "axios";
import {IEvent} from "../../models/EventInterfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {eventReducer} from "./event";
import UserService from "../../api";

export const eventActionCreators = {
    setGuests: (payload: User[]): PayloadAction<User[]> => {
        return eventReducer.actions.setGuests(payload)
    },
    setEvents: (payload: IEvent[]): PayloadAction<IEvent[]> => {
        return eventReducer.actions.setEvents(payload)
    },
    fetchGuests: () => async (dispatch:AppDispatch) => {
        try {
            const responce = await UserService.getUsers();
            dispatch(eventReducer.actions.setGuests(responce.data))
        } catch (e) {
            console.log(e)
        }
    }
}


export const actionCreators = {
    setAuth: (auth: boolean) => {
        return authReducer.actions.setAuth(auth);
    },
    setUser: (user: User) => {
        return authReducer.actions.setUser(user)
    },
    setError: (error: string) => {
        return authReducer.actions.setError(error)
    },
    setIsLoading: (isLoading: boolean) => {
        return authReducer.actions.setIsLoading(isLoading)
    },
    login: (username:string, password:string) => async (dispatch:AppDispatch) => {
        console.log(username)
            try {
                dispatch(actionCreators.setIsLoading(true))
                //Server get mock
                setTimeout(async () => {
                    const mockUsers = await UserService.getUsers()
                    const mockUser = mockUsers.data.find(user =>
                        user.username === username && user.password === password)
                    if (mockUser) {
                        localStorage.setItem('auth', 'true')
                        localStorage.setItem('username', mockUser.username)
                        dispatch(actionCreators.setAuth(true))
                        dispatch(actionCreators.setUser(mockUser))
                    } else {
                        dispatch((actionCreators.setError('Нет такого пользователя')))
                    }
                    }, 3000
                )
            } catch {
                dispatch(actionCreators.setError('Произошла ошибка логина'))
            } finally {
                dispatch(actionCreators.setIsLoading(false))
            }
        },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(actionCreators.setUser({} as User))
        dispatch(actionCreators.setAuth(false))
    }
}


export const allActionCreators = {
    ...actionCreators,
    ...eventActionCreators
}
