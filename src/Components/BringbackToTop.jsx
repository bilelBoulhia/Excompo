import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

export default function BringbackToTop(){
    
    const [bringtotop,setbringtotop] = useState(false)

    useEffect(() => {
        
        const handlebringup =()=>{

            const scrollHeight = window.pageYOffset;
            setbringtotop(scrollHeight > 300);
            
            
        }

        window.addEventListener('scroll',handlebringup);
        return () => {
            window.removeEventListener('scroll', handlebringup);
        };
        
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return(
        <>
        {bringtotop && (
            <Box
                position="fixed"
                bottom="20px"
                right="20px"
                zIndex="9999"
            >
                <IconButton
                    aria-label="Scroll to Top"
                    icon={<ArrowUpIcon />}
                    onClick={scrollToTop}
                    style={{ background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)' }}
                />
            </Box>
        )}

        </>
    )
    
    
}