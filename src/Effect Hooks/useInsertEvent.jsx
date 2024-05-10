
import React, { useState } from 'react';
import axios from 'axios';




const API_BASE_URL = 'https://localhost:44322/SubmitEvent';
export default async function UseInsertEvent(data) {



    try {

        const formdata = new FormData();


        formdata.append('Eventname',data.Eventname);
        formdata.append('Eventpic',data.Eventpic);



        await axios.post(API_BASE_URL, formdata);


    } catch (error) {
        console.error('error:', error.message);
        if (error.response) {
            console.log('status:', error.response.status);
            console.log('response :', error.response.data);
        }

    }

}