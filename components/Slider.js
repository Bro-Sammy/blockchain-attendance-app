import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";

function Slider() {
  return (
    <>
      <div className="bg-blue-500 w-full h-full">
        {/* Image Carousel */}
        <div>
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            className="object-fill"
          >
            <SwiperSlide>
              <Image
                src={"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"}
                layout="responsive"
                width={1000}
                height={380}
                blurDataURL={`https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80`}
                placeholder="blur"
                alt="gallery1"
                className="object-cover brightness-50"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"}
                layout="responsive"
                width={1000}
                height={380}
                blurDataURL={`https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80`}
                placeholder="blur"
                alt="gallery2"
                className="object-cover brightness-50"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybWVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"}
                layout="responsive"
                width={1000}
                height={380}
                blurDataURL={`https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybWVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`}
                placeholder="blur"
                alt="gallery2"
                className="object-cover brightness-50"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"https://images.unsplash.com/photo-1538170989343-ce003278e1a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG91bHRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"}
                layout="responsive"
                width={1000}
                height={380}
                blurDataURL={`https://images.unsplash.com/photo-1538170989343-ce003278e1a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG91bHRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`}
                placeholder="blur"
                alt="gallery3"
                className="object-cover brightness-50"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"https://images.unsplash.com/photo-1527847263472-aa5338d178b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80"}
                layout="responsive"
                width={1000}
                height={380}
                blurDataURL={`https://images.unsplash.com/photo-1527847263472-aa5338d178b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80`}
                placeholder="blur"
                alt="gallery3"
                className="object-cover brightness-100"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
