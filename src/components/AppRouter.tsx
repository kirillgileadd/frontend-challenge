import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import {routes} from "../rotes/routes";

const AppRouter:FC = () => {
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
        </Routes>
    );
};

export default AppRouter;