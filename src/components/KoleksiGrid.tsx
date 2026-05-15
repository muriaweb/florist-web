import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

const IMG1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7ochCDECyoryZF7Z359b8fno0-iDZZ5FpXtHSZaSkkLZA0f-CiwLWadHI0hBfz-xsPjTPy8nXLi2qrTVlKmby6u5_I6KSU93tUTC6qj7HgdsHjprFK-YUnc6bfuuhA4cYCsJNnISRF_mrsg_hlqOBavP7dsB2AUT67sYBnf9uLV_bowes1h6pAQynCDQNB3F8zOd3VkpiCBu0mK51FZM92kCxnRsfh4UUMuGWgnHK0G-EB43w1wwTaRANzc30Hdz2xDcqeC2eES4';
const IMG2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVDR9NLUmycz533WnmTb9eHsTaOCFNXsMOYROSlfrbn5GzQwL7aDpBp3mS_axm43utVWrxmsbgfvviq3e3ktD2rJD_pnXt9nkMvliLVAZvPCTVywNN-Ftf6TxQ3XpHbH6pPFIRiuzSZRLB7MRzHx-mvWggE4pvkXkbUcX7y11paXMpWEejDmLTe7UozUUm5UEnocujaXutZzNM4gbYWXuycuuk0CYmFLtlby689hehjsN0Litw9qxwpJwpENqMpc3A3tgBag7oogQ';
const IMG3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhh-TflekFygB3XyZOhG7VZ3ZuQQ78xgaTrwLShT0yxudfTFRVSBZWyoV0-RIYVmCcZ9CwXXfHB4xfDd7km6iifPy3ESPdMqodQUFi1RJYyDcGra-iC2BHHN_G4o9-mvX_mk6apOmK7OgPU6MBT5I60zLM_IVFJZDL1uHq01TAhK1li_LShmFUBnAN_VsD_ifQaZfT1pdKMl2kL5Wpl7n5wsG-wN7-DpkpDb9qBmuokuj2Hj6Rd85Rcya4Kgq4moBFI3n3Mnua6o4';
const IMG4 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-6LFgB9cbH6wd-xiv8AicGLOu3rw6OIPRCbkZipOUjzKLt6gpFyewy6REhlFOO3xInJetE0A5b3ONzDeleOcflWN36heT_Do2AYeZULxahFk1O5OXE6gtidZw4Fnfw_Grft0PWKDtrdvKSmDtnH7Kl3yzVMeD9ddSURdSnQr0c8CogOKoDwbJMsfum7lSE6drNTbRK0PSngqF63566zWe2zl54rZ4Cjp9q-E1vP8pJKUyeZ4G6neRoDQB6wdzYCDpYlf719cTkvM';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

const products: Product[] = [
  { id: 'red-romance', name: 'Red Romance Bouquet', price: 150000, image: IMG1, category: 'Buket Mawar', badge: 'Favorit' },
  { id: 'crimson-love', name: 'Crimson Love', price: 150000, image: IMG2, category: 'Buket Mawar' },
  { id: 'ruby-serenade', name: 'Ruby Serenade', price: 175000, image: IMG3, category: 'Rangkaian Meja' },
  { id: 'velvet-passion', name: 'Velvet Passion', price: 250000, image: IMG4, category: 'Buket Mawar', badge: 'Premium' },
  { id: 'tulip-dream', name: 'Tulip Dream Bouquet', price: 185000, image: IMG2, category: 'Buket Tulip' },
  { id: 'scarlet-tulip', name: 'Scarlet Tulip Garden', price: 200000, image: IMG1, category: 'Buket Tulip', badge: 'Baru' },
  { id: 'desk-elegance', name: 'Desk Elegance Arrangement', price: 125000, image: IMG3, category: 'Rangkaian Meja' },
  { id: 'office-bloom', name: 'Office Bloom', price: 95000, image: IMG4, category: 'Rangkaian Meja' },
  { id: 'graduation-glory', name: 'Graduation Glory', price: 300000, image: IMG1, category: 'Wisuda', badge: 'Terlaris' },
  { id: 'scholar-bouquet', name: 'Scholar Bouquet', price: 275000, image: IMG2, category: 'Wisuda' },
  { id: 'bridal-bliss', name: 'Bridal Bliss', price: 450000, image: IMG3, category: 'Pernikahan', badge: 'Premium' },
  { id: 'wedding-arch', name: 'Wedding Arch Bouquet', price: 500000, image: IMG4, category: 'Pernikahan' },
  { id: 'mini-garden', name: 'Mini Garden Box', price: 75000, image: IMG3, category: 'Rangkaian Meja' },
  { id: 'rose-cascade', name: 'Rose Cascade', price: 220000, image: IMG1, category: 'Buket Mawar' },
  { id: 'tulip-sunset', name: 'Tulip Sunset', price: 165000, image: IMG2, category: 'Buket Tulip' },
  { id: 'royal-grad', name: 'Royal Graduation Bouquet', price: 350000, image: IMG4, category: 'Wisuda', badge: 'Eksklusif' },
];

const categories = ['Semua', 'Buket Mawar', 'Buket Tulip', 'Rangkaian Meja', 'Wisuda', 'Pernikahan'];

export default function KoleksiGrid() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-label-md text-sm transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-primary text-on-primary shadow-md shadow-primary/20'
                : 'bg-surface-container text-on-surface-variant hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="font-body-md text-on-surface-variant mb-8">
        Menampilkan <span className="text-primary font-semibold">{filtered.length}</span> produk
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
        {filtered.map(product => (
          <div
            key={product.id}
            className="group bg-surface-bright rounded-xl overflow-hidden shadow-sm shadow-secondary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {product.badge && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-label-md text-xs">
                  {product.badge}
                </div>
              )}
              <div className="absolute bottom-3 left-3">
                <span className="bg-black/40 text-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-label-md">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-headline-sm text-on-background mb-1 text-base font-semibold">{product.name}</h3>
              <p className="font-label-md text-primary text-base mb-5">{formatPrice(product.price)}</p>
              <AddToCartButton
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                variant="solid"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
