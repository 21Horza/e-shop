import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import styles from "../styles/Home.module.css"
import logo from "../assets/logo/logo.jpg"
import {BsFillCartFill} from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"
import { CART_ROUTE, HOME_ROUTE, AUTH_ROUTE } from '../consts/consts'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../http/userApi'
import Toast from './UI/Toast'

const Navbar = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user.currentUser);
  console.log(user)
  const quantity = useSelector(state => state.cart.quantity)
  const [showSignedOutToast, setShowSignedOutToast] = useState(false)
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault()
    logout(dispatch)
    setShowSignedOutToast(true)
  }

  return (
    <>
    {showSignedOutToast && <Toast
          active={showSignedOutToast} 
          setActive={setShowSignedOutToast} 
          errMsg={false}
          title={'Successfully logged out!'}
        ></Toast>}
    {user?.user.isVerified === false && 
      <div className={styles.navbarNotify}>
        <h3>check your email box to verify account</h3>
      </div>
    }
    <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
            <img alt="logo"
            onClick={() => navigate(HOME_ROUTE)}
             src={logo}
             className={styles.logo}/>
        </div>
        <div className={styles.navbarSearch}>
            <input placeholder='Find your favourite clothes here ..' type="text" className={styles.navbarInput} />
        </div>
        <div className={styles.navbarRightPannel}>
          {user ? 
          
          <FiLogOut
          onClick={(e) => logoutHandler(e)} 
          className={styles.navbarCart}/>
              :
                <FaUserCircle
                onClick={() => navigate(AUTH_ROUTE)} 
                className={styles.navbarCart}/>
              }
                <Link to={CART_ROUTE}>
                  <div className={styles.cartCorner}>
                    <span>{quantity}</span>
                    <BsFillCartFill 
                    className={styles.navbarCart}/>
                  </div>
                </Link>
        </div>
    </div>
    </>
  )
}

export default Navbar