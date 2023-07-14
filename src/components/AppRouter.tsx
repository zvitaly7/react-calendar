import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useSelector} from "react-redux";
import {RootState} from "../store";

const AppRouter = () => {
    const {auth} = useSelector((state:RootState) => state.auth)
    return (
            auth ?
            <Routes>
                {privateRoutes.map(route => <Route path={route.path} element={route.component} key={'uniqeKEy'} />)}
                <Route path="*" element={<Navigate replace to={RouteNames.CALENDAR} />} />
            </Routes>
                :
            <Routes>
                {publicRoutes.map(route => <Route path={route.path} element={route.component} key={'unqekey2'} />)}
                <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
            </Routes>

    );
};

export default AppRouter;
