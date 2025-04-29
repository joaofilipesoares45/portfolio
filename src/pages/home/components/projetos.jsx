import { baseUrl, formCaptureData, openLink, whatsMsg } from "../../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


export default function Projetos() {
    return (
        <section className="sect projetos" id="projetos">
            <div className="head">
                <h2>Projetos</h2>
                <p>Explore alguns dos projetos que já trabalhei, para ver mais informações basta clicar no card do projeto!</p>
            </div>
            <div className="list">
                <div className="card" onClick={() => openLink({target: "https://joaofilipesoares45.github.io/webshop/"})}>
                    <img src={baseUrl + "/background.jpg"} alt="" />

                    <div className="info">
                        <h4>Site de Vendas</h4>
                        <p>Deseja ter seu negocio nas plataformas digitais? Esse site é a solução!</p>
                        <div>
                            <span className="tec html">Html</span>
                            <span className="tec css">Css</span>
                            <span className="tec react">React</span>
                            <span className="tec git">Git</span>
                            <span className="tec github">GitHub</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={baseUrl + "/background.jpg"} alt="" />

                    <div className="info">
                        <h4>DashBoard</h4>
                        <p>Tenha uma visão geral do seu negocio de forma rapida e intuitiva!</p>
                        <div>
                            <span className="tec html">Html</span>
                            <span className="tec css">Css</span>
                            <span className="tec js">JavaScript</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={baseUrl + "/background.jpg"} alt="" />

                    <div className="info">
                        <h4>Calculadora de IMC</h4>
                        <p>Resolva rapidamente calculos de imc!</p>
                        <div>
                            <span className="tec html">Html</span>
                            <span className="tec css">Css</span>
                            <span className="tec js">JavaScript</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={baseUrl + "/background.jpg"} alt="" />

                    <div className="info">
                        <h4>Login de Usuario</h4>
                        <p>Padrão para uma tela de login!</p>
                        <div>
                            <span className="tec html">Html</span>
                            <span className="tec css">Css</span>
                            <span className="tec react">React</span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="contact">
                <h3>Está precisando de algo diferente ou outro serviço, envie uma mensagem pelo whatsapp para conversarmos melhor sobre sua ideia!</h3>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const text = formCaptureData(e.target).msgtext
                    if (text) {
                        whatsMsg("86988667039", text)
                    }else{
                        alert("Digite algo na caixa de texto")
                    }
                    
                }}>

                    <textarea name="msgtext" placeholder="Digite aqui sua mensagem!"></textarea>
                    <button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
                </form>

            </nav>
        </section>
    )
}

