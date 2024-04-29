
import {
    Box,
    Grid,
    Heading,
    Highlight,
    Stack,
    HStack,
    IconButton,
    Image,
    Text,
    useBreakpointValue,
    WrapItem, Avatar
} from '@chakra-ui/react';
import img from '@/assets/goodbye.png'
import twitter from "@/assets/twitter.png";
import f from "@/assets/facebook.png";
import t from "@/assets/tiktok.png";
import i from "@/assets/instagram.png";
import React from "react";

export  default  function Footer(){
    // size='3xl'

    return(
        <Box bg='#EAE1F3' >


            <Stack  textAlign="left" direction={['column','column', 'column', 'row']} align="center" justify="center" >
                <Box boxSize='320px'  p='5em'  >

                   <Text mb={5} color='#353945'>sweetdeli@gmail.com</Text>
                    <Text mb={5} color='#353945'>+1-2345-6789</Text>
                    <Text mb={5} color='#353945'>123 Ave, New York, USA</Text>
                    <HStack
                        mt={5}
                        p="2"
                        justifyContent="center"
                        spacing={8}
                    >
                   

                        <WrapItem>
                            <Avatar
                                boxSize='1em'
                                name='Kola Tioluwani'
                                src={twitter}
                            />{' '}
                        </WrapItem>

                        <WrapItem>
                            <Avatar
                                boxSize='1em'
                                name='Kola Tioluwani'
                                src={f}
                            />{' '}
                        </WrapItem>
                        <WrapItem>
                            <Avatar
                                boxSize='1em'
                                name='Kola Tioluwani'
                                src={t}
                            />{' '}
                        </WrapItem>
                        <WrapItem>
                            <Avatar
                                boxSize='1em'
                                name='Kola Tioluwani'
                                src={i}
                            />{' '}
                        </WrapItem>




                    </HStack>
                
                
                </Box>


                <Box boxSize='320px'  p='5em'>

                    <Text mb={5} color='#353945'>Auctor volutpat.</Text>
                    <Text mb={5} color='#353945'>Mi consequat.</Text>
                    <Text  mb={5} color='#353945'>Convallis porttitor.</Text>
               

                </Box>
                
                
                <Box boxSize='320px'  p='5em'>

                    <Text mb={5} color='#353945'>Auctor volutpat.</Text>
                    <Text mb={5} color='#353945'>Mi consequat.</Text>
                    <Text  mb={5} color='#353945'>Convallis porttitor.</Text>


                </Box>


                <Image mt={2} src={img}>



                </Image>


            </Stack>




        </Box>




    )


}