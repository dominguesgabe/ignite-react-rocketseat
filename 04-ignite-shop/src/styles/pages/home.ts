import { styled } from "@/styles"

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
})

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7365d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  img: {
    objectFit: "cover",
  },

  footer: {
    padding: "2rem",
    position: "absolute",
    bottom: ".2rem",
    left: ".2rem",
    right: ".2rem",
    borderRadius: 6,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .6)",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all .2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
})
