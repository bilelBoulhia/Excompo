import axios from 'axios';


//http://bilelboulahia-001-site1.btempurl.com/GetAllReviews

export default async function  useFetchEvents(){
    try {
        const response = await axios.get('http://bilelboulahia-001-site1.btempurl.com/GetEvents');
        const data = response.data;
      //  const dataArray = Object.values(data);




        


        return data;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
