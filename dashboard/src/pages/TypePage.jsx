import React, {useEffect, useState} from 'react'
import cl from "../styles/Single.module.css"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import { getOneType } from '../http/typesApi'
import ErrorModal from '../components/UI/ErrorModal'
import Loader from '../components/UI/Loader'

const TypePage = () => {
    const [errModal, setErrModal] = useState(true);
    const [type, setType] = useState();
    const location = useLocation()
    const typeId = location.pathname.split("/")[2];
    
    const [fetchType, isLoading, err] = useFetching(async () => {
        await getOneType(typeId).then(data => setType(data.data[0]))
        console.log(type)
    })


    useEffect(() => {
      fetchType()
    }, [])
    
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
    <div className={cl.singlePage}>
      <Sidebar />
      <div className={cl.singleContainer}>
        <Navbar />
        <div className={cl.singleTop}>
          <div className={cl.singleLeft}>
            <h1 className={cl.singleTitle}>Info</h1>
            <div className={cl.singleItem}>
              <img 
              src={type?.img}
              alt='' 
              className={cl.signleImg}/>
              <div className={cl.details}>
                  <h1 className={cl.itemTitle}>{type?.title}</h1>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>ID: </span>
                    <span className={cl.itemValue}>{type?._id}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypePage