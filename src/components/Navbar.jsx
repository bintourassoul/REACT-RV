import React from 'react'
import logo from '../assets/monlogo.png'
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
      <img src={logo} className='w-28 h-20' alt="" />
      <nav >
        <ul className='flex'>
            <li> <Link to='/'>ACCUEIL</Link>
            </li>
            <li className='mx-16'> <Link to='/MesRendezVous'>MES RENDEZ-VOUS</Link> 
            </li>
            <li> <Link to='/moncompte'> MON COMPTE</Link>
            </li>
        </ul>
      </nav>
      <div>
        <Link to="/connecter">
        <button className='bg-[#00aeb0] p-2 rounded-lg text-white transition'>Se Connecter</button>
        </Link>
        <button className='bg-[#0d0d0f] mx-8 p-2 text-white rounded-lg transition'>Deconnexion</button>
      </div>
    </div>
    <Outlet/>
    </>
  )
}



export default Navbar
