import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import { categories } from '../data/categories';
import ProductCard from '../components/ui/ProductCard';
import type { Category } from '../types';

type MarketplaceFiltersProps = {
  selectedCategory: Category | 'all';
  setSelectedCategory: (c: Category | 'all') => void;
  sortBy: string;
  setSortBy: (v: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
};

function MarketplaceFilters({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
}: MarketplaceFiltersProps) {
  return (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Category</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <button type="button" onClick={() => setSelectedCategory('all')} className={selectedCategory === 'all' ? 'btn-primary' : 'btn-ghost'} style={{ justifyContent: 'flex-start', fontSize: '0.8rem', padding: '8px 12px' }}>All Categories</button>
          {categories.map(cat => (
            <button type="button" key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={selectedCategory === cat.id ? 'btn-primary' : 'btn-ghost'} style={{ justifyContent: 'flex-start', fontSize: '0.8rem', padding: '8px 12px' }}>
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Sort By</h3>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="input-field">
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <div>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Price Range</h3>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="number" placeholder="Min" value={priceRange[0]} onChange={e => setPriceRange([+e.target.value, priceRange[1]])} className="input-field" style={{ width: '50%' }} />
          <span style={{ color: 'var(--text-tertiary)' }}>—</span>
          <input type="number" placeholder="Max" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], +e.target.value])} className="input-field" style={{ width: '50%' }} />
        </div>
      </div>
    </div>
  );
}

export default function MarketplacePage() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(
    (searchParams.get('category') as Category) || 'all'
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const searchQuery = searchParams.get('search') || '';

  const filtered = useMemo(() => {
    let result = [...mockProducts];
    if (searchQuery) result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.tags.some(t => t.includes(searchQuery.toLowerCase())));
    if (selectedCategory !== 'all') result = result.filter(p => p.category === selectedCategory);
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'popular') result.sort((a, b) => b.views - a.views);
    else result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return result;
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  const filterProps: MarketplaceFiltersProps = {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
  };

  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 className="section-title">Marketplace</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {filtered.length} {searchQuery ? `results for "${searchQuery}"` : 'products available'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setShowFilters(!showFilters)} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Active filters */}
        {(selectedCategory !== 'all' || searchQuery) && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            {selectedCategory !== 'all' && (
              <span className="badge badge-primary" style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('all')}>
                {categories.find(c => c.id === selectedCategory)?.name} <X size={12} />
              </span>
            )}
          </div>
        )}

        <div style={{ display: 'flex', gap: 24 }}>
          {/* Desktop Filter Sidebar */}
          <div className="card-flat desktop-filter" style={{ width: 260, flexShrink: 0, alignSelf: 'flex-start', position: 'sticky', top: 88, display: 'none' }}>
            <MarketplaceFilters {...filterProps} />
          </div>

          {/* Mobile Filter Drawer */}
          {showFilters && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-overlay)' }} onClick={() => setShowFilters(false)} />
              <div style={{ position: 'relative', width: 300, maxWidth: '85vw', height: '100%', background: 'var(--bg-primary)', overflowY: 'auto', marginLeft: 'auto' }} className="animate-slide-down">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border-primary)' }}>
                  <h3 style={{ fontWeight: 700 }}>Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="btn-ghost" style={{ padding: 6 }}><X size={20} /></button>
                </div>
                <MarketplaceFilters {...filterProps} />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div style={{ flex: 1 }}>
            {filtered.length > 0 ? (
              <div className="product-grid">
                {filtered.map(product => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-tertiary)' }}>
                <p style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</p>
                <h3 style={{ fontWeight: 600, marginBottom: 8 }}>No products found</h3>
                <p style={{ fontSize: '0.875rem' }}>Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) { .desktop-filter { display: block !important; } }
      `}</style>
    </div>
  );
}
