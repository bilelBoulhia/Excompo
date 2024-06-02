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
    useToast, useColorMode, Textarea, Image, HStack, Stack,
} from '@chakra-ui/react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useInsertFormation} from "@/Effect Hooks/useInsertFormation.jsx";
import axios from "axios";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Tutor Name is required'),
   
    // Description: Yup.string().max(50,'maximum description size must be les than 50 chars').required('Description is required'),
    image: Yup.mixed().required('Image is required'),

    images: Yup.array().min(3, 'At least 3 images are required').required('Images are required')
});

const CreateEvent = () => {
    
    const [sponsorview,setsponsorview] = useState([])
    const [guestview,setguestview] = useState([])
    const sponsortemplate = () => {

        return (

            <form onSubmit={formik.handleSubmit}>
                <FormControl  mb={4}>
                    <FormLabel htmlFor="name">sponsor name</FormLabel>
                    <Input
                   
                        width='20em'
                        _hover={{borderColor: 'purple'}}
                        _focus={{borderColor: 'purple'}}
                        
      
                    />
            
                </FormControl>


                <FormControl  mb={6}>
                    <FormLabel fontWeight='semibold' htmlFor="image">sponsor logo</FormLabel>

                    <FormLabel htmlFor="image"
                               py={2}

                               textAlign='center'
                               borderRadius='5px'
                               borderColor='purple'
                               border='1px solid purple'
                               _hover={{borderColor: 'blue'}} w='5em'>+</FormLabel>
                    <Flex alignItems="center">
                        <Input
                  
                            style={{display: "none"}}

                            type="file"
                            
                            mr={4}
                        />
                        {imagePreview &&
                            <Box m={1} border='1px solid purple' boxSize='10em' backgroundImage={imagePreview}
                                 backgroundSize="cover" bgRepeat="no-repeat"/>}
                    </Flex>
             
                </FormControl>


    
            </form>

        )


    }

    const Guesttemplate = () => {

        return (

            <form onSubmit={formik.handleSubmit}>
                <FormControl  mb={4}>
                    <FormLabel htmlFor="name">guest name</FormLabel>
                    <Input

                        width='20em'
                        _hover={{borderColor: 'purple'}}
                        _focus={{borderColor: 'purple'}}


                    />

                </FormControl>


                <FormControl  mb={6}>
                    <FormLabel fontWeight='semibold' htmlFor="image">guest picture</FormLabel>

                    <FormLabel htmlFor="image"
                               py={2}

                               textAlign='center'
                               borderRadius='5px'
                               borderColor='purple'
                               border='1px solid purple'
                               _hover={{borderColor: 'blue'}} w='5em'>+</FormLabel>
                    <Flex alignItems="center">
                        <Input

                            style={{display: "none"}}

                            type="file"

                            mr={4}
                        />
                        {imagePreview &&
                            <Box m={1} border='1px solid purple' boxSize='10em' backgroundImage={imagePreview}
                                 backgroundSize="cover" bgRepeat="no-repeat"/>}
                    </Flex>

                </FormControl>



            </form>

        )


    }

    const handleSponsors = (event) => {
        setsponsorview((prevSponsors) => [...prevSponsors, prevSponsors.length]);
    };
    const handleGuests = (event) => {
        setguestview((prevGuests) => [...prevGuests, prevGuests.length]);
    };

    const [imagePreview, setImagePreview] = useState(null);

    const [imagesPreview, setImagesPreview] = useState([]);

    const toast = useToast();

    const formDataRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: '',

            // Description: '',
            image: null,

            images: []

        },

        validationSchema,
        onSubmit: async (values) => {
            const formData = formDataRef.current;


            const response = await axios.post("https://api.cloudinary.com/v1_1/diz4zzn5j/image/upload", formData);
            const imageUrl = response.data.secure_url;

            console.log(imageUrl);
            const data = {
                EventName: values.Event,
                formationDes: values.Description,
                formationTutImage: imageUrl.toString(),
                formationTutPosition: values.role,
                tutorname: values.name
            };


            if (await useInsertFormation(data) === true) {

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

    const handleImageChange = (event) => {

        const file = event.currentTarget.files[0];

        setImagePreview(URL.createObjectURL(file));
        formik.setFieldValue('image', file);


        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'l0viw0wi');

        formDataRef.current = formData;

    };
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

    const {colorMode} = useColorMode();
    return (
        <>
            <Stack direction={{base: 'column', xl: 'row'}}>
                <Box w="lg" mt={0}>
                    <Heading mb={6}>Create An Event</Heading>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl isInvalid={formik.errors.name && formik.touched.name} mb={4}>
                            <FormLabel htmlFor="name">Event Name</FormLabel>
                            <Input
                                id="name"
                                name="name"
                                width='20em'
                                _hover={{borderColor: 'purple'}}
                                _focus={{borderColor: 'purple'}}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>


                        <FormControl isInvalid={formik.errors.image && formik.touched.image} mb={6}>
                            <FormLabel fontWeight='semibold' htmlFor="image">Event Image</FormLabel>

                            <FormLabel htmlFor="image"
                                       py={2}

                                       textAlign='center'
                                       borderRadius='5px'
                                       borderColor='purple'
                                       border='1px solid purple'
                                       _hover={{borderColor: 'blue'}} w='5em'>+</FormLabel>
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
                                {imagePreview &&  <Box m={1} border='1px solid purple'  boxSize='10em' backgroundImage={imagePreview} backgroundSize="cover" bgRepeat="no-repeat"/> }
                            </Flex>
                            <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                        </FormControl>


                        <FormControl isInvalid={formik.errors.images && formik.touched.images} mb={6}>
                            <FormLabel fontWeight='semibold' htmlFor="images">Related Event Images</FormLabel>

                            <FormLabel htmlFor="images"
                                       py={2}

                                       textAlign='center'
                                       borderRadius='5px'
                                       borderColor='purple'
                                       border='1px solid purple'
                                       _hover={{borderColor:'blue' }} w='5em'>+</FormLabel>
                            <Flex alignItems="center">
                                <Input
                                    id="images"
                                    multiple="multiple"
                                    name="images"
                                    style={{ display: "none" }}

                                    type="file"
                                    onChange={handleImagesChange}
                                    onBlur={formik.handleBlur}
                                    mr={4}
                                />
                                {imagesPreview.map((previewUrl, index) => (
                                    <Box m={1} border='1px solid purple' key={index} boxSize='10em' backgroundImage={previewUrl} backgroundSize="cover" bgRepeat="no-repeat"/>
                                ))}
                            </Flex>
                            <FormErrorMessage>{formik.errors.images}</FormErrorMessage>
                        </FormControl>
                        <Button bg="#7450CD" color='white' type="submit" isLoading={formik.isSubmitting}>
                            Save
                        </Button>
                    </form>
                </Box>
                
                
                
                
                <Box   w="lg"    >
                    <Heading mb={6}>Add Sponsors </Heading>

                    <Button onClick={handleSponsors}>+</Button>

                    {sponsorview.map((index) => (
                        <div key={index}>{sponsortemplate()}</div>
                    ))}
                </Box>

                <Box   w="lg"    >
                    <Heading mb={6}>Add guests </Heading>

                    <Button onClick={handleGuests}>+</Button>

                    {guestview.map((index) => (
                        <div key={index}>{Guesttemplate()}</div>
                    ))}
                </Box>
            </Stack>
          
          
          

        </>
        
   
       
   
    );
};

export default CreateEvent;














{/*<FormControl isInvalid={formik.errors.Description && formik.touched.Description} mb={4}>*/}
{/*    <FormLabel htmlFor="Description"> Description</FormLabel>*/}
{/*    <Textarea*/}
{/*        id="Description"*/}
{/*        name="Description"*/}
{/*        type="text"*/}

{/*        value={formik.values.Description}*/}
{/*        onChange={formik.handleChange}*/}
{/*        onBlur={formik.handleBlur}*/}
{/*        _hover={{borderColor:'purple' }}*/}
{/*        _focus={{borderColor:'purple' }}*/}
{/*    />*/}
{/*    <FormErrorMessage>{formik.errors.Description}</FormErrorMessage>*/}
{/*</FormControl>*/}