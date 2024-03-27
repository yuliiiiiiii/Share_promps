"use client";
// when using hooks the component needs to be client component
import { CarProps } from '@/types';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { CustomButton } from '.';
import { calculateCarRent } from '@/utils';

interface CarCardProps{
  car: CarProps
}
// the nested interface looks like this:
// interface CarCarProps{
//   car: {
//     city_mpg: number;
//     class: string;
//     combination_mpg: number;
//     cylinders: number;
//     displacement: number;  
//     drive: string;
//     fuel_type: string;
//     highway_mpg: number;
//     make: string;
//     model: string;
//     transmission: string;
//     year: number
//   }
// }

const CarCard = ({car}: CarCardProps) => {
  const {city_mpg, year, make, model} = car
  
  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className='car-card group'>

      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
       <Image 
        src="/hero.png"
        alt='car model'
        fill
        priority
        className='object-contain'
       />
      </div>

      

    </div>
  )
}

export default CarCard