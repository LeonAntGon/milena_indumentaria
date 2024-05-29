import Image from "next/image"
import './styles/group.css'
import { Saira_Condensed } from "next/font/google"

const saira = Saira_Condensed({
    weight: "800",
    subsets:['latin'],
  })

export default function Group(){
    return(
        <section className="my-[60px] ">

            <div className="text-center item-center">
                <h4 className="text-center font-bold">GRUPO DE WHATSAPP</h4>
                <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-900 rounded-full"></div>
            </div>

            <div className="group h-[300px] flex text-center justify-center items-center flex-col">
                <p className={`titleone  pb-2 ${saira.className}`}>🔥ÚNETE A NUESTRO GRUPO DE WHATS UP🔥</p>
                <p className={`titletwo ${saira.className}`}>NUEVOS INGRESOS + PRECIOS ESPECIALES</p>

                <svg xmlns="http://www.w3.org/2000/svg" className=" my-10 icon icon-tabler icon-tabler-brand-whatsapp" width="84" height="84" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                
                <div className="h-[60px] w-[150px] ">
                    
                    <a className={`bg-[#66FF88] h-full w-full py-[5px] px-6 text-black mt-[60px] rounded-md
                     shadow-black shadow-md hover:shadow-blue-500 ${saira.className}`}
                    href=""
                    target="_blank" 
                    rel="noopener noreferrer"                    
                    >IR AL GRUPO</a>
                    
                </div>
                
            </div>
        </section>
    )
}