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
        
           <section className={`grid-container mt-4 mx-6 [&>p]:${iceb.className}`}>
                
                <div></div>
                <div>Llevando 3</div>
                <div><p>Por curva</p></div>
                <div><p className={`${iceb.className}`}>Talles del 36 al 46</p></div>
                <div>$9900</div>
                <div><p>$10.900</p></div>
                <div><p className={`${iceb.className}`}>Talles especiales 48-56</p></div>
                <div>$----</div>
                <div><p>$12.500</p></div>
           </section>

           <Jeansgallery/>

        <Footer/>
        </main>
    </>
    )
}