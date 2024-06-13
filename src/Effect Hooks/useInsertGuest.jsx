
import React, { useState } from 'react';
import axios from 'axios';


//https://localhost:44322

//http://bilelboulahia-001-site1.btempurl.com

const API_BASE_URL = 'http://bilelboulahia-001-site1.btempurl.com/SubmitGuests';
export default async function UseInsertGuest(data) {



    try {

        const formdata = new FormData();


        formdata.append('Guestname',data.guestname);
        formdata.append('Guestpic',data.guestpic);
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