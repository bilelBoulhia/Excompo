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
import useFetchEvents from "@/Effect Hooks/useFetchEvents.jsx";
import ApplicationModal from "@/Components/ApplicationModal.jsx";

export default function EventsCarousel() {
    const [events, setEvents] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1600px',
            numVisible: 4,
            numScroll: 1
        },


        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1200px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '992px',
            numVisible: 2,
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
            const fetchedEvents = await useFetchEvents()
            setEvents(fetchedEvents);
        };
        fetchEvents();
    }, []);

    const eventTemplate = (event) => {
        return (
            <>
            
            <Card
                maxW={{
                    base: '18em',
                    sm: '19em',
                    md: '20em',
                    lg: '20em',
                    xl: '20em',
                    '2xl': '21em'
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
                        src={event.formationTutImage}
                        alt="Event Image"
                        boxSize="250px"
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
                            as="h3"
                            size="sm"
                            fontWeight="bold"
                            textTransform="uppercase"
                            color="#7D35C2"
                            letterSpacing="-0.01em"
                        >
                            {event.FormationTutPosition}
                        </Heading>
                    </Flex>
                </Box>
                <CardBody>
                    <Stack spacing="4" textAlign="left">
                        <Heading
                            size="md"
                            fontWeight="bold"
                            textTransform="uppercase"
                            color="purple.600"
                        >
                            {event.eventname}
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
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

                <ApplicationModal isOpen={isOpen} onClose={onClose} FormationId={event.FormationId} />
            </>
        );
    };

    return (
      

            <Box
                py={16}
                alignContent="center"
                justifyContent="center"
                className="card"
                style={{ background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)' }}
            >
                <Box textAlign="center" p="0px 30px 0px 30px">
                    <Heading
                        fontSize={{
                            base: 'sm',
                            sm: '20px',
                            md: '25px',
                            lg: '20px',
                            xl: '20px',
                            '2xl': '20px'
                        }}
                        color="#353238"
                        fontWeight="medium"
                    >
                        Testimonials
                    </Heading>
                    <Heading
                        mt={5}
                        fontSize={{
                            base: 'mg',
                            sm: '22px',
                            md: '28px',
                            lg: '29px',
                            xl: '20px',
                            '2xl': '25px'
                        }}
                        fontWeight="bold"
                        color="#353238"
                    >
                        What does our customers say?
                    </Heading>
                </Box>
                <Carousel
                    style={{
                        marginTop: '3em'
                    }}
                    value={events}
                    numVisible={4}
                    numScroll={3}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={eventTemplate}
                    circular
                />
            </Box>
            
            
 
        
        
        
 
    );
}