import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthState = {
    auth: false,
    isLoading: false,
    error:'',
    user: {} as User
}

export interface User {
    username: string;
    password: string;
}

export interface AuthState {
    auth: boolean;
    user: User;
    isLoading: boolean;
    error: string;
}

// enum AuthActions {
//     SET_AUT='setAuth'
// }
// interface SetAuthAction {
//     type: AuthActions.SET_AUT;
//     payload: boolean;
// }

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.auth = action.payload
            state.isLoading = false
        },
        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = !action.payload
        },
        setUser(state, action: PayloadAction<User>){
            state.user = action.payload
        },
        setError(state, action: PayloadAction<string>){
            state.error = action.payload
            state.isLoading = false
        }
    }
})
// without Redux Toolkit
// export default function authReducer(state = initialState, action: SetAuthAction): AuthState {
//     switch (action.type) {
//         case AuthActions.SET_AUT:
//             return { ...state, auth: action.payload}
//         default:
//             return state;
//
//     }
// }
