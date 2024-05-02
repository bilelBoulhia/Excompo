import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Grid,
    Heading,
    HStack,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import React, {useState} from 'react';
import {

    CardFooter,

} from '@chakra-ui/react';
import balddude from '@/assets/balddude.png'
import beardude from '@/assets/breaddude.png'
import woman from '@/assets/woman.png'
import ApplicationModal from "@/Components/ApplicationModal.jsx";
import MoreEventsDrawer from "@/Components/MoreEventsDrawer.jsx";
export  default function FormationCards() {
    
   const FCard = [

       {
           Event:'drama',
           JobTitle: 'PROJECT MANAGEMENT',
           img: woman,
           name:'Maya Ait Aissi'
           
       },
       {
           Event:'acting',
           JobTitle: 'PUBLIC SPEAKING',
           img: beardude,
           name:'Toufik KOURtAA'

       },

       {
          Event:'Dancing',
            JobTitle: 'MARKETING DIGITAL',
           img: balddude, 
           name:'Youcef Boukhalfa'

       }
        
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


   
    
    
    return(


        <Box
            style={{
                background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)'
            }}
            py={16}
        >
            <Box textAlign="center" p='0px 30px 0px 30px' >
                <Heading size="md" color='#353238' fontFamily="DM sans" fontWeight={500}>
                    Most popular
                </Heading>
                <Heading size="lg" color='#353238' fontWeight={500}>
                    Our Workshop
                </Heading>

                <Stack
                    direction={['column','column','column', 'column', 'row']}

                    
                    spacing='9em'
                    align="center"
                    mt='5em'
                >
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
                                    src={card.img}
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
                                        {card.JobTitle}
                                    </Heading>
                                </Flex>
                              
                            </Box>
                            <CardBody>
                                <Stack spacing="4" textAlign='left'>
                                    <Heading size="md" fontWeight="bold" textTransform="uppercase" color="purple.600">
                                       {card.Event}
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
                                    Formation={card.Event}
                                />
                            </CardFooter>
                        </Card>
                    ))}

               
                </Stack>
               <MoreEventsDrawer></MoreEventsDrawer>
            </Box>
        </Box>
        
        
        
        
    )
    
    
    
}


