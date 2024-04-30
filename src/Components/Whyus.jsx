import {Box, Flex, Heading, Image, Stack} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

import React, {useRef, useState} from "react";
import play from '@/assets/play.png';
import pause from '@/assets/pause.png';
export  default function Whyus() {
 


       
    return(
        <Stack  bg="#EAE1F3"   justifyContent="center"
                 alignItems="center"  mt={10}>

            <Box textAlign="center" p='0px 30px 0px 30px'>
                <Heading  fontSize={{base: 'sm', // 0px
                    sm: '20px', // ~480px. em is a relative unit and is dependant on the font size.
                    md: '25px', // ~768px
                    lg: '20px', // ~992px
                    xl: '20px', // ~1280px
                    '2xl': '20px', // ~1536px

                }}   color='black' fontWeight='medium'>
                    The reasons
                </Heading>
                <Heading   mt={5} fontSize={{base: 'mg', // 0px
                    sm: '22px', // ~480px. em is a relative unit and is dependant on the font size.
                    md: '28px', // ~768px
                    lg: '29px', // ~992px
                    xl: '20px', // ~1280px
                    '2xl': '25px', // ~1536px

                }}  fontWeight='bold' color='black'>
                  Why choose us ?
                </Heading>
     
             </Box>


            <Flex
               

                h='30em'
                w='75%'
              
                boxShadow="0px 5.36px 16.08px 0px rgba(0, 0, 0, 0.2)"
                borderRadius='15'
                minH='350px'
                minW='250px'
                justifyContent="center"
                alignItems="center"
                position="relative"
            >

             
                    <iframe height='100%' width='100%' style={{borderRadius:'15px' ,}} src="https://www.youtube.com/embed/h6Lo1MQOeGE"
                           
                          
                            referrerPolicy="strict-origin-when-cross-origin"></iframe>

              
            </Flex>

        </Stack>


    )


}