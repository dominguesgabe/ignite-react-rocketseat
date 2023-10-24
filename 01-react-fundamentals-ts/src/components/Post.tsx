import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { useState, FormEvent, InvalidEvent } from "react"

interface Author {
  name: string
  role: string
  avatarUrl: string
}

export interface Content {
  type: "paragraph" | "anchor"
  content: string
}

interface PostProps {
  author: Author
  content: Content[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    "que legal amei o conteúdo",
    "Muito bom Devon, parabéns!! 👏👏",
  ])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("Mandatory field!")
  }

  const deleteComment = (commentToDelete: string) => {
    const updatedComments = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(updatedComments)
  }

  const isCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder source={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "anchor") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <strong>Submit your feedback</strong>
        <textarea
          placeholder="Leave a comment"
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
          onChange={(event) => {
            setNewCommentText(event.target.value)
            event.target.setCustomValidity("")
          }}
        />
        <footer>
          <button type="submit" disabled={isCommentEmpty}>
            Comment
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
