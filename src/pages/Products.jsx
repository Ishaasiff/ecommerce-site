import ProductCard from "../Components/ProductCard";

export default function Products({ products, addToCart }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Our Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
