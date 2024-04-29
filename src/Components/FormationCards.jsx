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
import balddude from '@/assets/balddude.png'
import beardude from '@/assets/breaddude.png'
import woman from '@/assets/woman.png'
export  default function FormationCards() {
    
   const FCard = [

       {
           JobTitle: 'PROJECT MANAGEMENT',
           img: woman,
           name:'Maya Ait Aissi'
           
       },
       {
           JobTitle: 'PUBLIC SPEAKING',
           img: beardude,
           name:'Toufik KOURtAA'

       },

       {
            JobTitle: 'MARKETING DIGITAL',
           img: balddude, 
           name:'Youcef Boukhalfa'

       }
        
    ]
    
    
    return(


        <Box
            style={{
                background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)'
            }}
            py={16}
        >
            <Box textAlign="center" p='0px 30px 0px 30px' >
                <Heading size="md" fontFamily="DM sans" fontWeight={500}>
                    Most popular
                </Heading>
                <Heading size="lg" fontWeight={500}>
                    Our Workshop
                </Heading>

                <Grid
                    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={6}
                    justifyContent="center"
                    mt='5em'
                >
                    {FCard.map((card, index) => (
                        <Card key={index} borderRadius='25px' maxh='em'>
                            <CardHeader bg='#EAE1F3' mt='0' borderRadius='25px 25px 0 0'>
                                <Flex spacing="2">
                                    <Flex flex="1" alignItems="center" flexWrap="wrap">
                                        <Box bg='#DEC8FF' borderRadius='5px' maxW='14em' py={5} px={5}>
                                            <Heading fontWeight='semibold' color='#7D35C2' fontFamily='arial' fontSize='2xl'>{card.JobTitle}</Heading>
                                        </Box>
                                        <Image src={card.img} objectFit='contain'></Image>
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Heading textAlign='left' minH='2em' color='#7D35C2'>{card.JobTitle}</Heading>
                                <Text textAlign='left' mt='2'>Et blandit non sit ac egestas risus non.</Text>
                                <HStack mt='2' mb='3em'>
                                    <Button w='13em' borderRadius='17px' bg='black' color='white'>Free</Button>
                                    <Button w='13em' borderRadius='17px' bg='#3CAC2A' color='white'>Inscrier</Button>
                                </HStack>
                            </CardBody>
                        </Card>
                    ))}
                </Grid>
            </Box>
        </Box>
        
        
        
        
    )
    
    
    
}