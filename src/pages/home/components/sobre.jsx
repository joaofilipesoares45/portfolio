import { openModal, whatsMsg } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function Sobre() {
    return (
        <section className="sect sobre" id="sobre">
            <div className="info">
                <img src={"/portfolio/about2.jpg"} alt="" />

                <div className="declare">
                    <h2>Olá, me chamo João Filipe,<p>sou Desenvolvedor front-end</p></h2>
                    <div className="top">
                        <h3>Como programador me especializei na criação de interfaces digitais que sejam: rapidas, fluidas e praticas.</h3>
                        <div className="contact">
                            <div>
                                <h4>Nome: <span>João Filipe</span></h4>
                                <h4>Email: <span>joaofilipesoares1@gmail.com</span></h4>
                                <h4>Phone: <span>(86) 9 8866-7039</span></h4>
                                <h4>Instagra: <span>@lippe_viana_01</span></h4>
                            </div>
                            <nav>
                                <button onClick={() => whatsMsg("86988667039", "Olá vim pelo portfólio!")}>Contatar <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                            </nav>
                        </div>
                        <p>Algumas tecnologias que uso no desenvolvimento são: </p>
                        <div className="llll">
                            <span className="tec html">Html</span>
                            <span className="tec css">Css</span>
                            <span className="tec js">JavaScript</span>
                            <span className="tec react">React</span>
                            <span className="tec vue">VueJs</span>
                            <span className="tec git">Git</span>
                            <span className="tec github">GitHub</span>
                        </div>

                        <p className="pppp">Abaixo o link para download do currículo: </p>
                        <button onClick={() => openModal("download-cv")}>Baixar CV <FontAwesomeIcon icon={faArrowAltCircleDown} /> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}