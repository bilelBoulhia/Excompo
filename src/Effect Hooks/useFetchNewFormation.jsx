﻿import axios from 'axios';

export default async function  useFetchNewFormation(){
    try {
        const response = await axios.get('http://bilelboulahia-001-site1.btempurl.com/Get3Formation');
        const data = response.data;
        const dataArray = Object.values(data);
   


        
        const Formations = dataArray.map(E => ({
   
            FormationId:E.formationId,
            FormationTutPosition:E.formationTutPosition,
            eventname:E.eventName,
            IsAvailable:E.isAvailable,
            FormationDes:E.formationDes,
            TutorName:E.tutorName,
            FormationTutImage: E.formationTutImage

        }));
       

            return Formations;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
