import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS_ROUTE } from '../consts/consts'
import styles from "../styles/CategoryItem.module.css"

const CategoryItem = ({item}) => {
  return (
    <div className={styles.categoryItemContainer}>
      <Link to={PRODUCTS_ROUTE + "/" + item.type}>
        <img alt="categoryImg" src={item.img} className={styles.categoryImg}/>
        <div className={styles.categoryItemInfo}>
            <h1 className={styles.categoryTitle}>{item.title}</h1>
            <button className={styles.categoryBtn}>SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem