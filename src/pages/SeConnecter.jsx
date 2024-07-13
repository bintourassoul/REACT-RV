
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlusG } from "react-icons/fa";


export const SeConnecter = () => {
  return (
    <>
   
      <div className='flex'>
<div className='w-1/4 h-screen'></div>
<div className='flex flex-col justify-center items-center w-2/4'>
 <h2 className='text-5xl'>Se connecter</h2>
 <input className='w-full m-5 p-3 bg-slate-200' type="password"  placeholder='Entrer votre Adresse mail'/>
 <input className='w-full m-5 p-3 bg-slate-200' type="password"  placeholder='Entrer votre mot de passe'/>
 <Link to='/Tableau' className='w-full'>
<button className='bg-[#00aeb0]  text-white  py-2 w-full rounded-2xl text-xl font-bold'>Se connecter
</button>
   </Link>
   <Link to='/SeConnecter' className='w-full'>
<button className='bg-black flex items-center my-5 justify-center w-full text-white py-2 rounded-2xl text-xl font-bold'>
Continuer avec google
<FaGooglePlusG className='mx-7'/>
</button>
   </Link>
   <p>mot de pass oublié ?<span className='text-[#00aeb0]'> s'inscrire</span></p>
   <div className='flex items-center justify-center p-20 '>
   <div className='w-20 h-1 m-5 bg-neutral-400'></div>
   <div className='w-20 h-1 m-5 bg-neutral-400'></div>
   <div className='w-20 h-1 m-5 bg-[#00aeb0]'></div>
   </div>
</div>
<div className='w-1/4 h-screen'></div>

</div>
</>
  )
}



export default SeConnecter
