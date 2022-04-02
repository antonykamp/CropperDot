import { Flex, Text } from '@chakra-ui/react'
import { readdirSync } from "fs";
import Image from 'next/image';
import Link from "next/link";
import path from "path";

export default function App({ files }){
    return (
        <Flex direction="row" wrap="wrap">
        {files.map((file, index) => {
            const completePath = path.join(
                process.cwd(),
                "/images/",
                file
              );
            return (
                <Flex direction="column">
                    <Link href={{pathname: "image", query: {fileindex: index}}}>
                        <a>
                            <Image key={file} width="256" height="256" src={completePath}></Image>
                            <Text>{file}</Text>
                        </a>
                    </Link>
                </Flex>
            )
        })}
        </Flex>
    )
}

export async function getStaticProps() {
    var files = readdirSync("./public/images")
    return {
      props: {files: files}
    }
  }
  