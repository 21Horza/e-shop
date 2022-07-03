import React from 'react'
import cl from "../styles/Single.module.css"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const Single = () => {
  return (
    <div className={cl.singlePage}>
      <Sidebar />
      <div className={cl.singleContainer}>
        <Navbar />
        <div className={cl.singleTop}>
          <div className={cl.singleLeft}>
          <div className={cl.editBtn}>Edit</div>
            <h1 className={cl.singleTitle}>Info</h1>
            <div className={cl.singleItem}>
              <img 
              src='https://i.pinimg.com/originals/50/7b/48/507b4876cc0b63b4d228430392c50469.jpg'
              alt='' 
              className={cl.signleImg}/>
              <div className={cl.details}>
                  <h1 className={cl.itemTitle}>uduf</h1>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Email: </span>
                    <span className={cl.itemValue}>pesbarbos@gmail.com</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Phone: </span>
                    <span className={cl.itemValue}>+7 9340 3493 98</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Address: </span>
                    <span className={cl.itemValue}>Kukuevo 4</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Country: </span>
                    <span className={cl.itemValue}>Laplandia</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single