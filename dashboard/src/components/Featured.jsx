import React from 'react'
import cl from "../styles/Featured.module.css"
import {FiMoreVertical} from "react-icons/fi"

function Featured() {
  return (
    <div className={cl.featContainer}>
        <div className={cl.featTop}>
          <div className={cl.featTitle}>Total Revenue</div>
          <FiMoreVertical />
        </div>
        <div className={cl.featBottom}>
                <p>0 $</p>
        </div>
    </div>
  )
}

export default Featured