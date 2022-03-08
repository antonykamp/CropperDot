import { Text } from "@chakra-ui/react"
import cookie from "cookie"

export default function App(){
    return (
        <Text>Hwllo World</Text>
    )
}

export async function getServerSideProps(context) {
    const cookies = cookie.parse(context.req.headers.cookie)

    if (!cookies.cropperDotUser) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    return {
      props: {}
    }
  }