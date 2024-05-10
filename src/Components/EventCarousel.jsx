import React from 'react';
import {Box, Grid, HStack, IconButton, Image, Text, useBreakpointValue} from '@chakra-ui/react';
import mr from '@/assets/marines.png'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

// Here we have used react-icons package for the icons
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'
// And react-slick as our EventCarousel Lib
import Slider from 'react-slick';
import bg1 from '@/assets/bg1.png'
import {SocialIcon} from "react-social-icons";
import gp1 from "@/assets/gp1.png";
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

export default function EventCarousel() {

    const [slider, setSlider] = React.useState();

 
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    const carouselHeight = useBreakpointValue({ base: '200px', md: '400px', lg: '720px' });

    const cards = [
        {text:'E-Comexpo Event' ,image : bg1},
        {text:'test' ,image: mr}
    ];

    return (

    //     style={{
    //     background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)'
    // }}

        <Box position="relative" width="full" padding={8}>
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={-1}
                backgroundImage={cards[0].image}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                filter="blur(15px)"
                opacity="0.8"
                backdropFilter="blur(10px) brightness(0.5)"
            />

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
                bg="white"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            />

            <ChevronRightIcon
                aria-label="right-arrow"
                bg="white"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            />

            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <LinkBox key={index} as="article">
                        <LinkOverlay href='seemoreAboutEvents'>
                            <Box
                                maxH="2xl"
                                minH="md"
                                position="relative"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundPosition="center"
                                backgroundImage={card.image}
                            />
                        </LinkOverlay>
                    </LinkBox>
                ))}
            </Slider>
        </Box>
        
 
    );
}

