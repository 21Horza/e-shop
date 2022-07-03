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
import { createType } from '../http/typesApi'
import ErrorModal from '../components/UI/ErrorModal'

const NewType = () => {
    const [file, setFile] = useState(null)
    const [inputs, setInputs] = useState({})
    const [preview, setPreview] = useState()
    const [errModal, setErrModal] = useState(false);
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
                const type = {...inputs, img: downloadURL};
                createType(type).catch(e => 
                    setErr(e.message),
                    setErrModal(true)
                    ).finally(setTimeout(()=> {
                    window.location.reload()
                }, 3000));
                });
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
            <div className={cl.newTop}><h1>{"Add New Type"}</h1></div>
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
                           <label>{"Name"}</label>
                           <input 
                           name='title'
                           type={"text"} placeholder={"Hoodies"}
                           onChange={changeHandler}/>
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

export default NewType