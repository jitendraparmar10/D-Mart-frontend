import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router';
import { Autoplay } from 'swiper/modules';

const images = [
    {
        id:1,
        link:"https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1oct24-crsl-dg-mum.jpg&w=1920&q=75",
    },
    {
        id:2,
        link:"https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1aug24-crsl-womenscorner1.jpg&w=1920&q=75",
    },
    {
        id:3,
        link:"https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F31mar25-crsl-nc-newarrivals.jpg&w=1920&q=75",
    },
    {
        id:4,
        link:"https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1aug24-crsl-kitchenmela.jpg&w=1920&q=75",
    },
    {
        id:5,
        link:"https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F3april25-hmpg-ds-mmr.jpg&w=1920&q=75",
    },
]

const ImageCarousel = () => {
    return (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{delay:2000}}
              modules={
                [Autoplay]
              }
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    images.map((image) =>(
                        <SwiperSlide key={image.id}>
                            <Link to={"/about"}>
                             <img src={image.link} alt="carousel" className='w-screen sm:h-[45vh] object-center'/>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
    );
};

export default ImageCarousel;