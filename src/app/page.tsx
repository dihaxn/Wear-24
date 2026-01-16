import { ScrollSnapper } from "@/components/utils/ScrollSnapper";
import { Hero } from "@/components/sections/Hero";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";

export default function Home() {
  return (
    <main>
      <ScrollSnapper />
      <Hero />
      <NewArrivals />
      <FeaturedCollection />
    </main>
  );
}
