import React from "react";
import { Outlet,useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
import users from "./Users";
import Home from "./Home";
import user from "./user";


export default function Routes(){

  const routes = useRoutes([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'Users',
      element:<>
      Пользователь:
      <Outlet />
      </>,
      children:[
        {
          path:'',
          element:<users/>,
        },
        {
          path:':id',
          element: <user/>
        }
      ]
    },
    {
      path:'*',
      element:<NotFound/>,
    },
  ])
  return routes
}