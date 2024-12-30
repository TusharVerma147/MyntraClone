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
    brand: 'Flying Machine',
    type: 'Regular Fit Checked Shirt',
    Price: '₹1800',
    DiscountedPrice: '₹900',
    rating: '4.5',
    reviews: '3.1k',
    image: Images.shirt2,
    off: '50% OFF!',
    description: 'Stylish checked design in a regular fit. Ideal for both casual and semi-formal occasions, made with breathable fabric.'
  },
  {
    id: '3',
    brand: 'Raymond',
    type: 'Lightweight Linen Shirt',
    Price: '₹1800',
    DiscountedPrice: '₹900',
    rating: '4.7',
    reviews: '5.4k',
    image: Images.shirt4,
    off: '50% OFF!',
    description: 'Stay cool and stylish in this lightweight linen shirt, perfect for warm weather and casual outings.'
  },
  {
    id: '4',
    brand: 'US Polo',
    type: 'Polo Shirt',
    Price: '₹3000',
    DiscountedPrice: '₹1500',
    rating: '4.3',
    reviews: '2.8k',
    image:Images.shirt3,
    off: '50% OFF!',
    description: 'Classic polo shirt for a smart-casual look. Made from soft cotton for a comfortable fit, suitable for all-day wear.'
  },
  {
    id: '5',
    brand: 'Allen Solly',
    type: 'Regular Fit Checked Shirt',
    Price: '₹2500',
    DiscountedPrice: '₹1250',
    rating: '4.6',
    reviews: '6.3k',
    image: Images.shirt5,
    off: '50% OFF!',
    description: 'A versatile formal button-down shirt made with premium cotton, perfect for office wear or formal events.'
  },
  {
    id: '6',
    brand: 'Peter England',
    type: 'Performance Fit Sport Shirt',
    Price: '₹4000',
    DiscountedPrice: '₹2000',
    rating: '4.8',
    reviews: '7.1k',
    image:Images.shirt1,
    off: '50% OFF!',
     description: 'Stylish checked design in a regular fit. Ideal for both casual and semi-formal occasions, made with breathable fabric.'
  },
  {
    id: '7',
    brand: 'The Bear House',
    type: 'Slim Fit Casual Shirt',
    Price: '₹2000',
    DiscountedPrice: '₹1000',
    rating: '4.2',
    reviews: '2.4k',
    image: Images.shirt2,
    off: '50% OFF!',
    description: 'A perfect slim-fit casual shirt for everyday wear, crafted from soft cotton to keep you comfortable throughout the day.'
  },
  {
    id: '8',
    brand: 'The Bear House',
    type: 'Slim Fit Casual Shirt',
    Price: '₹2000',
    DiscountedPrice: '₹1000',
    rating: '4.2',
    reviews: '2.4k',
    image: Images.shirt3,
    off: '50% OFF!',
    description: 'A perfect slim-fit casual shirt for everyday wear, crafted from soft cotton to keep you comfortable throughout the day.'
  },
];

