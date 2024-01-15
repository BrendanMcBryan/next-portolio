import Head from "next/head";
import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import diImage from "../public/Designing Intent Logo.webp";
export default function Home() {
  return (
    <div>
      <Head>
        <title>brendan mcbryan portfolio</title>
        <meta name="description" content="brendans portfolio"></meta>
        <link rel="icon" href="=/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-tr from-cyan-600 to-teal-400 h-screen px-10">
        <section className="px-10">
          <nav className="py-4 mb-2 flex justify-between ">
            <div className="h10 w-10">
             
              <Image src={diImage} alt="logo" />
            </div>
            <ul className="flex items center">
              <li>
                <BsMoonStarsFill className="cursor-pointer text-2xl text-white" />
              </li>

              <li>
                <a
                  className="bg-gradient-to-bl from-cyan-600 to-teal-600 text-white px-2 py-2 rounded ml-2"
                  href="#"
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
          {/* logo image div */}
          <div className="relative bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full h-80 w-80 overflow-hidden mx-auto mb-5">
            <Image src={diImage} layout="fill" alt="logo" />
          </div>
            <h2 className="text-3xl py-2 text-white font-medium">
              Brendan McBryan
            </h2>
            <h3 className="text-xl py-2">Developer & Designer</h3>
            <p className="text-md text-gray-900 py-5 leading-10">
              expereinced design manager
            </p>
          </div>
          <div className="text-5xl opacity-50 hover:opacity-100 text-white flex justify-center gap-8 py-3 mx-auto">
            <AiFillLinkedin />
            <AiFillYoutube />
            <AiFillTwitterCircle />
          </div>

        </section>
      </main>
    </div>
  );
}
