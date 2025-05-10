import { createContext, useEffect, useState } from "react";
import { firestore } from "../../firebase/app_firebase";
import { collection, getDocs } from "firebase/firestore"

export const DataContext = createContext();

const getData = async (ref, set) => {
    const res = await getDocs(ref);
    set(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}

export function DataProvider({ children }) {

    const [projetos, setProjetos] = useState([])
    const [usuarioAtual, setUsuarioAtual] = useState()

    useEffect(() => {
        getData(collection(firestore, 'projetos'), setProjetos)
    }, [projetos])

    useEffect(() => {
        if (localStorage.getItem("portfolio:user") !== null) {
            setUsuarioAtual(JSON.parse(localStorage.getItem("portfolio:user")))
        }
    }, [usuarioAtual])

    const value = {
        projetos,
        setProjetos,
        usuarioAtual, 
        setUsuarioAtual
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}