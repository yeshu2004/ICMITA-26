import Image from "next/image";
import img from "@/public/img3.jpg";
import img_viswanathan from "@/public/Viswanathan.jpg";
import vp from "@/public/vp.jpg";
import avp from "@/public/avp.jpg";
import { ArrowRight } from "lucide-react";

const chairs = [
  {
    name: "Dr. S. Poonkuntran",
    title: "Dean, School of Computing Science and Engineering",
    collage: "VIT Bhopal University",
  },
  {
    name: "Dr. Venkat Prasad Padhy",
    title: "Division Head of AI and ML",
    collage: "VIT Bhopal University",
  },
];

const committeeMembers = [
  { name: "Dr. Nilamadhab Mishra", college: "VIT Bhopal University" },
  { name: "Dr. Sathish Kumar L.", college: "VIT Bhopal University" },
  { name: "Dr. Swagat Kumar Samantaray", college: "VIT Bhopal University" },
  { name: "Dr. J Subash Chandra Bose", college: "VIT Bhopal University" },
  { name: "Dr. Rudra Kalyan Nayak", college: "VIT Bhopal University" },
  { name: "Dr. S. Periyanayagi", college: "VIT Bhopal University" },
  { name: "Dr. I. Jasmine S. Jeya", college: "VIT Bhopal University" },
  { name: "Dr. Santosh Kumar Tripathy", college: "VIT Bhopal University" },
  { name: "Dr. Gopal Singh Tandel", college: "VIT Bhopal University" },
  { name: "Dr. Trapti Sharma", college: "VIT Bhopal University" },
  { name: "Dr. Chandan Kumar Behera", college: "VIT Bhopal University" },
];

export default function Page() {
  return (
    <main className="w-full">
      {/* HERO */}
      <div className="relative h-screen w-full overflow-hidden px-5 md:px-10 flex items-center justify-center text-center">
        <Image
          src={img}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />

        <div className="relative z-20 max-w-4xl items-center flex flex-col mt-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white italic">
            Meet the Organizing Committee
          </h1>
          <p className="mt-5 text-base md:text-lg text-zinc-200 max-w-2xl">
            The minds and leaders working behind the scenes to bring this
            conference to life through vision, coordination, and commitment.
          </p>
        <div className="w-fit text-sm md:text-base mt-5 md:mt-10">
          <button className="flex items-center gap-2 bg-[#2B3258] text-white px-5 py-3 font-semibold uppercase">
            <h1 className="">submit paper now</h1>
            <div>
              <ArrowRight />
            </div>
          </button>
        </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="px-10 md:px-20 py-10 space-y-5 text-center md:text-left">
        {/* CHIEF PATRON */}
        <div>
          <h1 className="text-2xl font-semibold uppercase mb-8">
            Chief Patron
          </h1>

          <div className="flex justify-center">
            <div className="text-center w-fit bg-[#2B3258] text-white">
              <div className="h-[40vh] w-[32vh] relative">
                <Image
                  alt=""
                  fill
                  priority
                  className="object-cover object-center"
                  src={img_viswanathan}
                />
              </div>
              <div className="py-3">
                <h2 className="font-semibold">Hon’ble Dr. G. Viswanathan</h2>
                <h3 className="text-blue-200 text-sm">Founder & Chancellor</h3>
              </div>
            </div>
          </div>
        </div>

        {/* PATRON */}
        <div className="pt-10">
          <h1 className="text-2xl font-semibold uppercase mb-5 text-center md:text-left">
            Patron
          </h1>

          <div className="flex flex-col md:flex-row justify-center md:gap-[25vw] gap-10 items-center">
            <div className="text-center w-fit bg-[#2B3258] text-white border">
              <div className="h-[40vh] w-[32vh] relative">
                <Image
                  alt=""
                  fill
                  priority
                  className="object-cover object-center"
                  src={vp}
                />
              </div>
              <div className="py-3">
                <h2 className="font-semibold">Mr. Sankar Viswanathan</h2>
                <h3 className="text-blue-200 text-sm">Vice President</h3>
              </div>
            </div>

            <div className="text-center w-fit bg-[#2B3258] text-white">
              <div className="h-[40vh] w-[35vh] relative">
                <Image
                  alt=""
                  fill
                  priority
                  className="object-cover object-center"
                  src={avp}
                />
              </div>
              <div className="py-3">
                <h2 className="font-semibold">Ms. Kadhambari S. Viswanathan</h2>
                <h3 className="text-blue-200 text-sm">
                  Assistant Vice President
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* CO PATRON */}
        <div className="pt-10">
          <h1 className="text-2xl font-semibold uppercase mb-5 text-center md:text-left">
            Co Patron
          </h1>

          <div className="flex flex-col md:flex-row justify-center md:gap-[25vw] gap-10 items-center">
            <div className="text-center w-fit bg-[#2B3258] text-white border">
              <div className="h-[40vh] w-[32vh] relative">
                <Image
                  alt=""
                  fill
                  priority
                  className="object-cover object-center"
                  src={vp}
                />
              </div>
              <div className="py-3">
                <h2 className="font-semibold">Mr. Sankar Viswanathan</h2>
                <h3 className="text-blue-200 text-sm">Vice President</h3>
              </div>
            </div>

            <div className="text-center w-fit bg-[#2B3258] text-white">
              <div className="h-[40vh] w-[35vh] relative">
                <Image
                  alt=""
                  fill
                  priority
                  className="object-cover object-center"
                  src={avp}
                />
              </div>
              <div className="py-3">
                <h2 className="font-semibold">Ms. Kadhambari S. Viswanathan</h2>
                <h3 className="text-blue-200 text-sm">
                  Assistant Vice President
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* General chair */}
        <div className="pt-10">
          <h1 className="text-2xl font-semibold pb-2">General Chairs</h1>
          {chairs.map((member, id) => {
            return (
              <div key={id} className="py-2">
                <h3 className="font-semibold text-[#2B3258]">{member.name}</h3>
                <h3 className="italic">{member.title}</h3>
                <h3>{member.collage}</h3>
              </div>
            );
          })}
        </div>

        {/* Program and Organizing Committee Members */}
        <div className="pt-5">
          <h1 className="text-2xl font-semibold pb-4">
            Program and Organizing Committee Members
          </h1>
          <div className="flex flex-col md:gap-px gap-2">
            {committeeMembers.map((member, id) => {
              return (
                <div key={id}>
                  <div className="flex flex-col md:flex-row">
                    <span className="font-semibold text-[#2B3258]">
                      {member.name},{" "}
                    </span>
                    {member.college}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
