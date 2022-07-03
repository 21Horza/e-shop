import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Navbar from '../components/Navbar'
import ErrorModal from '../components/UI/ErrorModal'
import Loader from '../components/UI/Loader'
import { useFetching } from '../hooks/useFetching'
import { login } from '../http/adminApi'
import cl from "../styles/Login.module.css"

const Login = () => {
  const [errModal, setErrModal] = useState(true);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const [fetchLogin, isLoading, err] = useFetching(async () => {
    await login(dispatch, {email, password}).then(setPassword(''))
  })

  const clickHandler = (e) => {
    e.preventDefault()
    fetchLogin()
  }

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
    <div className={cl.loginPage}>
      <div className={cl.loginContainer}>
          <Navbar />
          <div className={cl.input}>
            <h1
            style={{marginBottom: "20px"}}
            >Login</h1>
            <input 
              type={"text"} 
              placeholder="email..." 
              onChange={e => setEmail(e.target.value)}/>
            <input 
              type={"password"} 
              placeholder="password..." 
              onChange={e => setPassword(e.target.value)}/>
            <button onClick={clickHandler}>LOGIN</button>
          </div>
        </div>
    </div>
  )
}

export default Login