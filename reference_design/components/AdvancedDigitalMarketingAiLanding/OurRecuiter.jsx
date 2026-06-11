"use client"
import React from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import CTAButton from "../common/CtaButton"

import futureGroup from '../../../public/assets/images/futureGroup.png'
import accenture from '../../../public/assets/images/accenture.svg'
import wipro from '../../../public/assets/images/wipro.svg'
import adityaBirla from '../../../public/assets/images/adityaBirla.svg'
import RUPA from '../../../public/assets/images/RUPA.png'

export default function OurRecuiter({ _this }) {
  return (
      <div className='w-full max-w-[1380px] flex flex-col mx-auto gap-6 py-10 px-[20px] md:px-24'>
          {/* Title and Subtitle Block */}
          <div className="w-full flex flex-col items-center text-center">
              <h2 className="text-[#232D63] text-xl sm:text-2xl font-bold leading-tight">
                  Our Students Are Now <span className="text-[#00A2E7]">Working at These Companies</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-3xl">
                  750+ placements in the last year alone. Salary ranging from ₹40,000 to ₹70,000/month — and that's just the start.
              </p>
          </div>

          {/* Marquee Block */}
          <div className='w-full flex items-center justify-around flex-nowrap overflow-hidden whitespace-nowrap flex-shrink-0 py-4 lg:py-6 space-x-8 '>
              <Marquee pauseOnHover autoFill>
                  <Image
                      className="h-[32px] sm:h-[48px] w-auto mx-[15px] lg:mx-[35px] object-contain"
                      width={200}
                      height={48}
                      src={futureGroup}
                      alt="Future Group" />
                  <Image
                      className="h-[32px] sm:h-[48px] w-auto mx-[15px] lg:mx-[35px] object-contain"
                      width={200}
                      height={48}
                      src={accenture}
                      alt="Accenture" />
                  <Image
                      className="h-[44px] sm:h-[68px] w-auto mx-[15px] lg:mx-[35px] object-contain"
                      width={100}
                      height={68}
                      src={wipro}
                      alt="Wipro" />
                  <Image
                      className="h-[70px] sm:h-[108px] w-auto mx-[15px] lg:mx-[35px] object-contain"
                      width={150}
                      height={108}
                      src={adityaBirla}
                      alt="Aditya Birla" />
                  <Image
                      className="h-[35px] sm:h-[55px] w-auto mx-[15px] lg:mx-[35px] object-contain"
                      width={150}
                      height={55}
                      src={RUPA}
                      alt="RUPA" />
              </Marquee>
          </div>

          {/* CTA Button Block */}
          <div className="flex justify-center mt-2">
              <CTAButton 
                  name="See Where Your Future Can Take You →" 
                  styleClasses="bg-[#0056d2] text-white border-0 hover:bg-[#0046b5] shadow-lg shadow-blue-100/50 hover:scale-[1.02] transition-all duration-300 font-bold px-8 py-3 rounded-md text-xs sm:text-sm"
                  _this={_this}
              />
          </div>
     </div>
  )
}
