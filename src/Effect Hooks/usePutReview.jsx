
import React, { useState } from 'react';
import axios from 'axios';




const API_BASE_URL = 'https://localhost:44322/accpetedreview';
export default async function usePutReview(data) {



    try {

        const formdata = new FormData();


        formdata.append('ReviewId',data.Id);
        formdata.append('decision',data.Decision);



        await axios.put(API_BASE_URL, formdata);


        return true
    } catch (error) {
        console.error('error:', error.message);
        if (error.response) {
            console.log('status:', error.response.status);
            console.log('response :', error.response.data);
        }

        return false
    }

}