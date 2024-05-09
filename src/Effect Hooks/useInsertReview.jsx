
import axios from 'axios';


import { useToast } from '@chakra-ui/react'




const API_BASE_URL = 'https://localhost:44322/postReview';

export async function useInsertReview(data) {
    try {
        const formData = new FormData();
        formData.append('reviewId', data.ReviewId );
        formData.append('review',data.Review1  );
        formData.append('reviewer',data.Reviewer  );



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
