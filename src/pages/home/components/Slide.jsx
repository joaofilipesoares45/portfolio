import { useState } from "react"
import styles from "../css/Slide.module.css"

export default function Slide({ children, nav }) {
    const [position, setPosition] = useState()

    const slideRoller = (value) => {
        const list = document.querySelectorAll(`.${styles.slide} .item`)

        let actual
        list.forEach((div, index) => {
            div.removeAttribute("prev")
            if (div.hasAttribute("view")) {
                actual = index
            }
        })

        let next
        let ps
        if (value === true) {
            if (actual < list.length - 1) {
                next = actual + 1
                ps = "l"
            } else {
                next = 0
                ps = "r"
            }
        } else {
            if (actual > 0) {
                next = actual - 1
                ps = "r"
            } else {
                next = list.length - 1
                ps = "l"
            }
        }

        if (typeof next === "number") {
            list[actual].removeAttribute("view")
            list[next].setAttribute("view", "true")
            list[next].setAttribute("position", ps)
            
            const btns = document.querySelectorAll(`.${styles.slide} nav button`)

            btns.forEach((btn, index) => {
                if (btn.hasAttribute("selected")) {
                    btn.removeAttribute("selected")
                }
                if (index === next) {
                    btn.setAttribute("selected", "true")
                }
            })
            if (next - 1 >= 0) {
                list[next - 1].setAttribute("prev", "true")
            }
            if (next + 1 < list.length) {
                list[next + 1].setAttribute("prev", "false")
            }
        }
    }
    return (
        <div className={styles.slide} onTouchStart={(event) => setPosition(event.touches[0].clientX)} onTouchEnd={(event) => {
            if (event.changedTouches[0].clientX < position - 120) {
                slideRoller(true)
            } else if (event.changedTouches[0].clientX > position + 120) {
                slideRoller(false)
            }
        }}>
            {children}
            {nav}
        </div>
    )
}