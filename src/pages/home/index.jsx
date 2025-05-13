import { faCss, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faReact, faVuejs, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleDown, faArrowDown, faArrowRightFromBracket, faBars, faCode, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { firestore } from "../../../firebase/app_firebase";
import { DataContext } from "../../context/DataContext";
import { baseUrl, logOut, openLink, openModal, whatsMsg } from "../../utils/functions";

import DownloadCV from "./components/DownloadCV";
import Habilidades from "./components/habilidades";
import Projetos from "./components/projetos";
import Sidebar from "./components/sidebar";
import Slide from "./components/Slide";
import Sobre from "./components/sobre";
import "./css/index.css";
import "./css/dark-mode.css";

const list = [
    1, 2, 3, 4, 5
]
export default function Home() {
    const { usuarioAtual, colorMode, setColorMode } = useContext(DataContext)

    const navigate = useNavigate()

    const [user, setUser] = useState({})
    useEffect(() => {
        const getUser = async () => {
            const userDoc = doc(firestore, "usuarios", usuarioAtual)
            const data = (await getDoc(userDoc)).data()
            setUser(data)
        }
        getUser()
    }, [usuarioAtual])

    const goTo = (e) => {
        e.preventDefault()

        const { target } = e

        if (target.tagName === "A" || target.tagName === "svg") {
            const element = document.querySelector(target.getAttribute("href"))
            document.querySelector(".page.home").scrollTo(0, (element.offsetTop - 65))
        }
    }

    const changeColorMode = () => {
        if (colorMode === true) {
            setColorMode(false)
            localStorage.setItem("portfolio:colormode", JSON.stringify(false))
        } else {
            setColorMode(true)
            localStorage.setItem("portfolio:colormode", JSON.stringify(true))
        }
    }

    return (
        <div className="page home" colormode={String(colorMode)}>
            <header>
                <FontAwesomeIcon icon={faBars} onClick={() => openModal("sidebar")} />
                <nav onClick={goTo}>
                    <a href="#sobre">Sobre mim</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#habilidades">Tecnologias</a>
                    <a href="#projetos">Meus Serviços</a>
                </nav>

                <div className="options">
                    <button className="log-btn" onFocus={({ target }) => {
                        if (target.classList[0] === "log-btn") {
                            target.querySelector(".login-drop-down").setAttribute("visible", "")
                        }
                    }} onBlur={() => {
                        setTimeout(() => document.querySelector(".login-drop-down").removeAttribute("visible"), 100)
                    }}>
                        {user.nome ? <FontAwesomeIcon icon={faUser} /> : <a href={baseUrl + "/login"}>Login </a>}
                        {user.nome && <div className="login-drop-down">
                            <div className="info">
                                <FontAwesomeIcon icon={faUser} />
                                <h3>{user.nome}</h3>
                                <p>{user.email}</p>
                            </div>
                            {user.acesso === "total" && <span onClick={() => navigate("/admin")}>Administrador</span>}
                            <a onClick={() => { logOut(); setUser({}) }}>Sair <FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
                        </div>}
                    </button>
                    <button onClick={() => openModal("download-cv")}>Baixar CV <FontAwesomeIcon icon={faArrowAltCircleDown} /></button>
                    <FontAwesomeIcon icon={colorMode === true ? faSun : faMoon} onClick={changeColorMode} />
                </div>
            </header>

            <main>
                <div className="banner">
                    <div className="animated-arrow" onClick={goTo}>
                        <FontAwesomeIcon icon={faArrowDown} href="#sobre" />
                    </div>

                    <h1>
                        <img src={"/portfolio/logo_1.jpg"} alt="" />
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
                <Slide children={
                    <div className="list ex-slide">
                        {list.map((item, index) => {
                            return (
                                <div className="item" key={item + index} view={index === 0 ? "true" : "false"}>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                } nav={
                    <nav onClick={({ target }) => {
                        if (target.tagName === "BUTTON") {
                            const index = target.getAttribute("index")
                            const slide = document.querySelectorAll(".ex-slide .item")

                            target.parentElement.querySelectorAll("button").forEach((btn) => {
                                btn.removeAttribute("selected")
                            })

                            target.setAttribute("selected", "true")
                            slide.forEach((div, i) => {
                                div.removeAttribute("prev")
                                if (div.hasAttribute("view")) {
                                    div.removeAttribute("view")
                                }

                                if (i === Number(index)) {
                                    div.setAttribute("view", "true")
                                    if (i - 1 >= 0) {
                                        slide[i - 1].setAttribute("prev", "true")
                                    }
                                    if (i + 1 < slide.length) {
                                        slide[i + 1].setAttribute("prev", "false")
                                    }
                                }
                            })
                        }
                    }}>
                        {list.map((el, index) => {
                            return <button key={"btn" + el} index={index}></button>
                        })}
                    </nav>
                } />
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

            <Sidebar />
            <DownloadCV />
        </div>
    )
}