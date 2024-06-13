import axios from 'axios';

export default async function  useFetchAllReviews(){
    try {
        const response = await axios.get('http://bilelboulahia-001-site1.btempurl.com/GetAllReviews');
        const data = response.data;
        const dataArray = Object.values(data);




      


        return data;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
