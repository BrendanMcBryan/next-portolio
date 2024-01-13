import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
export default function Home() {
  return (
    <div>
      <Head>
        <title>brendan mcbryan portfolio</title>
        <meta name="description" content="brendans portfolio"></meta>
        <link rel="icon" href="=/favicon.ico" />
      </Head>
      <main className="bg-cyan-400 h-screen">
        <section className="bg-blue-700 ">
          <nav>
            <h1> developed by brendan</h1>
            <ul>
              <li><BsMoonStarsFill /></li>
              <li>
                <a href="https://www.linkedin.com/in/brendan-mcbryan-b5b543b/">
                  linkedin
                </a>
              </li>
              <li>
                <a href="#">resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
