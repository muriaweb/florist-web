import { useStore } from '@nanostores/react';
import { cartCount, openCart } from '../store/cartStore';

export default function CartButton() {
  const count = useStore(cartCount);

  return (
    <button
      onClick={openCart}
      className="relative text-primary dark:text-primary-fixed-dim transition-transform scale-95 active:scale-90"
      aria-label="Buka keranjang belanja"
    >
      <span className="material-symbols-outlined">shopping_cart</span>
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none min-w-[18px] min-h-[18px] px-1">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}
