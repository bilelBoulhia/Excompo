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



export default function FormationsTable(){

    const [data, setdata] = useState([]);
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const toast = useToast()
    const fetchdata = async () => {
        try {
            const d = await useFetchAllFormation();
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
        await  UsePutFormation(data)
        setIsDataUpdated(true);

        toast({
            title: 'Done',
            description: "Event Updated",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
       
    }
    
  console.log(data)
   
    return(
<>


    {data.map((i , index )=>(
        <Accordion key={index} allowMultiple   borderRadius='5px' >

            <AccordionItem   >
                <AccordionButton>
                    <Box  py={4} px={6} display="flex" justifyContent="space-between">
                        <Box>{i.eventname}</Box>
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
                                    <Td>{i.TutorName}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Tutor Position</Td>
                                    <Td>{i.FormationTutPosition}</Td>
                                </Tr>
                                <Tr>
                                    <Td>status</Td>
                                    <Td>{i.IsAvailable ? i.IsAvailable.toString() : "undefined"}</Td>
                                </Tr>
                                <Tr>
                                    <Td>descrpition</Td>
                                    <Td>{i.FormationDes}</Td>
                                </Tr>

                               





                            </Tbody>
                        </Table>

                    </TableContainer>

                    <Flex py={4} alignItems="right" justifyContent="right" position="relative" flexWrap="wrap"  >

                        <Button colorScheme='purple' w='5em' onClick={() => handleEvent(i.FormationId, true)}>enable</Button>
                        <Button colorScheme='red'  w='5em' ml='15px' onClick={() => handleEvent(i.FormationId, false)}>disable</Button>
                    </Flex>

                </AccordionPanel>
            </AccordionItem>

        </Accordion>
        
    ))}
                

        
        

        

    
</>
       
       
        
    )
    
    
}