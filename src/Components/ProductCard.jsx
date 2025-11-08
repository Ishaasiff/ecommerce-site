export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-2xl p-3 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-green-700 font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 mt-2 rounded-xl hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
