import img1 from '@/public/gallery/gray/blackfront2.jpg';
import img2 from '@/public/gallery/modelblue.jpg';
import img3 from '@/public/gallery/especial/bwback2.jpg';
import img4 from '@/public/gallery/especial/bwfront.jpg';
import img5 from '@/public/gallery/blue/bluefront2.jpg';
import img6 from '@/public/gallery/blue/blueback2.jpg';
import img7 from '@/public/gallery/black/blackback.jpg';
import img8 from '@/public/gallery/black/blackfront.jpg';
import img9 from '@/public/gallery/engomado/engomadof.jpg';
import img10 from '@/public/gallery/engomado/engomadob.jpg';


const images = [ img1 ,img2, img3,img4,img5,img6,img7,img8,img9,img10];

export default function Jeansgallery(){
    return(
        <section className='grid grid-cols-2 gap-3 mx-6 my-6 sm:grid-cols-3 md:grid-cols-4'>

{images.map((img, index) => (
                    <div className='h-[230px] sm:h-[250px]' key={index}>
                        <img className="w-full h-full rounded-md" src={img.src} alt="" />
                    </div>
                ))}
        </section>
    )
}