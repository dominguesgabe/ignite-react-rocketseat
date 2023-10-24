import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import "./components/global.css"
import styles from "./App.module.css"
import { Content, Post } from "./components/Post"

interface Post {
  id: number
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: Content[]
  publishedAt: Date
}

function App() {
  const posts: Post[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/dominguesgabe.png",
        name: "Gabriel Domingues",
        role: "Javascript Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "anchor", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-10-22 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/jhon-henkel.png",
        name: "Jhon Henkel",
        role: "PHP Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "anchor", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-10-24 02:00:00"),
    },
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
