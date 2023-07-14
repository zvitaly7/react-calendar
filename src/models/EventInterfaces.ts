import {User} from "../store/reducers/auth";

export interface IEvent {
    author: string;
    guest: string;
    date: string;
    description: string
}

export interface EventState {
    guests: User[];
    events: IEvent[];
}
