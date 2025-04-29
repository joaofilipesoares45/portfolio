import "./css/index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faArrowAltCircleDown, faArrowDown, faCode, faBars} from "@fortawesome/free-solid-svg-icons"
import { faCss, faHtml5, faJs, faReact, faVuejs, faGithub, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react";
import Sobre from "./components/sobre";
import { baseUrl, openLink, openModal, whatsMsg } from "../../utils/functions";
import Projetos from "./components/projetos";
import Habilidades from "./components/habilidades";
import Sidebar from "./components/sidebar";

export default function Home() {

    const [colorMode, setColorMode] = useState(true)

    const goTo = (e) => {
        e.preventDefault()

        const { target } = e

        if (target.tagName === "A" || target.tagName === "svg") {
            const element = document.querySelector(target.getAttribute("href"))
            document.querySelector(".page.home").scrollTo(0, (element.offsetTop - 65))
        }
    }

    return (
        <div className="page home" colormode={String(colorMode)}>
            <header>
                <FontAwesomeIcon icon={faBars} onClick={() => openModal("sidebar")}/>
                <nav onClick={goTo}>
                    <a href="#sobre">Sobre mim</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#habilidades">Tecnologias</a>
                    <a href="#projetos">Meus Serviços</a>
                </nav>

                <div className="options">
                    <button>Baixar CV <FontAwesomeIcon icon={faArrowAltCircleDown} /> </button>
                    <FontAwesomeIcon icon={colorMode === true ? faSun : faMoon} onClick={() => colorMode === true ? setColorMode(false) : setColorMode(true)} />
                </div>
            </header>

            <main>
                <div className="banner">
                    <div className="animated-arrow" onClick={goTo}>
                        <FontAwesomeIcon icon={faArrowDown} href="#sobre" />
                    </div>

                    <h1>
                        <img src={baseUrl + "/perfil.jpg"} alt="" />
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
                    <footer>
                        <div className="marquee">
                            <span>
                                <FontAwesomeIcon icon={faHtml5} />
                                Html
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCss} />
                                Css
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                JavaScript
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faReact} />
                                React
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faVuejs} />
                                VueJs
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faHtml5} />
                                Html
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCss} />
                                Css
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                JavaScript
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faReact} />
                                React
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faVuejs} />
                                VueJs
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faHtml5} />
                                Html
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCss} />
                                Css
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                JavaScript
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faReact} />
                                React
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faVuejs} />
                                VueJs
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faHtml5} />
                                Html
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCss} />
                                Css
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                JavaScript
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faReact} />
                                React
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faVuejs} />
                                VueJs
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faHtml5} />
                                Html
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCss} />
                                Css
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                JavaScript
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faReact} />
                                React
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faVuejs} />
                                VueJs
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faHtml5} />
                                Html
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCss} />
                                Css
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                JavaScript
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faReact} />
                                React
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faVuejs} />
                                VueJs
                            </span>
                        </div>
                    </footer>
                </div>

                <Sobre />
                <Projetos />
                <Habilidades />
            </main>

            <footer className="bottom-page">
                <h2>Portfólio <span>João Filipe Viana</span><FontAwesomeIcon icon={faCode} /></h2>
                <div className="info">
                    <p>Links: </p>
                    <nav>
                    <FontAwesomeIcon icon={faGithub} onClick={openLink} link="https://github.com/joaofilipesoares45/" />
                    <FontAwesomeIcon icon={faLinkedin} onClick={openLink} link="https://www.linkedin.com/in/joão-filipe-viana-63abb1263/" />
                    <FontAwesomeIcon icon={faInstagram} onClick={openLink} link="https://www.instagram.com/lippe_viana_01/" />
                    <FontAwesomeIcon icon={faWhatsapp} onClick={() => whatsMsg("86988667039", "Olá, vim pelo Portfólio!")} />
                </nav>
                </div>
                
            </footer>

            <Sidebar/>
        </div>
    )
}