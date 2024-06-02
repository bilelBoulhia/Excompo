
import axios from 'axios';


import { useToast } from '@chakra-ui/react'



const API_BASE_URL = 'http://bilelboulahia-001-site1.btempurl.com/SubmitApplicant';

export async function useInsertApplicants(data) {
    try {
        const formData = new FormData();
        formData.append('Email', data.Email);
        formData.append('Nom',data.Nom  );
        formData.append('Prenom', data.Prenom );
        formData.append('NumeroPhone', data.NumeroPhone );
        formData.append('AssoEvent' , data.AssoEvent)


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
