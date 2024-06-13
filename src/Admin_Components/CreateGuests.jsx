import React, { useEffect, useRef, useState } from 'react';
import {
    Box, Input, FormControl, FormLabel, Flex, Button, useToast, Heading, Select, FormErrorMessage
} from '@chakra-ui/react';
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import UseInsertEvent from "@/Effect Hooks/useInsertEvent.jsx";
import useFetchEvents from "@/Effect Hooks/useFetchEvents.jsx";
import UseInsertGuest from "@/Effect Hooks/useInsertGuest.jsx";

const validationSchema = Yup.object().shape({
    eventId: Yup.string().required('Event is required'),
    Guestname: Yup.string().required('Guest name is required'),
    image: Yup.mixed().required('Image is required')
});

const CreateGuests = () => {
    const [sponsorImagePreview, setSponsorImagePreview] = useState(null);
    const [events, setEvents] = useState([]);
    const toast = useToast();
    const formDataRef = useRef(new FormData());

    useEffect(() => {
        const fetchEvent = async () => {
            const data = await useFetchEvents();
            setEvents(data.$values || []);
        };
        fetchEvent();
    }, []);

    const formik = useFormik({
        initialValues: {
            Guestname: '',
            eventId: '',
            image: null,
        },
        validationSchema,
        onSubmit: async (values, actions) => {
            formDataRef.current.append('file', values.image);
            formDataRef.current.append('upload_preset', 'l0viw0wi');
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/diz4zzn5j/image/upload", formDataRef.current);
                const imageUrl = response.data.secure_url;

                const data = {
                    guestname: values.Guestname,
                    guestpic: imageUrl.toString(),
                    AssoEvent: values.eventId,
                };
                console.log("Data to be sent:", data);
                if (await UseInsertGuest(data) === true) {
                    toast({
                        title: 'Form submitted successfully',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                    actions.resetForm();
                    setSponsorImagePreview(null);
                    formDataRef.current = new FormData();
                }
            } catch (error) {
                toast({
                    title: 'Error submitting form',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        },
    });

    const handleSponsorImageChange = (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setSponsorImagePreview(URL.createObjectURL(file));
            formik.setFieldValue('image', file);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Heading mb={6}>Add Guests for Events</Heading>

            <FormControl isInvalid={formik.errors.eventId && formik.touched.eventId} mb={6}>
                <FormLabel fontWeight='semibold' htmlFor="eventId">Select Event</FormLabel>
                <Select
                    id="eventId"
                    name="eventId"
                    placeholder="Select event"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.eventId}
                >
                    {events && events.length > 0 && events.map((event, index) => (
                        <option key={index} value={event.eventid}>{event.eventname}</option>
                    ))}
                </Select>
                <FormErrorMessage>{formik.errors.eventId}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.Guestname && formik.touched.Guestname} mb={6}>
                <FormLabel htmlFor='guestname'>Guest Name</FormLabel>
                <Input
                    id='Guestname'
                    name='Guestname'
                    width='20em'
                    _hover={{ borderColor: 'purple' }}
                    _focus={{ borderColor: 'purple' }}
                    value={formik.values.Guestname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.Guestname}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.image && formik.touched.image} mb={6}>
                <FormLabel fontWeight='semibold' htmlFor='Guestpic'>Guest Logo</FormLabel>
                <Flex alignItems="center">
                    <Input
                        id='Guestpic'
                        name='Guestpic'
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleSponsorImageChange}
                        onBlur={formik.handleBlur}
                    />
                    <Button
                        onClick={() => document.getElementById('Guestpic').click()}
                        border='1px solid purple'
                        w='5em'
                    >+</Button>
                    {sponsorImagePreview && (
                        <Box m={1} border='1px solid purple' boxSize='10em' backgroundImage={`url(${sponsorImagePreview})`} backgroundSize="cover" bgRepeat="no-repeat" />
                    )}
                </Flex>
                <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
            </FormControl>

            <Button bg="#7450CD" color='white' type="submit" isLoading={formik.isSubmitting}>
                Save
            </Button>
        </form>
    );
};

export default CreateGuests;
