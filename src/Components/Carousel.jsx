﻿import React from 'react';
import {Box, Grid, HStack, IconButton, Image, Text, useBreakpointValue} from '@chakra-ui/react';
import mr from '@/assets/marines.png'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

// Here we have used react-icons package for the icons
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import bg1 from '@/assets/bg1.png'
import {SocialIcon} from "react-social-icons";
// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel() {

    const [slider, setSlider] = React.useState();

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    const carouselHeight = useBreakpointValue({ base: '200px', md: '400px', lg: '720px' });
    // These are the images used in the slide
    const cards = [
        {text:'E-Comexpo Event' ,image : bg1},
        {text:'test' ,image: mr}
    ];

    return (
        
        
        <Box
            position={'relative'}
         
            width={'full'}
            
           
            
           >
          
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            <ChevronLeftIcon
                aria-label="left-arrow"

                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>

            </ChevronLeftIcon>

            <ChevronRightIcon
                aria-label="right-arrow"

                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>

            </ChevronRightIcon>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((cards, index) => (
                    <Box
                        key={index}
                        height='2xl'

                        position="relative"


                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={cards.image}                    >


                      

                    </Box>

                    

                ))}
            </Slider>

        
        </Box>
        
 
    );
}
