import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { cartItems, cartTotal, clearCart } from '../store/cartStore';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

const paymentMethods = [
  {
    id: 'bank',
    label: 'Transfer Bank',
    icon: 'account_balance',
    detail: 'BCA: 1234567890 a/n Kudus Florist\nBRI: 0987654321 a/n Kudus Florist\nMandiri: 1122334455 a/n Kudus Florist',
  },
  {
    id: 'cod',
    label: 'Cash on Delivery (COD)',
    icon: 'payments',
    detail: 'Bayar saat barang diterima. Tersedia untuk area Kudus Kota.',
  },
  {
    id: 'ewallet',
    label: 'E-Wallet (GoPay / OVO)',
    icon: 'smartphone',
    detail: 'GoPay: 0812-3456-7890\nOVO: 0812-3456-7890',
  },
];

export default function CheckoutForm() {
  const items = useStore(cartItems);
  const total = useStore(cartTotal);

  const [form, setForm] = useState({
    name: '', phone: '', address: '', date: '', note: '',
  });
  const [payment, setPayment] = useState('bank');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi';
    if (!form.phone.trim()) e.phone = 'Nomor WhatsApp wajib diisi';
    if (!form.address.trim()) e.address = 'Alamat wajib diisi';
    if (!form.date) e.date = 'Tanggal pengiriman wajib diisi';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    clearCart();
  };

  if (items.length === 0 && !success) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-6 text-center">
        <span className="material-symbols-outlined text-8xl text-outline-variant">shopping_cart</span>
        <h2 className="font-headline-md text-headline-md text-on-background">Keranjang Anda Kosong</h2>
        <p className="font-body-md text-on-surface-variant max-w-sm">Belum ada produk yang dipilih. Silakan pilih bunga terlebih dahulu.</p>
        <a href="/koleksi" className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label-md hover:bg-primary-container transition-colors">
          Lihat Koleksi Bunga
        </a>
      </div>
    );
  }

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
        <div className="bg-surface-container-lowest rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-background mb-3">Pesanan Diterima!</h2>
          <p className="font-body-md text-on-surface-variant mb-8">
            Pesanan Anda telah diterima! Kami akan menghubungi Anda via WhatsApp untuk konfirmasi.
          </p>
          <a
            href="/"
            className="block w-full bg-primary text-on-primary py-3.5 rounded-lg font-label-md hover:bg-primary-container transition-colors"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    );
  }

  const selectedMethod = paymentMethods.find(m => m.id === payment)!;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
        {/* Delivery */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-6 pb-4 border-b border-outline-variant">
            Detail Pengiriman
          </h3>
          <div className="space-y-6">
            {[
              { id: 'name', label: 'Nama Lengkap', type: 'text', placeholder: 'Masukkan nama lengkap' },
              { id: 'phone', label: 'Nomor WhatsApp', type: 'tel', placeholder: 'Contoh: 0812-3456-7890' },
              { id: 'address', label: 'Alamat Pengiriman (Area Kudus)', type: 'text', placeholder: 'Nama jalan, nomor rumah, kelurahan, kecamatan' },
            ].map(field => (
              <div key={field.id} className="relative">
                <label className="block font-label-md text-on-surface-variant mb-2">{field.label}</label>
                <input
                  type={field.type}
                  value={form[field.id as keyof typeof form]}
                  onChange={e => setForm({ ...form, [field.id]: e.target.value })}
                  placeholder={field.placeholder}
                  className={`w-full bg-transparent border-b-2 py-2 font-body-md text-on-background placeholder:text-outline-variant focus:outline-none transition-colors ${
                    errors[field.id] ? 'border-error' : 'border-outline-variant focus:border-primary'
                  }`}
                />
                {errors[field.id] && <p className="text-error text-xs mt-1 font-label-md">{errors[field.id]}</p>}
              </div>
            ))}

            <div>
              <label className="block font-label-md text-on-surface-variant mb-2">Tanggal Pengiriman</label>
              <input
                type="date"
                value={form.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className={`w-full bg-transparent border-b-2 py-2 font-body-md text-on-background focus:outline-none transition-colors ${
                  errors.date ? 'border-error' : 'border-outline-variant focus:border-primary'
                }`}
              />
              {errors.date && <p className="text-error text-xs mt-1 font-label-md">{errors.date}</p>}
            </div>

            <div>
              <label className="block font-label-md text-on-surface-variant mb-2">Catatan / Pesan untuk Penerima (Opsional)</label>
              <textarea
                value={form.note}
                onChange={e => setForm({ ...form, note: e.target.value })}
                placeholder="Contoh: Tolong sertakan kartu ucapan 'Selamat Ulang Tahun'"
                rows={3}
                className="w-full bg-transparent border-b-2 border-outline-variant py-2 font-body-md text-on-background placeholder:text-outline-variant focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-6 pb-4 border-b border-outline-variant">
            Metode Pembayaran
          </h3>
          <div className="space-y-3 mb-6">
            {paymentMethods.map(method => (
              <label
                key={method.id}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  payment === method.id
                    ? 'border-primary bg-primary/5'
                    : 'border-outline-variant hover:border-primary/40'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={payment === method.id}
                  onChange={() => setPayment(method.id)}
                  className="accent-primary"
                />
                <span className="material-symbols-outlined text-primary">{method.icon}</span>
                <span className="font-label-md text-on-background">{method.label}</span>
              </label>
            ))}
          </div>

          {/* Payment Detail */}
          <div className="bg-surface-container-low rounded-lg p-4">
            <p className="font-label-md text-on-surface-variant text-xs uppercase tracking-widest mb-2">Instruksi Pembayaran</p>
            <pre className="font-body-md text-on-background text-sm whitespace-pre-wrap">{selectedMethod.detail}</pre>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-base hover:bg-primary-container transition-colors shadow-lg shadow-primary/20 active:scale-95"
        >
          Konfirmasi Pesanan
        </button>
      </form>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm sticky top-28">
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-5 pb-4 border-b border-outline-variant">
            Ringkasan Pesanan
          </h3>
          <ul className="space-y-4 mb-6">
            {items.map(item => (
              <li key={item.id} className="flex gap-3">
                <img src={item.image} alt={item.name} className="w-14 h-16 object-cover rounded-lg shrink-0" />
                <div className="flex-1">
                  <p className="font-body-md text-on-background text-sm font-semibold leading-tight">{item.name}</p>
                  <p className="font-label-md text-on-surface-variant text-xs mt-0.5">x{item.quantity}</p>
                  <p className="font-label-md text-primary text-sm mt-1">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-outline-variant pt-4 space-y-2">
            <div className="flex justify-between font-body-md text-on-surface-variant">
              <span>Subtotal</span><span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between font-body-md text-on-surface-variant">
              <span>Ongkir (Kudus)</span><span className="text-primary">Gratis</span>
            </div>
            <div className="flex justify-between font-headline-sm text-headline-sm text-on-background pt-2 border-t border-outline-variant">
              <span>Total</span><span className="text-primary">{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
