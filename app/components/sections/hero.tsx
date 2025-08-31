import Image from 'next/image'
import React from 'react'
import heroImage from "@/assets/12440637_770727436392217_2854183369251629361_o.jpg"
import logo from '@/assets/Logo-Kaldi-negative.svg'

function Hero() {
  return (
    <>
        <div className="absolute flex flex-col items-center z-10   h-3/4 mt-28">
            <Image src={logo} width={150} height={150} alt="logo"/>
            <h1 className="mt-4 text-white text-shadow-lg">Prostě dobrá kavárna</h1>
            </div>
            <div className='relative'>
            <div className="absolute w-full h-full bg-black opacity-20"></div>
            <Image src={heroImage} width={2048} height={2048} alt="Čokoládový dort" className='max-w-6xl'/>
        </div>
    </>
  )
}

export default Hero
