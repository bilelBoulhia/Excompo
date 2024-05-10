import {Card, CardBody, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import NavBar from "@/Admin_Components/NavBar.jsx";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";
import CreateFormation from "@/Admin_Components/CreateFormation.jsx";
import FormationsTable from "@/Admin_Components/FormationsTable.jsx";
import CreateEvent from "@/Admin_Components/CreateEvent.jsx";

export  default function EventsManagement(){


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
                           //todo later
                           <CreateEvent/>
                       </TabPanel>
                       <TabPanel>
                       
                           //todo later
                       
                       </TabPanel>
                   </TabPanels>
               </Tabs>

           </Stack>

       </>       
       
       
   )
    
    
    
    
    
}