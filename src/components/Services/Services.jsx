import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from "framer-motion"

const Services = () => {
    const { data } = useFetch()

    const breakpoints = {
        // small device
        640: {
            slidesPerView: 2,
        },
        // medium device
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="services" 
            className="max-w-screen-2xl mx-auto my-20">
            <div>
                <h2 className='text-center text-5xl font-bold pb-8'>Services</h2>
                <Swiper
                    breakpoints={breakpoints}
                    spaceBetween={40}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper px-5 md:px-0 "
                    style={{ height: 490 }}
                >
                    <div>
                        {
                            data?.user?.services?.map(item => (
                                <SwiperSlide key={item._id} className=" bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-3 shadow-md shadow-green-300">
                                    <img className="h-[275px] bg-gray-400 rounded-2xl" src={item?.image?.url} alt="service card" />
                                    <div className="">
                                        <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">{item?.name}</h2>
                                        <p className="text-slate-800">{item?.desc}</p>
                                    </div>
                                    <div className="  flex justify-between items-center font-medium">
                                        <h2 className="mt-auto md:text-xl text-gray-800">{item?.charge}</h2>
                                    </div>
                                </SwiperSlide>
                            ))

                        }
                    </div>

                </Swiper>
            </div>

        </motion.div>

    );
};

export default Services;