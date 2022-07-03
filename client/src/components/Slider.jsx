import React, {useState} from 'react'
import styles from "../styles/Slider.module.css"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { sliderItems } from '../data/slides'
import { useNavigate } from 'react-router-dom'
import { AUTH_ROUTE } from '../consts/consts'


const Slider = () => {
    const navigate = useNavigate()
    const [slideIndex, setSlideIndex] = useState(0)
    const slideLength = sliderItems.length


    setTimeout(() => {
        setSlideIndex(slideIndex === slideLength - 1 ? 0 : slideIndex + 1)
        setSlideIndex(slideIndex === 0 ? slideLength - 1 : slideIndex - 1)
    }, 4000)

   const nextSlide = () => {
    setSlideIndex(slideIndex === slideLength - 1 ? 0 : slideIndex + 1)
   }

   const previousSlide = () => {
    setSlideIndex(slideIndex === 0 ? slideLength - 1 : slideIndex - 1)
   }
   
  return (
    <div className={styles.sliderContainer}>
        <BsFillArrowLeftCircleFill className={styles.sliderArrow} onClick={() => previousSlide()}/>
            {sliderItems.map((item, index) => 
                <div key={item.id} className={index === slideIndex ? styles.sliderSlide.active : styles.sliderSlide}>
                    {index === slideIndex && 
                        <div className={styles.sliderInfo}>
                            <div className={styles.sliderImgContainer}>
                                <img className={styles.sliderImg} alt="img" src={item.img}/>
                            </div>
                            <div className={styles.sliderBoxInfo}>
                                <h1 className={styles.sliderTitle}>{item.title}</h1>
                                <p className={styles.sliderDescription}>{item.description}</p>
                                <button 
                                onClick={() => navigate(AUTH_ROUTE)}
                                className={styles.sliderButton}
                                >SIGN UP</button>
                            </div>
                        </div>
                    }
                </div>
                )
            }
        <BsFillArrowRightCircleFill className={styles.sliderArrow} onClick={() => nextSlide()}/>
    </div>
  )
}

export default Slider