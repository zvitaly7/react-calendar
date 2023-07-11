const initialState: AuthState = {
    auth: false
}

export interface AuthState {
    auth: boolean
}

enum AuthActions {
    SET_AUT='setAuth'
}
interface SetAuthAction {
    type: AuthActions.SET_AUT;
    payload: boolean;
}

export default function authReducer(state = initialState, action: SetAuthAction): AuthState {
    switch (action.type) {
        case AuthActions.SET_AUT:
            return { ...state, auth: action.payload}
        default:
            return state;

    }
}
