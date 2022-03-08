import { Flex, Heading, Link } from "@chakra-ui/react"

const header = () => {
    return (
        <Flex padding={"1rem"} backgroundColor={"gray"} textColor={"white"} justifyContent={"space-between"} alignItems={"end"}>
            <Heading><Link href="/"><a>CropperDot</a></Link></Heading>
            <Link><a>admin</a></Link>
        </Flex>
    )
}

export default header