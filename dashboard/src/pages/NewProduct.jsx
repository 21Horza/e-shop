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
import { createProduct } from '../http/productsApi'
import ErrorModal from '../components/UI/ErrorModal'

const NewProduct = () => {
    const [file, setFile] = useState(null)
    const [inStock, setInStock] = useState(true)
    const [inputs, setInputs] = useState({})
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])
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
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const sizeHandler = (e) => {
        setSize(e.target.value.split(","))
    }
    
    const colorHandler = (e) => {
        setColor(e.target.value.split(","))
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
                const product = {...inputs, inStock, img: downloadURL, color, size};
                createProduct(product).catch(e => 
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
            <div className={cl.newTop}><h1>{"Add New Product"}</h1></div>
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
                           name='name'
                           type={"text"} placeholder={"Awesome t-shirt"}
                           onChange={changeHandler}/>
                       </div>
                       <div className={cl.formInput}>
                           <label>{"Price $"}</label>
                           <input 
                           name='price'
                           type={"number"} placeholder={"20"}
                           onChange={changeHandler}/>
                       </div>
                       <div className={cl.formInput}>
                           <label>{"Size"}</label>
                           <input 
                           name='size'
                           type={"text"} placeholder={"XS, S, M, L, XL"}
                           onChange={sizeHandler}/>
                       </div>
                       <div className={cl.formInput}>
                           <label>{"Color"}</label>
                           <input 
                           name='color'
                           type={"text"} placeholder={"#808080, #fff"}
                           onChange={colorHandler}/>
                       </div>
                       <div className={cl.formInput}>
                           <label>{"Description"}</label>
                           <input 
                           name='description'
                           type={"text"} placeholder={"This t-shirt made from the best material"}
                           onChange={changeHandler}/>
                       </div>
                       <div className={cl.formInput}>
                           <label>{"Type"}</label>
                           <input 
                           name='type'
                           type={"text"} placeholder={"t-shirt"}
                           onChange={changeHandler}/>
                       </div>
                       <div
                       style={{marginTop: "20px", fontSize: "24px", fontWeight: 800, margin: "10px auto 0 40px"}}
                       className={cl.formInput}>
                        In Stock
                           <select
                           style={{fontSize: "20px", marginLeft: "40px"}}
                           className={cl.newOption}
                           name='inStock' onChange={e => setInStock(e.target.value)}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
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

export default NewProduct