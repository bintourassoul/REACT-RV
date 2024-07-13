
import React from 'react'
import { FaBell } from 'react-icons/fa6'
import  Design from '../assets/Designer.jpeg'


export const Nav= () => {
  return (
    <div className='flex items-center justify-between'>
 <input type="search" 
   placeholder='Rechercher' 
   className='bg-black rounded-full mx-auto w-2/5 p-4 text-white' /> 
 
   <div className='flex items-center gap-5'>
   <span className='text-red-600 absolute mx-3 '>8</span><FaBell/> 
    <img src={Design} className='w-20  rounded-full' alt="" />
    </div>
     </div>
  )
}

export default Nav

