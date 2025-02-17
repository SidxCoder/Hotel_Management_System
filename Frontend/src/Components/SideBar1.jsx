import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideBar1 = ({details}) => {
  const navigate = useNavigate()
  function handleLogout(){
    localStorage.removeItem("token");
    // localStorage.removeItem("username");
    // localStorage.removeItem("type")
    navigate("/")
 }
  return (
   
      <div className='xl:w-[20vw] bg-neutral-800 min-h-screen  flex flex-col items-center sticky top-0'>
        <div className='text-4xl font-logo text-center pt-8 pb-14 relative w-full text-white bg-neutral-900 font-bold  '>
            RoomI<span className='text-red-600'>Q</span> 
        </div>

        
          {
            details.map((item,index)=>(
                <div className=' text-lg border cursor-pointer h-16 w-full flex items-center justify-center font-bold text-white hover:bg-yellow-100 hover:text-red-600 transition-all ease-linear duration-300' key={index} onClick={item.set}>
                    {item.name}
                </div>
                
            ))
          }
           <button className='rounded text-white absolute bottom-5  border-2 font-bold border-white px-5 py-1 left-[35%] hover:bg-white   hover:text-red-600 transition-all ease-linear duration-300' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default SideBar1
