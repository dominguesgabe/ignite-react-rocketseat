import { globalStyles } from "@/styles/global"
import type { AppProps } from "next/app"
import LogoImg from "@/assets/logo.svg"
import { Roboto } from "next/font/google"
import { Container, Header } from "@/styles/pages/app"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={LogoImg.src} alt="App Logo" />
      </Header>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Container>
  )
}
