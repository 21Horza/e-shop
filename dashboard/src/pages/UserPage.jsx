import React, {useEffect, useState} from 'react'
import cl from "../styles/Single.module.css"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import ErrorModal from '../components/UI/ErrorModal'
import Loader from '../components/UI/Loader'
import { getOneUser } from '../http/usersApi'

const UserPage = () => {
    const [errModal, setErrModal] = useState(true);
    const [user, setUser] = useState();
    const location = useLocation()
    const typeId = location.pathname.split("/")[2];
    
    const [fetchType, isLoading, err] = useFetching(async () => {
        await getOneUser(typeId).then(data => setUser(data.data[0]))
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
              src={user?.img}
              alt='' 
              className={cl.signleImg}/>
              <div className={cl.details}>
                  <h1 className={cl.itemTitle}>{user?.name}</h1>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>ID: </span>
                    <span className={cl.itemValue}>{user?._id}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Email: </span>
                    <span className={cl.itemValue}>{user?.email}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Is Verified: </span>
                    <span
                     className={cl.itemValue}>{user?.isVerified}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>VerificationLink: </span>
                    <span className={cl.itemValue}>{user?.verificationLink}</span>
                  </div>
                  <div className={cl.detailitem}>
                    <span className={cl.itemKey}>Roles: </span>
                    <span className={cl.itemValue}>{user?.roles}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage