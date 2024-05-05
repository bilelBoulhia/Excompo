import {Card, CardBody, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CreateEvent from "@/Admin_Components/CreateEvent.jsx";
import NavBar from "@/Admin_Components/NavBar.jsx";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";
import ApplicantsTable from "@/Admin_Components/ApplicantsTable.jsx";


export default function SubmissionManagement() {




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
                    <TabList>
                        <Tab>Submission List</Tab>
                        <Tab>/</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                           <ApplicantsTable/>
                        </TabPanel>
                        <TabPanel>
                            nothing to show here yet
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>

            


            </>


    )}