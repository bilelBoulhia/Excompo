import {Flex, Image, Stack} from "@chakra-ui/react";
import gp1 from '@/assets/gp1.png';
import gp2 from '@/assets/gp2.jpg';
import gp3 from '@/assets/gp3.jpg';
import gp4 from '@/assets/gp4.jpg';

export default  function GroupPictures(){
    const numImages = 3; // Assuming 4 images
    const maxWidth = 1150; // Maximum width of the website
    const imageWidth = `${maxWidth / numImages}px`;
    const images =[
    {i: gp1} , {i: gp2},{i: gp3},{i: gp4}
        
    ]
    
    
    return(

        <Flex
            direction={["column", "column", "column", "row"]}
            align="center"
            justify="center"
            wrap="nowrap"
           
        >
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.i}
                    boxSize="365px" 
                    objectFit="cover"
                    width={imageWidth}
                
     
                />
            ))}
        </Flex>
        
        
        
    )
    
    
    
    
}