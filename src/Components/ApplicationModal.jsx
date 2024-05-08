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
import {useForm, useFormState} from 'react-hook-form';
import { useToast } from '@chakra-ui/react'
import {useInsertFormation} from "@/Effect Hooks/useInsertFormation.jsx";
import {useInsertApplicants} from "@/Effect Hooks/useInsertApplicants.jsx";
const ApplicationModal = ({ isOpen, onClose ,FormationId }) => {
    const initialRef = React.useRef(null);
    const toast = useToast()
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async () => {



        const data = {
            Email: event.target.email.value,
            Nom: event.target.name.value,
            Prenom: event.target.lastName.value,
            NumeroPhone: event.target.phone.value,
            AssoEvent: FormationId,
        };

console.log('dasd',data)
        if(await useInsertApplicants(data)===true){

            toast({
                title: 'Form submitted successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });

            
        }

        reset();
        onClose();
      
    };

    return (
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="0.5px" boxShadow='none' />
            <ModalContent sx={{ boxShadow: 'none' }}>
                <ModalHeader>Apply Now</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <FormControl isInvalid={errors.email} mb={4}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                id="email"
                                name="email"
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
                                name="name"
                                {...register('name', { required: 'First name is required' })}
                            />
                            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.lastName} mb={4}>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input
                                id="lastName"
                                name="lastName"
                                {...register('lastName', { required: 'Last name is required' })}
                            />
                            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.phone} mb={4}>
                            <FormLabel htmlFor="phone">Phone Number</FormLabel>
                            <Input
                                id="phone"
                                name="phone"
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
                        <Button type="submit"  color='white' bg='#3CAC2A' mr={3}>
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