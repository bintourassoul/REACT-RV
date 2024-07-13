import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import {Nav} from '../../components/Nav'  


const Mrv = () => {
  const data = new Date().toDateString();
  const heure = new Date().toLocaleTimeString();
  return (
  
    <div>
       <Nav/>
    
     <div className='flex items-center justify-between  my-10'>
     <h2 className='text-3xl text-[#00aeb0] font-bold text-center'>Mes Rendez-Vous</h2>
     <FaCirclePlus className='text-3xl text-[#00aeb0] font-bold'/>
     </div>
     <table class="border-auto w-full border-slate-400" >
  
  <tbody>
    <tr>
      <td class="border-b-2  p-5 border-slate-300">
        <div className='flex gap-5 py-4 items-center'>
      <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span>
        <div className='flex flex-col'>
        <span>{data}</span>
        <span className='text-[#00aeb0] font-semibold'>A.Rama</span>
        </div>
        </div>
      </td>
      <td class="border-b-2 border-slate-300">
      <div className='flex items-end flex-col'>
        <span>{heure}</span>
        <span className='text-[#00aeb0] font-semibold'>
        <FaArrowRight />
        </span>
       
        </div>
      </td>
    </tr>
    <tr>
    <td class="border-b-2  p-5 border-slate-300">
        <div className='flex gap-5 py-4 items-center'>
      <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span>
        <div className='flex flex-col'>
        <span>{data}</span>
        <span className='text-[#00aeb0] font-semibold'>A.Rama</span>
        </div>
        </div>
      </td>
      <td class="border-b-2 border-slate-300">
      <div className='flex items-end flex-col'>
        <span>{heure}</span>
        <span className='text-[#00aeb0] font-semibold'>
        <FaArrowRight />
        </span>
       
        </div>
      </td>
    </tr>
    <tr>
    <td class="border-b-2  p-5 border-slate-300">
        <div className='flex gap-5 py-4 items-center'>
      <span><FaRegCircleUser className='text-3xl text-[#00aeb0]'/></span>
        <div className='flex flex-col'>
        <span>{data}</span>
        <span className='text-[#00aeb0] font-semibold'>A.Rama</span>
        </div>
        </div>
      </td>
      <td class="border-b-2 border-slate-300">
      <div className='flex items-end flex-col'>
        <span>{heure}</span>
        <span className='text-[#00aeb0] font-semibold'>
        <FaArrowRight />
        </span>
       
        </div>
      </td>
    </tr>
  </tbody>
</table>
   
    </div>
    
    
  
  )
}



export default Mrv



