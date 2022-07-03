import cl from "../styles/Datatable.module.css"

export const productColums = [
    {
        field: "_id", headerName: "ID", width: 220
    },
    {
        filed: "name", headerName: "Name", width: 300, renderCell: (params) => {
            return (
                <div className={cl.cellWithImg}>
                    <img alt="ava" className={cl.cellImg} src={params.row.img}/>
                    {params.row.name}
                </div>
            )
        }
    },
    {
        field: "inStock", headerName: "In Stock", width: 100,
    },
    {
        field: "price", headerName: "Price $", width: 100,
    },
    {
        field: "size", headerName: "Size", width: 150,
    },
    {
        field: "views", headerName: "Views", width: 100,
    }
]