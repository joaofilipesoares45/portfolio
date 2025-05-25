import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";
import { firestore } from "../../../../firebase/app_firebase";
import { formCaptureData, openLink, whatsMsg } from "../../../utils/functions";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import NotificationBtn from "../../../Classes/NotificationBtn";

export default function Login({ setComponent }) {
    const navigate = useNavigate()
    const { setUsuarioAtual, newNotification } = useContext(DataContext)
    const [visiblePassword, setVisiblePassword] = useState(false)

    const submit = async (event) => {
        event.preventDefault()
        const data = formCaptureData(event.target)

        if (!data.email || !data.senha) {
            return newNotification(3, "Login", "Preencha todos os dados!", [new NotificationBtn({
                text: "Vou Preencher", tag: "button", fun: "close", color: "blue"
            })])
        }

        const usersRef = collection(firestore, "usuarios")
        const res = await getDocs(usersRef)
        const users = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        const user = users.filter((el) => el.email === data.email && el.senha === data.senha)[0]

        if (!user) {
            return newNotification(3, "Login", "Email ou senha incorretos!", [new NotificationBtn({
                text: "Tentar novamente", tag: "button", fun: "close", color: "blue"
            })])
        }

        if (user) {
            newNotification(3, "Login", "Logado com sucesso", [new NotificationBtn({
                text: "Prosseguir", tag: "button", fun: () => {
                    localStorage.setItem("portfolio:user", JSON.stringify(user.id))
                    navigate("/")
                    setUsuarioAtual(localStorage.getItem("portfolio:user"))
                }, color: "blue"
            })])
        }
    }

    return (
        <div className="component login">
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

                <h3>Fazer login</h3>
                <div className="inputs">
                    <div>
                        <input type="text" id="email" name="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input type={visiblePassword ? "text" : "password"} id="senha" name="senha" />
                        <label htmlFor="senha">Senha</label>
                        <FontAwesomeIcon icon={visiblePassword ? faEyeSlash : faEye} onClick={() => setVisiblePassword(!visiblePassword)} />
                    </div>
                </div>
                <nav>
                    <p onClick={() => setComponent(false)}>Não tem uma conta?</p>
                    <button type="submit">Login</button>
                </nav>
            </form>
        </div>
    )
}