import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useFetch from '../../hooks/useFetch';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion"



const Testimonials = () => {
    const { data } = useFetch();
    console.log(data?.user?.testimonials)

    const breakpoints = {
        // small device
        640: {
            slidesPerView: 1,
        },
        // large device
        768: {
            slidesPerView: 2,
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            id='testimonials'
            className='max-w-screen-2xl mx-auto mb-20'>
            <div className='text-center my-5 mt-10 space-y-2'>
                <h3 className='text-4xl uppercase font-bold '>testimonials</h3>
                <p className='text-2xl font-bold text-green-800'>What Client s Say</p>
            </div>

            <div>
                <Swiper
                    breakpoints={breakpoints}
                    spaceBetween={40}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper  px-5 md:px-0"
                >
                    <div >
                        {
                            data?.user?.testimonials.map(item => <SwiperSlide key={item._id}
                            >
                                <div className="rounded-sm shadow-sm bg-green-50/50 p-5 shadow-green-500">
                                    <p className="py-5  text-xl ">
                                        <FaQuoteLeft style={{ float: 'left' }} />
                                        <span className='text-justify text-sm md:text-base'>  {item?.review}</span>
                                        <FaQuoteRight style={{ float: 'right' }} /></p>
                                    <div className='flex gap-5 items-center mb-10'>
                                        <img src={item?.image?.url} alt="user image" className='w-14 md:w-20 rounded-full' />
                                        <div>
                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{item?.name}</h2>
                                            <p className='text-sm md:text-base text-gray-800'>{item?.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </motion.div>
    );
};

export default Testimonials;