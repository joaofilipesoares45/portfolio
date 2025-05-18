import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import Slide from "./Slide";
import { closeModal } from "../../../utils/functions";
import "../css/view-project.css"

export default function ViewProject() {
    const { projeto, setProjeto } = useContext(DataContext)

    return (
        <div className="modal view-project">
            {projeto &&
                <div className="content">
                    <div className="head">
                        <h2>Projeto:<span>{projeto.nome}</span></h2>
                        <FontAwesomeIcon icon={faXmark} onClick={() => { closeModal("view-project"); setProjeto() }} />
                    </div>
                    <div className="main">
                        <Slide children={
                            <div className="list slide-imgs">
                                {projeto.imgs.map((item, index) => {
                                    return (
                                        <div className="item img" key={"img" + index} view={index === 0 && "true"}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        } nav={
                            <nav onClick={({ target }) => {
                                if (target.tagName !== "BUTTON") {
                                    return
                                }
                                const listBtn = target.parentElement.querySelectorAll("button")
                                const listImgs = document.querySelectorAll(".view-project .slide-imgs .item")

                                listBtn.forEach(el => el.removeAttribute("selected"));
                                target.setAttribute("selected", "true")

                                listImgs.forEach((el,index) => {
                                    el.removeAttribute("view")

                                    if (index === Number(target.id)) {
                                        el.setAttribute("view", "true")
                                    }
                                })
                            }}>
                                {projeto.imgs.map((_, index) => {
                                    return (
                                        <button key={"btnb" + index} id={index} selected={index === 0 && "true"}></button>
                                    )
                                })}
                            </nav>
                        } />
                    </div>
                </div>
            }
        </div>
    )
}