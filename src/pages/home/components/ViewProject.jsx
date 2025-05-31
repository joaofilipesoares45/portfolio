import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
// import Slide from "./Slide";
import { closeModal } from "../../../utils/functions";
import "../css/view-project.css"
import Slide from "../../../components/Slide";

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
                        <Slide len={projeto.imgs.length}>
                            {projeto.imgs.map((item, index) => {
                                    return (
                                        <div className="item img" key={"img" + index} >
                                            <img src={item} alt="" onLoad={({target}) => {
                                                target.parentElement.setAttribute("load", "")
                                            }}/>
                                        </div>
                                    )
                                })}
                        </Slide>
                    </div>
                </div>
            }
        </div>
    )
}