import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import ApplicationModal from "@/Components/ApplicationModal.jsx";

const CardTemplate = ({ card, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Card
            key={index}
            w={{
                base: '15rem', // Smaller screens
                md: '16rem', // Medium screens
                lg: '18rem', // Large screens
                xl: '19rem', // Extra large screens
            }}
            borderRadius="20px"
            borderWidth="1px"
            borderColor="gray.300"
        >
            <Box
                bgColor="#eae1f3"
                borderTopRadius="20px"
                h={{
                    base: '160px', // Smaller screens
                    md: '180px', // Medium screens
                    lg: '200px', // Large screens
                    xl: '220px', // Extra large screens
                }}
                position="relative"
            >
                <Image
                    src={card.formationTutImage}
                    alt="Project Image"
                   
                    position="absolute"
               
                    top="2em"
                    w='100%'
                    h='90%'
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
                        fontSize={{
                            base: '12px', 
                            md: '12px', 
                            lg: '14px', 
                            xl: '16px', 
                        }}
                        textTransform="uppercase"
                        color="#7D35C2"
                        letterSpacing="-0.01em"
                        p={0.5}
                    >
                        {card.formationTutPosition}
                    </Heading>
                </Flex>
            </Box>
            <CardBody>
                <Stack spacing="3" textAlign='left'>
                    <Heading
                        fontSize={{
                            base: '12px', 
                            md: '15px', 
                            lg: '17px', 
                            xl: '19px', 
                        }}
                        fontWeight="bold"
                        textTransform="uppercase"
                        color="purple.600"
                    >
                        {card.eventname}
                    </Heading>
                    <Text
                        fontSize={{
                            base: '10px', 
                            md: '12px', 
                            lg: '14px', 
                            xl: '16px', 
                        }}
                        color="gray.600"
                    >
                        {card.formationDes}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter justifyContent="space-between" px="6" py="2">
                <Button
                    w={{
                        base: '40%',
                        md: '45%', 
                        xl: '40%',
                    }}
                    borderRadius='17px'
                    mr={5}
                    bg='black'
                    fontSize={{
                        base: '14px', 
                        md: '16px', 
                        lg: '18px', 
                        xl: '18px', 
                    }}
                    color='white'
                >
                    Free
                </Button>
                <Button
                    w={{
                        base: '40%',
                        md: '45%',
                        lg: '48%', 
                        xl: '40%', 
                    }}
                    borderRadius='17px'
                    bg='#3CAC2A'
                    color='white'
                    fontSize={{
                        base: '14px', 
                        md: '16px', 
                        lg: '18px', 
                        xl: '16px', 
                    }}
                    onClick={openModal}
                >
                    Inscrier
                </Button>
                <ApplicationModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    FormationId={card.formationId}
                />
            </CardFooter>
        </Card>
            
            </div>
    );
};

export default CardTemplate;