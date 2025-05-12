import { createContext, useEffect, useState } from "react";
import { firestore } from "../../firebase/app_firebase";
import { collection, getDocs } from "firebase/firestore"
import { openModal } from "../utils/functions";

export const DataContext = createContext();

const getData = async (ref, set) => {
    const res = await getDocs(ref);
    set(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}

export function DataProvider({ children }) {
    const [projeto, setProjeto] = useState()
    const [projetos, setProjetos] = useState([])
    const [usuarioAtual, setUsuarioAtual] = useState()
    const [notification, setNotification] = useState()
    const [colorMode, setColorMode] = useState(true)

    useEffect(() => {
        if (localStorage.getItem("portfolio:colormode") !== null) {
            setColorMode(JSON.parse(localStorage.getItem("portfolio:colormode")))
        }
    }, [])

    useEffect(() => {
        getData(collection(firestore, 'projetos'), setProjetos)
    }, [projetos])

    useEffect(() => {
        if (localStorage.getItem("portfolio:user") !== null) {
            setUsuarioAtual(JSON.parse(localStorage.getItem("portfolio:user")))
        }
    }, [usuarioAtual])
    
    const newNotification = (type, title, text, options) => {
        setNotification({type, title, text, options})
        openModal('notification')
    }

    const value = {
        colorMode, 
        setColorMode,
        projetos,
        setProjetos,
        usuarioAtual, 
        setUsuarioAtual,
        notification, 
        setNotification,
        newNotification,
        projeto, 
        setProjeto
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}