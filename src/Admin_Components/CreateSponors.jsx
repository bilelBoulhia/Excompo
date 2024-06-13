import React, { useEffect, useRef, useState } from 'react';
import {
    Box, Input, FormControl, FormLabel, Flex, Button, useToast, Heading, Select, FormErrorMessage
} from '@chakra-ui/react';
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import UseInsertEvent from "@/Effect Hooks/useInsertEvent.jsx";
import useFetchEvents from "@/Effect Hooks/useFetchEvents.jsx";
import UseInsertSponsor from "@/Effect Hooks/useInsertSponsor.jsx";
import {useFetchSpecificEvent} from "@/Effect Hooks/useFetchSpecificEvent.jsx";

const validationSchema = Yup.object().shape({
    eventId: Yup.string().required('Event is required'),
    Spname: Yup.string().required('Sponsor name is required'),
    image: Yup.mixed().required('Image is required')
});

const CreateSponsors = () => {
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
    
    console.log('bb',events)

    const formik = useFormik({
        initialValues: {
            Spname: '',
            eventId: '',
            image: null,
        },
        validationSchema,
        onSubmit: async (values, actions) => {
            formDataRef.current.append('file', values.image);
            formDataRef.current.append('upload_preset', 'l0viw0wi'); // replace with your upload preset
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/diz4zzn5j/image/upload", formDataRef.current);
                const imageUrl = response.data.secure_url;

                const data = {
                    Spname: values.Spname,
                    Sponsorpic: imageUrl.toString(),
                    AssoEvent: values.eventId,
                };

                if (await UseInsertSponsor(data) === true) {
                    toast({
                        title: 'Form submitted successfully',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                    actions.resetForm();
                    setSponsorImagePreview(null);
                    formDataRef.current = new FormData(); // reset the FormData
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
            <Heading mb={6}>Add Sponsors for Events</Heading>

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

            <FormControl isInvalid={formik.errors.Spname && formik.touched.Spname} mb={6}>
                <FormLabel htmlFor='Spname'>Sponsor Name</FormLabel>
                <Input
                    id='Spname'
                    name='Spname'
                    width='20em'
                    _hover={{ borderColor: 'purple' }}
                    _focus={{ borderColor: 'purple' }}
                    value={formik.values.Spname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.Spname}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.image && formik.touched.image} mb={6}>
                <FormLabel fontWeight='semibold' htmlFor='sponsorpic'>Sponsor Logo</FormLabel>
                <Flex alignItems="center">
                    <Input
                        id='sponsorpic'
                        name='sponsorpic'
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleSponsorImageChange}
                        onBlur={formik.handleBlur}
                    />
                    <Button
                        onClick={() => document.getElementById('sponsorpic').click()}
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

export default CreateSponsors;
