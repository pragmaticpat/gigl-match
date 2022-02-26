/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const { default: Layout } = require("./src/components/layout")
const { default: Theme } = require("./src/components/theme")
const { ChakraProvider } = require("@chakra-ui/react")

exports.wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
