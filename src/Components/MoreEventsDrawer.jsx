import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,

    DrawerCloseButton, Input, useDisclosure, Box,
} from '@chakra-ui/react'
import React from "react";





export default function MoreEventsDrawer(){


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <>
            <Button mt={5} w='10em'  borderRadius='17px' bg='#3CAC2A' onClick={onOpen} color='white'>see more</Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
               size='xl'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    style={{
                        background: '#B4A3FF'
                    }}
                    overflowY="auto"
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#7D35C2',
                            borderRadius: '24px',
                        },
                    }}

                   
                >

                 
                    <DrawerCloseButton />
                  

                  
           
                    
                </DrawerContent>
            </Drawer>
        </>
        
        
    );


}