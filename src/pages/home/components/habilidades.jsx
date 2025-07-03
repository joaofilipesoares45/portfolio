import "../css/habilidades.css"
import TecBrand from "../../../components/TecBrand"
export default function Habilidades() {
    return (
        <section className="sect habilidades" id="habilidades">
            <div className="head">
                <h2>Tecnologias</h2>
                <p>Algumas ferramentas do meio web que uso no desenvolvimento...</p>
            </div>

            <div className="list">
                <div>
                    <TecBrand name={"html"} />
                    <TecBrand name={"css"} />
                    <TecBrand name={"js"} />
                    <TecBrand name={"react"} />
                    <TecBrand name={"vue"} />
                    <TecBrand name={"git"} />
                    <TecBrand name={"github"} />
                </div>
            </div>
        </section>
    )
}