import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-10 bg-white p-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          E-com Store
        </Link>
        <Link to="/cart" className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
          Cart ({totalItems})
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
