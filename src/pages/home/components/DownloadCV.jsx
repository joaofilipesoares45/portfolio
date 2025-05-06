import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileWord, faXmark } from "@fortawesome/free-solid-svg-icons"
import { baseUrl, closeModal } from "../../../utils/functions";

export default function DownloadCV() {
    return (
        <div className="modal download-cv" onClick={({ target }) => {
            if (target.classList[1] === 'download-cv') {
                closeModal("download-cv")
            }
        }}>
            <div className="content">
                <div className="head">
                    <h2>Download do currículo<FontAwesomeIcon icon={faXmark} onClick={() => closeModal("download-cv")} /></h2>
                    <span>
                        Abaixo as opções de download!
                        <nav>
                            <button onClick={() => closeModal("download-cv")} ><a href={baseUrl+"/downloads/Jo%C3%A3oFilipe_Viana_curr%C3%ADculo.pdf"} target="_blank">Pdf <FontAwesomeIcon icon={faFilePdf} /></a></button>
                            <button onClick={() => closeModal("download-cv")} ><a href={baseUrl+"/downloads/Jo%C3%A3oFilipe_Viana_curr%C3%ADculo.docx"}>Word <FontAwesomeIcon icon={faFileWord} /></a></button>
                        </nav>
                    </span>
                </div>

            </div>
        </div>
    )
}