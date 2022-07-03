import React from 'react'
import { categories } from '../data/categories'
import CategoryItem from './CategoryItem'
import styles from "../styles/Categories.module.css"

const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
        {categories.map(item => (
            <CategoryItem key={item.id}  item={item}/>
        ))}
    </div>
  )
}

export default Categories