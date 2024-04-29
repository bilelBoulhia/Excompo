﻿import {Box, Heading, Image, Stack, Button, Text, WrapItem, HStack} from "@chakra-ui/react";
import b1 from '@/assets/b1.png'
import b2 from '@/assets/b2.png'
import b3 from '@/assets/b3.png'
import b4 from '@/assets/b4.png'
import b5 from '@/assets/b5.png'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import {useEffect, useState} from "react";
import president from '@/assets/president.png'
import RadialMenu from "@/Components/RadialMenu.jsx";


export default function MainService(){

    const data =[

        {img:b1 , des:'IT Manger' },
        {img:b2 , des:'Secruteria' },
        {img:b3 , des:'RE MANAGER' },
        {img:b4 , des:'IT Manger' },
        {img:b5 , des:'IA manager' },
        

    ]



    return(
        
        
        <Box>
      
            <Box textAlign="center" p='0px 30px 0px 30px'>
                <Heading size="md" fontFamily='poppins'  color='#5B278D' fontWeight='semibald'>
                    Main Service
                </Heading>
                <Heading size="lg" fontWeight='semibold' fontFamily='poppins' color='#5B278D'>
                    Choose your favorite favor
                </Heading>

                <Stack spacing='2em'
                       
                       
                       
                       
                       direction={['column','column', 'column', 'row']} align="center" justify="center" mt={10}>

                    {data.map((d ,index)=>(


                        <Box     key={index} textAlign='center'  display="flex" flexDirection="column" alignItems="center">
                            <Box
                                
                                textAlign='center'
                                rounded="full"
                                borderWidth={1}
                               
                               
                             
                                borderColor="#5B278D"
                                width={{ base: '40px', md: '80px' }}
                                height={{ base: '40px', md: '80px' }}
                            >
                                <Image
                                    src={d.img}
                                    boxSize={{ base: '40px', md: '80px' }}
                                    objectFit="cover"
                                    rounded="full"
                                />
                            </Box>

                            <Text color='#7D35C2'  >{d.des}</Text>

                        </Box>
                      
                        
                    
                    
                    ))}
                    
                    
                </Stack>


               

                  
                   <RadialMenu  />


            

                
                
                
            </Box>


        </Box>


    )


}

