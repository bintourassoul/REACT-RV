import React from 'react'
import  Barre  from './Barre';
import { Outlet } from 'react-router-dom';

export const Tableau = () => {
  return (
    <div className='flex'>
    <section className='w-1/5 bg-[#00aeb0] h-screen '>
   <Barre/>
    </section>
    <section className='w-4/5 bg-white  h-screen'>
    <Outlet />
    </section>
    /</div>
     
  )
}



export default Tableau
