import {Box, Flex, Stack, Text, Container, useBreakpointValue, Heading, Button, Image} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchSpecificEvent } from '@/Effect Hooks/useFetchSpecificEvent.jsx';

export default function MoreAboutEvents() {
    const { eventId } = useParams();
    const [event, setEvent] = useState({});
    const [eventPics, setEventPics] = useState([]);
    const [guest, setGuest] = useState([]);
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const fetchEvent = async () => {
            const data = await useFetchSpecificEvent(eventId);
            setEvent(data || {});
            setEventPics(data.eventpics?.$values || []);
            setSponsors(data.sponsors?.$values || []);
            setGuest(data.guests?.$values || []);
        };
        fetchEvent();
    }, [eventId]);

    const groupSize = useBreakpointValue({ base: 1, sm: 1, md: 1, lg: 3, xl: 4 });
    const textSize = useBreakpointValue({ base: "sm", sm: "md", md: "lg", lg: "xl" });
    const boxSize = useBreakpointValue({ base: "250px", sm: "300px", md: "400px", lg: "250px" });

    const groupImages = (images, groupSize) => {
        const groups = [];
        for (let i = 0; i < images.length; i += groupSize) {
            groups.push(images.slice(i, i + groupSize));
        }
        return groups;
    };

    console.log(guest)
    console.log(sponsors)
    const groupedImages = groupImages(eventPics, groupSize);

    return (
        <>
            <Box
                width="100%"
                h="500px"
                position="relative"
                backgroundImage={`url(${event.eventpic})`}
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="md"
                boxShadow="lg"
                mb={8}
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    backgroundColor="rgba(0, 0, 0, 0.6)"
                    borderRadius="md"
                    opacity={0}
                    transition="opacity 0.3s"
                    _hover={{ opacity: 1 }}
                >
                    <Container
                        h="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Heading
                            color="white"
                            textAlign="center"
                            p={5}
                            transition="color 0.3s"
                            _hover={{ color: "#B4A3FF" }}
                        >
                            {event.eventname}
                        </Heading>
                    </Container>
                </Box>
            </Box>


                <Box
                    mb={2}

                    style={{ background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)' }}
                    p={5}
                >
                    <Heading size="lg" mb={5} textAlign="center">Event Gallery</Heading>
                    <Carousel showThumbs={false} autoPlay infiniteLoop>
                        {groupedImages.map((group, index) => (
                            <Flex key={index} justify="center">
                                {group.map((image, idx) => (
                                    <Box key={idx} p={2}>
                                        <Box
                                            bgImage={`url(${image.eventpicname})`}
                                            boxSize={boxSize}
                                            backgroundSize="cover"
                                            backgroundPosition="center"
                                            borderRadius="md"
                                            boxShadow="md"
                                        />
                                    </Box>
                                ))}
                            </Flex>
                        ))}
                    </Carousel>
                </Box>

            <Container maxW="6xl" >
                <Stack
                    direction="column"
                    align="center"
                    p={5}
                    minH="50vh"
                    // boxShadow="lg"
                    // borderRadius="md"
                    //
                    // backdropFilter="blur(10px)"
                  
                 
                    mb={8}
                >
                    <Text fontSize={textSize} fontWeight="bold" mb={3}>
                        Event Description
                    </Text>
                    <Text textAlign="center" px={5} >
                        {event.eventDescription}
                    </Text>
                </Stack>
            </Container>
            
            <Box
                boxShadow="xl"
                borderRadius="md"

                backdropFilter="blur(10px)"
                
                style={{ background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)' }}>
                <Box mb={8} >
                    <Heading size="lg" mb={5} textAlign="center">Guest Speakers</Heading>
                    <Flex wrap="wrap" justify="center">
                        {guest.map((g, index) => (
                            <Stack  p={5} m={2} textAlign='center'>
                                <Image key={index}  boxShadow="lg" borderRadius="md" boxSize='100px' width='120px' src={g.guestpic}/>
                                <Text   fontWeight="bold">{g.guestname}</Text>
                            </Stack>
                        ))}
                    </Flex>
                </Box>

                <Box mb={8}>
                    <Heading size="lg" mb={5} textAlign="center">Sponsors</Heading>
                    <Flex wrap="wrap" justify="center">
                        {sponsors.map((s, index) => (
                            <Stack  p={5} m={2} textAlign='center' >
                                <Image key={index}  boxShadow="lg" borderRadius="md" boxSize='50px' src={s.sponsorpic}/>
                                <Text   fontWeight="bold">{s.sponsorname}</Text>
                            </Stack>
                        ))}
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
