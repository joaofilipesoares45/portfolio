import { openModal, whatsMsg } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import "../css/sobre.css"
import TecBrand from "../../../components/TecBrand";

export default function Sobre() {
    return (
        <section className="sect sobre" id="sobre">
            <div className="info">
                <div className="img">
                    <img src={"/portfolio/about3.jpg"} alt="" />
                    <div className="brands">
                        <TecBrand name={"html"} />
                        <TecBrand name={"css"} />
                        <TecBrand name={"js"} />
                        <TecBrand name={"react"} />
                        <TecBrand name={"vue"} />
                        <TecBrand name={"git"} />
                        <TecBrand name={"github"} />
                    </div>
                </div>

                <div className="declare">
                    <h2>Olá, me chamo João Filipe <p>Desenvolvedor front-end</p></h2>
                    <div className="top">
                        <h3>Como programador me especializei na criação de interfaces digitais que sejam rapidas, fluidas e praticas. Trabalho com foco em resolver problemas do dia a dia, usando as tecnologias mais atualizadas para tornar meus projetos cada vez mais acessíveis.</h3>
                        <div className="contact">
                            {/* <span>Informações de contado:</span> */}
                            <div>
                                <h4>Nome: <span>João Filipe</span></h4>
                                <h4>Email: <span>joaofilipesoares1@gmail.com</span></h4>
                                <h4>Phone: <span>(86) 9 8866-7039</span></h4>
                                <h4>Instagram: <span>@lippe_viana_01</span></h4>
                            </div>

                            <p className="pppp">Download do currículo - link para contato: </p>
                            <nav>
                                <button onClick={() => openModal("download-cv")}>Baixar CV <FontAwesomeIcon icon={faArrowAltCircleDown} /></button>
                                <button onClick={() => whatsMsg("86988667039", "Olá vim pelo portfólio!")}>Contatar <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}