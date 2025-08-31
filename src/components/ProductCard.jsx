import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice.js';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItem(product));
  }

  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl">
      <img src={product.image} alt={product.title} className="mb-4 h-48 w-full object-contain" />
      <div className="flex flex-grow flex-col">
        <h3 className="flex-grow text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="mt-2 text-2xl font-bold text-gray-900">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
