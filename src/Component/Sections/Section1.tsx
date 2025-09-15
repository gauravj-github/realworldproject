import baby from '../../assets/nataliya-melnychuk-0z51VwNLfcs-unsplash.jpg'
const Section1 = () => {
  return (
   <div
  className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] bg-cover bg-center flex relative"
  style={{ backgroundImage: `url(${baby})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="flex flex-col h-full px-4 sm:px-8 justify-center gap-4 relative z-10">
    <h1 className="text-white 
                   text-lg sm:text-2xl md:text-3xl lg:text-4xl 
                   font-bold mb-4 
                   max-w-full md:max-w-[60%]">
      What would you like to know about your fertility journey?
    </h1>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <button className="bg-white text-black px-4 py-2 rounded text-sm sm:text-base">
        Book Your Appointment
      </button>
      <button className="text-white px-4 py-2 rounded border border-white text-sm sm:text-base">
        Find My Right Treatment
      </button>
    </div>
  </div>
</div>

 

  )
}

export default Section1