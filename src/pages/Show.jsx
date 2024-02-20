import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getShowurl } from "../Api/SearchForShows";


export default function Show() {
    const {showId}=useParams();
    const [showData,setShowData]=useState(null);
    const [showError,setShowError]=useState(null);

    useEffect(()=>{
        async function fetchData() {
            try {
            const response = await getShowurl(showId);
            setShowData(response);
            } catch (error) {
                setShowError(error);
            }
            
            
           
          }
        fetchData();
        
    },[showId])


    if(showError){
        return <div>we have an error: {showError.msg}</div>
    }
    if(showData){
        return <div>{showData.name}</div>
    }
    
  return (
    <div>
      Data is loading
    </div>
  )
}
