import React, { useState } from 'react'
import styles from "../styles/Product.module.css"
import {ImSearch} from "react-icons/im"
import {FiHeart} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../consts/consts'
import { useSelector } from 'react-redux'
import { useFetching } from '../hooks/useFetching'
import { sendDislike, sendLike } from '../http/likesApi'
import Loader from './UI/Loader'
import { increaseViews } from '../http/viewsApi'

const Product = ({product}) => {
  const user = useSelector(state => state.user.currentUser);
  const [clckLike, setClckLike] = useState(product.likes.includes(user?.user.id))
  
  const [sendLikeDB, isLoadingLikes, errSendLikes] = useFetching( async () => {
    await sendLike(product._id)
  })

  const [sendDislikeDB, isLoadingDislikes, errSendDislikes] = useFetching( async () => {
      await sendDislike(product._id)
  })

  const [sendView, isLoadingView, errSendView] = useFetching( async () => {
      await increaseViews(product._id)
  })

  const likeHandler = (e) => {
    e.stopPropagation()
    if (!localStorage.getItem('token') && !user) {
        return alert("no token")
    } 
    if (!clckLike) {
        sendLikeDB()
        setClckLike(true)
    } else {
        sendDislikeDB()
        setClckLike(false)
    }
  }

  const viewHandler = () => {
    sendView()
  }

  if (errSendDislikes || errSendLikes || errSendView) {
    setTimeout(() => {
        window.location.reload()
    }, 3000)
  }

  if (isLoadingDislikes || isLoadingLikes || isLoadingView) {
    return <Loader />
  }

  return (
    <div className={styles.productContainer}>
       <img alt="productImg" src={product.img} className={styles.productImg}/>
        <div className={styles.productInfo}>
          <Link to={PRODUCT_ROUTE + "/" + product._id}>
            <ImSearch 
            onClick={viewHandler}
              className={styles.infoIcon}
            />
          </Link>
          {!clckLike ?
          <FiHeart
          onClick={e => likeHandler(e)}
           className={styles.likeIcon}/>
          :
          <FaHeart
          onClick={e => likeHandler(e)}
           className={styles.heartIcon}/>
          }
        </div> 
    </div>
  )
}

export default Product