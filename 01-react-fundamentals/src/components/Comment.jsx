import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)
  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} source="https://github.com/dominguesgabe.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Domingues</strong>
              <time title="07-29 12:44" dateTime="2024-07-29 12:44:10">
                About 1h ago
              </time>
            </div>
            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button
            onClick={() =>
              setLikeCount((actualLikeCount) => actualLikeCount + 1)
            }
          >
            <ThumbsUp size={20} />
            applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
