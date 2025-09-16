import baby from '../../assets/nataliya-melnychuk-0z51VwNLfcs-unsplash.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import google from"../../assets/wired-lineal-2685-logo-square-google.gif"

const Section4 = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:px-8 py-6 md:py-0"
      style={{
        backgroundImage: `url(${baby})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "450px",
      }}
    >
      {/* Left Blue Box */}
      <div className="bg-blue-800 h-[250px] md:h-full w-full md:w-[25%] flex flex-col justify-center items-center gap-2 text-white rounded-lg p-4 md:p-6">
        <h3 className="text-xl md:text-xl font-bold flex  items-center gap-2"><img src={google} className="rounded-full w-[50px]"/>4.9</h3>
        <h3 className="text-xl md:text-xl font-bold">star</h3>
        <h1 className="text-xl md:text-xl font-bold">Based on 14,570 reviews</h1>
        <h1 className='w-full md:w-[100px] font-bold leading-5 md:leading-6 text-center mt-4 md:mt-2 text-sm md:text-base'>
          What our patient’s are saying
        </h1>
      </div>

      {/* Slider */}
      <div className="w-full max-w-[1200px] overflow-hidden cursor-pointer">
        <Swiper
          slidesPerView={1}               // mobile default
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full overflow-hidden"
        >
          {[1,2,3,4].map((item) => (
            <SwiperSlide key={item}>
              <div className="flex items-center justify-center bg-stone-50 h-80 rounded p-6 text-blue-800 text-center">
                I came in with questions, doubts, and a heart full of fear. But I left with answers, reassurance, and hope. Today… I have someone who calls me ‘Mom.’
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Section4
