import {Box, Card, CardBody, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {motion} from "framer-motion";
import CreateEvent from "@/Admin_Components/CreateEvent.jsx";
import NavBar from "@/Admin_Components/NavBar.jsx";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";
import EventsTable from "@/Admin_Components/EventsTable.jsx";
import ReviewTable from "@/Admin_Components/ReviewTable.jsx";

export default function ReviewManagement() {




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
                        <Tab borderRadius='1px'>check reviews</Tab>
                        <Tab borderRadius='1px'>/</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ReviewTable/>
                        </TabPanel>
                        <TabPanel>
                   nothing to see here
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>

        </>

    )

}