import { Link } from "react-router-dom";

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/products" className="bg-green-600 text-white px-6 py-3 rounded-xl">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Your Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-xl shadow">
            {/* <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" /> */}
            <div className="flex-1 px-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-300 px-2 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, +1)} className="bg-gray-300 px-2 rounded">+</button>
              </div>
            </div>
            <p className="font-bold">${item.price * item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-semibold ml-4"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right text-lg font-semibold">
        Total: ${totalCost.toFixed(2)}
      </div>
      <div className="flex justify-between mt-6">
        <Link to="/products" className="bg-gray-300 px-4 py-2 rounded-xl">
          Continue Shopping
        </Link>
        <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  );
}
