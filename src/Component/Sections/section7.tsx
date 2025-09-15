
const section7 = () => {
  return (
   
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Meet the Experts Behind the Magic
          </h2>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">
            View all Doctors
          </button>
        </div>
        <div>
          <p className="text-gray-600">
            Our team of internationally trained fertility specialists, embryologists, and
            counselors are here to support you medically and emotionally.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-8 items-center">
        <img
          src="/doctor.jpg"
          alt="Doctor"
          className="w-40 h-40 rounded-xl object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">Dr. Nahar S. Malgaonkar</h3>
          <p className="text-gray-600">
            Dr. Nahar S. Malgaonkar is the dedicated and exclusive chief fertility consultant.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded">15+ Years of Experience</span>
            <span className="bg-gray-100 px-3 py-1 rounded">
              MD, DNB, DGO (PDS, DIP Aversion)
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded">
              Fellowship in Reproductive Medicine (Singapore)
            </span>
          </div>
          <p className="mt-4 font-semibold">📍 Mumbai — Chief Fertility Consultant</p>
        </div>
      </div>
    </section>
  );
}


export default section7