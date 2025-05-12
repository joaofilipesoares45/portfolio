import { useContext, useEffect, useState } from "react"
import { closeModal, formCaptureData, listTags } from "../../../utils/functions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import Project from "../../../Classes/Project";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject, } from "firebase/storage"
import { firestore, storage } from "../../../../firebase/app_firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { DataContext } from "../../../context/DataContext";
import { useForm } from "react-hook-form"

export default function NewProject() {
    const { projeto, setProjeto } = useContext(DataContext)
    const [imgs, setImgs] = useState([])
    const [tags, setTags] = useState([])
    const [progress, setProgress] = useState(0)

    const uploadImg = async (file) => {
        const storageRef = ref(storage, `project_images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        setProgress(0)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },
            error => {
                alert(error)
            },
            async () => {
                setImgs([...imgs, await getDownloadURL(uploadTask.snapshot.ref).then(url => { return url })])
            }
        )
    }

    const submit = async (target) => {
        const data = formCaptureData(target);
        data.imgs = imgs
        data.tecnologias = tags

        const np = new Project(data);

        const projectCollectionRef = collection(firestore, "projetos")
        await addDoc(projectCollectionRef, np.getData()).then(() => {
            setImgs([])
            target.querySelectorAll("input").forEach(input => input.value = '')
            target.querySelectorAll("textarea")
        })
    }

    const update = async (target) => {
        const data = formCaptureData(target);
        data.imgs = imgs
        data.tecnologias = tags

        const np = new Project(data);

        const projectRef = doc(firestore, "projetos", projeto.id)
        await updateDoc(projectRef, np.getData()).then(() => {
            setImgs([])
            target.querySelectorAll("input").forEach(input => input.value = '')
            target.querySelectorAll("textarea")
            setProjeto()
        })
    }

    const newImg = ({ target }) => {
        const file = target.files[0]
        uploadImg(file)
    }

    const deleteImg = (index) => {
        const filename = imgs[index].split("https://firebasestorage.googleapis.com/v0/b/portfolio-jf-viana.firebasestorage.app/o/project_images%2F",)[1].split("?")[0].replaceAll("%20", " ")
        const imageRef = ref(storage, `project_images/${filename}`)
        deleteObject(imageRef).then(() => {
            const nl = imgs.filter((_, i) => i !== index)
            setImgs(nl)
        })
    }

    const { register, setValue } = useForm({
        defaultValues: {
            cidade: "",
            uf: "",
            rua: "",
            bairro: "",
            complemento: ""
        }
    })

    useEffect(() => {
        if (projeto) {
            setValue('nome', projeto.nome)
            setValue('resumo', projeto.resumo)
            setValue('decricao', projeto.descricao)
            setValue('link', projeto.link)
            setImgs([].concat(imgs, projeto.imgs))
            setTags(projeto.tecnologias)
        } else {
            setValue('nome', "")
            setValue('resumo', "")
            setValue('descricao', "")
            setValue('link', "")
            setImgs([])
            setTags([])
        }
    }, [projeto])

    return (
        <div className="modal new-project">
            <form onSubmit={(event) => {
                event.preventDefault()
                !projeto ? submit(event.target) : update(event.target)
            }}>
                <div className="top">
                    <h3>{!projeto ? "Postar novo projeto" : `Editando: ${projeto.nome}`} <FontAwesomeIcon icon={faXmark} onClick={() => { closeModal(); setProjeto() }} /></h3>
                    <div className="inputs">
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" {...register("nome")} />
                        </div>
                        <div>
                            <label htmlFor="resumo">Resumo</label>
                            <input type="text" id="resumo" name="resumo" {...register("resumo")} />
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea name="descricao" id="descricao" {...register("decricao")} ></textarea>
                        </div>
                        <div>
                            <label htmlFor="link">Link</label>
                            <input type="text" id="link" name="link" {...register("link")} />
                        </div>
                        <div>
                            <label htmlFor="img">Imagem {progress}</label>
                            <input type="file" id="img" name="img" onChange={newImg} />
                        </div>
                        <div className="tags" onClick={({ target }) => {
                            if (target.tagName === "SPAN") {
                                if (!target.hasAttribute("selected")) {
                                    target.setAttribute("selected", "")
                                    setTags([...tags, target.classList[1]])
                                } else {
                                    target.removeAttribute("selected")
                                    const list = tags.filter((el) => el !== target.classList[1])
                                    setTags(list)
                                }
                            }
                        }}>
                            {listTags.map((el, index) => {
                                return <span className={"tec " + el.name} key={"tagg" + index} selected={tags.includes(el.name) ? "true" : false}>{el.tag}</span>
                            })}
                        </div>
                    </div>

                    {imgs.length > 0 && <div className="img-list">
                        {imgs.map((file, index) => {
                            return (
                                <div key={"img" + index}>
                                    <img src={file} />
                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteImg(index)} />
                                </div>
                            )
                        })}
                    </div>}
                </div>

                <nav>
                    <button>Concluido</button>
                </nav>
            </form>
        </div>

    )
}   