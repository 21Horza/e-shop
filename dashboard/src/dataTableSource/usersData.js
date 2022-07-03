import cl from "../styles/Datatable.module.css"

export const userColums = [
    {
        field: "_id", headerName: "ID", width: 200
    },
    {
        field: "email", headerName: "Email", width: 230, renderCell: (params) => {
            return (
                <div className={cl.cellWithImg}>
                    <img alt="ava" className={cl.cellImg} src={params.row.img}/>
                    {params.row.name}
                </div>
            )
        }
    },
    {
        field: "isVerified", headerName: "Is Verified", width: 250,
    },
    {
        field: "verificationLink", headerName: "Verification Link", width: 200,
    },
    {
        field: "roles", headerName: "Roles", width: 100,
    }
]