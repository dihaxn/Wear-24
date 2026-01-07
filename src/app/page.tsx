import { Hero } from "@/components/sections/Hero";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <FeaturedCollection />
    </main>
  );
}
