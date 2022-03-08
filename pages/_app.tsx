import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from "../components/Header"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Box margin={"1rem"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp