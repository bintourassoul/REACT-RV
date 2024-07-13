import React from 'react'
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Connexion = () => {
  return (
 
    <div>
      <div className='flex'>
    <div className='w-1/4 h-screen'></div>
    <div className='flex flex-col justify-center items-center w-2/4'>
     <h2 className='text-5xl'>S'inscrire</h2>
     <input className='w-full m-5 p-3 bg-slate-200' type="text"  placeholder='Entrer votre nom'/>
     <input className='w-full m-5 p-3 bg-slate-200' type="password"  placeholder='Entrer votre prénom'/>
     <input className='w-full m-5 p-3 bg-slate-200' type="password"  placeholder='Entrer votre Adresse mail'/>
     <input className='w-full m-5 p-3 bg-slate-200' type="password"  placeholder='Entrer votre mot de passe'/>
     <Link to='/Connexion' className='w-full'>
    <button className='bg-[#00aeb0]  text-white  py-2 w-full rounded-2xl text-xl font-bold'>S'inscrire
    </button>
       </Link>
       <Link to='/Connexion' className='w-full'>
    <button className='bg-black flex items-center my-5 justify-center w-full text-white py-2 rounded-2xl text-xl font-bold'>
    Continuer avec google
    <FaGooglePlusG className='mx-7'/>
    </button>
       </Link>
    </div>
    <div className='w-1/4 h-screen'></div>
    </div>
    </div>
  )
}



export default Connexion