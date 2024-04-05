import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useFetch from '../../hooks/useFetch';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



const Testimonials = () => {
    const { data } = useFetch();
    console.log(data?.user?.testimonials)

    return (
        <div id='testimonials'
        className='max-w-screen-2xl mx-auto'>
            <div className='text-center my-5 mt-10 space-y-2'>
                <h3 className='text-4xl uppercase font-bold '>testimonials</h3>
                <p className='text-2xl font-bold'>What Client s Say</p>
            </div>

            <div>
                <Swiper
                    slidesPerView={2}
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
                    className="mySwiper "
                >
                    <div >
                        {
                            data?.user?.testimonials.map(item => <SwiperSlide key={item._id}
                            >
                                <div className="rounded-sm shadow-sm bg-green-200 p-5">
                                    <p className="py-5  text-xl ">
                                        <FaQuoteLeft style={{ float: 'left' }}/>
                                        <span className='text-justify'>  {item?.review}</span>
                                        <FaQuoteRight style={{ float: 'right' }} /></p>
                                    <div className='flex gap-5 items-center mb-10'>
                                        <img src={item?.image?.url} alt="user image" className='w-20 rounded-full' />
                                        <div>
                                            <h2 className=" text-3xl font-semibold">{item?.name}</h2>
                                            <p className='text-gray-400'>{item?.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;