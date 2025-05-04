import { useState } from "react"
import { closeModal, formCaptureData } from "../../../utils/functions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import Project from "../../../Classes/Project";
import { ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage"
import { firestore, storage } from "../../../../firebase/app_firebase";
import { addDoc, collection } from "firebase/firestore";

export default function NewProject() {
    const [nome, setNome] = useState()
    const [resumo, setResumo] = useState()
    const [descricao, setDescricao] = useState("")
    const [link, setLink] = useState()

    const [imgs, setImgs] = useState([])
    const [previewsImg, setPreviewsImg] = useState([])

    const [tags, setTags] = useState([])

    const [progress, setProgress] = useState(0)

    const uploadImg = async (list) => {
        const promisses = []
        list.forEach(async (file) => {
            const storageRef = ref(storage, `project_images/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgress(progress)
                },
                error => {
                    alert(error)
                }
            )

            promisses.push(getDownloadURL(uploadTask.snapshot.ref).then(url => { return url }))
        })
        return Promise.all(promisses).then((result) => {
            return result
        })
    }

    const projectCollectionRef = collection(firestore, "projetos")
    const submit = async (event) => {
        event.preventDefault();

        const data = formCaptureData(event.target);
        const urls = await uploadImg(imgs)
        data.imgs = urls
        data.tecnologias = tags

        const np = new Project(data);
        await addDoc(projectCollectionRef, np.getData()).then(() => {
            setNome()
            setResumo()
            setDescricao()
            setLink()
            setImgs([])
            setPreviewsImg([])
            event.target.querySelectorAll("input").forEach(input => input.value = '')
            event.target.querySelectorAll("textarea")
        })
    }

    const newImg = ({ target }) => {
        const file = target.files[0]
        setImgs([...imgs, file])

        const reader = new FileReader()
        reader.onload = (e) => {
            setPreviewsImg([...previewsImg, e.target.result])
        }
        reader.readAsDataURL(file)
    }

    const deleteImg = (index) => {
        const nl = imgs.filter((el, i) => i !== index)
        setImgs(nl)
        const newList = previewsImg.filter((el, i) => i !== index)
        setPreviewsImg(newList)
    }

    return (
        <div className="modal new-project">
            <form onSubmit={submit}>
                <div className="top">
                    <h3>Postar novo projeto <FontAwesomeIcon icon={faXmark} onClick={() => closeModal()} /></h3>
                    <div className="inputs">
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" value={nome} onChange={({ target }) => setNome(target.value)} />
                        </div>
                        <div>
                            <label htmlFor="resumo">Resumo</label>
                            <input type="text" id="resumo" name="resumo" value={resumo} onChange={({ target }) => setResumo(target.value)} />
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea name="descricao" id="descricao" value={descricao} onChange={({ target }) => setDescricao(target.value)} ></textarea>
                        </div>
                        <div>
                            <label htmlFor="link">Link</label>
                            <input type="text" id="link" name="link" value={link} onChange={({ target }) => setLink(target.value)} />
                        </div>
                        <div>
                            <label htmlFor="img">Imagem {progress}</label>
                            <input type="file" id="img" name="img" onChange={newImg} />
                        </div>
                        <div className="tags" onClick={({target}) => {
                            if (target.tagName === "SPAN") {
                                if (!target.hasAttribute("selected")) {
                                    target.setAttribute("selected", "")
                                    setTags([...tags, target.classList[1]])
                                }else {
                                    target.removeAttribute("selected")
                                    const list = tags.filter((el) => el !== target.classList[1])
                                    setTags(list)
                                }
                            }
                        }}>
                            <span className="tec html">Html</span>
                            <span className="tec css">Css</span>
                            <span className="tec js">JavaScript</span>
                            <span className="tec react">React</span>
                            <span className="tec vue">VueJs</span>
                            <span className="tec git">Git</span>
                            <span className="tec github">GitHub</span>
                        </div>
                    </div>

                    {previewsImg.length > 0 && <div className="img-list">
                        {previewsImg.map((file, index) => {
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