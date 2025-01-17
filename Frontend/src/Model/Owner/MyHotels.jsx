import React, { useEffect } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../../../config'
const MyHotels = () => {

    const [hotels,setHotels]= useState([])
    useEffect(()=>{
        async function fetchHotels(){
            const response = await axios.get(`${BACKEND_URL}/owner/myhotels`,{
                headers: {
                    Authorization :`Bearer ${localStorage.getItem("token")}`

                }
            })
            console.log(response.data);
            setHotels(response.data.hotels)
            
        }
        fetchHotels()
    },[])
  return (
    <div>
        {
            hotels.length === 0? 
            <>No Hotels Added Yet</> :
            <>
             {
                hotels.map((item,index)=>(
                    <HotelCard item ={item}/>
                ))
             }
            </>
        }
    </div>
  )
}

export default MyHotels
