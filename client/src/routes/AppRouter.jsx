import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { HOME_ROUTE } from '../consts/consts';
import { publicRoutes } from './routes';

const AppRouter = () => {

  return (
    <Routes>
        {publicRoutes.map(({path, element}) => 
            <Route key={path} path={path} element={element} />
        )}
        <Route path="*" element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter