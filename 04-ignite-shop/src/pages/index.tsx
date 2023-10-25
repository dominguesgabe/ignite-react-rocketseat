import { styled } from "@/styles"
import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Button = styled("button", {
  backgroundColor: "$green300",
})

import camiseta1 from "@/assets/1.png"
import camiseta2 from "@/assets/2.png"
import camiseta3 from "@/assets/3.png"

export default function Home() {
  const {} = useKeenSlider({
    slides: {
      perView: 3,
    },
  })
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="1" width={520} height={480} />
        <footer>
          <strong>camiseta X</strong>
          <span>R$ 119,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} alt="1" width={520} height={480} />
        <footer>
          <strong>camiseta X</strong>
          <span>R$ 119,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta3} alt="1" width={520} height={480} />
        <footer>
          <strong>camiseta X</strong>
          <span>R$ 119,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
