
import React from 'react'
import  Design from '../../assets/photo.jpg'

export const Moncompte = () => {
  return (
    <div className='mx-auto'>
        <div>
      <h2 className='text-center text-[#00aeb0] font-bold text-3xl py-4'>Mes Rendez-Vous</h2>
        <span className='border-teal-300 rounded-full '>
          <img src={Design} className='w-full rounded-full p-5' alt="" />
          </span>
          </div>
    <div class="w-full max-w-md mx-auto">
        <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
               
                <input class="shadow appearance-none border rounded w-full p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Doctor Ndiaye"/>
            </div>
            <div class="mb-4">
               
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Adresse: keur-massar"/>
            </div>
            <div class="mb-4">
               
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Téléphone: 70-420-21-44"/>
            </div>
            <div class="mb-4">
               
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Adresse mail: ba@gmail.com"/>
            </div>
            <div class="mb-4">
               
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Mot de pass:........."/>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-[#00aeb0] w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Enregistrer
                </button>
            </div>
        </form>
    </div>
    </div>
     
  )}


export default Moncompte

