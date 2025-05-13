import "../css/habilidades.css"

export default function Habilidades() {
    return (
        <section className="sect habilidades" id="habilidades">
            <div className="head">
                <h2>Tecnologias</h2>
                <p>Estou familiarizado com varias tecnologias no meio web, as principais são:</p>
            </div>
            <div className="list">
                <span className="tec html">Html</span>
                <span className="tec css">Css</span>
                <span className="tec js">JavaScript</span>
                <span className="tec react">React</span>
                <span className="tec vue">VueJs</span>
                <span className="tec git">Git</span>
                <span className="tec github">GitHub</span>
            </div>
        </section>
    )
}