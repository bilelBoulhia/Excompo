import {Flex, Image, Stack} from "@chakra-ui/react";
import gp1 from '@/assets/gp1.png';
import gp2 from '@/assets/gp2.jpg';
import gp3 from '@/assets/gp3.jpg';
import gp4 from '@/assets/gp4.jpg';

export default  function GroupPictures(){
    // const numImages = 3; // Assuming 4 images
    // const maxWidth = 1000; // Maximum width of the website
    // const imageWidth = `${maxWidth / numImages}px`;
    const images =[
    {i: gp1} , {i: gp2},{i: gp3},{i: gp4}
        
    ]
    
    
    return (

        <div style={{position: "relative", overflow: "hidden"}}>
            <div
                style={{
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `url(${gp1})`,
                    filter: "blur(4px)",
                    opacity: "0.8", // Adjust the opacity as needed
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backdropFilter: "blur(10px) brightness(0.7)", // Apply the frosted glass effect
                    overflow: "hidden", // Prevents the backdrop filter from leaking outside
                }}
            />

            <Flex
                direction={["column", "column", "column", "row"]}
                align="center"
                justify="center"
                wrap="nowrap"
                style={{zIndex: 1}}
                h='100%'
            >

                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.i}
                        boxSize={[
                            "356px", // For extra small screens
                            "356px", // For small screens
                            "356px", // For medium screens
                            "240px", // For large screens
                            "300px" // For extra large screens and above
                        ]}
                        objectFit="cover"


                    />
                ))}


            </Flex>

        </div>

    )


}