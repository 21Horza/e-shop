import React, {useState} from 'react'
import Select from '../components/UI/Select'
import styles from "../styles/ProductList.module.css"
import Products from "../components/Products"
import { useLocation } from 'react-router-dom'

const ProductList = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2]
  const [selectedSort, setSelectedSort] = useState("")
  
  return (
    <div className={styles.productlistContainer}>
        <div className={styles.select}>
          <h2>Sort by</h2>
            <Select 
            defaultValue={"newest"}
            options={[
            {value: 'title', 
            txt: 'Popular'},
            {value: 'price', 
            txt: 'Price (asc)'},
            {value: 'price', 
            txt: 'Price (desc)'},
            ]} />
        </div>
        <Products 
        type={type}
        selectedSort={selectedSort} 
        setSelectedSort={setSelectedSort}
        />
    </div>
  )
}

export default ProductList