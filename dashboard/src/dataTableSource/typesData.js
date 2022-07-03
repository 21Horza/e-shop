import cl from "../styles/Datatable.module.css"

export const typeColums = [
    {
        field: "_id", headerName: "ID", width: 300
    },
    {
        field: "title", headerName: "Type", width: 300, renderCell: (params) => {
            return (
                <div className={cl.cellWithImg}>
                    <img alt="ava" className={cl.cellImg} src={params.row.img}/>
                    {params.row.title}
                </div>
            )
        }
    }
]
