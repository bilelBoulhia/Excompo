
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { StarIcon } from '@chakra-ui/icons'
// AnotherCarousel.jsx
import { ProductService } from '@/Services/ProductService';
import {Avatar,Tag, Box, TagLabel, TagLeftIcon} from "@chakra-ui/react";


export default function AnotherCarousel() {
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
         
             
                
                <Box  bg='#F4F5F6'
                      ml='10%'
                   
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
         
        );
    };

    return (
        <Box
            
           p={2}
            alignContent='center'
            justifyContent='center'
            h='25em' className="card" mt={5} style={{background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)'}}>
            <Carousel value={products} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate}  circular
                     
            />
        </Box>
    )
}
        