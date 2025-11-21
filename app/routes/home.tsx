import About from "~/components/about/About";
import Banner from "~/components/banner/Banner";
import Blog from "~/components/blog/Blog";
import Clients from "~/components/clients/Clients";
import Contact from "~/components/contact/Contact";
import Header from "~/components/header/Header";
import Service from "~/components/service/Service";
import Team from "~/components/team/Team";

import SmoothScroll from "~/components/smooth-scroll/SmoothScroll";

export default function Home() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="flex flex-col gap-[70px] pb-[70px] relative transition-all duration-300 -mt-24">
          <Banner />
          {/* <Clients /> */}
          <About />
          <Service />
          <Team />
          <Blog />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
