"use client";
import React from 'react'
import { Fragment, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';

const CustomFilter = ({title, options}: CustomFilterProps) => {
  return (
    <div>CustomFilter</div>
  )
}

export default CustomFilter