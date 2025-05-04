import { openLink } from "../../../utils/functions";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash } from "@fortawesome/free-solid-svg-icons"
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../../../firebase/app_firebase";

export default function Projetos() {

    const { projetos } = useContext(DataContext)

    const deleteProject = (id) => {
        const projectDoc = doc(firestore, "projetos", id)
        deleteDoc(projectDoc)
    }

    return (
        <section className="sect projetos" id="projetos">

            <div className="list">
                {projetos.map((item, index) => {
                    const { nome, resumo, imgs, link, tecnologias, id } = item

                    return (
                        <div className="card" key={"projeto" + index}>
                            <div className="img">
                                <img src={imgs[0]} alt="" />
                            </div>

                            <div className="info">
                                <h4>{nome}</h4>
                                <p>{resumo}</p>
                                <div>
                                    {tecnologias.map((el, index) => {
                                        return (<span className={"tec " + el} key={index + "tectt"}>{el}</span>)
                                    })}
                                </div>
                            </div>

                            <nav>
                                <FontAwesomeIcon icon={faTrash} onClick={() => deleteProject(id)} />
                                <FontAwesomeIcon icon={faLink} onClick={() => openLink({ target: link })} />
                            </nav>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

