
import {Box, Grid, Heading, Highlight,Stack, HStack, IconButton, Image, Text, useBreakpointValue} from '@chakra-ui/react';
import img from '@/assets/Welcome.png'

export  default  function WelcomePage(){
    // size='3xl'
    
    return(
        <Box style={{background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)'}} >


            <Stack direction={['column','column', 'column', 'row']} align="center" justify="center" mt={1} pb='7em'>
                <Box   p='3em' maxW='50em'>

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
                                 '2xl': '85px', // ~1536px

                             }}
                   
                   
                   
                    >
                        House of Ideas

                    </Heading>

                    <Text pt='3em' fontWeight='semibold'

                          fontSize={{base: '10px', // 0px
                              sm: '20px', // ~480px. em is a relative unit and is dependant on the font size.
                              md: '25px', // ~768px
                              lg: '25px', // ~992px
                              xl: '25px', // ~1280px
                              '2xl': '20px', // ~1536px

                          }}


                          color='#353238'
                    >
                        Welcome to House of ideas, your go-to destination for courses that cater to students, professionals, and lifelong learners alike. With our diverse selection of offerings, you can explore new interests, develop valuable skills, and achieve your learning goals
                    
                    
                    </Text>

                   
                </Box>

                <Image src={img}>



                </Image>


            </Stack>
   
           
            
            
        </Box>
        
        
        
        
    )
    
    
}