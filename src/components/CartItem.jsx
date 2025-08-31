import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from '../features/cart/cartSlice'

function CartItem({item}) {
    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        dispatch(removeItem(item.id));
    }

    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value);
        dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    };

  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="h-20 w-20 rounded object-contain" />
        <div className="ml-4">
          <h2 className="font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 rounded border border-gray-300 p-1 text-center"
        />
        <p className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={handleRemoveItem}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem