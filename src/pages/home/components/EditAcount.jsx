import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import "../css/edit-acount.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeModal, formCaptureData, openModal } from "../../../utils/functions";
import { firestore } from "../../../../firebase/app_firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import NotificationBtn from "../../../Classes/NotificationBtn";
import { useForm } from "react-hook-form"


export default function EditAcount() {
    const { usuarioAtual, setUsuarioAtual, newNotification } = useContext(DataContext)
    const navigate = useNavigate()
    const [user, setUser] = useState(undefined)
    const [pass, setPass] = useState()

    const { register, setValue } = useForm({
        defaultValues: {
            nome: "",
            email: ""
        }
    })

    useEffect(() => {
        if (user) {
            setValue("nome", user.nome)
            setValue("email", user.email)
        }
    }, [user, setValue])

    useEffect(() => {
        const getUser = async () => {
            const userDoc = doc(firestore, "usuarios", usuarioAtual)
            const data = (await getDoc(userDoc)).data()
            setUser(data)
        }
        getUser()
    }, [usuarioAtual])

    const submit = async (event) => {
        event.preventDefault()
        const data = formCaptureData(event.target)

        if (!data.nome || !data.email) {
            return newNotification(3, "Erro", "Preencha todos os dados!", [new NotificationBtn({
                text: "Vou preencher", tag: "button", fun: "close", color: "blue"
            })])
        }

        if (data.nome === user.nome && data.email === user.email) {
            return newNotification(3, "Erro", "Os dados continuam os mesmos!", [new NotificationBtn({
                text: "Cancelar", tag: "button", fun: () => {
                    closeModal("form-edit-acount")
                }, color: "red"
            }), new NotificationBtn({
                text: "Continuar", tag: "button", fun: "close", color: "blue"
            })])
        }

        if (!data.senha) {
            return setPass(true)
        }

        if (data.senha !== user.senha) {
            return newNotification(3, "Erro", "Senha incorreta!", [new NotificationBtn({
                text: "Tente novamente", tag: "button", fun: "close", color: "blue"
            })])
        }

        delete data.senha
        update(data)
        setPass()
    }

    const update = async (data) => {
        const userRef = doc(firestore, "usuarios", usuarioAtual)
        await updateDoc(userRef, data).then(() => {
            setUsuarioAtual()

            newNotification(3, "Sucesso", "Dados da conta Atualizados!", [new NotificationBtn({
                text: "Fechar", tag: "button", fun: () => {
                    closeModal("form-edit-acount")
                }, color: "blue"
            })])
        })
    }

    if (user === undefined) {
        return ""
    }
        
    return (
        <div className="modal edit-acount">
            <div className="content">
                <div className="head">
                    <h2>Minha Conta</h2>
                    <FontAwesomeIcon icon={faXmark} onClick={() => closeModal("edit-acount")} />
                </div>

                <div className="data">
                    <div className="img">
                        {user.nome && user.nome.split(" ").length > 1 ? <span>{user.nome.split(" ")[0][0] + user.nome.split(" ")[1][0]}</span> : <FontAwesomeIcon icon={user.acesso === "total" ? faGears : faUser} />}
                    </div>
                    <div className="info">
                        <div className="user-">
                            <h3>{user.nome}</h3>
                            <p>{user.email}</p>
                            <p>status: {user.acesso === "total" ? "Administrador" : "Usuario"}</p>
                        </div>

                        <nav>
                            {user.acesso === "total" && <button onClick={() => navigate("/admin")}>Administrador</button>}
                            <button onClick={() => openModal('form-edit-acount')}>Editar</button>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="modal form-edit-acount">
                <form onSubmit={submit} autoComplete="off">
                    <div className="head">
                        <h2>Editar dados</h2>
                        <FontAwesomeIcon icon={faXmark} onClick={() => closeModal("form-edit-acount")} />
                    </div>
                    <div className="inputs">
                        <div>
                            <label htmlFor="nome">nome</label>
                            <input type="text" id="nome" name="nome" {...register("nome")} />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" name="email" {...register("email")} />
                        </div>
                        {pass && <div>
                            <label htmlFor="senha">Confirme sua senha</label>
                            <input type="text" id="senha" name="senha" />
                        </div>}
                    </div>
                    <nav>
                        <button type="submit">Confirmar</button>
                    </nav>
                </form>
            </div>
        </div>
    )
}