import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,

    DrawerCloseButton, Input, useDisclosure, Box, Card, Image, Flex, Heading, CardBody, Stack, Text, CardFooter,
} from '@chakra-ui/react'
import React, {useEffect, useState} from "react";
import ApplicationModal from "@/Components/ApplicationModal.jsx";
import useFetchNewFormation from "@/Effect Hooks/useFetchNewFormation.jsx";





export default function MoreEventsDrawer(){

    const [FCard, setFCard] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await useFetchNewFormation()
            setFCard(fetchedEvents);
        };
        fetchEvents();
    }, []);

    return(
        <>
            <Button mt={5} w='10em' display='block' ml='auto' mr='auto'  borderRadius='17px' bg='#3CAC2A' onClick={onOpen} color='white'>see more</Button>
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



                    {FCard.map((card, index) => (
                    <Card


                        w={{base: '20em', // 0px
                            sm: '23em', // ~480px. em is a relative unit and is dependant on the font size.
                            md: '22em', // ~768px
                            lg: '26em', // ~992px
                            xl: '28em', // ~1280px
                            '2xl': '26em', // ~1536px//
                        }}
                        borderRadius="20px" borderWidth="1px"  alignContent='center'   borderColor="gray.300">
                        <Box


                            bgColor="#eae1f3"  borderTopRadius="20px" h="273px" position="relative">
                            <Image
                                src={card.FormationTutImage}
                                alt="Project Image"
                                boxSize="250px"
                                position="absolute"
                                top="2em"
                                w='100%'
                            />
                            <Flex
                                bgColor="#DEC8FF"
                                borderRadius="10px"
                                position="absolute"
                                top="21px"
                                left="15px"
                                alignItems="center"
                                justifyContent="center"
                                px="3"
                                py="5"
                            >
                                <Heading
                                    as="h3"

                                    size="sm"
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    color="#7D35C2"
                                    letterSpacing="-0.01em"
                                >
                                    {card.FormationTutPosition}
                                </Heading>
                            </Flex>

                        </Box>
                        <CardBody>
                            <Stack spacing="4" textAlign='left'>
                                <Heading size="md" fontWeight="bold" textTransform="uppercase" color="purple.600">
                                    {card.eventname}
                                </Heading>
                                <Text fontSize="sm" color="gray.600">
                                    Et blandit non sit ac egestas risus non.
                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter justifyContent="space-between"  px="8" py="4">
                            <Button w='50%' borderRadius='17px' mr={5} bg='black' color='white'>Free</Button>
                            <Button w='50%' borderRadius='17px' bg='#3CAC2A' color='white' onClick={openModal}>Inscrier</Button>
                            <ApplicationModal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                FormationId={card.FormationId}
                            />
                        </CardFooter>
                    </Card>

                    ))}
                    
                    
                    
                    
                    
                    
           
                    
                </DrawerContent>
            </Drawer>
        </>
        
        
    );


}