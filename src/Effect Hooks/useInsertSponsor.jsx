
import React, { useState } from 'react';
import axios from 'axios';


//https://localhost:44322

//http://bilelboulahia-001-site1.btempurl.com

const API_BASE_URL = 'https://localhost:44322/SubmitSP';
export default async function UseInsertSponsor(data) {



    try {

        const formdata = new FormData();


        formdata.append('Sponsorname',data.Spname);
        formdata.append('Sponsorpic',data.Sponsorpic);
        formdata.append('AssoEvent',data.AssoEvent);




        await axios.post(API_BASE_URL, formdata);

        return true;

    } catch (error) {
        console.error('error:', error.message);
        if (error.response) {
            console.log('status:', error.response.status);
            console.log('response :', error.response.data);
        }
        return false;
    }

}