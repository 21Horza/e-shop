import React, { useState } from 'react'
import cl from "../styles/Sidebar.module.css"
import logo from "../assets/logo.jpg"
import {RiDashboardFill} from "react-icons/ri"
import {FaUserAlt} from "react-icons/fa"
import {FaProductHunt} from "react-icons/fa"
import {VscGroupByRefType} from "react-icons/vsc"
import {FiLogOut} from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import {HOME_ROUTE ,USERS_ROUTE, PRODUCTS_ROUTE,TYPES_ROUTE } from "../consts/consts"
import { logout } from '../http/adminApi'
import { useDispatch } from 'react-redux'
import Toast from './UI/Toast'
import { useFetching } from '../hooks/useFetching'
import Loader from './UI/Loader'
import ErrorModal from './UI/ErrorModal'

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errModal, setErrModal] = useState(true);
    const [showSignedOutToast, setShowSignedOutToast] = useState(false)

    const [logoutAdmin, isLoading, err] = useFetching(async () => {
        await logout(dispatch)
    })

    const logoutHandler = (e) => {
        e.preventDefault()
        logoutAdmin(dispatch)
        setShowSignedOutToast(true)
    }

    if (isLoading) {
        return <Loader/>
    }
    
      if(err) {
        return <ErrorModal
            active={errModal} 
            setActive={setErrModal}>
          <h1>Ooops...</h1>
          <h1>{err}</h1>
        </ErrorModal>
      }

  return (
    <>
    {showSignedOutToast && <Toast
          active={showSignedOutToast} 
          setActive={setShowSignedOutToast} 
          errMsg={false}
          title={'Successfully logged out!'}
        ></Toast>}
    <div className={cl.sideContainer}>
        <div className={cl.sideLogo}>
            <img onClick={() => navigate(HOME_ROUTE)} alt='logo' src={logo} />
        </div>
        <div className={cl.sideList}>
            <ul>
                <p className={cl.sideTitle}>MAIN</p>
                    <li onClick={() => navigate(HOME_ROUTE)}>
                        <RiDashboardFill className={cl.sideIcons}/>
                        <span>Dashboard</span>
                    </li>
                <p className={cl.sideTitle}>USEFUL</p>
                <li onClick={() => navigate(USERS_ROUTE)}>
                    <FaUserAlt className={cl.sideIcons}/>
                    <span>Users</span>
                </li>
                <li onClick={() => navigate(TYPES_ROUTE)}>
                    <VscGroupByRefType className={cl.sideIcons}/>
                    <span>Types</span>
                </li>
                <li onClick={() => navigate(PRODUCTS_ROUTE)}>
                    <FaProductHunt className={cl.sideIcons}/>
                    <span>Products</span>
                </li>
                <p className={cl.sideTitle}>SERVICE</p>
                <li>
                    <FiLogOut className={cl.sideIcons}/>
                    <span
                    onClick={(e)=> logoutHandler(e)}
                    >Logout</span>
                </li>
            </ul>
        </div>
    </div>
</>
  )
}

export default Sidebar