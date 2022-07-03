import React from 'react'
import styles from "../styles/Footer.module.css"
import {GoLocation} from "react-icons/go"
import {BsTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import {AiOutlineClockCircle} from "react-icons/ai"
import {TiSocialInstagram} from "react-icons/ti"
import {BsTelegram} from "react-icons/bs"
import {GrFormNextLink} from "react-icons/gr"
import {useNavigate} from "react-router-dom"
import { CART_ROUTE, HOME_ROUTE } from '../consts/consts'
import { Icon32LogoVk } from '@vkontakte/icons';

const Footer = () => {
    const navigate = useNavigate()

  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
            <div className={styles.sectionContainer}>
                <h1 className={styles.footerTitle}>About Us</h1>
                <hr className={styles.footerHr}/>
                <p className={styles.footerDescription}>
                    Mantra thirty seven is a new brand of women's clothing.
                    We choose the best material to create our high quality products with love.
                    Do not hesitate to browse the store and contact us any time!
                </p>
                <div className={styles.footerSocial}>
                    <Icon32LogoVk className={styles.socialVk}/>
                    <TiSocialInstagram className={styles.socialInsta}/>
                    <BsTelegram className={styles.socialTelega}/>
                </div>
            </div>
        </div>
        <div className={styles.footerCenter}>
            <div className={styles.sectionContainer}>
            <h1 className={styles.footerTitle}>Get in touch</h1>
            <hr className={styles.footerHr}/>
            <div className={styles.footerContacts}>
                <div className={styles.footerContact}>
                    <GoLocation className={styles.contactIcon}/>
                    <p>Mantra 37 Street, Yekaterinburg, Russia</p>
                </div>
                <div className={styles.footerContact}>
                    <BsTelephoneFill className={styles.contactIcon}/>
                    <p>+7 4253 435 3535</p>
                </div>
                <div className={styles.footerContact}>
                    <GrMail className={styles.contactIcon}/>
                    <p>mantra37@gmail.com</p>
                </div>
                <div className={styles.footerContact}>
                    <AiOutlineClockCircle className={styles.contactIcon}/>
                    <p>Mon - Fri, 9AM - 10PM</p>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.footerRight}>
            <div className={styles.sectionContainer}>
            <h1 className={styles.footerTitle}>Useful links</h1>
            <hr className={styles.footerHr}/>
            <div className={styles.footerLinks}>
                <div className={styles.footerLink}>
                    <GrFormNextLink className={styles.navIcon}/>
                    <p onClick={() => navigate(HOME_ROUTE)}>
                        Home
                    </p>
                </div>
                <div className={styles.footerLink}>
                    <GrFormNextLink className={styles.navIcon}/>
                        <p onClick={() => navigate(CART_ROUTE)}>
                            My Cart
                        </p>
                </div>
                <div className={styles.footerLink}>
                    <GrFormNextLink className={styles.navIcon}/>
                    <p>My account</p>
                </div>
                <div className={styles.footerLink}>
                    <GrFormNextLink className={styles.navIcon}/>
                    <p>Terms</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer