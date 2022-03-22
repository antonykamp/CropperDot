import { Flex } from '@chakra-ui/react'
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
                            <Image key={file} width="128" height="128" src={completePath}></Image>
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
  