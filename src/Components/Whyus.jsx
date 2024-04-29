import {Box, Flex, Heading, Image, Stack} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

import {useRef, useState} from "react";
import play from '@/assets/play.png';
import pause from '@/assets/pause.png';
export  default function Whyus() {
 


        const [isPlaying, setIsPlaying] = useState(false);
        const videoRef = useRef(null);

        const handlePlayPause = () => {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        };
    return(
        <Stack   justifyContent="center"
                 alignItems="center"  mt={10}>

            <Box textAlign="center" p='0px 30px 0px 30px'>
                <Heading    fontSize={{base: 'sm', // 0px
                    sm: '20px', // ~480px. em is a relative unit and is dependant on the font size.
                    md: '25px', // ~768px
                    lg: '27x', // ~992px
                    xl: '30px', // ~1280px
                    '2xl': '20px', // ~1536px

                }}   color='black' fontWeight='semibald'>
                    The reasons
                </Heading>
                <Heading   mt={2} fontSize={{base: 'mg', // 0px
                    sm: '22px', // ~480px. em is a relative unit and is dependant on the font size.
                    md: '28px', // ~768px
                    lg: '29px', // ~992px
                    xl: '33px', // ~1280px
                    '2xl': '25px', // ~1536px

                }}  fontFamily='poppins' color='black'>
                    Why Choose Us?
                </Heading>
     
             </Box>


            <Flex
                bg="#EAE1F3" 

                h='25em'
                w='75%'
              
                boxShadow="0px 5.36px 16.08px 0px rgba(0, 0, 0, 0.2)"
                borderRadius='15'
                minH='350px'
                minW='250px'
                justifyContent="center"
                alignItems="center"
                position="relative"
            >
                <video
                    ref={videoRef}
                    width="100%"
              
                    height="100%"
                    controls={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    
                
                </video>
                <Box
                    as="button"
                    position="absolute"
                    bg="#2367EC"
                    borderRadius="full"
                    padding="4"
                    onClick={handlePlayPause}
                    cursor="pointer"
                    display={isPlaying ? 'none' : 'flex'}
                >
                    <Image src={isPlaying ?  pause : play} boxSize="6" color="gray.800" />
                </Box>
            </Flex>

        </Stack>


    )


}