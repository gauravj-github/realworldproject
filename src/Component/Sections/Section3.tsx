import img1 from '../../assets/lab/Ivf3_17_ 2 (1).png'
import img2 from '../../assets/lab/Ivf3_17_ 2 (2).png'
import img3 from '../../assets/lab/Ivf3_17_ 2 (3).png'
import img4 from '../../assets/lab/Ivf3_17_ 2.png'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'


const treatments = [
  { title: "In-Vitro Fertilization (IVF)", desc: "We offer more than just procedures. We offer a chance. A chance to hold, to create, to begin.", icon:img1 },
  { title: "Egg Freezing and Preservation", desc: "Your future is uniquely yours. When you're ready, we'll be right here for you.", icon: img2 },
  { title: "Multiple IVF & IUI Failures", desc: "We explore new approaches and tailored treatments to give fresh hope after repeated failed attempts.", icon: img3 },
  { title: "Intrauterine Insemination (IUI)", desc: "From the gentlest touches to guided steps, we guide you with care and precision.", icon: img4 },
  { title: "Male Fertility Solutions", desc: "Fertility is a journey for both partners. We're here at every moment, every partner, every story, every step.", icon: img1 },
  { title: "Pregnancy after Menopause", desc: "Advanced procedures that make motherhood possible, even beyond menopause.", icon: img2 }
];
const Section3 = () => {
  return (
     <section className="bg-gray-50 py-16 px-6 md:px-20 bg-slate-200 ">
       <div className="grid md:grid-cols-2 gap-20  p-4">
  {/* Left Column */}
  <div >
    <span className='bg-gray-300 rounded-2xl p-2 text-blue-800 '>Our Expertise</span>
    <h2 className="text-2xl md:text-4xl font-bold mt-5">
      Being India’s Best Fertility & IVF Center. We Specialize in:
    </h2>
    <button className="mt-6 px-4 py-2 text-blue-800 rounded-lg border">
      View all treatments
    </button>
  </div>

  {/* Right Column */}
  <div className="text-2xl">
    Our wide network of centers ensures you receive expert support closer to
    home, and closer to comfort. Our wide network of centers ensures{" "}
    <span className="text-gray-400">
      you receive expert support closer to home, and closer to comfort. Our wide
      network of centers ensures you receive expert support closer to home, and
      closer to comfort
    </span>
  </div>
</div>

       <div className="grid sm:grid-cols-1 gap-6 mt-10 md:grid-cols-3  overflow-hidden ">
    {treatments.map((items,index)=>(
      <div className="bg-white  rounded-2xl shadow-md flex flex-col justify-center items-center">
                   <div key={index} className="flex justify-between items-start w-full">
  <button className="flex items-center justify-center w-10 h-10  ml-3 mt-4
                     bg-blue-400 rounded-full shadow-md 
                     hover:bg-blue-700 hover:scale-105 transition-all duration-300">
    <ArrowLongRightIcon className="h-5 w-5 text-white" />
  </button>
  
  <img src={items.icon} className="w-[50%] h-[150px] object-contain" />
</div>
                <span className='w-[80%] mb-5'>
                <h1 className="font-semibold mt-3 justify-start">{items.title}</h1>
                <p className="text-gray-600 text-sm mt-2">{items.desc}</p>
  </span>
              </div>))}
              

          </div>
    </section>
  )
}

export default Section3