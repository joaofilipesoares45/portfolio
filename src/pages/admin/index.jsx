import "./css/index.css"
import { baseUrl, formCaptureData, openModal } from "../../utils/functions";
import NewProject from "./components/NewProject";
import Projetos from "./components/projetos";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router"
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/app_firebase";
import Slide from "../../components/Slide";
import Usuarios from "./components/Usuarios";

export default function AdminPage() {
    const { usuarioAtual } = useContext(DataContext)
    const navigate = useNavigate()

    if (!usuarioAtual) {
        navigate("/*")
    }

    useEffect(() => {
        const getUser = async () => {
            const userDoc = doc(firestore, "usuarios", usuarioAtual)
            const user = (await getDoc(userDoc)).data()
            if (!user.acesso) {
                navigate("/*")
            }
        }
        getUser()
    }, [usuarioAtual, navigate])

    const newTag = (event) => {
        const { target } = event
        const data = formCaptureData(target)
        console.log(data);
        
    }

    return (
        <div className="page admin">
            <header>
                <h1><a href={baseUrl}>Portfólio</a></h1>
                <div className="options">
                    <button onClick={() => openModal("new-project")}>Novo projeto</button>
                </div>
            </header>
            <NewProject />
            <Projetos />
            <Usuarios />

            <div className="add-tag">
                <form onSubmit={newTag}>
                    <div className="inputs">
                        <div>
                            <label htmlFor="nome">nome</label>
                            <input type="text" id="nome" name="nome"/>
                        </div>
                        <div>
                            <label htmlFor="cor">cor</label>
                            <input type="color" id="cor" name="cor"/>
                        </div>
                    </div>
                </form>
            </div>

            <Slide len={3}>
                {[1, 2, 3].map((item, index) => {
                    return (
                        <div className="item" key={"item" + index} visible={index === 0 && "true"}>
                            {item}
                        </div>
                    )
                })}
            </Slide>
        </div>
    )
}