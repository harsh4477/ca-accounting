import About from "~/components/about/About";
import Banner from "~/components/banner/Banner";
import Blog from "~/components/blog/Blog";
import Clients from "~/components/clients/Clients";
import Contact from "~/components/contact/Contact";
import Service from "~/components/service/Service";
import Team from "~/components/team/Team";

export default function Home() {
  return (
    <main className="flex flex-col gap-[70px] pb-[70px] relative transition-all duration-300">
      <Banner />
      <Clients />
      <About />
      <Service />
      <Team />
      <Blog />
      <Contact />
    </main>
  );
}
