import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faImage, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { openLink, openModal, whatsMsg } from "../../../utils/functions";
import "../css/projetos.css";
import TecBrand from "../../../components/TecBrand";

export default function Projetos() {

    const { projetos, setProjeto } = useContext(DataContext)
    const [page, setPage] = useState(0)
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const divide = (lista) => {
        const lista_dividida = []
        for (let i = 0; i < lista.length; i += 3) {
            lista_dividida.push(lista.slice(i, i + 3))
        }
        if (lista_dividida.length > 0) {
            return lista_dividida
        } else {
            return [[]]
        }
    }

    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth)
    })

    return (
        <section className="sect projetos" id="projetos">
            <div className="head">
                <h2>Projetos</h2>
                <p>Explore alguns dos projetos que já trabalhei, para ver mais informações basta clicar no card do projeto!</p>
            </div>

            <div className="list">
                {windowSize > 770 ?
                    divide(projetos)[page].map((item, index) => {
                        const { nome, link, resumo, tecnologias, imgs } = item
                        return (
                            <div className="card" key={"project" + index + nome} style={{animationDelay: `.${index}s`}}>
                                <div className="img" style={{ width: 326.8, minHeight: 183.75 }}>
                                    <img src={imgs[0]} alt="" onLoad={({ target }) => {
                                        target.parentElement.setAttribute("load", "")
                                    }} />
                                </div>
                                <div className="info">
                                    <h4>{nome} <span> <img src={`${item.link}/icon.png`} alt="" className="a"/></span></h4>
                                    <p>{resumo}</p>
                                    <div>
                                        {tecnologias.map((el) => {
                                            return (
                                                <TecBrand name={el} tag={"false"}/>
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
                                    }} />
                                </nav>
                            </div>
                        )
                    }) :
                    projetos.map((item, index) => {
                        const { nome, link, resumo, tecnologias, imgs } = item
                        return (
                            <div className="card" key={"project" + index}>
                                <div className="img" style={{ width: "fit-content", minHeight: 183.75}}>
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
                                                <TecBrand name={el}/>
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
                                    }} />
                                </nav>
                            </div>
                        )
                    })
                }
            </div>
            {windowSize > 770 &&
                <div className="navigation">
                    <nav>
                        <button onClick={() => {
                            if (page >= 1) {
                                setPage(page - 1)
                            }else{
                                setPage(divide(projetos).length - 1)
                            }
                        }}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <span>{page + 1}</span>
                        <button onClick={() => {
                            if (page + 1 < divide(projetos).length) {
                                setPage(page + 1)
                            }else {
                                setPage(0)
                            }
                        }}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </nav>
                </div>
            }
        </section>
    )
}

