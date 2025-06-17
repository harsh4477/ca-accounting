import Banner from "~/components/banner/Banner";
import Service from "~/components/service/Service";

export default function Home() {
  return (
    <main className="flex flex-col gap-[100px] relative">
      <Banner />
      <Service />
    </main>
  );
}
