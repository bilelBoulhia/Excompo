import {Box, Button, Flex, Heading, HStack, Image, Input, Stack, Text, Textarea} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

import {useRef, useState} from "react";
import play from '@/assets/play.png';
import pause from '@/assets/pause.png';
export  default function GetInTouch() {



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
                <Heading  fontSize={{base: 'sm', // 0px
                    sm: '20px', // ~480px. em is a relative unit and is dependant on the font size.
                    md: '25px', // ~768px
                    lg: '20px', // ~992px
                    xl: '20px', // ~1280px
                    '2xl': '20px', // ~1536px

                }}   color='black' fontWeight='medium'>
                    Get In Touch 
                </Heading>
                <Heading   mt={5} fontSize={{base: 'mg', // 0px
                    sm: '22px', // ~480px. em is a relative unit and is dependant on the font size.
                    md: '28px', // ~768px
                    lg: '29px', // ~992px
                    xl: '20px', // ~1280px
                    '2xl': '25px', // ~1536px

                }}  fontWeight='bold' color='black'>
                    Leave a review
                </Heading>
            

            </Box>

            
            <Stack       maxW='30em'>
                <Text

                    p={3}
                    mt='5em'
                     
                    textAlign= 'center'
 
                    fontSize={{base: '13px', // 0px
                        sm: '15px', // ~480px. em is a relative unit and is dependant on the font size.
                        md: '10px', // ~768px
                        lg: '15px', // ~992px
                        xl: '10px', // ~1280px
                        '2xl': '12px', // ~1536px

                    }}   color='#3B5266'
                >
                  Want to tell your experience ? let us imporove our work by leave a raview :) thank you.
                </Text>



                <Stack mt={5} p='5' mb='4em' alignItems='center'>
                    <Input placeholder='Your Name' />
                    <Textarea   
                                resize="vertical"
                                rows={8}
                                placeholder='Your Review' />
                    <Button borderRadius='20' w='10em' bg='black' color='white' >Submit</Button>

                </Stack>
                
                
            </Stack>
            
            
          </Stack>
        
        


    );


}