import { closeModal, formCaptureData, openLink, whatsMsg } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../../firebase/app_firebase";
import { useNavigate } from "react-router"
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import NotificationBtn from "../../../Classes/NotificationBtn";

export default function CreateAcount({ setComponent }) {
    const navigate = useNavigate()
    const { setUsuarioAtual, newNotification } = useContext(DataContext)

    const usersRef = collection(firestore, "usuarios")
    const submit = async (event) => {
        event.preventDefault()
        const data = formCaptureData(event.target)

        const res1 = await getDocs(usersRef)
        const usersList = res1.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        if (usersList.filter((el) => el.email === data.email).length > 0) {
            return
        }

        const res2 = await addDoc(usersRef, data)

        newNotification(3, "Login", "Sua conta foi criada com sucesso", [new NotificationBtn({
            text: "Prosseguir", tag: "button", fun: () => {
                localStorage.setItem("portfolio:user", JSON.stringify(res2.id))
                navigate("/")
                setUsuarioAtual()
                closeModal()
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
                    <button type="submit">Criar conta</button>
                </nav>
            </form>
        </div>
    )
}