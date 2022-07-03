import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useFetching } from '../hooks/useFetching'
import cl from "../styles/List.module.css"
import { useNavigate } from 'react-router-dom'
import { typeColums } from '../dataTableSource/typesData'
import { TYPES_ROUTE } from '../consts/consts'
import { deleteType, getTypes } from '../http/typesApi'
import Loader from "../components/UI/Loader"
import ErrorModal from "../components/UI/ErrorModal"
import cls from "../styles/Datatable.module.css"

const Types = () => {
    const [errModal, setErrModal] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeletingErr, setIsDeletingErr] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const types = useSelector((store) => store.type.types)

    const [fetchTypes, isLoading, err] = useFetching(async () => {
        await getTypes(dispatch)
    })

    useEffect(() => {
        fetchTypes()
    }, [])

    const deleteHandler = (typeId) => {
        try {
            setIsDeleting(true)
            deleteType(typeId)
        } catch (e) {
        setIsDeletingErr(e.message)
        } finally {
            setIsDeleting(false)
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    }

    if (isLoading || isDeleting) {
        return <Loader/>
    }
    
      if(err || isDeletingErr) {
        return <ErrorModal
            active={errModal} 
            setActive={setErrModal}>
          <h1>Ooops...</h1>
          <h1>{err}</h1>
        </ErrorModal>
      }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={cls.cellAction}>
                        <div 
                        onClick={() => navigate(TYPES_ROUTE + "/" + params.row._id)}
                        className={cls.viewBtn}>View</div>
                        <div 
                        onClick={e => deleteHandler(params.row._id)}
                            className={cls.delBtn}>
                        Delete</div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className={cl.list}>
            <Sidebar />
            <div className={cl.listContainer}>
            <Navbar />
            <div
            className={cls.datatable}
            style={{ height: 500, width: '100%' }}>
                <div className={cls.addUser}>
                    <p
                    >Add New Type</p>
                    <button
                    onClick={() => navigate(TYPES_ROUTE + "/new")}
                    >
                        ADD NEW TYPE
                    </button>
                </div>
                <DataGrid
                    getRowId={row => row._id}
                    rows={types}
                    columns={typeColums.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[9]}
                />
                </div>
            </div>
        </div>
    )
}

export default Types