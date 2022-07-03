import React from 'react'
import '../../styles/Toast.css'

const Toast = ({active, setActive, errMsg, title, children}) => {
    
    setTimeout(() => {
        setActive(false)
    }, 3000)
    

  return (
    <div 
        className={active && errMsg
            ? 'toast active error' 
            : (active && !errMsg ? 'toast active' : 'toast')
            }>
            <div className='toast__top'>
                <div className='toast__title'>{title}</div>
                <button
                onClick={() => setActive(false)} 
                 className='toast__cls'>X</button>
            </div>
            <div className='toast__content'>
                {children}
            </div>
    </div>
  )
}

export default Toast