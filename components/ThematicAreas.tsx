import { CircleSmall } from "lucide-react";

export default function ThematicAreas() {
  return (
    <section className="px-10 md:px-20 py-5 leading-relaxed">
            <h1 className="text-2xl font-semibold">Thematic Areas</h1>
            <div className="py-5">
              <h2>
                The ICMITA-2023 Conference themes, grouped in six tracks, as follows
                (but are not limited to):
              </h2>
              <div className="pt-5">
                <div className="flex items-center gap-2 w-fit">
                  <div className="">
                    <CircleSmall height={12} width={12} />
                  </div>
                  <h4>Machine Intelligence Theory and Practices</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <CircleSmall height={12} width={12} />
                  </div>
                  <h4> Machine Intelligence for Health Informatics</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <CircleSmall height={12} width={12} />
                  </div>
                  <h4>Machine Intelligence for Security</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <CircleSmall height={12} width={12} />
                  </div>
                  <h4>Machine Intelligence for Ambient Technologies</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <CircleSmall height={12} width={12} />
                  </div>
                  <h4>Machine Intelligence for Agriculture and Technology</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <CircleSmall height={12} width={12} />
                  </div>
                  <h4>
                    Machine Intelligent Tools for Education, Research, and
                    Industrial Applications
                  </h4>
                </div>
              </div>
            </div>
          </section>
  )
}
