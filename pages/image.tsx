import { Text, Flex, Container } from "@chakra-ui/react"
import Image from "next/image"
import { readdirSync } from "fs";
import { useRouter } from 'next/router'
import path from "path";
import Link from "next/link";

export default function Images({files}){
    const router = useRouter()
    const {fileindex}  = router.query 
    if(!fileindex)
        return <Text>Not Found</Text>
    const index = parseInt(fileindex as string)
    const file = files[index]
    const completePath = path.join(
        process.cwd(),
        "/images/",
        file
      );
    return (
        <Container centerContent>
        <Flex direction="row" alignItems="center">
            <Link href={{pathname: "image", query: {fileindex: index-1}}}>
            <a>last</a>
            </Link>
            <Flex direction="column" alignItems="center" padding="2rem">
                <Image height="1000px" width="1000px" src={completePath}></Image>
                <Text>{file}</Text>
            </Flex>
            <Link href={{pathname: "image", query: {fileindex: index+1}}}>
            <a>next</a>
            </Link>
        </Flex>
        </Container>
    )
}

export async function getStaticProps() {
    var files = readdirSync("./public/images")
    return {
      props: {files: files}
    }
  }
  