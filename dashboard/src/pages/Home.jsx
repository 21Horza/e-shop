import React from 'react'
import { useNavigate } from 'react-router-dom'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'
import { PRODUCTS_ROUTE, TYPES_ROUTE, USERS_ROUTE } from '../consts/consts'
import cl from "../styles/Home.module.css"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={cl.homeContainer}>
        <Sidebar />
        <div className={cl.pageContainer}>
          <Navbar />
          <div className={cl.widgetsWrapper}>
            <div 
              onClick={()=> navigate(USERS_ROUTE)}
            className={cl.widgetRoute}>
              <Widget
              type={"users"}/>
            </div>
            <div 
              onClick={()=> navigate(TYPES_ROUTE)}
            className={cl.widgetRoute}>
              <Widget
              type={"types"}/>
            </div>
            <div 
            
              onClick={()=> navigate(PRODUCTS_ROUTE)}
            className={cl.widgetRoute}>
              <Widget
              type={"products"}/>
            </div>
          </div>
          <div className={cl.charts}>
            <Featured />
          </div>
        </div>
    </div>
  )
}

export default Home