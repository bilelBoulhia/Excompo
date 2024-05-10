import React, { useState, useEffect } from 'react';


import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    IconButton,
    Image,
    Stack,
    Text,
    useBreakpointValue, useDisclosure
} from '@chakra-ui/react';
import { Carousel } from 'primereact/carousel';
import { StarIcon } from '@chakra-ui/icons';
import useFetchNewFormation from "@/Effect Hooks/useFetchNewFormation.jsx";
import ApplicationModal from "@/Components/ApplicationModal.jsx";
import MoreFormationsDrawer from "@/Components/MoreFormationsDrawer.jsx";
import SeemoreFormations from "@/sub pages/seemoreFormations.jsx";
import {Link} from "react-router-dom";

export default function FormationCarousel() {
    const [events, setEvents] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1600px',
            numVisible: 3,
            numScroll: 1
        },


        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1200px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '992px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {               
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1    
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '320px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await useFetchNewFormation()
            setEvents(fetchedEvents);
        };
        fetchEvents();
    }, []);

    const eventTemplate = (event) => {
        return (
            <>
            
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <Card
                        maxW={{
                            base: '18em',
                            sm: '22em',
                            md: '22em',
                            lg: '22em',
                            xl: '23em',
                            '2xl': '23em'
                        }}
                        w={{
                            base: '18em',
                            sm: '22em',
                            md: '22em',
                            lg: '22em',
                            xl: '23em',
                            '2xl': '23em'
                        }}

                        minW={{
                            base: '18em',
                            sm: '22em',
                            md: '22em',
                            lg: '22em',
                            xl: '23em',
                            '2xl': '23em'
                        }}
                        borderRadius="20px"
                        borderWidth="1px"
                        alignContent="center"
                        borderColor="gray.300"
                      
                    >
                        <Box
                            bgColor="#eae1f3"
                            borderTopRadius="20px"
                            h="273px"
                            position="relative"
                        >
                            <Image
                                src={event.FormationTutImage}
                                alt="Event Image"
                                boxSize="16em"
                                position="absolute"
                                top="2em"
                                w="100%"
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
                                  
                                    size={{
                                        base: '15em',
                                        sm: '22em',
                                        md: '22em',
                                        lg: '22em',
                                        xl: '23em',
                                        '2xl': '23em'


                                    }}
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    color="#7D35C2"
                                    letterSpacing="-0.01em"
                                >
                                    {event.FormationTutPosition}
                                </Heading>
                            </Flex>
                        </Box>
                        <CardBody  >
                            <Stack spacing="4" textAlign="left" h="100%"   overflow="auto">
                                <Heading
                                    size={{
                                        base: '15em',
                                        sm: '22em',
                                        md: '22em',
                                        lg: '22em',
                                        xl: '23em',
                                        '2xl': '23em'
                                        
                                        
                                    }}
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    color="purple.600"
                                >
                                    {event.eventname}
                                </Heading>
                                
                      
                                    <Text

                                        overflow="auto" // Add overflow: auto to the Text
                                        w="100%"
                                        h='20px'
                                        fontSize={{

                                            base: '12px',
                                            sm: '13px',
                                            md: '14px',
                                            lg: '15x',
                                            xl: '15px',
                                            '2xl': '16px'





                                        }} color="gray.600">
                                        {event.FormationDes}
                                    </Text>
                                    
                             
                               
                            </Stack>
                        </CardBody>
                        <CardFooter justifyContent="space-between" px="8" py="4">
                            <Button w="50%" borderRadius="17px" mr={5} bg="black" color="white">
                                Free
                            </Button>
                            <Button w="50%" borderRadius="17px" bg="#3CAC2A" color="white" onClick={onOpen}>
                                Inscrier
                            </Button>
                        </CardFooter>
                    </Card>

                
                    
                </div>

                <ApplicationModal isOpen={isOpen} onClose={onClose} FormationId={event.FormationId} />
            </>
        );
    };

    return (
      

            <Box
                py={16}
           
                className="card"
                style={{ background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)' }}
            >
                <Box textAlign="center" p="0px 30px 0px 30px">
                    <Heading
                        fontSize={{
                            base: '15px',
                            sm: '20px',
                            md: '25px',
                            lg: '20px',
                            xl: '20px',
                            '2xl': '20px'
                        }}
                        color="#353238"
                        fontWeight="medium"
                        
                    >
                        Most popular
                    </Heading>
                    <Heading
                        mt={5}
                        fontSize={{
                            base: '18px',
                            sm: '22px',
                            md: '28px',
                            lg: '29px',
                            xl: '20px',
                            '2xl': '25px'
                        }}
                        fontWeight="bold"
                        color="#353238"
                    >
                       Our Work shop
                    </Heading>
                </Box>
                <Carousel
                    aria-colspan={5}

                    style={{
                        marginTop: '3em',
                    

                    }}
                    value={events}
                    numVisible={4}
                    numScroll={3}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={eventTemplate}
                    circular
              />


                <Link to="/seemoreFormations">
                    <Button mt={5} w='10em' display='block' ml='auto' mr='auto' borderRadius='17px' bg='#3CAC2A' color='white'>
                        see more
                    </Button>
                </Link>
        
            </Box>


    );
}