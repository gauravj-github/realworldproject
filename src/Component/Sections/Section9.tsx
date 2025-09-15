import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import img1 from '../../assets/pt/17789b67a5d3f17e117a9ae9ee06a5fe66a7f83c.png'
import img2 from '../../assets/pt/5f02cbb6cf56bfde210da708d9dc6d1f4c49e5d0.png'
import img3 from '../../assets/pt/f240754308a9fa6fd6d508544a86ac1611c13546.png'

const Section9 = () => {
  const images = [img1, img2, img3,img1,img2,img3];
  return (      

     <div className="w-full h-[500px] flex flex-col items-center justify-center bg-gray-200  px-6 md:px-20">
  {/* Heading Section */}
  <div className="w-full mb-10 p-6 rounded-lg ">
    <span className="bg-blue-800/20 text-blue-400 px-3 py-1 rounded-md text-sm font-medium">
      Real Stories. Real Miracles.
    </span>
    <h1 className="mt-4 text-3xl md:text-4xl font-bold ">
      Inspiring stories of strength & Victories
    </h1>
  </div>

  {/* Swiper Section */}
<Swiper
  spaceBetween={20}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay]}   // 👈 yaha Autoplay bhi include karo
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  className="w-full cursor-pointer"
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
>

  {images.map((src, index) => (
    <SwiperSlide key={index}>
      <img
        src={src}
        alt={`Slide ${index + 1}`}
        className="w-full h-48 object-cover rounded"
      />
    </SwiperSlide>
  ))}
</Swiper>

</div>

   
  )
}

export default Section9