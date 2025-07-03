import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNode, faNodeJs, faReact, faSquareGitlab, faVuejs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./TecBrand.module.css"

export default function TecBrand({ name, tag }) {

    const brands = {
        html: ["Html", faHtml5],
        css: ["Css", faCss3Alt],
        js: ["JavaScript", faJs],
        react: ["React", faReact],
        vue: ["VueJs", faVuejs],
        git: ["Git", faGitAlt],
        github: ["GitHub", faGithub],

        node: ["nodeJs", faNodeJs],
        express: ["nodeJs", faNode],
        sql: ["nodeJs", faSquareGitlab],
        sequelize: ["nodeJs", faNodeJs],
        prisma: ["nodeJs", faNodeJs],
    }

    return (
        <div name={brands[name][0]} className={styles.div} open={tag}>
            <FontAwesomeIcon icon={brands[name][1]} />
        </div>
    )
}