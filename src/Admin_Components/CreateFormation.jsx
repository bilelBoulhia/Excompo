import React, {useEffect, useRef, useState} from 'react';
import {
    Box,
    Button,
    Input,

    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    useToast, useColorMode, Textarea,
} from '@chakra-ui/react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useInsertFormation} from "@/Effect Hooks/useInsertFormation.jsx";
import axios from "axios";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Tutor Name is required'),
    role: Yup.string().required('Role is required'),
    Event: Yup.string().required('Event is required'),
    Description: Yup.string().max(50,'maximum description size must be les than 50 chars').required('Description is required'),
    image: Yup.mixed().required('Image is required'),
});

const CreateFormation = () => {
    const [imagePreview, setImagePreview] = useState(null);
    
    const toast = useToast();

    const formDataRef = useRef(null);
   
    const formik = useFormik({
        initialValues: {
            name: '',
            role: '',
            Event: '',
            Description: '',
            image: null,
        },
        
        validationSchema,
        onSubmit: async (values) => {
            const formData = formDataRef.current;
            
            
            const response =await axios.post("https://api.cloudinary.com/v1_1/diz4zzn5j/image/upload",formData);
            const imageUrl = response.data.secure_url;

            console.log(imageUrl);
            const data = {
                EventName: values.Event,
                formationDes: values.Description,
                formationTutImage:imageUrl.toString() ,
                formationTutPosition: values.role,
                tutorname: values.name
            };


            if(await useInsertFormation(data)===true){

                toast({
                    title: 'Form submitted successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });

            }
               
                
            
       
         
            formik.resetForm();
            setImagePreview(null);
        },
    });

    const handleImageChange =  (event) => {
        
        const file = event.currentTarget.files[0]; 
        
        setImagePreview(URL.createObjectURL(file));
        formik.setFieldValue('image', file);


        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'l0viw0wi');

        formDataRef.current = formData;
   
    };
    
    

    const {colorMode} = useColorMode();
    return (
        <Box position='absolute' left='0'  maxW="lg" mx="auto" mt={0} py={5} px={5} borderRadius='25px'  >
            <Heading mb={6}>Create Formation</Heading>
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
          

                <FormControl isInvalid={formik.errors.Event} mb={4}>
                    <FormLabel htmlFor="event">Event</FormLabel>


                    <Input
                        id="Event"
                        name="Event"
                        type="text"
                        _hover={{ borderColor: 'purple' }}
                        _focus={{ borderColor: 'purple' }}
                        value={formik.values.Event}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
             
                    <FormErrorMessage>{formik.errors.Event}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.role} mb={4}>
                    <FormLabel htmlFor="Role">Role</FormLabel>
                    <Input
                        id="role"
                        name="role"
                        type="text"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        _hover={{ borderColor: 'purple' }}
                        _focus={{ borderColor: 'purple' }}
                    />
                    <FormErrorMessage>{formik.errors.role}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.Description && formik.touched.Description} mb={4}>
                    <FormLabel htmlFor="Description"> Description</FormLabel>
                    <Textarea
                        id="Description"
                        name="Description"
                        type="text"

                        value={formik.values.Description}
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

export default CreateFormation;