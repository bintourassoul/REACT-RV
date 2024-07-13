import React from 'react'
import { FaBell } from 'react-icons/fa6'
import  Design from '../../assets/Designer.jpeg'
import Gril from '../../components/Gril'



export const Accueils = () => {
 
    const table =[
      {
        classess:'bg-[#00aeb0] p-10 rounded-xl', 
        numberess:'128', 
        textess:'Listes patients'
      },
      {
        classess:'bg-green-600 p-10 rounded-xl', 
        numberess:'98',
         textess:'Listes des rendez-vous' 
      },
      {
        classess:'bg-pink-600 p-10 rounded-xl',
        numberess:'42',
        textess:'Listes des personnels' 
      },
      {
        classess:'bg-yellow-600 p-10 rounded-xl',
        numberess:'50',
        textess:'Listes des frais' 
      },
    ];
    return (
    <div className='p-10'>
    <div className='flex justify-between items-start p-10'>
      <div className='w-1/2'>
        <h2 className='text-[#00aeb0] text-3xl font-bold'>Bienvenue! Doctor</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Doloribus quisquam nobis veniam, eveniet quam ab sunt distinctio esse nesciunt, 
          iure dignissimos nemo cum non assumenda?
           Cumque illo neque asperiores sapiente!</p>
      </div>
    
    <div className='flex items-center gap-5'>
   <FaBell /> <span className='text-red-600 absolute mx-3  '>8</span>
    <img src={Design} className='w-28 h-28 rounded-full' alt="" />
    </div>
    </div>
    <h2 className='text-5xl'>Rendez-Vous</h2>
    <div className='grid grid-cols-2 gap-5 my-5'>
      {table.map((Rama) => (
        <Gril 
        classe={Rama.classess}
         number={Rama.numberess}
        texte={Rama.textess}
        />
      ))
      }
  </div>
  </div>
  )
}


export default Accueils

