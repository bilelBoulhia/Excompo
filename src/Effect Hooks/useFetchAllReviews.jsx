import axios from 'axios';

export default async function  useFetchAllReviews(){
    try {
        const response = await axios.get('http://bilelboulahia-001-site1.btempurl.com/GetAllReviews');
        const data = response.data;
        const dataArray = Object.values(data);




        const Reviews = dataArray.map(r => ({

          ReviewId: r.reviewId,
          Review: r.review1,
          Reviewer: r.reviewer ,
          Isaccepted:r.isAccepted

        }));


        return Reviews;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
