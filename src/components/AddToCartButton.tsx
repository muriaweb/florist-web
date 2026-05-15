import { useState } from 'react';
import { addToCart, openCart } from '../store/cartStore';

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
  variant?: 'solid' | 'outline';
}

export default function AddToCartButton({ id, name, price, image, variant = 'solid' }: Props) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ id, name, price, image });
    openCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const solidClass = 'w-full bg-primary text-on-primary py-3 rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-300 active:scale-95';
  const outlineClass = 'w-full border border-primary text-primary py-3 rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors duration-300 active:scale-95';

  return (
    <button
      onClick={handleAdd}
      className={variant === 'solid' ? solidClass : outlineClass}
    >
      <span className="material-symbols-outlined text-sm">
        {added ? 'check_circle' : 'add_shopping_cart'}
      </span>
      {added ? 'Ditambahkan!' : 'Tambah ke Keranjang'}
    </button>
  );
}
