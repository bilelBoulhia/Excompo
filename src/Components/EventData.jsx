import {Box, Heading, Stack} from "@chakra-ui/react";
import React from "react";
import EventpicsCarousel from "@/Components/EventpicsCarousel.jsx";

export default  function EventData({EventId}){
    
    return(
        
        <Stack>
            <Heading >E-BUSINESS EVENT</Heading>
            
            <Box  position="relative" width="full" padding={8}>
                <Box
                    maxH="2xl"
                    minH="md"
                    position="relative"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundColor="black"
                />
                
            </Box>
            
            <EventpicsCarousel EventId={EventId}/>
            
        </Stack>
        
        
    )
    
}