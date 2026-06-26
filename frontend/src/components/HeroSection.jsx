import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center">

        <div className="flex-1">

          <h1 className="text-5xl font-bold leading-tight">
            Buy Latest
            <br />
            Mobiles &
            Accessories
          </h1>

          <p className="mt-6 text-lg opacity-90">
            Best Deals on Smartphones,
            Earbuds, Chargers and Accessories.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now →
          </Link>

        </div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0">

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
            alt="Mobile"
            className="w-[420px] rounded-2xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default HeroSection;