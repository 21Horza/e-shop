import React from 'react'
import cl from "../styles/Widget.module.css"
import {AiOutlineUser} from "react-icons/ai"
import {GiMoneyStack} from "react-icons/gi"
import {MdBorderColor} from "react-icons/md"

const Widget = ({type}) => {
  let data;

  const amount = 100;

  switch(type) {
    case 'users':
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <AiOutlineUser
        className={cl.userIcon}
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2"
        }}
        />
      };
      break;
    case 'types':
      data = {
        title: "TYPES",
        isMoney: false,
        link: "See all types",
        icon: <MdBorderColor
        className={cl.userIcon}
        style={{
          color: "purple",
          backgroundColor: "rgba(128, 0, 128, 0.2"
        }}
        />
      };
      break;
    case 'products':
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "See all products products",
        icon: <GiMoneyStack
        className={cl.userIcon}
        style={{
          color: "green",
          backgroundColor: "rgba(0, 128, 0, 0.2)"
        }}
        />
      };
      break;
      default:
        break;
  }

  return (
    <div className={cl.widgetContainer}>
        <div className={cl.widLeft}>
          <span className={cl.widTitle}>{data.title}</span>
          <span className={cl.widCounter}>{data.isMoney && "$"} {amount}</span>
          <span className={cl.widlink}>{data.link}</span>
        </div>
        <div className={cl.widRight}>
          <div className={cl.widPercentage}>
          </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget