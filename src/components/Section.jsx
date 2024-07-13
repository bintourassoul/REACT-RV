import React from 'react'
import Image1 from '../assets/vu.jpeg'
import  { Link} from 'react-router-dom';

export const Section = () => {
  return (
    <>
    <div className='flex items-center px-10 mt-10'>
    <div>
    <h1 className='text-6xl'>Rendez-Vous</h1>
        <p className='my-10 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat similique aliquam repellendus sed reiciendis voluptate suscipit! Sapiente officia,
             ad, nostrum rerum ullam corporis officiis voluptate doloremque, 
            tenetur dolorem incidunt eius!</p>
               <Link to='/Connexion'>
            <button className='bg-[#00aeb0] w-1/2 text-white py-3 rounded-2xl text-xl font-bold'>
            Commencer</button> 
            </Link>
    </div>
    <div>
        <img src={Image1} className='max-w-xl' alt="" />
      </div>
      </div>
    <div className='flex items-center justify-center p-20 '>
    <div className='w-20 h-1 m-5 bg-[#00aeb0]'></div>
   <div className='w-20 h-1 m-5 bg-neutral-400'></div>
   <div className='w-20 h-1 m-5 bg-neutral-400'></div>
    </div>
    </>
  )
}


export default Section
