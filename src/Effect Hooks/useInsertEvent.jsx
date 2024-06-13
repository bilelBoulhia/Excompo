import React, { useState } from 'react';
import axios from 'axios';

// http://bilelboulahia-001-site1.btempurl.com/SubmitEvent

const API_BASE_URL = 'https://localhost:44322/SubmitEvent';

export default async function UseInsertEvent(data) {
    try {
        const formdata = new FormData();

        formdata.append('Eventname', data.eventname);
        formdata.append('Eventpic', data.eventpic);
        formdata.append('Eventdes', data.Eventdescription);

        await axios.post(API_BASE_URL, formdata);
        return true;  // Return true if the request is successful
    } catch (error) {
        console.error('error:', error.message);
        if (error.response) {
            console.log('status:', error.response.status);
            console.log('response :', error.response.data);
        }
        return false;  // Return false if there is an error
    }
}
