import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>{/* <Image/> */}</ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 89,99</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          veniam nesciunt autem fugiat dolore laborum eveniet ipsum quaerat? Quo
          obcaecati inventore fugit est debitis cumque sit aliquam quam modi
          facere.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
