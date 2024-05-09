import React, {useEffect, useState} from "react";
import useFetchAllFormation from "@/Effect Hooks/useFetchAllformations.jsx";
import {Box, Button, Card, CardBody, CardFooter, Flex, Grid, Heading, Image, Stack, Text} from "@chakra-ui/react";
import ApplicationModal from "@/Components/ApplicationModal.jsx";
import CardTemplate from "@/Components/CardTemplate.jsx";
import Footer from "@/Components/Footer.jsx";


export  default  function MoreFormationsGrid(){

    const [FCard, setFCard] = useState([]);



    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await useFetchAllFormation()
            setFCard(fetchedEvents);
        };
        fetchEvents().then(Response => console.log(Response));
    }, []);


    return(

<>

    <Box
        overflowY='auto'
        css={{
            '&::-webkit-scrollbar': {
                width: '4px',
            },
            '&::-webkit-scrollbar-track': {
                width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#265073',
                borderRadius: '24px',
            },
        }}


    >
        <Grid



            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
                '2xl': 'repeat(4, 1fr)',
            }}
            gap={10}


        >
            {FCard.map((card, index) => (
                <CardTemplate card={card} index={index} />
            ))}
        </Grid>





    </Box>


</>

      





    )


}