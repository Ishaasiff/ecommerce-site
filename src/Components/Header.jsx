import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header({ totalItems }) {
  return (
    <header className="flex justify-between items-center bg-green-700 text-white px-6 py-3 shadow-md">
      <Link to="/" className="text-2xl font-bold">🌴 Paradise Nursery</Link>
      <nav className="flex items-center gap-6">
        <Link to="/products" className="hover:text-lime-200">Products</Link>
        <Link to="/cart" className="relative hover:text-lime-200">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