const jeans = [
  {
    id: '11',
    brand: 'Levi\'s',
    type: 'Slim Fit Casual Jeans',
    Price: '₹3000',
    DiscountedPrice: '₹1500',
    rating: '4.2',
    reviews: '2.4k',
    image: Icons.jeans,
    off: '50% OFF!',
    description: 'Slim-fit casual jeans with a modern, stylish look. Crafted from durable denim, offering a comfortable fit all day long.'
  },
  {
    id: '12',
    brand: 'Wrangler',
    type: 'Regular Fit Checked Jeans',
    Price: '₹2800',
    DiscountedPrice: '₹1400',
    rating: '4.5',
    reviews: '3.1k',
    image: Images.jeans1,
    off: '30% OFF!',
    description: 'These regular fit checked jeans combine classic style with comfort. Perfect for casual wear or a relaxed evening out.'
  },
  {
    id: '13',
    brand: 'Lee',
    type: 'Distressed Light Fade Jeans',
    Price: '₹2800',
    DiscountedPrice: '₹1400',
    rating: '4.7',
    reviews: '5.4k',
    image: Images.jeans2,
    off: '50% OFF!',
    description: 'Lightweight and breathable fade jeans for the perfect blend of comfort and style during warmer months.'
  },
  {
    id: '14',
    brand: 'Rare Rabbit',
    type: 'Polo Fit Slim Jeans',
    Price: '₹3500',
    DiscountedPrice: '₹1750',
    rating: '4.3',
    reviews: '2.8k',
    image: Images.jeans3,
    off: '40% OFF!',
    description: 'Slim-fit polo jeans designed to give you a sharp and polished look while ensuring maximum comfort.'
  },
  {
    id: '15',
    brand: 'Tommy Hilfiger',
    type: 'Formal Slim Jeans',
    Price: '₹4500',
    DiscountedPrice: '₹2250',
    rating: '4.6',
    reviews: '6.3k',
    image: Images.jeans4,
    off: '50% OFF!',
    description: 'These  slim jeans are tailored to perfection, ideal for smart-casual events or day-to-day wear.'
  },
  {
    id: '16',
    brand: 'Louis Philippe',
    type: 'Performance Fit Jeans',
    Price: '₹5000',
    DiscountedPrice: '₹2500',
    rating: '4.8',
    reviews: '7.1k',
    image: Images.jeans5,
    off: '60% OFF!',
    description: 'Performance fit jeans for active individuals. Stretchable, comfortable, and designed for freedom of movement.'
  }
];


const shoes = [
  {
    id: '21',
    brand: 'Hush Puppies',
    type: 'Leather Casual Shoes',
    Price: '₹5000',
    DiscountedPrice: '₹2500',
    rating: '4.4',
    reviews: '3.0k',
    image: Images.shoe1,
    off: '50% OFF!',
    description: 'Stylish leather casual shoes, perfect for everyday wear. Features a sleek design and comfortable sole for all-day comfort.'
  },
  {
    id: '22',
    brand: 'Puma',
    type: 'Sports Running Shoes',
    Price: '₹6000',
    DiscountedPrice: '₹3000',
    rating: '4.6',
    reviews: '4.2k',
    image: Images.shoe2,
    off: '50% OFF!',
    description: 'High-performance running shoes with a breathable mesh upper and cushioned sole, designed for comfort and speed.'
  },
  {
    id: '23',
    brand: 'Nike',
    type: 'Slip-On Casual Shoes',
    Price: '₹4400',
    DiscountedPrice: '₹2200',
    rating: '4.7',
    reviews: '5.1k',
    image: Images.shoe3,
    off: '50% OFF!',
    description: 'Casual slip-on shoes made from soft, durable material. Ideal for relaxed and casual occasions with easy on-and-off wear.'
  },
  {
    id: '24',
    brand: 'Reebok',
    type: 'Trail Running Shoes',
    Price: '₹3500',
    DiscountedPrice: '₹1750',
    rating: '4.3',
    reviews: '2.9k',
    image: Images.shoe4,
    off: '50% OFF!',
    description: 'Durable trail running shoes designed for rough outdoor terrains. Lightweight, breathable, and built to last through extreme conditions.'
  },
  {
    id: '25',
    brand: 'New Balance',
    type: 'Running Shoes',
    Price: '₹8000',
    DiscountedPrice: '₹4000',
    rating: '4.5',
    reviews: '3.8k',
    image: Images.shoe5,
    off: '50% OFF!',
    description: 'High-performance running shoes with a breathable mesh upper and cushioned sole, designed for comfort and speed.'
  },
  {
    id: '26',
    brand: 'Under Armour',
    type: 'Trail Running Shoes',
    Price: '₹5000',
    DiscountedPrice: '₹2500',
    rating: '4.8',
    reviews: '6.5k',
    image: Images.shoe6,
    off: '50% OFF!',
    description: 'Durable trail running shoes designed for rough outdoor terrains. Lightweight, breathable, and built to last through extreme conditions.'
  }
];
const watches = [
  {
    id: '31',
    brand: 'Rolex',
    type: 'Oyster Perpetual',
    Price: '₹50000',
    DiscountedPrice: '₹40000',
    rating: '4.9',
    reviews: '1.2k',
    image: Images.watch1,
    off: '20% OFF!',
    description: 'A classic Rolex watch with a stainless steel case and an Oyster Perpetual movement. Known for its precision and durability.'
  },
  {
    id: '32',
    brand: 'Casio',
    type: 'G-Shock Digital Watch',
    Price: '₹5000',
    DiscountedPrice: '₹4000',
    rating: '4.7',
    reviews: '5.4k',
    image: Images.watch2,
    off: '20% OFF!',
    description: 'Durable and shock-resistant, the Casio G-Shock is designed for outdoor adventures. Features include a stopwatch, backlight, and more.'
  },
  {
    id: '33',
    brand: 'Fossil',
    type: 'Analog Leather Watch',
    Price: '₹8000',
    DiscountedPrice: '₹6000',
    rating: '4.5',
    reviews: '3.8k',
    image: Images.watch3,
    off: '25% OFF!',
    description: 'A stylish analog leather watch from Fossil, perfect for both casual and semi-formal wear. Classic design with modern functionality.'
  },
  {
    id: '34',
    brand: 'Titan',
    type: 'Edge Stainless Steel Watch',
    Price: '₹12000',
    DiscountedPrice: '₹9600',
    rating: '4.6',
    reviews: '2.9k',
    image: Images.watch4,
    off: '20% OFF!',
    description: 'Titan Edge is one of the slimmest watches available, offering a sleek and elegant look with a stainless steel case and durable strap.'
  },
  {
    id: '35',
    brand: 'Seiko',
    type: 'Presage Automatic Watch',
    Price: '₹25000',
    DiscountedPrice: '₹20000',
    rating: '4.8',
    reviews: '4.3k',
    image: Images.watch5,
    off: '20% OFF!',
    description: 'The Seiko Presage Automatic Watch blends traditional craftsmanship with modern design. Featuring a mechanical movement and exquisite dial.'
  },
  {
    id: '36',
    brand: 'Michael Kors',
    type: 'Runway Rose Gold Watch',
    Price: '₹18000',
    DiscountedPrice: '₹14400',
    rating: '4.7',
    reviews: '5.0k',
    image: Images.watch6,
    off: '20% OFF!',
    description: 'A luxurious rose gold analog watch from Michael Kors, perfect for formal occasions. Known for its sophisticated and stylish design.'
  }
];

