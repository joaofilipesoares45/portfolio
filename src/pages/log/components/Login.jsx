import { formCaptureData, openLink, whatsMsg } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../../firebase/app_firebase";
import { useNavigate } from "react-router"

export default function Login({ setComponent }) {
    const navigate = useNavigate()

    const submit = async (event) => {
        event.preventDefault()
        const data = formCaptureData(event.target)
        const usersRef = collection(firestore, "usuarios")
        const res = await getDocs(usersRef)
        const users = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        const user = users.filter((el) => el.email === data.email && el.senha === data.senha)[0]

        if (!user) {
            return
        }
        if (user) {
            localStorage.setItem("portfolio:user", JSON.stringify(user.id))
            navigate("/")
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
            <form onSubmit={submit}>

                <h3>Fazer login</h3>
                <div className="inputs">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type="text" id="senha" name="senha" />
                    </div>
                </div>
                <nav>
                    <p onClick={() => setComponent(false)}>Já tem uma conta?</p>
                    <button type="submit">Criar conta</button>
                </nav>
            </form>
        </div>
    )
}