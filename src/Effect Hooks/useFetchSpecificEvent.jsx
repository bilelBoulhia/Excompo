/* eslint-disable no-unused-vars */
// FetchFormationNames.js

import axios from 'axios';

export async function useFetchSpecificEvent(Id) {

    try {


        //'https://localhost:44322/GetSpeficEvents?id=155897436'

        const response = await axios.get(`http://bilelboulahia-001-site1.btempurl.com/GetSpeficEvents?id=${Id}`);
        
        const data = response.data;



  

        return data;




    } catch (error)
    {

        console.log(error)


    }



}
