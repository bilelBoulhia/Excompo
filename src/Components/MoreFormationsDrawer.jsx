import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,

    DrawerCloseButton, Input, useDisclosure, Box, Card, Image, Flex, Heading, CardBody, Stack, Text, CardFooter, Grid,
} from '@chakra-ui/react'
import React, {useEffect, useState} from "react";
import ApplicationModal from "@/Components/ApplicationModal.jsx";
import useFetchNewFormation from "@/Effect Hooks/useFetchNewFormation.jsx";
import useFetchAllFormation from "@/Effect Hooks/useFetchAllformations.jsx";





export default function MoreFormationsDrawer(){

    const [FCard, setFCard] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await useFetchAllFormation()
            setFCard(fetchedEvents);
        };
        fetchEvents();
    }, []);

    return (
        <>
            <Button mt={5} w='10em' display='block' ml='auto' mr='auto' borderRadius='17px' bg='#3CAC2A' onClick={onOpen} color='white'>
                see more
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                size='2xl'
                onClose={onClose}
                finalFocusRef={btnRef}
                
            >
                <DrawerOverlay />

                {/*overflowY="auto"*/}
                <DrawerContent
                   
            
                    style={{
                        background: '#B4A3FF'
                    }}
                    
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
                    <DrawerCloseButton zIndex='155' />

                    <Grid templateColumns="repeat(3, 1fr)" alignContent='center' justifyContent='center'  >
                        {FCard.map((card, index) => (
                            <Card
                                
                             
                                key={index}
                                w={{
                                    base: '14em',
                                    sm: '14em',
                                    md: '14em',
                                    lg: '14em',
                                    xl: '14em',
                                    '2xl': '14em',
                                }}
                                borderRadius="20px"
                                borderWidth="1px"
                                borderColor="gray.300"
                            >
                                <Box
                                    bgColor="#eae1f3"
                                    borderTopRadius="20px"
                                    h="140px"
                                    position="relative"
                                >
                                    <Image
                                        src={card.FormationTutImage}
                                        alt="Project Image"
                                        boxSize="120px"
                                        position="absolute"
                                        top="2em"
                                        w='100%'
                                    />
                                    <Flex
                                        bgColor="#DEC8FF"
                                        borderRadius="12px"
                                        position="absolute"
                                        top="21px"
                                        left="15px"
                                        alignItems="center"
                                        justifyContent="center"
                                        px="1"
                                        py="3"
                                    >
                                        <Heading
                                        
                                           
                                            fontWeight="bold"
                                            fontSize='8px'
                                            textTransform="uppercase"
                                            color="#7D35C2"
                                            letterSpacing="-0.01em"
                                        >
                                            {card.FormationTutPosition}
                                        </Heading>
                                    </Flex>
                                </Box>
                                <CardBody>
                                    <Stack spacing="3" textAlign='left'>
                                        <Heading fontSize='8px' fontWeight="bold" textTransform="uppercase" color="purple.600">
                                            {card.eventname}
                                        </Heading>
                                        <Text  fontSize='8px' color="gray.600">
                                            Et blandit non sit ac egestas risus non.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter justifyContent="space-between" px="6" py="2">
                                    <Button w='40%' borderRadius='17px' mr={5} bg='black'  fontSize='12px' color='white'>Free</Button>
                                    <Button w='40%' borderRadius='17px' bg='#3CAC2A' color='white'  fontSize='12px' onClick={openModal}>Inscrier</Button>
                                    <ApplicationModal
                                        isOpen={isModalOpen}
                                        onClose={closeModal}
                                        FormationId={card.FormationId}
                                    />
                                </CardFooter>
                            </Card>
                        ))}
                    </Grid>
                </DrawerContent>
            </Drawer>
        </>
    );
}