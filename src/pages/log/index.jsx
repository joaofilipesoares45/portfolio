import { useState } from "react";
import Login from "./components/Login";
import CreateAcount from "./components/CreateAcount";
import "./css/index.css"
import { baseUrl, openLink, whatsMsg } from "../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faHtml5, faJs, faReact, faVuejs, faGithub, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function LogPage() {
    const [component, setComponent] = useState(true)
    return (
        <div className="page log-page">
            <div className="content">
                <div className="banner">
                    <h1>
                        <img src={"/portfolio/perfil.jpg"} alt="" />
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
                <div className="form">
                    {component === true ? <Login setComponent={setComponent} /> : <CreateAcount setComponent={setComponent} />}
                </div>
                <a href={baseUrl} className="go-to-home">Portfólio</a>
            </div>
        </div>
    )
}