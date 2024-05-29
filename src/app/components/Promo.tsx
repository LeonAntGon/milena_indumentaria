import './styles/promo.css'

export default function Promo(){
    return(
        <section className="pt-[20px]">
             <div className="bg-black h-[30px] flex justify-center items-center">
                <h2 className='text-white text-center font-semibold text-sm'> Promociones y ofertas</h2>
            </div>
            

            <div className='flex flex-nowrap justify-evenly items-center mt-[15px] '>
                <div className='first h-[270px] w-[44%]'>
                    <h3 className="text-white font-bold text-[16px] text-center mt-4">CALZA <br></br> CON PIEL</h3>

                    <div className='mt-[120px] [&>p]:text-white [&>p]:font-medium [&>p]:text-center flex flex-col'>
                        <p className='text-xs font-medium'>S-XXL</p>
                        <p className="text-base font-semibold">$6900</p>
                    </div>
                </div>
                <div className='second h-[270px] w-[44%]'>
                    <h3 className='text-white font-bold text-[16px] text-center mt-4'>POLERA <br></br> TERMICA</h3>
                    <div className='mt-[122px] [&>p]:text-white [&>p]:text-center flex flex-col'>
                        <p className='text-xs font-medium'>M-XXL</p>
                        <p className="text-base font-semibold">$4800</p>
                    </div>
                </div>
            </div>
        </section>
    )
}