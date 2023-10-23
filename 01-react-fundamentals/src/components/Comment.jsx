import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} source="https://github.com/dominguesgabe.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Domingues</strong>
                            <time title="07-29 12:44" dateTime="2024-07-29 12:44:10">About 1h ago</time>
                        </div>
                        <button title="Delete comment">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        applaud <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}