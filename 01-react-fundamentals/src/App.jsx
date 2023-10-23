import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import "./components/global.css"
import styles from "./App.module.css"
import { Post } from "./components/Post"

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
