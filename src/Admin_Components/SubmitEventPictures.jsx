import React, { useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    useToast
} from "@chakra-ui/react";
import UseInsertEventPics from "@/Effect Hooks/useInsertEventPics.jsx";
import useFetchEvents from "@/Effect Hooks/useFetchEvents.jsx";

const validationSchema = Yup.object().shape({
    eventId: Yup.string().required('Event ID is required'),
    images: Yup.array().min(3, 'At least 3 images are required').required('Images are required')
});

const SubmitEventPictures = () => {
    const [imagesPreview, setImagesPreview] = useState([]);
    const [events, setEvents] = useState([]);
    const formDataRef = useRef(null);
    const toast = useToast();

    useEffect(() => {
        const fetchEvent = async () => {
            const data = await useFetchEvents();
            setEvents(data.$values || []);
        };
        fetchEvent();
    }, []);

    const formik = useFormik({
        initialValues: {
            eventId: '',
            images: []
        },
        validationSchema,
        onSubmit: async (values) => {
            const selectedFiles = values.images;

            for (const file of selectedFiles) {
                const fileFormData = new FormData();
                fileFormData.append('file', file);
                fileFormData.append('upload_preset', 'l0viw0wi');
                const response = await axios.post("https://api.cloudinary.com/v1_1/diz4zzn5j/image/upload", fileFormData);
                const imageUrl = response.data.secure_url;

                const data = {
                    EventId: values.eventId,
                    eventPic: imageUrl,
                };

                if (await UseInsertEventPics(data)) {
                    toast({
                        title: 'Image added successfully',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: 'Error adding image',
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    });
                }
            }

            formik.resetForm();
            setImagesPreview([]);
        },
    });

    const handleImagesChange = (event) => {
        const selectedFiles = Array.from(event.currentTarget.files);
        const newImagesPreviewUrls = selectedFiles.map(file => URL.createObjectURL(file));
        setImagesPreview(prevImagesPreview => [...prevImagesPreview, ...newImagesPreviewUrls]);
        formik.setFieldValue('images', [...formik.values.images, ...selectedFiles]);

        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append('files', file);
        });
        formData.append('upload_preset', 'l0viw0wi');

        formDataRef.current = formData;
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Heading mb={6}>Add Pictures for Events</Heading>
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

            <FormControl isInvalid={formik.errors.images && formik.touched.images} mb={6}>
                <FormLabel fontWeight='semibold' htmlFor="images">Related Event Images</FormLabel>
                <Flex alignItems="center">
                    <Input
                        id="images"
                        multiple
                        name="images"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleImagesChange}
                        onBlur={formik.handleBlur}
                    />
                    <Button
                        onClick={() => document.getElementById('images').click()}
                        border='1px solid purple'
                        w='5em'
                    >+</Button>
                    {imagesPreview.map((previewUrl, index) => (
                        <Box
                            m={1}
                            border='1px solid purple'
                            key={index}
                            boxSize='10em'
                            backgroundImage={`url(${previewUrl})`}
                            backgroundSize="cover"
                            bgRepeat="no-repeat"
                        />
                    ))}
                </Flex>
                <FormErrorMessage>{formik.errors.images}</FormErrorMessage>
            </FormControl>

            <Button
                mt={4}
                colorScheme='teal'
                isLoading={formik.isSubmitting}
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
};

export default SubmitEventPictures;
