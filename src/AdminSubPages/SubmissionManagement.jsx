import {Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CreateEvent from "@/Admin_Components/CreateEvent.jsx";
import NavBar from "@/Admin_Components/NavBar.jsx";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";


export default function SubmissionManagement() {




    return(

        <>

                <NavBar></NavBar>
           
                <DarkLightTheme/>



            <Stack>


                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                           sadasdasdasd
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>

            


            </>


    )}