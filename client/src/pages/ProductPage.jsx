import React, {useEffect, useState} from 'react'
import styles from "../styles/ProductPage.module.css"
import {useLocation} from "react-router-dom"
import Select from "../components/UI/Select"
import {BsCircleFill} from "react-icons/bs"
import { useFetching } from '../hooks/useFetching'
import { getOneProduct } from '../http/productsApi'
import Loader from '../components/UI/Loader'
import ErrorModal from '../components/UI/ErrorModal'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const ProductPage = () => {
  const location = useLocation()
  const itemId = location.pathname.split("/")[2]
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [errModal, setErrModal] = useState(true);
  const [fetchProduct, isLoading, err] = useFetching(async () => {
    await getOneProduct(itemId).then(data => setProduct(data))
  })
  
  const dispatch = useDispatch();
  
  useEffect(()=> {
    window.scrollTo(0, 0);
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

  const quantityHandler = (option) => {
    if(option === "del") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }
  
  const clickHandler = () => {
    if(color === undefined && size === undefined) {
      dispatch(addProduct({ ...product, quantity, color: product?.color[0], size: product?.size[0]}));
    } else if(size === undefined) {
      dispatch(addProduct({ ...product, quantity, color, size: product?.size[0]}));
    } else if(color === undefined) {
      dispatch(addProduct({ ...product, quantity, color: product?.color[0], size}));
    } else {
      dispatch(addProduct({ ...product, quantity, color, size}));
    }
  }

  return (
    <div >
      <div className={styles.productWrapper}>
        <div className={styles.productImgContainer}>
          <img alt="productImg" 
          src={product?.img} 
          className={styles.productImage}/>
        </div>
        <div className={styles.productInfoContainer}>
            <h1>{product?.name}</h1>
            <p>
              {product?.description}
            </p>
            <h2>$ {product?.price}</h2>
            <div className={styles.selectWrapper}>
              <div className={styles.sizeSelect}>
                <h1>Size</h1>
                <Select 
                value={size}
                defaultValue={product?.size[0]}
                onChange={setSize}
                options={[
                  {value: product?.size[1], 
                  txt: product?.size[1]},
                  {value: product?.size[2], 
                  txt: product?.size[2]},
                  {value: product?.size[3], 
                  txt: product?.size[3]},
                  {value: product?.size[4], 
                  txt: product?.size[4]}
                ]}
              />
              </div>
              <div className={styles.colorSelect}>
                <h1>Color</h1>
                {product?.color.map((c)=> 
                  <BsCircleFill 
                  onClick={()=> setColor(c)}
                  key={c} 
                  style={{color: c}}
                  className={styles.colorIcon}
                  />
                )}
              </div>
            </div>
              <div className={styles.addContainer}>
                <div className={styles.amountContainer}>
                    <h1 
                    onClick={() => quantityHandler("del")}
                    className={styles.delAmount}>
                      -
                    </h1>
                      <h1 className={styles.amount}>{quantity}</h1>
                    <h1 
                    onClick={() => quantityHandler("add")}
                    className={styles.addAmount}>
                      +
                    </h1>
                </div>
                <button 
                className={styles.addBtn}
                onClick={clickHandler}
                >
                  ADD TO BASKET
                </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage