import img1 from '../../assets/Doctor/c063e01e67ac2d242315a954c7e00553e986de67.png'


const section7 = () => {
  return (
   
  <section className="bg-neutral-50 py-16 px-6 md:px-20">
       <div className="grid md:grid-cols-2 gap-20  p-4">
  {/* Left Column */}
  <div >
    <span className='bg-gray-300 rounded-2xl p-2 text-blue-800 '>The Experts</span>
    <h2 className="text-2xl md:text-4xl font-bold mt-5">
      Meet the Experts Behind the Magic
    </h2>
    <button className="mt-6 px-4 py-2 text-blue-800 rounded-lg border">
View all Doctors    </button>
  </div>

  {/* Right Column */}
  <div className="text-2xl">
    Our team of internationally trained fertility specialists, embryologists, and counselors are here to support y<span className="text-gray-400">ou medically and emotionally. Our team of internationally trained fertility specialists, embryologists.
    </span>
  </div>
</div>
  <div>
    <img src={img1} className='w-[20%]'/>
  </div>
     
    </section>
  );
}


export default section7