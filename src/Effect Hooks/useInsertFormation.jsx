
import axios from 'axios';


import { useToast } from '@chakra-ui/react'




const API_BASE_URL = 'https://localhost:44322/createFormation';

export async function useInsertFormation(data) {
    try {
        const formData = new FormData();
        formData.append('eventName', data.EventName );
        formData.append('formationDes',data.formationDes  );
        formData.append('formationTutImage', data.formationTutImage );
        formData.append('formationTutPosition', data.formationTutPosition );
        formData.append('TutorName' , data.tutorname)
      


        await axios.post(API_BASE_URL, formData);



        return true
    } catch (error) {
        console.error(' error:', error.message);
        if (error.response) {
            console.log(' status:', error.response.status);
            console.log('data:', error.response.data);
        }

        return false
    }
}
