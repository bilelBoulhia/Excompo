import React, { useEffect, useState } from 'react';
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Flex,
    Button,
    AccordionIcon,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    useToast,
} from '@chakra-ui/react';
import UsePutFormation from "@/Effect Hooks/usePutFormation.jsx";
import useFetchNewFormation from "@/Effect Hooks/useFetchNewFormation.jsx";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import useFetchAllFormation from "@/Effect Hooks/useFetchAllformations.jsx";
import useFetchAllReviews from "@/Effect Hooks/useFetchAllReviews.jsx";
import usePutReview from "@/Effect Hooks/usePutReview.jsx";



export default function ReviewTable(){

    const [data, setdata] = useState([]);
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const toast = useToast()
    const fetchdata = async () => {
        try {
            const d = await useFetchAllReviews();
            setdata(d);
            setIsDataUpdated(false);
        } catch (error) {
            console.error("err", error);
        }
    };

    useEffect(() => {

        fetchdata()
        
    }, [isDataUpdated]);


    const handleEvent = async (id, decision) => {

        const data = {

            Id:id,
            Decision:decision

        }
   

        
        if(await usePutReview(data))
        {

            toast({
                title: 'Done',
                description: "Event Updated",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })


        }
        setIsDataUpdated(true);
    }
    

    
   

    console.log(data)

    return(
        <>


            {data.map((i , index )=>(
                <Accordion key={index} allowMultiple   borderRadius='5px' >

                    <AccordionItem   >
                        <AccordionButton>
                            <Box  py={4} px={6} display="flex" justifyContent="space-between">
                                <Box>{i.Reviewer}</Box>
                                <AccordionIcon />
                            </Box>
                        </AccordionButton>
                        <AccordionPanel px={6} >
                            <TableContainer



                                border='1px' borderRadius='8px' mt={2} >
                                <Table colorScheme='black'>
                                    <Tbody>
                                        <Tr>
                                            <Td>review</Td>
                                            <Td>{i.Review}</Td>
                                        </Tr>

                                        <Tr>
                                            <Td>status</Td>
                                            <Td>{i.Isaccepted.toString()}</Td>
                                        </Tr>







                                    </Tbody>
                                </Table>

                            </TableContainer>

                            <Flex py={4} alignItems="right" justifyContent="right" position="relative" flexWrap="wrap"  >

                                <Button colorScheme='purple' w='6em' onClick={() => handleEvent(i.ReviewId, true)}>Allow</Button>
                                <Button colorScheme='red'  w='6em' ml='15px' onClick={() => handleEvent(i.ReviewId, false)}>dont allow</Button>
                            </Flex>

                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>

            ))}








        </>



    )


}