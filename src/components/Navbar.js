import React from 'react';
import Image from '../components/cucinacompartida1.png';

export default function DefaultNavbar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={Image} className="h-10 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Cucina Compartida</span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-900 rounded-lg focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0">Il tuo profilo</button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}





