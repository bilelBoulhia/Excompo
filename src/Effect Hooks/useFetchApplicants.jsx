import axios from 'axios';

export default async function  useFetchApplicants(){
    try {
        const response = await axios.get('http://bilelboulahia-001-site1.btempurl.com/GetApplicants');
        const data = response.data;
        const dataArray = Object.values(data);

        const Applicants = dataArray.map(E => ({

            Id:E.id,
            Email:E.email,
            Nom:E.nom,
            Prenom:E.prenom,
            NumeroPhone:E.numeroPhone,
            Isactive:E.isActive,
            Event:E.assoEvent
            

        }));


        return Applicants;




    } catch (error) {
        console.error(`err : ${error.message}`);
        throw error;
    }
};
