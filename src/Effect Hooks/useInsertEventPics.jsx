
import React, { useState } from 'react';
import axios from 'axios';




const API_BASE_URL = 'http://bilelboulahia-001-site1.btempurl.com/SubmitEventPic';
export default async function UseInsertEventPics(data) {



    try {

        const formdata = new FormData();


        formdata.append('EventId',data.Id);
        formdata.append('eventPic',data.eventPic);



        await axios.post(API_BASE_URL, formdata);


    } catch (error) {
        console.error('error:', error.message);
        if (error.response) {
            console.log('status:', error.response.status);
            console.log('response :', error.response.data);
        }

    }

}