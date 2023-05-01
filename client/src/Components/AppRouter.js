import React, {  useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import { HOME_ROUTE } from '../utils/consts';
 const AppRouter = ({setCount}) => {
 
    const {user} = useContext(Context)
    
    return (
      <Routes>
        {/* {user.isAuth === true} && {authRoutes.map(({path,Component}) =>
<Route key={path} path={path} element={<Component setCount={setCount}/>} exact/>
)} */}
{publicRoutes.map(({path,Component}) =>
<Route key={path} path={path} element={<Component setCount={setCount}/>} exact/>
)}
 <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
      </Routes>
    )
  
}
export default AppRouter