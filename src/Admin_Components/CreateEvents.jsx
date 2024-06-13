import React, { useState, useRef } from 'react';
import {
    Box, Button, Input, Flex, FormControl, FormErrorMessage, FormLabel, Heading, useToast, Textarea, Stack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import UseInsertEvent from "@/Effect Hooks/useInsertEvent.jsx";
import useFetchEvents from "@/Effect Hooks/useFetchEvents.jsx";


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Event Name is required'),
    Description: Yup.string().max(50, 'Maximum description size must be less than 50 chars').required('Description is required'),
    image: Yup.mixed().required('Image is required'),
  
});

const CreateEvents = () => {
    
    const [imagePreview, setImagePreview] = useState(null);

    const toast = useToast();
    const formDataRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            Description: '',
            image: null,
       
        },
        validationSchema,
        onSubmit: async (values) => {
            const formData = formDataRef.current;
            const response = await axios.post("https://api.cloudinary.com/v1_1/diz4zzn5j/image/upload", formData);
            const imageUrl = response.data.secure_url;

            const data = {
                eventname: values.name,
                eventpic:  imageUrl.toString(),
                Eventdescription: values.Description,
               
            };

        

            formik.resetForm();
            setImagePreview(null);
            if (await UseInsertEvent(data) === true) {
                toast({
                    title: 'Form submitted successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            }
        },
    });

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        const imageUrl = URL.createObjectURL(file);

     
        setImagePreview(imageUrl);
      

        

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'l0viw0wi');

        formDataRef.current = formData;
        formik.setFieldValue('image', file);
    };

  

   
    console.log(useFetchEvents())
    return (

        
        
        <Stack direction={{ base: 'column', xl: 'row' }}>
            <Box w="lg" mt={0}>
                <Heading mb={6}>Create An Event</Heading>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.name && formik.touched.name} mb={4}>
                        <FormLabel htmlFor="name">Event Name</FormLabel>
                        <Input
                            id="name"
                            name="name"
                            width='20em'
                            _hover={{ borderColor: 'purple' }}
                            _focus={{ borderColor: 'purple' }}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={formik.errors.Description && formik.touched.Description} mb={4}>
                        <FormLabel htmlFor="Description">Description</FormLabel>
                        <Textarea
                            id="Description"
                            name="Description"
                            value={formik.values.Description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                            _hover={{ borderColor: 'purple' }}
                            _focus={{ borderColor: 'purple' }}
                        />
                        <FormErrorMessage>{formik.errors.Description}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={formik.errors.image && formik.touched.image} mb={6}>
                        <FormLabel fontWeight='semibold' htmlFor="image">Event Image</FormLabel>
                        <Flex alignItems="center">
                            <Input
                                id="image"
                                name="image"
                                type="file"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                                onBlur={formik.handleBlur}
                            />
                            <Button
                                onClick={() => document.getElementById('image').click()}
                                border='1px solid purple'
                                w='5em'
                            >+</Button>
                            {imagePreview && (
                                <Box m={1} border='1px solid purple' boxSize='10em' backgroundImage={imagePreview} backgroundSize="cover" bgRepeat="no-repeat" />
                            )}
                        </Flex>
                        <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                    </FormControl>

                   

                    <Button bg="#7450CD" color='white' type="submit" isLoading={formik.isSubmitting}>
                        Save
                    </Button>
                </form>
            </Box>


          
        </Stack>
    );
};

export default CreateEvents;
