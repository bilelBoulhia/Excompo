import axios from 'axios';

export default async function  UseFetchAcceptedReviews(){
    try {
        const response = await axios.get('https://localhost:44322/GetAccptedReviews');
        const data = response.data;
        const dataArray = Object.values(data);

        const accptedReviews = dataArray.map(r => ({

           ReviewId: r.reviewId, 
            Review1:r.review1,
            Reviewer:r.reviewer
            

        }));


        return accptedReviews;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
}
