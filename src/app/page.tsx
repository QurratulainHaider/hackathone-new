import { BestProduct } from "@/components/BestProduct";
import ClassicProduct from "@/components/ClassicProduct";
import FeaturedPosts from "@/components/FeaturedPosts";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroSection1 from "@/components/HeroSection1";
import NeuralUniverse from "@/components/NeuralUniverse";
import Link from "next/link"; // Import Link for routing

export default function Home() {
  return (
    <div className="px-[135px] ">
      <Header />
      <HeroSection />
      <HeroSection1 />
      <BestProduct />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts />

      {/* Add the Cart link */}
      <div className="mt-4">
        <Link href="/cart">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Go to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
