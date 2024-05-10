import {Box, Card, CardBody, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CreateFormation from "@/Admin_Components/CreateFormation.jsx";
import NavBar from "@/Admin_Components/NavBar.jsx";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";
import FormationsTable from "@/Admin_Components/FormationsTable.jsx";

export default function FormationManagement() {




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
                            <CreateFormation/>
                        </TabPanel>
                        <TabPanel>
                            <FormationsTable></FormationsTable>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>

        </>
 
)

}