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
import UsePutEvent from "@/Effect Hooks/usePutEvent.jsx";
import useFetchEvents from "@/Effect Hooks/useFetchEvents.jsx";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import useFetchApplicants from "@/Effect Hooks/useFetchApplicants.jsx";
import usePutApplicant from "@/Effect Hooks/usePutApplicant.jsx";



export default function ApplicantsTable(){

    const [data, setdata] = useState([]);
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const toast = useToast()
    const fetchdata = async () => {
        try {
            const d = await useFetchApplicants()
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
        await  usePutApplicant(data)
        setIsDataUpdated(true);

        toast({
            title: 'Done',
            description: "Event Updated",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })

    }

    console.log('dsadad', data)

    return(
        <>


            {data.map((i , index )=>(
                <Accordion key={index} allowMultiple   borderRadius='5px' >

                    <AccordionItem   >
                        <AccordionButton>
                            <Box  py={4} px={6} display="flex" justifyContent="space-between">
                                <Box>{i.Nom}</Box>
                                <AccordionIcon />
                            </Box>
                        </AccordionButton>
                        <AccordionPanel px={6} >
                            <TableContainer



                                border='1px' borderRadius='8px' mt={2} >
                                <Table colorScheme='black'>
                                    <Tbody>
                                        <Tr>
                                            <Td>Tutor</Td>
                                            <Td>{i.Prenom}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Email</Td>
                                            <Td>{i.Email}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>status</Td>
                                            <Td>{(i.Isactive).toString()}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>numer de telephone</Td>
                                            <Td>{i.NumeroPhone}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Related Formation</Td>
                                            <Td>{i.Event}</Td>
                                        </Tr>






                                    </Tbody>
                                </Table>

                            </TableContainer>

                            <Flex py={4} alignItems="right" justifyContent="right" position="relative" flexWrap="wrap"  >

                                <Button colorScheme='purple' w='5em' onClick={() => handleEvent(i.Id, true)}>enable</Button>
                                <Button colorScheme='red'  w='5em' ml='15px' onClick={() => handleEvent(i.Id, false)}>disable</Button>
                            </Flex>

                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>

            ))}








        </>



    )


}