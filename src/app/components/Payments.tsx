import Image from "next/image";
import transfer from "@/public/imgs/assets/transferencia.png";
import efectivo from "@/public/imgs/assets/efectivo.png";

export default function Payments(){
    return(
        <div className="flex justify-center py-4">

            <Image src={transfer} className="h-8 mx-4" alt="Transferencia" />
            <Image src={efectivo} className="h-8 w-[45px] " alt="Efectivo" />
            
        </div>
    )
}