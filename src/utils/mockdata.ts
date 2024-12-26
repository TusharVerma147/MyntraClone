import { Images, Icons } from '../assets';

const fashion = [
  { id: '1', source: Images.fashion1, },
  { id: '2', source: Images.fashion2, },
  { id: '3', source: Images.fashion3, },
  { id: '4', source: Images.fashion4, },
  { id: '5', source: Images.fashion5,  },

];

const beauty = [
  { id: '1', source: Images.beauty1, },
  { id: '2', source: Images.beauty2, },
  { id: '3', source: Images.beauty3, },
  { id: '4', source: Images.beauty4, },
  { id: '5', source: Images.beauty5,  },

];

const home = [
  { id: '1', source: Images.home1, },
  { id: '2', source: Images.home2, },
  { id: '3', source: Images.home3, },
  { id: '4', source: Images.home4, },
  { id: '5', source: Images.home5,  },
];

const fashionlist = [
  {id: '1', title: 'SHIRTS', image: Icons.shirt},
  {id: '2', title: 'JEANS', image:  Icons.jeans},
  {id: '3', title: 'WATCHES', image:  Icons.watch},
  {id: '4', title: 'SHOES', image:  Icons.shoes},
  {id: '5', title: 'TOPS', image:  Icons.top},
  {id: '6', title: 'KURTAS', image:  Icons.kurta},
  {id: '7', title: 'SAREES', image:  Icons.saree},
  {id: '8', title: 'SANDALS', image:  Icons.sandals},
];


 const beautylist = [
  {id: '1', title: 'MAKEUP', image: Icons.makeup},
  {id: '2', title: 'SKINCARE', image:  Icons.skincare},
  {id: '3', title: 'FRAGRANCES', image:  Icons.fragrances},
  {id: '4', title: 'HAIR CARE', image:  Icons.haircare},
  {id: '5', title: 'GROOMING', image:  Icons.grooming},
  {id: '6', title: 'BATH & BODY', image:  Icons.bath},
  {id: '7', title: 'APPLIANCES', image:  Icons.appliances},

];

 const homelist = [
  {id: '1', title: 'DECOR', image: Icons.decor},
  {id: '2', title: 'CURTAINS', image:  Icons.curtains},
  {id: '3', title: 'BED LINEN', image:  Icons.bed},
  {id: '4', title: 'COOKWARE', image:  Icons.cookware},
  {id: '5', title: 'DINNERWARE', image:  Icons.dinnerware},
  {id: '6', title: 'APPLIANCES', image:  Icons.homeappliances},
  {id: '7', title: 'STORAGE', image:  Icons.storage},
];

const fashionbrand=[
  {id: '1',  image: Images.fashionbrand1},
  {id: '2',  image: Images.fashionbrand1},
  {id: '3',  image: Images.fashionbrand1},
  {id: '4',  image: Images.fashionbrand1},
  {id: '5',  image: Images.fashionbrand1},
];

