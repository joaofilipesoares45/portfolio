import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faImage, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { openLink, openModal, whatsMsg } from "../../../utils/functions";
import "../css/projetos.css";

export default function Projetos() {

    const { projetos, setProjeto } = useContext(DataContext)

   

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
                                <FontAwesomeIcon icon={faImage} onClick={() => {
                                    setProjeto(item)
                                    openModal("view-project")
                                }}/>
                            </nav>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

