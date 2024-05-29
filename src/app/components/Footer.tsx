export default function Footer() {
    return(
        <footer className="pt-[30px] pb-[15px] border-t-[1px] border-t-gray-700">
            <h2 className="text-center font-bold">Contacto</h2>


        <section className="flex flex-col items-center my-10">
            <div>
                <a href="tel:5493812227451" className="font-bold cursor-pointer hover:text-green-800 hover:underline">| +54 9 3812 22-7451 </a>
            </div>

            <div className="flex mt-4 ">
                <div className="pr-4">
                    <a href="https://www.facebook.com/share/82mf597b7WkPvfqp/?mibextid=qi2Omg">
                    <svg xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer bg-black  rounded-full py-[5px] icon icon-tabler icon-tabler-brand-facebook hover:stroke-blue-400" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                    </a>
                </div>

                <div>
                    <a href="https://www.instagram.com/milenaindumentaria0123">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="cursor-pointer bg-black rounded-full py-[5px] icon icon-tabler icon-tabler-brand-instagram hover:stroke-purple-400" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        </footer>
    )
}