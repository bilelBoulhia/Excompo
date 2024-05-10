import {useEffect, useRef, useState} from "react";
import {Icon} from "@chakra-ui/icons";
import {HamburgerIcon} from '@chakra-ui/icons'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Stack, useDisclosure, Box, Heading, Highlight,
} from '@chakra-ui/react'

export  default function NavBar(){
    
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();
    

    
    return(
        
        <>
            <Box  as="nav" display="flex" flexDirection="column" padding={0} >
            <Icon as={HamburgerIcon} ref={btnRef} onClick={onOpen} />
            </Box>

           <Drawer placement='left' isOpen={isOpen} finalFocusRef={btnRef} onClose={onClose}>


               <DrawerOverlay />
               <DrawerContent>
                   <DrawerCloseButton _hover={{borderColor:'none'}}/>
                   

                   <DrawerBody>
                     
                       <Stack mt='5em' spacing='3em'>
                           
                      

                          <Heading size='md'>
                              <Link to="/Admin666/SubmissionManagement">Submission management </Link>
                          </Heading>
                     
                        
                           <Heading size='md'>
                               <Link to="/Admin666/FormationManagement">Formation management </Link>
                           </Heading>

                           <Heading size='md'>
                               <Link to="/Admin666/ReviewManagement">Review management </Link>
                           </Heading>

                           <Heading size='md'>
                               <Link to="/Admin666/EventManagement">Event management </Link>
                           </Heading>
                           
                           
                       </Stack>
                       
                       
                   </DrawerBody>

                 
               </DrawerContent>
               
           </Drawer>
        
        </>
       
        
        
        
    )
    
    
    
    
    
    
    
    
    
    
    
}