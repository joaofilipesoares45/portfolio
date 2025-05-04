import { formCaptureData, openLink, whatsMsg } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faEllipsis, faLink } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";


export default function Projetos() {

    const { projetos } = useContext(DataContext)
    return (
        <section className="sect projetos" id="projetos">
            <div className="head">
                <h2>Projetos</h2>
                <p>Explore alguns dos projetos que já trabalhei, para ver mais informações basta clicar no card do projeto!</p>
            </div>
            <div className="list">

                {projetos.map((item, index) => {
                    const { nome, link, resumo, tecnologias, imgs } = item
                    return (
                        <div className="card" key={"project" + index}>
                            <div className="img" style={{ width: 326.8, minHeight: 183.75 }}>
                                <img src={imgs[0]} alt="" onLoad={({ target }) => {
                                    target.parentElement.setAttribute("load", "")
                                }} />
                            </div>
                            <div className="info">
                                <h4>{nome}</h4>
                                <p>{resumo}</p>
                                <div>
                                    {tecnologias.map((el) => {
                                        return (
                                            <span className={"tec " + el} key={el + "tecc"}>{el}</span>
                                        )
                                    })}
                                </div>
                            </div>

                            <nav className="options">
                                <FontAwesomeIcon icon={faLink} onClick={() => openLink({ target: link })} />
                                <FontAwesomeIcon icon={faWhatsapp}
                                    onClick={() => {
                                        whatsMsg("86988667039", "Estou interessado no projeto: " + nome)
                                    }} />

                                <FontAwesomeIcon icon={faEllipsis}/>
                            </nav>
                        </div>
                    )
                })}
            </div>

            <nav className="contact">
                <h3>Está precisando de algo diferente ou outro serviço, envie uma mensagem pelo whatsapp para conversarmos melhor sobre sua ideia!</h3>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const text = formCaptureData(e.target).msgtext
                    if (text) {
                        whatsMsg("86988667039", text)
                    } else {
                        alert("Digite algo na caixa de texto")
                    }

                }}>

                    <textarea name="msgtext" placeholder="Digite aqui sua mensagem!"></textarea>
                    <button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
                </form>

            </nav>
        </section>
    )
}

