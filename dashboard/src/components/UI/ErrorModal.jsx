import React from 'react'
import '../../styles/ErrorModal.css'

const ErrorModal = ({children, active, setActive}) => {
  return (
    <div 
        onClick={() => setActive(false)} 
        className={active 
            ? 'error__modal active' 
            : 'error__modal'}>
        <div 
            onClick={e => e.stopPropagation()} 
            className={active 
                ? 'error__modal__content active' 
                : 'error__modal__content'}>
            {children}
        </div>
    </div>
  )
}

export default ErrorModal