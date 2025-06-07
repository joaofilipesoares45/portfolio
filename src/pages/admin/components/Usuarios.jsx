import { useEffect, useState } from "react"
import { firestore } from "../../../../firebase/app_firebase"
import { collection, getDocs } from "firebase/firestore"

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    const usersRef = collection(firestore, "usuarios")

    useEffect(() => {
        const get = async () => {
            const res1 = await getDocs(usersRef)
            const usersList = res1.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setUsuarios(usersList)
        }
        get()
    }, [])

    return (
        <div className="sect usuarios">
            <h2>Usuarios</h2>
            <div className="list">
                <div className="head"><span>id</span> <span>nome</span> <span>email</span> <span>acesso</span></div>
                {usuarios.map((item, index) => {
                    return (
                        <div className="item" key={"user" + index}>
                            <p>{index + 1}</p>
                            <h4>{item.nome}</h4>
                            <p>{item.email}</p>
                            <p>{item.acesso === "total" ? "Adm" : "basico"}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}