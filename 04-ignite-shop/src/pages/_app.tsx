import { globalStyles } from "@/styles/global"
import type { AppProps } from "next/app"
import LogoImg from "@/assets/logo.svg"
import { Roboto } from "next/font/google"
import { Container, Header } from "@/styles/pages/app"
import Image from "next/image"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={LogoImg} width={130} height={52} alt="App Logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
