import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import Cookies from "js-cookie"
import cookie from "cookie"
import { useState } from "react";

const Login = () => {

    return (
        <Button onClick={()=> Cookies.set("cropperDotUser", "user")}>
            Get Certificate
        </Button>
    )
}

export async function getServerSideProps(context) {
    const cookies = cookie.parse(context.req.headers.cookie)

    if (cookies.cropperDotUser) {
      return {
        redirect: {
          destination: '/',
        },
      }
    }

    return {
      props: {}
    }
} 

export default Login