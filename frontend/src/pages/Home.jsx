import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <HeroSection />

      <CategorySection />

      <FeaturedProducts />

      <LatestProducts />

    </div>
  );
}

export default Home;