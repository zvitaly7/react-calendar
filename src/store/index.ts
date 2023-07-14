import { configureStore } from '@reduxjs/toolkit'
import {authReducer} from "./reducers/auth";
import {eventReducer} from "./reducers/event";


export const store = configureStore({
    reducer: {
        auth: authReducer.reducer,
        event: eventReducer.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
