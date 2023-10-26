import { styled } from "@/styles"

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
})

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7365d4 100%)",
  borderRadius: 8,
  padding: ".25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "4rem",

  img: {
    objectFit: "cover",
  },
})