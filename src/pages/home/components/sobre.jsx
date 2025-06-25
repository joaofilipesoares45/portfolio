import { listTags, openModal, whatsMsg } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowUpRightFromSquare, faCircleUser, faGear } from "@fortawesome/free-solid-svg-icons"
import "../css/sobre.css"

export default function Sobre() {
    return (
        <section className="sect sobre" id="sobre">
            <div className="info">
                <div className="img">
                    <FontAwesomeIcon icon={faGear} className="small" />
                    <FontAwesomeIcon icon={faGear} />
                    <FontAwesomeIcon icon={faCircleUser} />
                    <img src={"/portfolio/about3.jpg"} alt="" />
                </div>

                <div className="declare">
                    <h2>Olá, me chamo João Filipe,<p>sou Desenvolvedor front-end</p></h2>
                    <div className="top">
                        <h3>Como programador me especializei na criação de interfaces digitais que sejam rapidas, fluidas e praticas.</h3>
                        <p>Algumas tecnologias que uso no desenvolvimento são: </p>
                        <div className="llll">
                            {listTags.map(({ name, tag }) => {
                                return <span className={`tec ${name}`} key={`tec ${name}`}>{tag}</span>
                            })}

                        </div>
                        <div className="contact">
                            <span>Informações de contado:</span>
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