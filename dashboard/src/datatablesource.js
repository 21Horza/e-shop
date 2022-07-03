import cl from "./styles/Datatable.module.css"

export const userColums = [
    {
        field: "id", headerName: "ID", width: 70
    },
    {
        filed: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className={cl.cellWithImg}>
                    <img alt="ava" className={cl.cellImg} src={params.row.img}/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email", headerName: "Email", width: 250,
    },
    {
        field: "age", headerName: "Age", width: 100,
    },
    {
        field: "status", headerName: "Status", width: 150,
    }
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://i.pinimg.com/originals/6c/3c/e4/6c3ce44f8caa5e52223d90ab7cfb0ea1.jpg",
        status: "active",
        email: "lalala@gmail.com",
        age: 21
    },
    {
        id: 2,
        username: "Snow",
        img: "https://i.pinimg.com/originals/6c/3c/e4/6c3ce44f8caa5e52223d90ab7cfb0ea1.jpg",
        status: "active",
        email: "lalala@gmail.com",
        age: 21
    },
    {
        id: 3,
        username: "Snow",
        img: "https://i.pinimg.com/originals/6c/3c/e4/6c3ce44f8caa5e52223d90ab7cfb0ea1.jpg",
        status: "active",
        email: "lalala@gmail.com",
        age: 21
    },
    {
        id: 4,
        username: "Snow",
        img: "https://i.pinimg.com/originals/6c/3c/e4/6c3ce44f8caa5e52223d90ab7cfb0ea1.jpg",
        status: "active",
        email: "lalala@gmail.com",
        age: 21
    },
    {
        id: 5,
        username: "Snow",
        img: "https://i.pinimg.com/originals/6c/3c/e4/6c3ce44f8caa5e52223d90ab7cfb0ea1.jpg",
        status: "active",
        email: "lalala@gmail.com",
        age: 21
    },
]