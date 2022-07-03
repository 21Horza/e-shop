import React from 'react'
import styles from "../styles/Cart.module.css"
import {BsCircleFill} from "react-icons/bs"
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HOME_ROUTE } from '../consts/consts'
import { useEffect } from 'react'
import { clearProduct } from '../redux/cartRedux'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const clearCartHandler = () => {
        dispatch(clearProduct())
    }

  return (
    <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>
            Shopping Cart 
            ({cart.quantity})
        </h1>
        <div className={styles.cartTop}>
            <button
            onClick={() => navigate(HOME_ROUTE)}
             className={styles.continueBtn}>CONTINUE SHOPPING</button>
            <button 
            onClick={() => clearCartHandler()}
            className={styles.clearBtn}
            >CLEAR CART</button>
        </div>
        {cart.products.length > 0 ? 
        
        <div className={styles.infoBox}>
            <div className={styles.productsBox}>
                {cart.products.map(product =>(
                    <div className={styles.itemBox}>
                        <img alt="itemImg" src={product.img} />
                        <div className={styles.itemInfoBox}>
                            <div className={styles.itemLine}>
                                <h3>Product:</h3>
                                <p>{product.name}</p>
                            </div>
                            <div className={styles.itemLine}>
                                <h3>ID:</h3>
                                <p>{product._id}</p>
                            </div>
                            <div className={styles.itemLine}>
                                <h3>Color:</h3>
                                <BsCircleFill
                                style={{color: product.color}}
                                className={styles.p}/>
                            </div>
                            <div className={styles.itemLine}>
                                <h3>Size:</h3>
                                <p>{product.size}</p>
                            </div>
                        </div>
                        <div className={styles.itemPriceBox}>
                            <div className={styles.quantity}>
                                <h2>+</h2>
                                <h2 className={styles.number}>{product.quantity}</h2>
                                <h2>-</h2>
                            </div>
                            <div className={styles.price}>
                                <h2>$ {product.price * product.quantity}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.summary}>
                <h1 className={styles.summaryHeader}>SUMMARY</h1>
                <div className={styles.summaryDetails}>
                    <div className={styles.shippingLine}>
                        <h2>Shipping</h2>
                        <p>FREE</p>
                    </div>
                    <div className={styles.shippingLine}>
                        <h2>Discount</h2>
                        <p>$ 0.0</p>
                    </div>
                    <div className={styles.shippingLine}>
                        <h2>TOTAL:</h2>
                        <p>$ {cart.total}</p>
                    </div>
                    <hr className={styles.hrSummary}/>
                    <div className={styles.summaryCheckoutBtn}>
                        <button
                        onClick={() => navigate(HOME_ROUTE)}
                        >
                            CHECKOUT
                        </button>
                    </div >
                </div>
            </div>
        </div>
        :
        <h1 style={{height: "80vh", 
        textAlign: "center",
        color: "#fff"}}>
            Cart is empty
        </h1>
    }
    </div>
  )
}

export default Cart