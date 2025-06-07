import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { firestore } from "../../../../firebase/app_firebase";
import NotificationBtn from "../../../Classes/NotificationBtn";
import { DataContext } from "../../../context/DataContext";
import { formCaptureData, openLink, whatsMsg } from "../../../utils/functions";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function CreateAcount({ setComponent }) {
    const navigate = useNavigate()
    const { setUsuarioAtual, newNotification } = useContext(DataContext)
    const [load, setLoad] = useState()
    const usersRef = collection(firestore, "usuarios")

    const submit = async (event) => {
        event.preventDefault()
        const data = formCaptureData(event.target)

        if (!data.email || !data.senha) {
            return newNotification(3, "Login", "Preencha todos os dados!", [new NotificationBtn({
                text: "Vou Preencher", tag: "button", fun: "close", color: "blue"
            })])
        }
        setLoad(true)
        const res1 = await getDocs(usersRef)
        const usersList = res1.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        if (usersList.filter((el) => el.email === data.email).length > 0) {
            setLoad()
            return newNotification(3, "Login", "Email já cadastrado!", [new NotificationBtn({
                text: "Tente novamente", tag: "button", fun: "close", color: "blue"
            })])
        }

        const res2 = await addDoc(usersRef, data)
        setLoad()
        
        newNotification(3, "Login", "Sua conta foi criada com sucesso", [new NotificationBtn({
            text: "Prosseguir", tag: "button", fun: () => {
                localStorage.setItem("portfolio:user", JSON.stringify(res2.id))
                navigate("/")
                setUsuarioAtual()
            }, color: "blue"
        })])
    }

    return (
        <div className="component create-acount">
            <div className="banner">
                <h1>
                    João Filipe
                    <span>{"<"} Desenvolvedor Front-end {"/>"}</span>
                </h1>
                <h2>
                    <button onClick={openLink} link="https://github.com/joaofilipesoares45/">
                        <FontAwesomeIcon icon={faGithub} />
                    </button>
                    <button onClick={openLink} link="https://www.linkedin.com/in/joão-filipe-viana-63abb1263/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    <button onClick={openLink} link="https://www.instagram.com/lippe_viana_01/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <button onClick={() => whatsMsg("86988667039", "Olá, vim pelo Portfólio!")} >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </button>
                </h2>
            </div>
            <form onSubmit={submit} onBlur={({ target }) => {
                if (target.value.length > 0) {
                    target.parentElement.querySelector("label").setAttribute("ass", "")
                } else if (target.parentElement.querySelector("label").hasAttribute("ass")) {
                    target.parentElement.querySelector("label").removeAttribute("ass")
                }
            }}>

                <h3>Nova conta</h3>
                <div className="inputs">
                    <div>
                        <input type="text" id="nome" name="nome" />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div>
                        <input type="text" id="email" name="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input type="text" id="senha" name="senha" />
                        <label htmlFor="senha">Senha</label>
                    </div>
                </div>
                <nav>
                    <p onClick={() => setComponent(true)}>Já tem uma conta?</p>
                    <button type="submit">{load ? <FontAwesomeIcon icon={faSpinner} /> : "Criar conta"}</button>
                </nav>
            </form>
        </div>
    )
}