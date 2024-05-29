import Image from "next/image";

export default function Info() {

    const handleClick = () => {
        const googleMapsUrl = 'https://maps.app.goo.gl/gTeMF1sS6fvpqg2J7'; // Reemplaza con la URL de Google Maps de tu tienda
        window.open(googleMapsUrl, '_blank');
      };

    return(
        
        
        <section>
            <h4 className="text-center font-bold">Nosotros</h4>

            <div className="flex mx-6 justify-evenly items-center mt-5">
                <div>
                    <p>Realizamos envios</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                        <path d="M3 9l4 0" />
                    </svg>
                </div>
            </div>

            
                <div className="flex mx-6 justify-evenly mt-5">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-center">Calle 6 esquina 5 | Las Talitas Tucumán | Argentina</p>
                    </div>
                </div>
            

            <div className="text-center mt-[40px] mb-[60px]">
                <button
                onClick={handleClick}
                className="bg-[#FFA0A0] font-bold py-2 px-4 rounded 
                border border-black shadow-slate-700 shadow-md hover:shadow-black">

                <p className="text-black font-bold">Ir a Google Maps</p>

                </button>
            </div>
            

        </section>
    )
}