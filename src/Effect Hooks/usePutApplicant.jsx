
import React, { useState } from 'react';
import axios from 'axios';




const API_BASE_URL = 'http://bilelboulahia-001-site1.btempurl.com/activeApplicant';
export default async function usePutApplicant(data) {



    try {

        const formdata = new FormData();


        formdata.append('Id',data.Id);
        formdata.append('decision',data.Decision);



        await axios.put(API_BASE_URL, formdata);


    } catch (error) {
        console.error('error:', error.message);
        if (error.response) {
            console.log('status:', error.response.status);
            console.log('response :', error.response.data);
        }

    }

}