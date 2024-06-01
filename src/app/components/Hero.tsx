"use client"
import Link from 'next/link';
import './styles/hero.css';
import { Montserrat } from 'next/font/google';


const mont = Montserrat({
    weight: "700",
    subsets:['latin'],
  })


export default function Hero () {
    return (
        <main className="pt-[80px]">
            
            <div className="bg-black h-[30px] flex justify-center items-center">
                <h1 className="text-gray-200 text-center font-semibold text-base tracking-wide">VENTA POR MAYOR &nbsp;</h1>
                <h2 className='text-gray-200 text-center font-semibold text-sm'>& Venta por menor</h2>
            </div>

            <section className='jeans w-[90%] h-[380px] mx-auto mt-[15px] md:h-[460px] max-w-[600px]'>

                <div className="flex flex-col justify-evenly items-end pr-[76px] pt-[20px]">
                    <h2 className='text-white font-bold text-[30px]'>JEANS</h2>
                    <p className='text-white font-bold text-[18px]'>LAS LOCAS</p>
                </div>

            <div className="flex justify-center items-end pt-[180px] md:pt-[260px]">
                <div className='bg-gray-400 w-[150px] h-[40px] rounded-[4px]  
                border-[0.2px] border-black
                shadow-slate-700 shadow-md '>
                    <Link href="/jeans">
                    <button className="w-[100%] h-[100%] font-extrabold text-sm                    
                    transition duration-400 hover:text-slate-800 ">

                        <span className={mont.className}>VER CATALOGO</span>
                    </button>
                    </Link>
                </div>
            </div>
            </section>

            
        </main>
    )
}