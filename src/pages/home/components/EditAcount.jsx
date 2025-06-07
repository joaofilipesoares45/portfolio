import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import "../css/edit-acount.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeModal } from "../../../utils/functions";
import { firestore } from "../../../../firebase/app_firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";


export default function EditAcount() {
    const { usuarioAtual } = useContext(DataContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const userDoc = doc(firestore, "usuarios", usuarioAtual)
            const data = (await getDoc(userDoc)).data()
            setUser(data)
        }
        getUser()
    }, [usuarioAtual])

    const submit = (event) => {
        event.preventDefault()
        console.log();
    }

    return (
        <div className="modal edit-acount">
            <div className="content">
                <div className="head">
                    <h2>Editar dados</h2>
                    <FontAwesomeIcon icon={faXmark} onClick={() => closeModal("edit-acount")} />
                </div>

                <div className="data">
                    <div className="img">
                        {user.nome && user.nome.split(" ").length > 1 ? <span>{user.nome.split(" ")[0][0]+user.nome.split(" ")[1][0]}</span> : <FontAwesomeIcon icon={user.acesso === "total" ? faGears : faUser} />}
                    </div>
                    <div className="info">
                        <div className="user-">
                            <h3>{user.nome}</h3>
                            <p>{user.email}</p>
                            <p>status: {user.acesso === "total" ? "Administrador" : "Usuario"}</p>
                        </div>

                        <nav>
                            {user.acesso === "total" && <button onClick={() => navigate("/admin")}>Administrador</button>}
                            <button onClick={submit}>Editar</button>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="modal form-edit-acount">
                <form onSubmit={submit}>
                    <div className="head">

                    </div>
                </form>
            </div>
        </div>
    )
}