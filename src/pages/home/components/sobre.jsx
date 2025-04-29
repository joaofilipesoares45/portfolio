import { baseUrl } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"

export default function Sobre() {
    return (
        <section className="sect sobre" id="sobre">
            <div className="info">
                <img src={baseUrl + "/about2.jpg"} alt="" />

                <div className="declare">
                    <h2>Sobre</h2>
                    <div className="top">
                        <p>Olá, me chamo João Filipe e sou Desenvolvedor front-end, me especializei na criacão de interfaces digitais que sejam: rapidas, fluidas e praticas. <br /> Algumas tecnologias que uso no desenvolvimento são: </p>
                        <div>
                            <span className="tec html">Html</span>
                            <span className="tec css">Css</span>
                            <span className="tec js">JavaScript</span>
                            <span className="tec react">React</span>
                            <span className="tec vue">VueJs</span>
                            <span className="tec git">Git</span>
                            <span className="tec github">GitHub</span>
                        </div>

                        <p className="pppp">Abaixo o link para download do currículo: </p>
                        <button>Baixar CV <FontAwesomeIcon icon={faArrowAltCircleDown} /> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}