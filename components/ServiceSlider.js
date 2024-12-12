import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

// Importar imágenes de servicios
import Service1Icon from '../public/img/services/service-icon1.svg';
import Service2Icon from '../public/img/services/service-icon2.svg';
import Service3Icon from '../public/img/services/service-icon3.svg';

// Datos de los servicios
const services = [
  {
    id: 1, // Agregar un identificador único
    image: Service1Icon,
    name: 'Pharmacy',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    btnText: 'Explore',
  },
  {
    id: 2,
    image: Service2Icon,
    name: 'Breed-specific Haircuts',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    btnText: 'Explore',
  },
  {
    id: 3,
    image: Service3Icon,
    name: 'Cloths',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    btnText: 'Explore',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2, // Cambia a 2 slides por vista para pantallas más grandes
        },
      }}
      className='serviceSlider min-h-[680px]'
    >
      {services.map((service) => (
        <SwiperSlide
          className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8'
          key={service.id} // Usar un identificador único como `key`
        >
          <Image
            className='mb-9'
            src={service.image}
            alt={service.name} // Agregar atributo alt para accesibilidad
          />
          <div className='text-[26px] font-medium mb-4'>{service.name}</div>
          <div className='text-[20px] mb-8'>{service.description}</div>
          <button className='btn btn-primary'>{service.btnText}</button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
