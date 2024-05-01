import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react'
const ApplicationModal = ({ isOpen, onClose ,Formation }) => {
    const initialRef = React.useRef(null);
    const toast = useToast()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
       
        console.log(data);
        
    
        toast({
            title: 'Submitted',
            description: "We will contact you soon",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        
        onClose();
      
    };

    return (
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Apply Now</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <FormControl isInvalid={errors.email} mb={4}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                id="email"
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.name} mb={4}>
                            <FormLabel htmlFor="name">First Name</FormLabel>
                            <Input
                                id="name"
                                {...register('name', { required: 'First name is required' })}
                            />
                            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.lastName} mb={4}>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input
                                id="lastName"
                                {...register('lastName', { required: 'Last name is required' })}
                            />
                            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.phone} mb={4}>
                            <FormLabel htmlFor="phone">Phone Number</FormLabel>
                            <Input
                                id="phone"
                                type="tel"
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: 'Invalid phone number',
                                    },
                                })}
                            />
                            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color='white' bg='#3CAC2A' mr={3}>
                            Apply
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default ApplicationModal;