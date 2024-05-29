import Footer from "../components/Footer";
import Jeansgallery from "../components/Jeansgallery";
import Nav from "../components/Nav";
import "../components/styles/jeans.css"
import { Saira_Condensed } from 'next/font/google';
import { Iceberg } from "next/font/google";

const saira = Saira_Condensed({
    weight: "700",
    subsets:['latin'],
  })

  const iceb = Iceberg({
    weight: "400",
    subsets:['latin'],
  })

export default function jeans(){
    return(
    <>
        <Nav/>

        <main className="pt-[65px] w-[100%]">
            <section className="jeanssec h-[270px]  flex items-center  content-center 
            flex-col flex-no-wrap justify-center">
                <div className="container h-[60px] w-[130px] rounded-md ">
                    <h1 className={ ` text-center text-[40px] stroke-gray-100 stroke-[1px] ${saira.className}`}>Jeans</h1>
                </div>
            </section>

            <div className={`w-full h-[30px] text-center bg-black text-gray-100 mt-4 pt-1 ${iceb.className}`}><h2>LAS LOCAS</h2></div>
        
           <section className={`grid-container mt-4 mx-4 [&>p]:${iceb.className}`}>
                {/*line 1 */}
                <div></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>Por unidad</p></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>Por mayor a eleccion llevando 3</p></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>Por curva</p></div>
                {/*line 2 */}
                <div><p className={` text-center font-bold text-[12px] ${iceb.className}`}>Talles del 36 | 46</p></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>$10.900</p></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>$9.900</p></div>
                <div className={` text-center text-[12px] ${iceb.className}`}>$9.300</div>
                {/*line 3 */}
                <div><p className={`text-center font-bold text-[12px] ${iceb.className}`}>Talles especiales 48 | 56</p></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>$12.500</p></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>$11.500</p></div>
                <div><p className={` text-center text-[12px] ${iceb.className}`}>$10.500</p></div>
           </section>

           <Jeansgallery/>

        <Footer/>
        </main>
    </>
    )
}