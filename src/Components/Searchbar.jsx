import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ onChange, value }) => {
    return (
        <InputGroup w='15em' display='block' m='1em 3em 2em auto' >
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
                placeholder="Search..."
                value={value}
                onChange={onChange}
                variant="filled"
                _hover={{borderColor:'#eae1f3' }}
                _focus={{borderColor:'#eae1f3' ,backgroundColor:'white'}}
            />
        </InputGroup>
    );
};

export default SearchBar;