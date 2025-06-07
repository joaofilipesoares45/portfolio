import "./css/index.css"
import { baseUrl, openModal } from "../../utils/functions";
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
            <Usuarios/>

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