import {Box, Card, CardBody, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CreateEvent from "@/Admin_Components/CreateEvent.jsx";
import NavBar from "@/Admin_Components/NavBar.jsx";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";

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
                    <TabList bgGradient="linear(70deg, #7450CD 0%, #A590E8 1%, #67BBD4 60%, #6CC3CC 100%)"   >
                        <Tab borderRadius='1px'>Create</Tab>
                        <Tab borderRadius='1px'>Enable/Disble</Tab>
                        <Tab borderRadius='1px'>Data Table</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <CreateEvent/>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>

        </>
 
)

}