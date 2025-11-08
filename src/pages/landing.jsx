import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
    >
      <h1 className="text-5xl font-bold mb-4 bg-black/40 px-6 py-3 rounded-xl">
        Welcome to Paradise Nursery
      </h1>
      <p className="max-w-xl text-center mb-6 bg-black/40 p-4 rounded-xl">
        Discover a world of lush greenery and bring nature into your home with our premium selection
        of houseplants. Paradise Nursery — your home for fresh air and fresh vibes.
      </p>
      <Link
        to="/products"
        className="bg-lime-500 hover:bg-lime-600 text-lg px-6 py-3 rounded-xl font-semibold"
      >
        Get Started
      </Link>
    </div>
  );
}