const products = [
  {
    id: '41',
    brand: 'Skybags',
    type: 'Backpack',
    Price: '₹5000',
    DiscountedPrice: '₹3500',
    rating: '4.5',
    reviews: '3.2k',
    image: Images.skybag,
    off: '30% OFF!',
    description: 'Classic Skybags backpack with a modern twist. Ideal for daily use with ample storage space.'
  },
  // Tops
  {
    id: '42',
    brand: 'Zara',
    type: 'Casual Cotton Top',
    Price: '₹2000',
    DiscountedPrice: '₹1600',
    rating: '4.3',
    reviews: '2.8k',
    image: Icons.top,
    off: '20% OFF!',
    description: 'A casual cotton top perfect for a relaxed look. Soft and breathable fabric for comfort all day long.'
  },
  // Saree
  {
    id: '43',
    brand: 'Sabyasachi',
    type: 'Silk Saree',
    Price: '₹25000',
    DiscountedPrice: '₹20000',
    rating: '4.9',
    reviews: '1.1k',
    image: Icons.saree,
    off: '20% OFF!',
    description: 'Elegant handwoven silk saree with intricate designs. Ideal for weddings and formal events.'
  },
  // Jacket
  {
    id: '44',
    brand: 'Levi\'s',
    type: 'Denim Jacket',
    Price: '₹4000',
    DiscountedPrice: '₹2800',
    rating: '4.7',
    reviews: '3.5k',
    image: Images.jacket,
    off: '30% OFF!',
    description: 'Classic Levi\'s denim jacket. Timeless design with a modern fit, perfect for casual outings.'
  },

  {
    id: '45',
    brand: 'Urban Ladder',
    type: 'Linen Curtains',
    Price: '₹1500',
    DiscountedPrice: '₹1200',
    rating: '4.6',
    reviews: '2.1k',
    image: Icons.curtains,
    off: '20% OFF!',
    description: 'Elegant linen curtains to add a touch of sophistication to any room. Lightweight and breathable fabric.'
  },

  {
    id: '46',
    brand: 'Home Centre',
    type: 'Wall Art Decor',
    Price: '₹3000',
    DiscountedPrice: '₹2400',
    rating: '4.8',
    reviews: '1.9k',
    image: Images.decor1,
    off: '20% OFF!',
    description: 'Beautiful wall art decor to brighten up any space. Vibrant designs to enhance the aesthetic appeal of your home.'
  },
  {
    id: '47',
    brand: 'Philips',
    type: 'Air Purifier',
    Price: '₹12000',
    DiscountedPrice: '₹9000',
    rating: '4.4',
    reviews: '4.2k',
    image: Images.purifier,
    off: '25% OFF!',
    description: 'Philips air purifier designed to remove dust, allergens, and pollutants, creating a cleaner and healthier living environment.'
  },
  {
    id: '48',
    brand: 'L\'Oreal',
    type: 'Revitalift Anti-Wrinkle Cream',
    Price: '₹1500',
    DiscountedPrice: '₹1200',
    rating: '4.6',
    reviews: '5.4k',
    image: Images.loreal,
    off: '20% OFF!',
    description: 'L\'Oreal Revitalift anti-wrinkle cream. Helps reduce fine lines and wrinkles for smoother and firmer skin.'
  },
  {
    id: '49',
    brand: 'Chanel',
    type: 'Chance Eau Tendre',
    Price: '₹8000',
    DiscountedPrice: '₹6400',
    rating: '4.8',
    reviews: '2.3k',
    image: Icons.fragrances,
    off: '20% OFF!',
    description: 'Chance Eau Tendre by Chanel. A soft and elegant fragrance with a fresh, floral scent. Perfect for daily wear.'
  },
  {
    id: '50',
    brand: 'Maybelline',
    type: 'Fit Me Foundation',
    Price: '₹750',
    DiscountedPrice: '₹600',
    rating: '4.5',
    reviews: '6.1k',
    image: Images.fitme,
    off: '20% OFF!',
    description: 'Maybelline Fit Me foundation, designed to match your skin tone and provide natural coverage. Ideal for everyday use.'
  },
  {
    id: '51',
    brand: 'Fabindia',
    type: 'Cotton Kurta',
    Price: '₹2000',
    DiscountedPrice: '₹1600',
    rating: '4.6',
    reviews: '3.0k',
    image: Images.fab1,
    off: '20% OFF!',
    description: 'A classic cotton kurta from Fabindia. Comfortable and breathable for all-day wear, perfect for festive occasions.'
  },
  {
    id: '52',
    brand: 'The Body Shop',
    type: 'Tea Tree Oil',
    Price: '₹1200',
    DiscountedPrice: '₹960',
    rating: '4.7',
    reviews: '4.8k',
    image: Images.treeoil,
    off: '20% OFF!',
    description: 'Tea tree oil from The Body Shop to treat blemishes and acne. Natural ingredients for clear and smooth skin.'
  },
  {
    id: '53',
    brand: 'Nike',
    type: 'Air Max Sneakers',
    Price: '₹8000',
    DiscountedPrice: '₹6400',
    rating: '4.7',
    reviews: '5.0k',
    image: Images.nike,
    off: '20% OFF!',
    description: 'Nike Air Max sneakers designed for comfort and style. Perfect for running and casual wear.'
  },
  {
    id: '54',
    brand: 'Casio',
    type: 'G-Shock Digital Watch',
    Price: '₹6000',
    DiscountedPrice: '₹4800',
    rating: '4.6',
    reviews: '4.2k',
    image: Images.watch2,
    off: '20% OFF!',
    description: 'Casio G-Shock digital watch with a rugged design. Built to withstand tough conditions, perfect for outdoor adventures.'
  },
  {
    id: '55',
    brand: 'Bosch',
    type: 'Food Processor',
    Price: '₹10000',
    DiscountedPrice: '₹8000',
    rating: '4.4',
    reviews: '3.8k',
    image: Images.foodprocessor,
    off: '20% OFF!',
    description: 'Bosch food processor with multiple attachments for chopping, slicing, and grinding. A must-have kitchen companion.'
  }
];






export {fashion, beauty, home,fashionlist, beautylist, homelist, shirts, jeans, fashionbrand, shoes, watches, products}