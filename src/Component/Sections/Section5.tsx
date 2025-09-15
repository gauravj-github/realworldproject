const Section5 = () => {
  return (
    <div className="w-full py-20 px-6 md:px-20 relative bg-neutral-50">
      {/* Background text */}
      <div className="flex justify-center items-center text-center relative z-0">
        <p className="text-center text-3xl md:text-5xl font-semibold text-lime-500 opacity-60 w-[50%]">
          Choosing a fertility clinic means choosing the people who’ll walk beside you. 
          At Progenesis, expert care meets heartfelt support, every step of the way.
        </p>
      </div>

      {/* Cards stacked vertically over text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-10">
        <div className="w-64 h-48 md:w-72 md:h-56 bg-gradient-to-r from-green-200 via-blue-200 to-blue-400 rounded-lg shadow-lg flex items-start justify-start p-4 text-black transform -rotate-2">
          <span className="text-3xl font-bold">01</span>
        </div>

        {/* <div className="w-64 h-48 md:w-72 md:h-56 bg-gradient-to-r from-green-200 via-blue-200 to-blue-400 rounded-lg shadow-lg flex items-start justify-start p-4 text-black transform rotate-5">
          <span className="text-3xl font-bold">02</span>
        </div>

        <div className="w-64 h-48 md:w-72 md:h-56 bg-gradient-to-r from-green-200 via-blue-200 to-blue-400 rounded-lg shadow-lg flex flex-col items-start justify-start p-4 text-black transform -rotate-2">
          <span className="text-3xl font-bold">03</span>
          <p className="mt-4 text-sm text-gray-700">
            World Class In-House ART Lab. We offer you more than a procedure. 
            We offer a chance to hold, to cradle, to begin.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Section5;
