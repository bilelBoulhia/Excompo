
import {Box, Grid, Heading, Highlight,Stack, HStack, IconButton, Image, Text, useBreakpointValue} from '@chakra-ui/react';
import img from '@/assets/Welcome.png'

export  default  function WelcomePage(){
    // size='3xl'
    
    return(
        <Box bg='#EAE1F3' >


            <Stack direction={['column','column', 'column', 'row']} align="center" justify="center" mt={1}>
                <Box   p='5em' maxW='40em'>

                    <Heading 


                             fontSize={{base: '28px', // 0px
                                 sm: '40px', // ~480px. em is a relative unit and is dependant on the font size.
                                 md: '50px', // ~768px
                                 lg: '60px', // ~992px
                                 xl: '70px', // ~1280px
                                 '2xl': '80px', // ~1536px

                             }}
                             
                             
                             
                             fontFamily='DM sans' fontWeight={500} color='#353238'>
                        Wecolome to

                    </Heading>

                    <Heading size='4xl' fontFamily='DM sans' fontWeight={500} color='#7D35C2'

                             fontSize={{base: '28px', // 0px
                                 sm: '38px', // ~480px. em is a relative unit and is dependant on the font size.
                                 md: '48px', // ~768px
                                 lg: '58px', // ~992px
                                 xl: '68px', // ~1280px
                                 '2xl': '78px', // ~1536px

                             }}
                   
                   
                   
                    >
                        The of Ideas !

                    </Heading>

                    <Text pt='3em' fontWeight='semibold'

                          fontSize={{base: '10px', // 0px
                              sm: '20px', // ~480px. em is a relative unit and is dependant on the font size.
                              md: '25px', // ~768px
                              lg: '25px', // ~992px
                              xl: '25px', // ~1280px
                              '2xl': '20px', // ~1536px

                          }}
                    
                    
                    
                    >
                        Welcome to the official website of House of Idea,
                        where passion meets discovery. As a leading scientific club at Economic University ,
                        we are dedicated to fostering curiosity, collaboration, and innovation in the
                        field of [Your Scientific Field].
                    </Text>

                   
                </Box>

                <Image src={img}>



                </Image>


            </Stack>
   
           
            
            
        </Box>
        
        
        
        
    )
    
    
}