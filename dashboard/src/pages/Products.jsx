import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useFetching } from '../hooks/useFetching'
import cl from "../styles/List.module.css"
import { useNavigate } from 'react-router-dom'
import { productColums } from '../dataTableSource/productsData'
import { PRODUCTS_ROUTE } from '../consts/consts'
import Loader from "../components/UI/Loader"
import ErrorModal from "../components/UI/ErrorModal"
import cls from "../styles/Datatable.module.css"
import { deleteProduct, getProducts } from '../http/productsApi'

const Products = () => {
    const [errModal, setErrModal] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeletingErr, setIsDeletingErr] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const products = useSelector((store) => store.product.products)

    const [fetchProducts, isLoading, err] = useFetching(async () => {
        await getProducts(dispatch)
    })
    
    useEffect(() => {
        fetchProducts()
    }, [])
    
    const deleteHandler = async (productId) => {
        try {
            setIsDeleting(true)
            await deleteProduct(productId)
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
                        onClick={() => navigate(PRODUCTS_ROUTE + "/" + params.row?._id)}
                        className={cls.viewBtn}>View</div>
                        <div 
                        onClick={e => deleteHandler(params.row?._id)}
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
                    >Add New Product</p>
                    <button
                    onClick={() => navigate(PRODUCTS_ROUTE + "/new")}
                    >
                        ADD NEW PRODUCT
                    </button>
                </div>
                <DataGrid
                className={cls.datagrid}
                    getRowId={row => row._id}
                    rows={products}
                    columns={productColums.concat(actionColumn)}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                />
                </div>
            </div>
        </div>
    )
}

export default Products