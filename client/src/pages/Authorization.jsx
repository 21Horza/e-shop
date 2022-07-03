import React, {useState} from 'react'
import styles from "../styles/Auth.module.css"
import {useDispatch} from "react-redux"
import { login, registration } from '../http/userApi'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/UI/Loader'
import ErrorModal from '../components/UI/ErrorModal'

const Authorization = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isAuth, setIsAuth] = useState(true)
    const [errModal, setErrModal] = useState(true);
    const [fetchLogin, isLoading, err] = useFetching(async () => {
        await login(dispatch, {email, password}).then(setPassword(''))
    })
    const [fetchReg, isLoadingReg, errReg] = useFetching(async () => {
        await registration(dispatch, {email, password}).then(setPassword(''))
    })

    const clickHandler = (e) => {
        e.preventDefault()
        if(isAuth) {
            fetchLogin()
        } else {
            fetchReg()
        }
    }

    if (isLoading || isLoadingReg) {
        return <Loader/>
      }
    
      if(err || errReg) {
        return <ErrorModal
            active={errModal} 
            setActive={setErrModal}>
          <h1>Ooops...</h1>
          <h1>{err}</h1>
        </ErrorModal>
      }

    return (
        <div
        className={styles.authContainer}
        onClick={e => e.stopPropagation()}
        >
            <h1 className={styles.authHeader}>AUTHORIZATION</h1>
            <form onSubmit={clickHandler}>
            <h1 className={styles.formHeader}>{isAuth ? 'Login' : 'Sign up'}</h1>
                <input 
                    placeholder='Email..' 
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder='Password...' 
                    type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className={styles.formFooter}>
                    <div className={styles.leftFooter}>
                    {isAuth ?
                        <div>
                        Don't have an account? 
                        <p 
                        onClick={() => setIsAuth(false)}
                        >
                            Click here
                        </p>
                        </div>
                        :
                        <div>
                        Do you have an account? 
                        <p 
                        onClick={() => setIsAuth(true)}
                        >Click here
                        </p>
                        </div>
                    }
                    </div>
                <button 
                className={styles.footerBtn}
                >
                    {isAuth ? 'Login' : 'Sign up'}
                </button> 
            </div>
            </form>
        </div>
      )
}

export default Authorization