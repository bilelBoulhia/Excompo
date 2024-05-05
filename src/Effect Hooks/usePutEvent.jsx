﻿
import React, { useState } from 'react';
import axios from 'axios';




const API_BASE_URL = 'https://localhost:7131/EnabledisableFormation';
export default async function UsePutEvent(data) {
    

    
    try {
        
        const formdata = new FormData();


        formdata.append('formationId',data.Id);
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