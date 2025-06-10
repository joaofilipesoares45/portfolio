import { closeModal } from "../../../utils/functions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons"

export default function Sidebar() {
    const goTo = (e) => {
        e.preventDefault()
        const { target } = e
        if (target.tagName === "A" || target.tagName === "svg") {
            const element = document.querySelector(target.getAttribute("href"))
            document.querySelector(".page.home").scrollTo(0, (element.offsetTop - 65))
            closeModal()
        }
    }

    return (
        <div className="modal sidebar" onClick={({ target }) => {
            if (target.classList[1] === "sidebar") {
                closeModal()
            }
        }}>
            <div className="content">
                <FontAwesomeIcon icon={faXmark} onClick={() => closeModal("sidebar")}/>
                <nav onClick={goTo}>
                    <a href="#sobre">Sobre</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#habilidades">Tecnologias</a>
                </nav>
            </div>
        </div>
    )
}