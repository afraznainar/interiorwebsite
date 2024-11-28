interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export const categories = ['All', 'Residential', 'Commercial', 'Office', 'Retail', 'Others'];

export const projects: Project[] = [
  {
    title: 'Modern Minimalist Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    description: 'A contemporary approach to minimalist living with clean lines and natural materials.'
  },
  {
    title: 'Urban Loft Design',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    description: 'Industrial-inspired loft featuring exposed brick and modern amenities.'
  },
  {
    title: 'Tech Startup Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    description: 'Dynamic workspace designed for collaboration and creativity.'
  },
  {
    title: 'Luxury Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop',
    description: 'High-end penthouse combining luxury with contemporary design.'
  },
  {
    title: 'Boutique Retail Store',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    description: 'Modern retail space optimized for customer experience.'
  },
  {
    title: 'Corporate Headquarters',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop',
    description: 'Professional office space designed for productivity and comfort.'
  },
  {
    title: 'Elegant Dining Space',
    category: 'Others',
    image: 'https://i.postimg.cc/Kz0Ld0Hs/dining-room.jpg',
    description: 'Contemporary dining area featuring wooden accents and ambient lighting.'
  },
  {
    title: 'Modern Kitchen Design',
    category: 'Others',
    image: 'https://i.postimg.cc/Kz0Ld0Hs/kitchen.jpg',
    description: 'Sleek white kitchen with high-end appliances and minimalist aesthetics.'
  },
  {
    title: 'Contemporary Living Room',
    category: 'Others',
    image: 'https://i.postimg.cc/Kz0Ld0Hs/living-room.jpg',
    description: 'Sophisticated living space with artistic touches and comfortable furnishings.'
  },
  {
    title: 'Grand Entrance Hall',
    category: 'Others',
    image: 'https://i.postimg.cc/Kz0Ld0Hs/entrance-hall.jpg',
    description: 'Impressive entrance featuring wooden elements and designer lighting.'
  },
  {
    title: 'Luxury Living Area',
    category: 'Others',
    image: 'https://i.postimg.cc/Kz0Ld0Hs/luxury-living.jpg',
    description: 'Modern living room with premium furnishings and panoramic views.'
  }
];