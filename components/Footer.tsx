import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-10 bg-[#2B3258]">
      <div className="w-full px-5 md:px-20 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 leading-relaxed">
          <div className="md:w-1/3 pb-5 md:pb-0">
            <h3 className="font-bold text-lg mb-4">IMCITA 2026</h3>
            <p className="text-sm text-zinc-400 font-semibold leading-relaxed text-justify">
              ICMITA conference aims to emphasize the applications of Machine Intelligence and key tools that impact recent technology applications and innovations.
            </p>
          </div>

          <div className="flex gap-20 items-center">
            <div className="">
              <h4 className="font-semibold mb-4">Event</h4>
              <ul className="space-y-2 text-sm text-zinc-400" >
                <li>
                  <Link href="#schedule" className="text-zinc-400 font-semibold">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#speakers" className="text-zinc-400 font-semibold">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href="#tickets" className="text-zinc-400 font-semibold">
                    Tickets
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Info</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 font-semibold">
                    Venue
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 font-semibold">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 font-semibold">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 font-semibold">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 font-semibold">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 font-semibold">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t-blue-100 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-semibold">
          <p className="">© 2026 VIT Bhopal University. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}