import { Text, Flex, Container, Button, Heading } from "@chakra-ui/react"
import { readdirSync } from "fs";
import { useRouter } from 'next/router'
import path from "path";
import Link from "next/link";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

export default function Images({files}){
    const router = useRouter()
    const {fileindex}  = router.query 
    const index = parseInt(fileindex as string)
    const file = files[index]
    if(!file)
        return <Text>Not Found</Text>
    const completePath = path.join(
        process.cwd(),
        "/images/",
        file
      );

    const cropperRef = useRef<HTMLImageElement>(null);

    const downloadCrop = async() => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        var link = document.createElement("a");
        link.download = file;
        link.href = cropper.getCroppedCanvas().toDataURL();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Container centerContent>
        <Flex direction="row" alignItems="center">
            <Link href={{pathname: "image", query: {fileindex: index-1}}}>
            <a><ArrowLeftIcon/></a>
            </Link>
            <Flex direction="column" alignItems="center" padding="2rem">
                <Heading padding="1rem">{file}</Heading>
                <Cropper
                    src={completePath}
                    style={{ height: 500, width: 500 }}
                    initialAspectRatio={1}
                    guides={true}
                    ref={cropperRef}
                />
                <Button margin="1rem" onClick={downloadCrop}>Download</Button>
            </Flex>
            <Link href={{pathname: "image", query: {fileindex: index+1}}}>
            <a><ArrowRightIcon/></a>
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
  