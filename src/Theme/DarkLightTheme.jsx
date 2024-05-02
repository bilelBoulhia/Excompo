
import React from 'react';
import { MoonIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {
 
    IconButton, useColorMode,

} from '@chakra-ui/react';
function DarkLightTheme() {

    const { toggleColorMode } = useColorMode()



  return (

      <IconButton
          aria-label='Light'
          icon={<MoonIcon />}
          onClick={toggleColorMode}
          style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              backgroundColor: 'transparent'
          }} >
      </IconButton>

  );
}

export default DarkLightTheme;