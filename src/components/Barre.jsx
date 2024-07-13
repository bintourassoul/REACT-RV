import React from 'react'
import logo from '../assets/monlogo.png';
import Photo from '../assets/Designer.jpeg'
import { FaHouse } from "react-icons/fa6";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { SiGooglesearchconsole } from "react-icons/si";
import { IoGrid } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FaCreativeCommons } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Barre = () => {
  return (
    <div> 
      <img src={ logo } className='w-25 h-20 m-12 ml-28 rounded-xl' alt="" />
     
      <div className='flex items-center mx-auto gap-4 bg-white p-4'>
      <IoGrid />
      <p>Tableau de Bord</p>
      </div>
      <img src={Photo} className='w-28 h-28 mx-auto m-10 rounded-full' alt="" />
      <ul className='mx-auto'>
        <Link to='/'>
      <li className='flex items-center  gap-4  hover:bg-white p-4'>
     <FaHouse />
      Accueil
      </li>
      </Link>
      <Link to='/Tableau/rv'>
      <li className='flex items-center  gap-4 hover:bg-white p-4'><SiGooglesearchconsole />
        Mes Rendez-Vous</li>
        </Link>
        <Link to='/Tableau/patient'>
      <li className='flex items-center  gap-4 hover:bg-white p-4'><IoMdContacts />
        Mes patients</li>
        </Link>
        <Link to='/Tableau/compte'>
      <li className='flex items-center  gap-4 hover:bg-white p-4'><FaCreativeCommons />
        Mon compte</li>
        </Link>
     </ul>
     <Link to='/'>
     <button className='flex items-center ml-24 m-10 gap-4 hover:bg-black text-white'>
     <HiArrowLeftCircle />
     Deconnexion
     </button>
     </Link>
    </div>
  )
}



export default Barre
