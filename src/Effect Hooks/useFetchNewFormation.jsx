import axios from 'axios';

export default async function  useFetchNewFormation(){
    try {
        //http://bilelboulahia-001-site1.btempurl.com/Get3Formation
        const response = await axios.get('http://bilelboulahia-001-site1.btempurl.com/Get3Formation');
        const data = response.data;
        const dataArray = Object.values(data);
   
        console.log(data)


        
   
       

            return data;


            


    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
