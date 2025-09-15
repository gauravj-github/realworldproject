import img1 from '../../assets/nataliya-melnychuk-0z51VwNLfcs-unsplash.jpg'
const Footer = () => {
  return (
    <section className="relative bg-gray-100">
      <img
        src={img1}
        alt="Baby with toy"
        className="w-full h-[80vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 md:p-20">
        <h1 className="text-white text-2xl md:text-4xl font-semibold max-w-lg">
          Aiming to be the benchmark for reproductive health care services.
        </h1>
        <div className="mt-6 flex flex-wrap gap-6 text-gray-200 text-sm">
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              <li>International Patients</li>
              <li>EMI Options</li>
              <li>Our Centers</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Additional Links</h3>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Follow/FAQ</li>
              <li>Secured Domain</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer