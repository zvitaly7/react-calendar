import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../auth";
import {EventState, IEvent} from "../../../models/EventInterfaces";

const initialState: EventState = {
    guests: [],
    events: []
}

export const eventReducer = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setGuests (state, action:PayloadAction<User[]>) {
            state.guests = action.payload
        },
        setEvents (state, action:PayloadAction<IEvent[]>) {
            state.events = action.payload
        }
    }
})
