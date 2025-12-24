import img from "@/public/img2.jpg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden px-5 md:px-10">
      {/* Background Image */}
      <Image
        src={img}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-left text-white">
        <div className="flex-col mt-10">
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold w-[80vw] md:w-[90vw] lg:w-[75vw] ">
            International Conference on Machine Intelligence 2026
          </h1>
          <div className="flex flex-col md:flex-row w-fit md:items-center md:gap-10 gap-5 uppercase md:pt-20 md:pb-10 py-10 text-sm md:text-base">
            <div className="font-semibold">
              <h4>location</h4>
              <h3>VIT Bhopal University</h3>
            </div>
            <div className="font-semibold">
              <h4>date</h4>
              <h3>25-26 December 2025</h3>
            </div>
            <div className="font-semibold">
              <h4>organized by</h4>
              <h3>School of Computing Science and Engineering</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center w-fit text-sm md:text-base gap-5">
            <button className="flex items-center gap-2 bg-[#2B3258] px-5 py-3 font-semibold uppercase">
              <h1 className="">submit paper now</h1>
              <div><ArrowRight/></div>
            </button>
            {/* <button className="flex items-center gap-2 text-[#2B3258] bg-white px-5 py-3 font-semibold uppercase">
              <h1 className="">glimpse of 2025</h1>
              <div><ArrowRight/></div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
