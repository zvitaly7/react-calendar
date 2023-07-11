import React, {ReactComponentElement} from "react";
import Login from "../pages/Login";
import Calendar from "../pages/Calendar";

export interface MyRoute {
    path: string;
    component: JSX.Element
}
 export enum RouteNames {
    LOGIN = '/login',
    CALENDAR = '/'
 }

export const publicRoutes: MyRoute[] = [
    { path: RouteNames.LOGIN, component: <Login/> }
]

export const privateRoutes: MyRoute[] = [
    { path: RouteNames.CALENDAR, component: <Calendar/> }
]

