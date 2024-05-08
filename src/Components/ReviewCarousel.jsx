
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { StarIcon } from '@chakra-ui/icons'
// ReviewCarousel.jsx
import { ProductService } from '@/Services/ProductService';
import {Avatar, Tag, Box, TagLabel, TagLeftIcon, Text, Heading} from "@chakra-ui/react";


export default function ReviewCarousel() {
    const [products, setProducts] = useState([]);
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

    

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    console.log(products)
    const productTemplate = (product) => {
        return (


            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Box  bg='#F4F5F6'
                
                   
                      minW='15em'
                      maxW='15em'
                      borderRadius={15}
                      color='#3B5266'
                      p={4}

                >
                    <h4 className="mb-1">{product.Review}</h4>

                    <Tag mt='3' bg='transparent' >
                        <TagLeftIcon boxSize='12px' as={StarIcon} />
                        <TagLabel>Cyan</TagLabel>
                    </Tag>
                   
                </Box>
         </div>
        );
    };

    return (
        <Box
            
           p={2}
            alignContent='center'
            justifyContent='center'
            h='25em' className="card"  style={{background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)'}}>
            <Box textAlign="center" p='0px 30px 0px 30px'>
            <Heading  fontSize={{base: 'sm', // 0px
                sm: '20px', // ~480px. em is a relative unit and is dependant on the font size.
                md: '25px', // ~768px
                lg: '20px', // ~992px
                xl: '20px', // ~1280px
                '2xl': '20px', // ~1536px

            }}   color='#353238' fontWeight='medium'>
                Testimonials
            </Heading>
            <Heading   mt={5} fontSize={{base: 'mg', // 0px
                sm: '22px', // ~480px. em is a relative unit and is dependant on the font size.
                md: '28px', // ~768px
                lg: '29px', // ~992px
                xl: '20px', // ~1280px
                '2xl': '25px', // ~1536px

            }}  fontWeight='bold' color='#353238'>
                What does our customers say?
            </Heading>
                
            </Box>
            <Carousel style={{marginTop:'40px'}} value={products} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate}  circular
                     
            />
        </Box>
    )
}
        