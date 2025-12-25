import { ArrowRight, CircleSmall } from "lucide-react"
import Image from "next/image";
import img from "@/public/img3.jpg";


const trackList = [
    {
        title: "MACHINE INTELLIGENCE THEORY AND PRACTICES",
        theme: ["Machine Learning", "Deep Learning", "Physics-Based Machine Learning", "Machine Learning for Computer Vision Solutions", "Machine Learning for Image Processing Solutions", "Multimedia Systems", "Multimedia Tools"],
    },
    {
        title: "MACHINE INTELLIGENCE FOR HEALTH INFORMATICS",
        theme: ["Machine Learning", "Deep Learning", "Physics-Based Machine Learning", "Machine Learning for Computer Vision Solutions", "Machine Learning for Image Processing Solutions", "Multimedia Systems", "Multimedia Tools"],
    },
    {
        title: "MACHINE INTELLIGENCE FOR SECURITY",
        theme: ["Machine Learning", "Deep Learning", "Physics-Based Machine Learning", "Machine Learning for Computer Vision Solutions", "Machine Learning for Image Processing Solutions", "Multimedia Systems", "Multimedia Tools"],
    },
]


export default function Page(){
    return(
        <div className="h-full w-full">
            <div className="relative h-[80vh] w-full overflow-hidden px-5 md:px-10 flex items-center justify-center text-center">
        <Image
          src={img}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />

        <div className="relative z-20 max-w-4xl items-center flex flex-col mt-10">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white italic">
            International Conference on Machine Intelligence 2026
          </h1>
          <p className="md:mt-5 hidden md:flex md:text-lg text-zinc-200 max-w-2xl">
            Aims to bring together leading academic, scientists, Industry experts, researchers and scholars to exchange and share their knowledge about all aspects of machine Intelligence tools and its applications.
          </p>
        <div className="w-fit text-sm md:text-base mt-10 md:mt-10">
          <button className="flex items-center gap-2 bg-[#2B3258] text-white px-5 py-3 font-semibold uppercase">
            <h1 className="">submit paper now</h1>
            <div>
              <ArrowRight />
            </div>
          </button>
        </div>
        </div>

      </div>
            


            <div className="px-10 py-5 md:px-20 h-full w-full">
                <div className="py-10">
                    <h1 className="text-2xl font-semibold ">Call for Contributions</h1>
                    <div className="pt-5 text-justify leading-relaxed">
                        Prospective authors are kindly encouraged to contribute to and help shape the conference through submissions of their research abstracts, papers and e-posters. Also, high quality research contributions describing original and unpublished results of conceptual, constructive, empirical, experimental, or theoretical work in all areas of computational intelligence, data science, health informatics, communication and applications are cordially invited for presentation at the conference. The conference solicits contributions of abstracts, papers and e-posters that address themes and topics of the conference, including figures, tables and references of novel research materials.
                    </div>
                </div>

                {/* themes  */}
                <div className="py-5">
                    <h1 className="text-2xl font-semibold ">Conference Themes</h1>
                    <div className="pt-5 text-justify leading-relaxed">
                        <h5>he ICMITA-2024 Conference themes, grouped in four tracks, are the following (but are not limited to):</h5>
                        <div>
                            {
                                trackList.map((track, id)=>{
                                    return(
                                        <div key={id} className="py-5">
                                            <h3 className="font-semibold">{track.title}</h3>
                                            <div className="pt-2">
                                                {
                                                    track.theme.map((t, i)=>{
                                                        return(
                                                            <div key={i} className="flex items-center gap-1">
                                                                <div className="">
                                                                    <CircleSmall className="text-blue-400" height={12} width= {12} />
                                                                </div>
                                                                <div>{t}</div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* dates */}
                <div>
                    <h1 className="capitalize text-2xl font-semibold py-5">Important dates </h1>
                    <div className="border border-zinc-100">
                        <div className="flex gap-5 md:gap-0 items-center border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 ">Call for paper</h1>
                            <h2 className="w-1/2 ">1st August 2023</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 ">Paper Submission deadline</h1>
                            <h2 className="w-1/2 ">5th February 2024</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 ">Final Acceptance</h1>
                            <h2 className="w-1/2 ">21th February 2024</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 ">Camera Ready Paper Submission</h1>
                            <h2 className="w-1/2 ">28th February 2024</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center p-2">
                            <h1 className="w-1/2 ">Conference Date</h1>
                            <h2 className="w-1/2 ">12 – 13 April 2024</h2>
                        </div>
                    </div>
                </div>

                {/* registration */}
                <div className="pt-10">
                    <h1 className="font-semibold text-2xl py-5">
                            Registrations
                    </h1>
                    <div className="md:w-[55vw] border border-zinc-100 ">
                        <div className="flex items-center  border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 font-semibold">Category</h1>
                            <h2 className="w-1/2 font-semibold">Registration Fee</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 ">Students / Research Scholars</h1>
                            <h2 className="w-1/2 ">4000 INR</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 ">Academicians / Faculty / Industry People</h1>
                            <h2 className="w-1/2 ">6000 INR</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center border-b border-zinc-100 p-2">
                            <h1 className="w-1/2 ">International Participants</h1>
                            <h2 className="w-1/2 ">150 USD</h2>
                        </div>
                        <div className="flex gap-5 md:gap-0 items-center p-2">
                            <h1 className="w-1/2 ">Extra Page Charges</h1>
                            <h2 className="w-1/2 "> 300 INR / 10 USD</h2>
                        </div>
                    </div>
                </div>

                <div className="py-10">
                    <h1 className="text-2xl font-semibold py-5">Publication</h1>
                    <div>
                        <h2>All the accepted and presented papers will be published in the series of <span className="text-blue-600 font-semibold">“Learning and Analytics in Intelligent Systems“</span> by Springer.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}