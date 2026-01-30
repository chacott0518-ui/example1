export interface NavLink {
  label: string;
  href: string;
}

export interface StyleItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

export interface PriceItem {
  title: string;
  price: string;
  description: string;
}

export interface ReviewItem {
  text: string;
  author: string;
  role: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'DESIGNER', href: '#designer' },
  { label: 'STYLE', href: '#lookbook' },
  { label: 'PRICE', href: '#price' },
  { label: 'REVIEW', href: '#review' },
  { label: 'BOOKING', href: '#booking' }
];

export const STYLE_CATEGORIES = ['All', 'Editorial', 'Minimal', 'Avant-Garde', 'Commercial'];

export const STYLE_GALLERY: StyleItem[] = [
  {
    id: 'style-0',
    title: 'LOOK 01',
    category: 'Editorial',
    imageUrl: 'https://i.pinimg.com/1200x/07/30/4b/07304bfa3d8bef1f60dd1a78d7b643b4.jpg',
    year: '2024'
  },
  {
    id: 'style-1',
    title: 'LOOK 02',
    category: 'Minimal',
    imageUrl: 'https://i.pinimg.com/736x/67/77/a6/6777a631057a7252aa56a88c765846e4.jpg',
    year: '2024'
  },
  {
    id: 'style-2',
    title: 'LOOK 03',
    category: 'Avant-Garde',
    imageUrl: 'https://i.pinimg.com/736x/2d/60/dd/2d60dd57786cea38f38fb1d7ffcd353e.jpg',
    year: '2024'
  },
  {
    id: 'style-3',
    title: 'LOOK 04',
    category: 'Commercial',
    imageUrl: 'https://i.pinimg.com/1200x/6d/a4/7e/6da47ebce450d056d1a13a6e9e939d7c.jpg',
    year: '2024'
  },
  {
    id: 'style-4',
    title: 'LOOK 05',
    category: 'Editorial',
    imageUrl: 'https://i.pinimg.com/736x/27/a5/f5/27a5f5fe0116da3916deb853830c0070.jpg',
    year: '2024'
  },
  {
    id: 'style-5',
    title: 'LOOK 06',
    category: 'Minimal',
    imageUrl: 'https://i.pinimg.com/736x/06/69/20/066920071cc3f62ebfd5d75f83b58123.jpg',
    year: '2024'
  },
  {
    id: 'style-6',
    title: 'LOOK 07',
    category: 'Avant-Garde',
    imageUrl: 'https://i.pinimg.com/736x/fb/b7/2e/fbb72eb3e1286ca0e709ec03f5bd5d96.jpg',
    year: '2024'
  },
  {
    id: 'style-7',
    title: 'LOOK 08',
    category: 'Commercial',
    imageUrl: 'https://i.pinimg.com/1200x/ef/a6/91/efa691ea0de0afee480b02ef583e594a.jpg',
    year: '2024'
  },
  {
    id: 'style-8',
    title: 'LOOK 09',
    category: 'Editorial',
    imageUrl: 'https://i.pinimg.com/736x/bd/84/11/bd84111ba89d3cfa90c4d15a2ae42d6a.jpg',
    year: '2024'
  },
  {
    id: 'style-9',
    title: 'LOOK 10',
    category: 'Minimal',
    imageUrl: 'https://i.pinimg.com/1200x/44/6b/87/446b8770d5a14f29d24fc6ae4875e059.jpg',
    year: '2024'
  },
  // 나머지 40개는 자동 생성
  ...Array.from({ length: 40 }).map((_, i) => ({
    id: `style-${i + 10}`,
    title: `LOOK ${String(i + 11).padStart(2, '0')}`,
    category: STYLE_CATEGORIES[Math.floor(Math.random() * (STYLE_CATEGORIES.length - 1)) + 1],
    imageUrl: `https://picsum.photos/800/1000?random=${i + 110}`,
    year: '2024'
  }))
];

export const PRICING_ITEMS: PriceItem[] = [
  { title: 'Personal Styling', price: '$800', description: 'Comprehensive wardrobe analysis and curated daily looks tailored to your lifestyle.' },
  { title: 'Editorial Shoot', price: '$2,500', description: 'Concept development and full styling for high-fashion magazine and commercial shoots.' },
  { title: 'Red Carpet', price: '$1,200', description: 'Exclusive styling for gala events, ensuring you stand out with elegance and confidence.' },
  { title: 'Brand Consultation', price: '$3,000', description: 'Strategic fashion direction for brands looking to refine their visual identity and campaigns.' },
  { title: 'Wardrobe Refresh', price: '$1,500', description: 'Seasonal updates and organization to maximize your current collection with new additions.' }
];

export const REVIEWS: ReviewItem[] = [
  { text: "An absolute visionary who transformed not just my look, but my entire confidence on camera.", author: "Elena R.", role: "Actress" },
  { text: "Precision, elegance, and an unmatched eye for texture. The best stylist I've worked with.", author: "Marcus T.", role: "Creative Director" },
  { text: "The most seamless styling experience. Adrian instinctively knows what works before you do.", author: "Sarah L.", role: "Model" }
];

export const DESIGNER_INFO = {
  name: "ADRIAN COLE",
  role: "Lead Stylist & Director",
  bio: "Redefining the boundary between fashion and art. With over a decade of experience in Milan and New York, Adrian brings a sculptural approach to modern styling, focusing on texture, silhouette, and the emotional resonance of clothing."
};