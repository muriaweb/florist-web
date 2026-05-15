import { useStore } from '@nanostores/react';
import { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity, closeCart, isCartOpen } from '../store/cartStore';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

export default function CartDrawer() {
  const items = useStore(cartItems);
  const count = useStore(cartCount);
  const total = useStore(cartTotal);
  const open = useStore(isCartOpen);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 998,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: '100%',
          maxWidth: '420px',
          background: '#ffffff',
          zIndex: 999,
          boxShadow: '-4px 0 24px rgba(149,0,42,0.08)',
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid #e3bdbf' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '22px', color: '#95002a' }}>shopping_cart</span>
            <h2 style={{ fontFamily: 'EB Garamond, serif', fontSize: '24px', fontWeight: 600, color: '#191c1d', margin: 0 }}>
              Keranjang ({count})
            </h2>
          </div>
          <button
            onClick={closeCart}
            style={{ fontFamily: 'Material Symbols Outlined', fontSize: '24px', color: '#5b4041', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '50%' }}
            aria-label="Tutup keranjang"
          >
            close
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {items.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '16px', textAlign: 'center' }}>
              <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '64px', color: '#e3bdbf' }}>local_florist</span>
              <p style={{ fontFamily: 'Be Vietnam Pro, sans-serif', color: '#5b4041', fontSize: '16px' }}>Keranjang Anda masih kosong.</p>
              <button onClick={closeCart} style={{ color: '#95002a', fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '14px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
                Mulai Belanja →
              </button>
            </div>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item) => (
                <li key={item.id} style={{ display: 'flex', gap: '12px', padding: '12px', borderRadius: '12px', background: '#f3f4f5' }}>
                  <img src={item.image} alt={item.name} style={{ width: '72px', height: '88px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: 'EB Garamond, serif', fontSize: '16px', fontWeight: 600, color: '#191c1d', margin: '0 0 4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</p>
                    <p style={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '13px', fontWeight: 600, color: '#95002a', margin: '0 0 10px' }}>{formatPrice(item.price)}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e3bdbf', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5b4041', fontSize: '16px' }}
                      >−</button>
                      <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '14px', fontWeight: 600, color: '#191c1d', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e3bdbf', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5b4041', fontSize: '16px' }}
                      >+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ fontFamily: 'Material Symbols Outlined', fontSize: '20px', color: '#8f6f70', background: 'none', border: 'none', cursor: 'pointer', alignSelf: 'flex-start', flexShrink: 0, padding: '4px' }}
                    aria-label="Hapus item"
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #e3bdbf', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif', color: '#5b4041', fontSize: '16px' }}>Total Pesanan</span>
              <span style={{ fontFamily: 'EB Garamond, serif', fontSize: '24px', fontWeight: 600, color: '#95002a' }}>{formatPrice(total)}</span>
            </div>
            <a
              href="/checkout"
              onClick={closeCart}
              style={{ display: 'block', width: '100%', background: '#95002a', color: '#ffffff', padding: '14px', borderRadius: '10px', fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '14px', fontWeight: 600, textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}
            >
              Checkout Sekarang
            </a>
            <button
              onClick={closeCart}
              style={{ width: '100%', border: '1.5px solid #95002a', color: '#95002a', padding: '12px', borderRadius: '10px', fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '14px', fontWeight: 600, background: 'none', cursor: 'pointer' }}
            >
              Lanjut Belanja
            </button>
          </div>
        )}
      </div>
    </>
  );
}
