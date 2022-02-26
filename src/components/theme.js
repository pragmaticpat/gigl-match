import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  components: {
    // Text: {
    //   baseStyle: {
    //     fontSize: "1.5vw",
    //     fonColor: "lightorchid",
    //   },
    // },
  },
  styles: {
    global: {
      a: {
        textDecoration: "underline",
        textDecorationColor: "darkorchid",
        textDecorationOffset: "4px",
      },
      h2: {
        fontSize: "2rem",
      },
      body: {
        fontSize: "1.25rem",
      },
    },
  },
})

export default Theme
