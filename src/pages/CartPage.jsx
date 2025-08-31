import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem.jsx';

const CartPage = () => {
const cartItems = useSelector(state => state.cart.items);

  // 2. Calculate the total price of all items in the cart.
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 3. If the cart is empty, show a different message.
  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-3xl font-bold">Your Shopping Cart</h1>
        <p className="mb-4">Your cart is currently empty.</p>
        <Link to="/" className="font-medium text-blue-600 hover:underline">
          &larr; Continue Shopping
        </Link>
      </div>
    );
  }

  // 4. If the cart has items, display them.
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold">Your Shopping Cart</h1>
      <div className="rounded-lg bg-white p-6 shadow">
        <ul className="divide-y divide-gray-200">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="mt-6 border-t pt-4 text-right">
          <p className="text-xl font-bold">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartPage