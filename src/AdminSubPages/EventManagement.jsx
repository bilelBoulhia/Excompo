import {Box, Card, CardBody, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CreateEvent from "@/Admin_Components/CreateEvent.jsx";
import NavBar from "@/Admin_Components/NavBar.jsx";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";
import EventsTable from "@/Admin_Components/EventsTable.jsx";

export default function EventManagement() {




    return(
        <>
           
           <Card borderRadius='0px'>
               <CardBody>
                   <NavBar></NavBar>

                   <DarkLightTheme/>
               </CardBody>
               
           </Card>
                   
               
               
                
    
                



            <Stack>


                <Tabs variant='enclosed'>
                    <TabList    >
                        <Tab borderRadius='1px'>Create</Tab>
                        <Tab borderRadius='1px'>Data Table</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <CreateEvent/>
                        </TabPanel>
                        <TabPanel>
                            <EventsTable></EventsTable>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>

        </>
 
)

}