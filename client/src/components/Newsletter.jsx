import React from 'react'
import styles from "../styles/Newsletter.module.css"
import {BiMailSend} from "react-icons/bi"

const Newsletter = () => {
  return (
    <div className={styles.newsletterContainer}>
        <h1 className={styles.newsletterTitle}>Subcribe</h1>
        <p className={styles.newsletterDescription}>to receive the latest news</p>
        <div className={styles.inputContainer}>
            <input placeholder="Email..." type="text" className={styles.newsletterInput}/>
            <button className={styles.newsletterBtn}>
                <BiMailSend className={styles.sendIcon}/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter