import axios from 'axios';

export default async function  useFetchEvents(){
    try {
        const response = await axios.get('https://localhost:7131/GetFormation');
        const data = response.data;
        const dataArray = Object.values(data);
   


        
        const Events = dataArray.map(E => ({
   
            FormationId:E.formationId,
            FormationTutPosition:E.formationTutPosition,
            eventname:E.eventName,
            IsAvailable:E.isAvailable,
            FormationDes:E.formationDes,
            TutorName:E.tutorName,
            formationTutImage: E.formationTutImage

        }));
       

            return Events;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
