import axios from 'axios';

export default async function  useFetchAllFormation(){
    try {
        const response = await axios.get('http://bilelboulahia-001-site1.btempurl.com/GetFormation');
        const data = response.data;
        const dataArray = Object.values(data);

//http://bilelboulahia-001-site1.btempurl.com


   


        return data;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
