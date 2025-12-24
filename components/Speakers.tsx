const speakers = [
  {
    nameOne: "Dr. Milan Simic",
    schoolOne:
      "RMIT University, STEM, School of Engineering, Melbourne, Australia",
    nameTwo: "Prof. Y-W. Chen",
    schoolTwo: "Ritsumeikan University, Japan (YTGC)",
    role: "Plenary Talk",
  },
  {
    nameOne: "Prof. Sung-Bae Cho",
    schoolOne: "onsei University, Korea",
    nameTwo: "Prof. Ashish Ghosh",
    schoolTwo: "ISI, Kolkata, India",
    role: "Key note Speakers",
  },
  {
    nameOne: "Prof. Satchidananda Dehuri",
    schoolOne: "FM University",
    role: "Invited Speakers",
    nameTwo: "Prof. Saroj Kumar Meher",
    schoolTwo: "ISI, Bangalore (YTGC), India",
  }
];

export default function Speakers() {
  return (
    <div id="#speakers">
      <div className="px-5 md:px-20 py-5 w-full flex items-center justify-center leading-relaxed">
        <div className="text-center">
          <h1 className="text-2xl font-semibold pb-5">Featured Speakers</h1>
          <div className="flex flex-col gap-5">
            {speakers.map((speaker, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col text-center items-center"
                >
                  <h1 className="text-[#2B3258] font-semibold text-2xl pb-2">
                    {speaker.role}
                  </h1>
                  <div className="md:flex items-center gap-1">
                    <h3 className="font-semibold">{speaker.nameOne},</h3>
                    <h3>{speaker.schoolOne}</h3>
                  </div>
                  <div className="md:flex items-center gap-1">
                    <h3 className="font-semibold">{speaker.nameTwo},</h3>
                    <h3>{speaker.schoolTwo}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-5">
        <div className="h-px w-full bg-black"></div>
      </div>
      <div className="px-10 md:px-20 py-5 pb-20">
        <h1 className="text-2xl font-semibold pb-5">General Chairs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:col-span-1">
            <h1 className="text-[#2B3258] text-2xl font-semibold">
              Dr. S. Poonkuntran
            </h1>
            <h4 className="">Dean</h4>
            <h4 className="">School of Computing Science and Engineering,</h4>
            <h4 className="">VIT Bhopal University,</h4>
            <h4 className="">Kotri Kalan, Ashta, Near, Indore Road, Bhopal,</h4>
            <h4 className="">Madhya Pradesh 466114.</h4>
          </div>
          <div className="">
            <h1 className="text-[#2B3258] text-2xl font-semibold">
              Dr. Venkat Prasad Padhy
            </h1>
            <h4 className="">Division Head,</h4>
            <h4 className="">AI and ML,</h4>
            <h4 className="">VIT Bhopal University,</h4>
            <h4 className="">Kotri Kalan, Ashta, Near, Indore Road, Bhopal,</h4>
            <h4 className="">Madhya Pradesh 466114.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
