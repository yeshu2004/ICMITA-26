import Image from "next/image";
import vlogo from "@/public/VITBhopalLogo.png";

export default function About() {
  return (
    <>
      <div className="px-10 md:pt-20 pt-14 pb-5 md:px-20">
        <div>
          <h1 className="font-semibold text-2xl">Welcome To IMCITA 2026</h1>
          <h4 className="pt-5 text-zinc-700 leading-relaxed text-justify">
            The International Conference on Machine Intelligence, Tools and
            Applications (ICMITA) aims to bring together leading academic,
            scientists, Industry experts, researchers and scholars to exchange
            and share their knowledge about all aspects of machine Intelligence
            tools and its applications. It also provides the premier
            interdisciplinary forum for researchers to explore the latest
            innovations within AI, Big Data, and covering the impact it has
            across the technology aspects. The conference serves as a platform
            for researchers, professionals, enthusiasts, practitioners and
            industry experts to gather, exchange ideas, present their latest
            findings and discuss emerging trends and challenges in the field.
            ICMITA conference aims to emphasize the applications of Machine
            Intelligence and key tools that impact recent technology
            applications and innovations. The conference will bring together
            leading academic scientists, researchers and scholars in the domain
            of interest from around the world.
          </h4>
        </div>
      </div>
      <section className="px-10 md:px-20 py-5">
        <h1 className="font-semibold text-2xl mb-6">VIT Bhopal University</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {/* Text Section */}
          <p className="md:col-span-2 text-zinc-700 leading-relaxed text-justify">
            The VIT legacy started from Vellore Engineering College 37 years ago
            under the visionary leadership of Dr. G. Viswanathan,
            Founder-Chancellor, to offer world-class education for the
            development of society. VIT Bhopal University is ably spearheaded by
            Dr. G. Viswanathan, Chancellor; Mr. Sankar Viswanathan, Vice
            President; and Ms. Kadhambari S. Viswanathan, Assistant Vice
            President. The University is witnessing tremendous growth under the
            guidance of Dr. Senthil Arumugam, Vice Chancellor (I/c). Starting
            from the 2017 academic year, the ultra-modern campus spanning over
            300 acres is located in Kothri-Kalan, District Sehore, surrounded by
            lush greenery and a serene environment. VIT Bhopal University offers
            programs in Computer Science, Mechanical, Aerospace, Electronics &
            Communication Engineering, along with MSc, MCA, BBA and other allied
            programs. Student development is supported through clubs and
            dedicated career development cells.
          </p>

          {/* Logo Section */}
          <div className="flex justify-center">
            <Image
              src={vlogo}
              alt="VIT Bhopal Logo"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <div className="px-10 py-5 md:px-20">
        <div>
          <h1 className="font-semibold text-2xl">About SCAI School</h1>
          <h4 className="pt-5 text-zinc-700 leading-relaxed text-justify">
            The School of Computing Science and Engineering (SCSE) was
            established in 2017 and offer 6 UG Programmes, 5 PG Programmes and
            PhD in seven verticals that includes Core Computing and
            Applications, AI/ML, Data Science, Cloud Computing, Healthcare
            Informatics, Gaming and Cyber Security. We have well qualified, the
            experienced, diversified, specialized pool of faculty members from
            different states of India. Our teaching-learning is facilitated
            through Fully Flexible Credit System (FFCS) and Collaborative Active
            Learning through Technologies (CALTECH). Knowledge Acceleration is
            being done through Extra-Curricular and Co-Curricular Venues such as
            Student Clubs, Technical Chapters and Associations. The SCSE is
            strongly connected to the Indian Council for Medical Research
            (ICMR), Bhopal, and Central Academy for Police Training (CAPT) at
            Bhopal, Archeological Survey of India (ASI), Bhopal, EC Council,
            NASSCOM Future Skills through Tie-ups and MoU on various
            Outreach/Research Capacities. If your passion is for computing, you
            have landed at the right place. You can explore opportunities,
            participate and excel to create your destiny.
          </h4>
        </div>
      </div>
    </>
  );
}
