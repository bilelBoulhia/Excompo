import React, { useState } from 'react';
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    useToast, useColorMode, Textarea,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    role: Yup.string().required('Role is required'),
    Event: Yup.string().required('Event is required'),
    Description: Yup.string().max(50,'maximum description size must be les than 50 chars').required('Description is required'),
    image: Yup.mixed().required('Image is required'),
});

const CreateEvent = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const toast = useToast();

    const formik = useFormik({
        initialValues: {
            name: '',
            role: '',
            Event: '',
            Description: '',
            image: null,
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
            toast({
                title: 'Form submitted successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        },
    });

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        setImagePreview(URL.createObjectURL(file));
        formik.setFieldValue('image', file);
    };

    const {colorMode} = useColorMode();
    return (
        <Box   maxW="lg" mx="auto" mt={8} py={5} px={5} borderRadius='25px'  >
            <Heading mb={6}>Create An Event</Heading>
            <form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={formik.errors.name && formik.touched.name} mb={4}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        _hover={{borderColor:'purple' }}
                        _focus={{borderColor:'purple' }}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.Event && formik.touched.Event} mb={4}>
                    <FormLabel htmlFor="email">Event</FormLabel>
  
                
                        <Input
                            id="event"
                            name="event"
                            type="text"
                            _hover={{borderColor:'purple' }}
                            _focus={{borderColor:'purple' }}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
             
                    <FormErrorMessage>{formik.errors.Event}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.role && formik.touched.role} mb={4}>
                    <FormLabel htmlFor="Role">Role</FormLabel>
                    <Input
                        id="Role"
                        name="Role"
                        type="text"
                        
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        _hover={{borderColor:'purple' }}
                        _focus={{borderColor:'purple' }}
                    />
                    <FormErrorMessage>{formik.errors.role}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.Description && formik.touched.Description} mb={4}>
                    <FormLabel htmlFor="Role"> Description</FormLabel>
                    <Textarea
                        id="Description"
                        name="Description"
                        type="text"

                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        _hover={{borderColor:'purple' }}
                        _focus={{borderColor:'purple' }}
                    />
                    <FormErrorMessage>{formik.errors.Description}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.image && formik.touched.image} mb={6}>
                    <FormLabel fontWeight='semibold' htmlFor="image">Image</FormLabel>
                
                    <FormLabel htmlFor="image"
                              py={2}
                             
                               textAlign='center'
                               borderRadius='5px'
                               borderColor='purple'
                               border='1px solid purple'
                               _hover={{borderColor:'blue' }} w='5em'>+</FormLabel>
                    <Flex alignItems="center">
                        <Input
                            id="image"
                            
                            name="image"
                            style={{ display: "none" }}
                            
                            type="file"
                            onChange={handleImageChange}
                            onBlur={formik.handleBlur}
                            mr={4}
                        />
                         {imagePreview && <Box boxSize='10em'> <img src={imagePreview} alt="Preview"  /> </Box>} 
                    </Flex>
                    <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                </FormControl>

                <Button bg="#7450CD" color='white' type="submit" isLoading={formik.isSubmitting}>
                   Save
                </Button>
            </form>
        </Box>
    );
};

export default CreateEvent;