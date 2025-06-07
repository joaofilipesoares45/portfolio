import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons"
import "../css/servicos.css"
import { formCaptureData, whatsMsg } from "../../../utils/functions";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { firestore } from "../../../../firebase/app_firebase";
import { doc, getDoc } from "firebase/firestore";
import NotificationBtn from "../../../Classes/NotificationBtn";

export default function Servicos() {

    const { newNotification, usuarioAtual } = useContext(DataContext)

    const [user, setUser] = useState({})
    useEffect(() => {
        const getUser = async () => {
            const userDoc = doc(firestore, "usuarios", usuarioAtual)
            const data = (await getDoc(userDoc)).data()
            setUser(data)
        }
        getUser()
    }, [usuarioAtual])

    return (
        <div className="sect servicos" id="servicos">
            <div className="head">
                <h2>Serviços</h2>
            </div>
            <div className="list">
                <div className="item">
                    <h3><FontAwesomeIcon icon={faCode} /> Desenvolvimento Frontend</h3>
                    <p>Criação e melhoria de sistemas e aplicações visando a boa experiencia do usuario.</p>
                </div>
                <div className="item">
                    <h3><FontAwesomeIcon icon={faCode} /> Sites personalizados</h3>
                    <p>Deixe seu negócio decolar com um site moderno e eficiente! <br /> Conquiste seu espaço no mercado digital.</p>
                </div>
                <div className="item">
                    <h3><FontAwesomeIcon icon={faCode} /> Sistemas locais</h3>
                    <p>Aumente as vendas do seu negócio com um sistema de vendas completo! <br />
                        Controle total de estoque e pedidos.</p>
                </div>
            </div>
            <nav className="contact">
                <h3>Está precisando de algo diferente ou outro serviço, envie uma mensagem pelo whatsapp para conversarmos melhor sobre sua ideia!</h3>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const text = formCaptureData(e.target).msgtext
                    if (text) {
                        whatsMsg("86988667039", user.nome ? `Olá me chamo ${user.nome}: \n ` + text : text)
                    } else {
                        newNotification(3, "Erro", "O campo de texto está vazio!", [new NotificationBtn({ text: "Ok, vou preencher", tag: "button", fun: "close", color: "blue" })])
                    }
                }}>
                    <textarea name="msgtext" placeholder={`Preciso de um projeto pessoal!`} onDoubleClick={({target}) => {
                        target.value = target.placeholder
                    }}></textarea>
                    <button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
                </form>
            </nav>
        </div>
    )
}