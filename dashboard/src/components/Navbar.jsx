import React from 'react'
import cl from "../styles/Navbar.module.css"
import {BiSearchAlt} from "react-icons/bi"
import {MdDarkMode} from "react-icons/md"
import {AiOutlineUnorderedList} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className={cl.navContainer}>
      <div className={cl.navWrapper}>
        <div className={cl.inputWrapper}>
          <input 
          type={"text"}
          placeholder='Search...'/>
          <BiSearchAlt className={cl.searchIcon}/>
        </div>
        <div className={cl.rightIcons}>
          <div className={cl.navIcon}>
            <MdDarkMode />
          </div>
          <div className={cl.navIcon}>
            <AiOutlineUnorderedList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar