import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import cl from "../styles/New.module.css"
import {RiFileUploadFill} from "react-icons/ri"
import noImg from "../assets/noImg.jpeg"
import { 
    getStorage, ref, uploadBytesResumable, getDownloadURL
} from "firebase/storage";
import app from "../firebase/firebase"
import { registration } from '../http/usersApi'
import ErrorModal from '../components/UI/ErrorModal'

const NewUser = () => {
    const [errModal, setErrModal] = useState(false);
    const [file, setFile] = useState(null)
    const [inputs, setInputs] = useState({})
    const [preview, setPreview] = useState()
    const [isAdmin, setIsAdmin] = useState()
    const [err, setErr] = useState('')

    useEffect(() => {
        if (!file) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const changeHandler = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value.toLowerCase()}
        })
    }

    const clickHandler = (e) => {
        e.preventDefault()
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                    default:
                }
                }, 
                (error) => {
            }, 
             () => {
                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                     const user = {...inputs, isAdmin, img: downloadURL};
                registration(user).catch(e => 
                    setErr(e.message),
                    setErrModal(true)
                    )
                }).finally(setTimeout(()=> {
                    window.location.reload()
                }, 3000));
            }
            );
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
    <div className={cl.newPage}>
        <Sidebar />
        <div className={cl.newContainer}>
            <Navbar />
            <div className={cl.newTop}><h1>{"Add New User"}</h1></div>
            <div className={cl.newBottom}>
                <div className={cl.newLeft}>
                    <img alt='' 
                    src={file 
                        ? preview
                        : 
                        noImg}
                        />
                        <div className={cl.formInput}>
                            <input 
                            onChange={e => setFile(e.target.files[0])}
                            id='file' style={{display: "none"}}
                            type="file" />
                            <label htmlFor='file'>
                                Image: <RiFileUploadFill className={cl.newIcon} />
                            </label>
                        </div>
                </div>
                <div className={cl.newRight}>
                    <form>
                    <div className={cl.formInput}>
                           <label>{"First Name"}</label>
                           <input 
                           name='firstName'
                           type={"text"} placeholder={"John"}
                           onChange={changeHandler}/>
                       </div>
                    <div className={cl.formInput}>
                           <label>{"Last Name"}</label>
                           <input 
                           name='lastName'
                           type={"text"} placeholder={"Johnson"}
                           onChange={changeHandler}/>
                       </div>
                    <div className={cl.formInput}>
                           <label>{"Email"}</label>
                           <input 
                           name='email'
                           type={"text"} placeholder={"john25@gmail.com"}
                           onChange={changeHandler}/>
                       </div>
                    <div className={cl.formInput}>
                           <label>{"Password"}</label>
                           <input 
                           name='password'
                           type={"password"}
                           onChange={changeHandler}/>
                    </div>
                       <div
                       style={{marginTop: "20px", fontSize: "24px", fontWeight: 800, margin: "10px auto 0 40px"}}
                       className={cl.formInput}>
                        Roles
                           <select
                           style={{fontSize: "20px", marginLeft: "40px"}}
                           className={cl.newOption}
                           name='roles' onChange={e => setIsAdmin(e.target.value)}>
                            <option value={"false"}>USER</option>
                            <option value={"true"}>ADMIN</option>
                           </select>
                       </div>
                    </form>
                        <div className={cl.btns}>
                            <button
                            onClick={clickHandler}
                            className={cl.sendBtn}>SEND</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewUser