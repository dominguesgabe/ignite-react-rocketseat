import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
    return <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder source="https://github.com/dominguesgabe.png" />
                <div className={styles.authorInfo}>
                    <strong>Gabriel Domingues</strong>
                    <span>Javascript Developer</span>
                </div>
            </div>
            <time title="07-29 12:44" dateTime="2024-07-29 12:44:10">Publicado há 1h</time>
        </header>
        <div className={styles.content}>
            <p>
                Fala galeraa 👋
            </p>
            <p>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
            </p>
            <p>
                <a href="#">
                    👉{' '}jane.design/doctorcare
                </a>
            </p>
            <p>
                <a href="#">
                    #novoprojeto
                </a>{' '}
                <a href="#">
                    #nlw
                </a>{' '}
                <a href="#">
                    #rocketseat
                </a>
            </p>
        </div>
        <form className={styles.commentForm}>
            <strong>
                Submit your feedback
            </strong>
            <textarea placeholder="Leave a comment" />
            <footer>
                <button type="submit">Comment</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
    </article>
}