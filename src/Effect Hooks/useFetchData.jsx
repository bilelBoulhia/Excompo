import {useEffect, useState} from "react";
import axios from "axios";


export  default  function useFetchData(url){
    
    const [data , setdata]  = useState([]);

    useEffect(() => {

       const Getdata = async ()=>{
           
           const resp = await axios.get(url);
           
           setdata(resp.data)
           
           
       }
        
        Getdata();
        
    }, [url]);

    return {data};
}