const shirts = [
  {
    id: '1',
    brand: 'The Bear House',
    type: 'Slim Fit Casual Shirt',
    Price: '₹2000',
    DiscountedPrice: '₹1000',
    rating: '4.2',
    reviews: '2.4k',
    image: Icons.shirt,
    off: '50% OFF!',
    description: 'A perfect slim-fit casual shirt for everyday wear, crafted from soft cotton to keep you comfortable throughout the day.'
  },
  {
    id: '2',
    brand: 'Urban Threads',
    type: 'Regular Fit Checked Shirt',
    Price: '₹1800',
    DiscountedPrice: '₹900',
    rating: '4.5',
    reviews: '3.1k',
    image: Icons.shirt,
    off: '50% OFF!',
    description: 'Stylish checked design in a regular fit. Ideal for both casual and semi-formal occasions, made with breathable fabric.'
  },
  {
    id: '3',
    brand: 'Cotton Emporium',
    type: 'Lightweight Linen Shirt',
    Price: '₹1800',
    DiscountedPrice: '₹900',
    rating: '4.7',
    reviews: '5.4k',
    image: Icons.shirt,
    off: '50% OFF!',
    description: 'Stay cool and stylish in this lightweight linen shirt, perfect for warm weather and casual outings.'
  },
  {
    id: '4',
    brand: 'Polo Club',
    type: 'Polo Shirt',
    Price: '₹3000',
    DiscountedPrice: '₹1500',
    rating: '4.3',
    reviews: '2.8k',
    image: Icons.shirt,
    off: '50% OFF!',
    description: 'Classic polo shirt for a smart-casual look. Made from soft cotton for a comfortable fit, suitable for all-day wear.'
  },
  {
    id: '5',
    brand: 'Classic Men',
    type: 'Formal Button-down Shirt',
    Price: '₹2500',
    DiscountedPrice: '₹1250',
    rating: '4.6',
    reviews: '6.3k',
    image: Icons.shirt,
    off: '50% OFF!',
    description: 'A versatile formal button-down shirt made with premium cotton, perfect for office wear or formal events.'
  },
  {
    id: '6',
    brand: 'Swift Wear',
    type: 'Performance Fit Sport Shirt',
    Price: '₹4000',
    DiscountedPrice: '₹2000',
    rating: '4.8',
    reviews: '7.1k',
    image: Icons.shirt,
    off: '50% OFF!',
    description: 'A high-performance sport shirt designed for active wear. Lightweight, breathable, and moisture-wicking for ultimate comfort.'
  },
];

const jeans = [
  {
    id: '11',
    brand: 'The Bear House',
    type: 'Slim Fit Casual Jeans',
    Price: '₹2000',
    DiscountedPrice: '₹1000',
    rating: '4.2',
    reviews: '2.4k',
    image: Icons.jeans,
    description: 'Slim-fit casual jeans with a modern, stylish look. Crafted from durable denim, offering a comfortable fit all day long.'
  },
  {
    id: '12',
    brand: 'Urban Threads',
    type: 'Regular Fit Checked Jeans',
    Price: '₹1800',
    DiscountedPrice: '₹900',
    rating: '4.5',
    reviews: '3.1k',
    image: Icons.jeans,
    description: 'These regular fit checked jeans combine classic style with comfort. Perfect for casual wear or a relaxed evening out.'
  },
  {
    id: '13',
    brand: 'Cotton Emporium',
    type: 'Lightweight Linen Jeans',
    Price: '₹1800',
    DiscountedPrice: '₹900',
    rating: '4.7',
    reviews: '5.4k',
    image: Icons.jeans,
    description: 'Lightweight and breathable linen jeans for the perfect blend of comfort and style during warmer months.'
  },
  {
    id: '14',
    brand: 'Polo Club',
    type: 'Polo Fit Slim Jeans',
    Price: '₹3000',
    DiscountedPrice: '₹1500',
    rating: '4.3',
    reviews: '2.8k',
    image: Icons.jeans,
    description: 'Slim-fit polo jeans designed to give you a sharp and polished look while ensuring maximum comfort.'
  },
  {
    id: '15',
    brand: 'Classic Men',
    type: 'Formal Slim Jeans',
    Price: '₹2500',
    DiscountedPrice: '₹1250',
    rating: '4.6',
    reviews: '6.3k',
    image: Icons.jeans,
    description: 'These formal slim jeans are tailored to perfection, ideal for smart-casual events or day-to-day professional wear.'
  },
  {
    id: '16',
    brand: 'Swift Wear',
    type: 'Performance Fit Sport Jeans',
    Price: '₹4000',
    DiscountedPrice: '₹2000',
    rating: '4.8',
    reviews: '7.1k',
    image: Icons.jeans,
    description: 'Performance fit sport jeans for active individuals. Stretchable, comfortable, and designed for freedom of movement.'
  },
  {
    id: '17',
    brand: 'Swift Wear',
    type: 'Performance Fit Sport Jeans',
    Price: '₹4000',
    DiscountedPrice: '₹2000',
    rating: '4.8',
    reviews: '7.1k',
    image: Icons.jeans,
    description: 'High-performance sport jeans that offer durability and comfort. Perfect for outdoor activities and casual wear.'
  },
];




export {fashion, beauty, home,fashionlist, beautylist, homelist, shirts, jeans, fashionbrand }