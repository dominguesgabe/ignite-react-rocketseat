import { PencilLine } from "phosphor-react"
import styles from  "./Sidebar.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/46696299?v=4"
                />
                <strong>Gabriel Domingues</strong>
                <span>Javascript Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}