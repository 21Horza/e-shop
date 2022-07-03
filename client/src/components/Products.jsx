import React, {useState, useEffect, useMemo} from 'react'
import styles from "../styles/Products.module.css"
// import { products } from '../data/products'
import Product from './Product'
import { useFetching } from '../hooks/useFetching'
import { getAllProducts } from '../http/productsApi'
import ErrorModal from './UI/ErrorModal'
import Loader from './UI/Loader'

const Products = ({selectedSort, setSelectedSort, type}) => {
  const [products, setProducts] = useState([])
  const [errModal, setErrModal] = useState(true)
  const [fetchProducts, isLoading, err] = useFetching(async () => {
    await getAllProducts(type).then(data => setProducts(data))
  })

  useEffect(()=> {
    fetchProducts()
    window.scrollTo(0, 0);
  }, [])

  const sortedProducts = useMemo(() => {
    if (selectedSort) {
      return [...products]
      .sort((a,b) => a[selectedSort]
      .localeCompare(b[selectedSort]))
    } return products
  }, [selectedSort, products])

  if (isLoading) {
    return <Loader/>
  }

  if(err) {
    return <ErrorModal 
        active={errModal} 
        setActive={setErrModal}>
      <h1>Ooops... ERROR FROM THE SERVER</h1>
      <h1>{err}</h1>
    </ErrorModal>
  }

  return (
    <div className={styles.productsContainer}>
        {sortedProducts.length > 0 ?
        sortedProducts.map(p => (
            <Product key={p.index} product={p}/>
        ))
      :
      <h1 
      style={{color: "#fff", height: "100vh"}}>
        Items not found
      </h1>
      }
    </div>
  )
}

export default Products