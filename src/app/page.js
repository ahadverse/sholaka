import ForResellers from "@/components/Home/ForResellers/ForResellers";
import ForSellers from "@/components/Home/ForSellers/ForSellers";
import Hero from "@/components/Home/Hero/Hero";
import HowWeWorks from "@/components/Home/HowWeWorks/HowWeWorks";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TrensingProducts from "@/components/Home/TrendingProducts/TrensingProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowWeWorks />
      <ForSellers />
      <ForResellers />
      <TrensingProducts />
      <Testimonials />
    </div>
  );
}
