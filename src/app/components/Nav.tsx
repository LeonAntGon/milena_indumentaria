"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import logo from "@/public/imgs/logo bg blanco.png"
import Link from 'next/link';

export default function Nav() {

    const [isDivVisible, setDivVisibility] = useState(false);

        const toggleDivVisibility = () => {
            setDivVisibility(!isDivVisible);   
          }; 

    return (
    
    <header>
        
        <nav 
        className="h-[65px] w-full bg-white flex justify-between
        fixed z-10 border-b-[0.1px] border-gray-700 shadow-gray-900 
        drop-shadow-md shadow-sm">

                <div className='w-[160px] ml-4 mt-1'>
                    <Image 
                    className='w-[100%] h-[100%] max-h-[65px]'
                    alt='logo' 
                    src={logo}
                    objectFit='cover'/>
                </div>
            
            
        {/*Hamburguer */}
            <div className="mx-5 pt-6 [&>span]:h-[3px] [&>span]:rounded-sm
                            cursor-pointer md:hidden"                            
                             onClick={toggleDivVisibility} >
                <span className="block w-6 bg-black mb-[6px]"></span>
                <span className="block w-6 bg-black mb-[6px]"></span>
                <span className="block w-6 bg-black"></span>
            </div>

            {/*Menu Lateral*/}

            <div className={`bg-white bg-blur fixed h-screen w-[50%] transition-all duration-300
            flex flex-col border-l-2 border-black p-2 md:hidden
            ${isDivVisible ? 'translate-x-[100%]':'translate-x-[200%]'}`}>
            
            
                <button type="button" onClick={toggleDivVisibility} 
                     className="rounded-md  inline-block items-center justify-center text-gray-100  focus:outline-none
                    focus:ring-2 focus:ring-inset float-left pt-3 "> 
                <svg className="h-[35px] w-[70px] text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <div className='ml-4 mt-2 '>
                    <hr/>
                    <Link href="/"> <p className='text-black text-lg font-bold my-2'>Inicio</p> </Link>
                    <hr/>
                    <Link href="/jeans"> <p className='text-black text-lg font-bold my-2'>Jeans</p> </Link>
                    <hr/>
                    
                    
                </div>
                    
            </div>
        </nav>
    </header>
    )
}
