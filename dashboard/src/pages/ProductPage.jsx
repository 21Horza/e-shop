import React, {useEffect, useState} from 'react'
import cl from "../styles/Single.module.css"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import ErrorModal from '../components/UI/ErrorModal'
import Loader from '../components/UI/Loader'
import { getOneProduct } from '../http/productsApi'
import { PRODUCTS_ROUTE } from '../consts/consts'

const ProductPage = () => {
    const [errModal, setErrModal] = useState(true);
    const [product, setProduct] = useState();
    const location = useLocation()
    const navigate = useNavigate()
    const typeId = location.pathname.split("/")[2];
    
    const [fetchProduct, isLoading, err] = useFetching(async () => {
        await getOneProduct(typeId).then(data => setProduct(data))
    })

    useEffect(() => {
      fetchProduct()
    }, [])
    
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
    <div className={cl.singlePage}>
      <Sidebar />
      <div className={cl.singleContainer}>
        <Navbar />
        <div className={cl.singleTop}>
          <div className={cl.singleLeft}>
            <h1 className={cl.singleTitle}>Info</h1>
            <div className={cl.singleItem}>
              <img 
              src={product?.img}
              alt='' 
              className={cl.signleImg}/>
              <div className={cl.details}>
                  <h1 className={cl.itemTitle}>{product?.name}</h1>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>ID: </span>
                    <span className={cl.itemValue}>{product?._id}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>name: </span>
                    <span className={cl.itemValue}>{product?.name}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>In Stock: </span>
                    <span
                     className={cl.itemValue}>{product?.inStock}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Size: </span>
                    <span className={cl.itemValue}>{product?.size}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Color: </span>
                    <span className={cl.itemValue}>{product?.color}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Likes: </span>
                    <span className={cl.itemValue}>{product?.likes.length}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Views: </span>
                    <span className={cl.itemValue}>{product?.views}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Description: </span>
                    <span className={cl.itemValue}>{product?.description}</span>
                  </div>
                  <button
                  onClick={() => navigate(PRODUCTS_ROUTE + `/new/${product?._id}`)}
                  className={cl.editBtn}
                  >Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage