
import React, { useState } from 'react';
import axios from 'axios';



//https://localhost:44322

//http://bilelboulahia-001-site1.btempurl.com

const API_BASE_URL = 'http://bilelboulahia-001-site1.btempurl.com/SubmitEventPic';
export default async function UseInsertEventPics(data) {



    try {

        const formdata = new FormData();


        formdata.append('EventId',data.EventId);
        formdata.append('eventPic',data.eventPic);
        



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