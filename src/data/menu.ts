export interface MenuItem {
  id: string;
  name: string;
  category: 'Maggi' | 'Sandwich' | 'Hot Dog' | 'Pizza' | 'Burger' | 'Puffs' | 'Rolls' | 'Cakes & Pastries' | 'Beverages' | 'Others';
  price: number;
  description: string;
  isPopular?: boolean;
  image: string;
  isVeg: boolean;
}

export const menuItems: MenuItem[] = [
  // Cakes & Pastries
  {
    id: 'butterscotch-cake',
    name: 'Butterscotch Cake',
    category: 'Cakes & Pastries',
    price: 380,
    description: 'Rich butterscotch layers topped with caramelized crunch and smooth premium whipped cream.',
    isPopular: true,
    image: '/images/signature-butterscotch.webp',
    isVeg: true
  },
  {
    id: 'mix-fruit-chocolate-cake',
    name: 'Mix Fruit & Chocolate Cake',
    category: 'Cakes & Pastries',
    price: 450,
    description: 'An indulgent fusion of fresh seasonal fruits and premium dark chocolate ganache layering.',
    isPopular: false,
    image: '/images/cake-mix-fruit.webp',
    isVeg: true
  },
  {
    id: 'black-forest-cake-pops',
    name: 'Black Forest Cake Pops',
    category: 'Cakes & Pastries',
    price: 180,
    description: 'Bite-sized delights of rich chocolate cake blended with cherry syrup, dipped in white chocolate.',
    isPopular: false,
    image: '/images/cake-pop-black-forest.webp',
    isVeg: true
  },
  {
    id: 'premium-rasmalai-cake',
    name: 'Premium Rasmalai Cake',
    category: 'Cakes & Pastries',
    price: 550,
    description: 'Our signature fusion masterwork. Cardamom-spiced sponge soaked in saffron milk and layered with real Rasmalai.',
    isPopular: true,
    image: '/images/signature-rasmalai.webp',
    isVeg: true
  },
  {
    id: 'white-dark-forest-pastry',
    name: 'White & Dark Forest Pastry',
    category: 'Cakes & Pastries',
    price: 90,
    description: 'Classic chocolate pastry with sweet cherry layers, shaved white and dark chocolate flakes.',
    isPopular: false,
    image: '/images/pastry-white-dark-forest.webp',
    isVeg: true
  },
  {
    id: 'pineapple-pastry',
    name: 'Pineapple Pastry',
    category: 'Cakes & Pastries',
    price: 75,
    description: 'Light vanilla sponge layered with chopped pineapple and topped with whipped cream.',
    isPopular: false,
    image: '/images/pastry-pineapple.webp',
    isVeg: true
  },
  {
    id: 'choco-chips-pastry',
    name: 'Choco Chips Pastry',
    category: 'Cakes & Pastries',
    price: 85,
    description: 'Decadent chocolate sponge loaded with premium chocolate chips and silky chocolate cream.',
    isPopular: true,
    image: '/images/signature-choco-chip.webp',
    isVeg: true
  },
  {
    id: 'dry-fruit-celebrations',
    name: 'Dry Fruit Celebrations',
    category: 'Cakes & Pastries',
    price: 480,
    description: 'A luxurious cake studded with almonds, cashews, pistachios, and rich butter cream.',
    isPopular: true,
    image: '/images/signature-dry-fruit.webp',
    isVeg: true
  },
  {
    id: 'pull-off-cake',
    name: 'Pull Off Cake',
    category: 'Cakes & Pastries',
    price: 600,
    description: 'A fun, interactive cake that reveals a delicious waterfall of chocolate ganache when pulled.',
    isPopular: false,
    image: '/images/cake-pull-off.webp',
    isVeg: true
  },

  // Maggi
  {
    id: 'spicy-tadka-maggi',
    name: 'Spicy Tadka Maggi',
    category: 'Maggi',
    price: 70,
    description: 'Noodles tossed in aromatic Indian spices, garlic, green chilies, and a hot butter tadka.',
    isPopular: true,
    image: '/images/maggi-tadka.webp',
    isVeg: true
  },
  {
    id: 'butter-cheese-maggi',
    name: 'Butter & Cheese Maggi',
    category: 'Maggi',
    price: 90,
    description: 'Classic comfort Maggi overloaded with melted Amul butter and grated mozzarella cheese.',
    isPopular: true,
    image: '/images/maggi-cheese.webp',
    isVeg: true
  },
  {
    id: 'schezwan-maggi',
    name: 'Schezwan Maggi',
    category: 'Maggi',
    price: 80,
    description: 'Spicy stir-fried noodles cooked with hot Schezwan sauce and crispy spring vegetables.',
    isPopular: false,
    image: '/images/maggi-schezwan.webp',
    isVeg: true
  },
  {
    id: 'sweet-corn-maggi',
    name: 'Sweet Corn Maggi',
    category: 'Maggi',
    price: 85,
    description: 'A mild and sweet preparation loaded with juicy sweet corn kernels and a creamy white seasoning.',
    isPopular: false,
    image: '/images/maggi-corn.webp',
    isVeg: true
  },

  // Pizza
  {
    id: 'veg-coin-pizza',
    name: 'Veg. Coin Pizza',
    category: 'Pizza',
    price: 110,
    description: 'Bite-sized mini pizzas topped with sweet onions, tomatoes, bell peppers, and melted cheese.',
    isPopular: false,
    image: '/images/pizza-coin.webp',
    isVeg: true
  },
  {
    id: 'veg-pizza',
    name: 'Veg. Pizza',
    category: 'Pizza',
    price: 180,
    description: 'Hand-stretched base topped with fresh marinara sauce, bell peppers, onions, tomatoes, and golden cheese.',
    isPopular: false,
    image: '/images/pizza-veg.webp',
    isVeg: true
  },
  {
    id: 'manchurian-pizza',
    name: 'Manchurian Pizza',
    category: 'Pizza',
    price: 220,
    description: 'An exciting Indo-Chinese fusion topped with soft Manchurian balls, spring onions, and a spicy soy-chili sauce.',
    isPopular: true,
    image: '/images/pizza-manchurian.webp',
    isVeg: true
  },
  {
    id: 'sweet-corn-pizza',
    name: 'Sweet Corn Pizza',
    category: 'Pizza',
    price: 200,
    description: 'Sweet corn kernels paired with jalapenos and red onions on a cheese-stuffed base.',
    isPopular: false,
    image: '/images/pizza-sweet-corn.webp',
    isVeg: true
  },
  {
    id: 'paneer-pizza',
    name: 'Paneer Pizza',
    category: 'Pizza',
    price: 240,
    description: 'Marinated paneer tikka cubes, roasted capsicum, onions, and spicy tandoori sauce.',
    isPopular: true,
    image: '/images/pizza-paneer.webp',
    isVeg: true
  },
  {
    id: 'mushroom-pizza',
    name: 'Mushroom Pizza',
    category: 'Pizza',
    price: 230,
    description: 'Earthy button mushrooms sautéed in herbs, garlic, and baked with rich mozzarella cheese.',
    isPopular: false,
    image: '/images/pizza-mushroom.webp',
    isVeg: true
  },
  {
    id: 'cheese-burst-pizza',
    name: 'Cheese Burst Pizza',
    category: 'Pizza',
    price: 280,
    description: 'Overloaded pizza with a double-layered crust filled to the brim with warm, liquid cheese.',
    isPopular: true,
    image: '/images/pizza-cheese-burst.webp',
    isVeg: true
  },
  {
    id: 'mexican-pizza',
    name: 'Mexican Pizza',
    category: 'Pizza',
    price: 260,
    description: 'Spicy salsa sauce base topped with sweet corn, jalapenos, olives, capsicum, and chili flakes.',
    isPopular: true,
    image: '/images/pizza-mexican.webp',
    isVeg: true
  },

  // Sandwich
  {
    id: 'yummy-chocolate-sandwich',
    name: 'Yummy Chocolate Sandwich',
    category: 'Sandwich',
    price: 110,
    description: 'Grilled bread stuffed with chocolate chips, hazelnut spread, and topped with chocolate syrup.',
    isPopular: true,
    image: '/images/sandwich-chocolate.webp',
    isVeg: true
  },
  {
    id: 'plain-veg-sandwich',
    name: 'Plain Veg Sandwich',
    category: 'Sandwich',
    price: 60,
    description: 'Light and refreshing sandwich with sliced cucumbers, tomatoes, potatoes, and mint chutney.',
    isPopular: false,
    image: '/images/sandwich-veg.webp',
    isVeg: true
  },
  {
    id: 'cheese-sandwich',
    name: 'Cheese Sandwich',
    category: 'Sandwich',
    price: 80,
    description: 'Classic grilled cheese sandwich with butter, pepper, and lots of mozzarella cheese.',
    isPopular: false,
    image: '/images/sandwich-cheese.webp',
    isVeg: true
  },
  {
    id: 'corn-cheese-sandwich',
    name: 'Corn Cheese Sandwich',
    category: 'Sandwich',
    price: 100,
    description: 'Sweet corn mixed with mayonnaise, cheese, black pepper, and toasted until golden.',
    isPopular: true,
    image: '/images/sandwich-corn-cheese.webp',
    isVeg: true
  },
  {
    id: 'paneer-sandwich',
    name: 'Paneer Sandwich',
    category: 'Sandwich',
    price: 120,
    description: 'Cottage cheese chunks tossed in spicy mint chutney, grilled with onions and capsicum.',
    isPopular: false,
    image: '/images/sandwich-paneer.webp',
    isVeg: true
  },

  // Burger
  {
    id: 'veg-burger',
    name: 'Veg Burger',
    category: 'Burger',
    price: 70,
    description: 'Crispy mixed vegetable patty with lettuce, tomatoes, onions, and chef’s special burger sauce.',
    isPopular: false,
    image: '/images/burger-veg.webp',
    isVeg: true
  },
  {
    id: 'cheese-burger',
    name: 'Cheese Burger',
    category: 'Burger',
    price: 90,
    description: 'Classic veg burger enhanced with a thick slice of melted cheese and creamy mayonnaise.',
    isPopular: true,
    image: '/images/burger-cheese.webp',
    isVeg: true
  },
  {
    id: 'french-fries-burger',
    name: 'French Fries Burger',
    category: 'Burger',
    price: 100,
    description: 'An exciting burger packed with golden french fries, cheese sauce, and chili seasoning.',
    isPopular: false,
    image: '/images/burger-fries.webp',
    isVeg: true
  },
  {
    id: 'spicy-paneer-burger',
    name: 'Spicy Paneer Burger',
    category: 'Burger',
    price: 130,
    description: 'Deep-fried tandoori paneer patty with onions, spicy spread, and sliced cheese.',
    isPopular: true,
    image: '/images/burger-paneer.webp',
    isVeg: true
  },

  // Hot Dog
  {
    id: 'hot-dog',
    name: 'Hot Dog',
    category: 'Hot Dog',
    price: 80,
    description: 'Soft long bun filled with a grilled vegetable roll, ketchup, mustard, and mayonnaise.',
    isPopular: false,
    image: '/images/hotdog-plain.webp',
    isVeg: true
  },
  {
    id: 'paneer-hot-dog',
    name: 'Paneer Hot Dog',
    category: 'Hot Dog',
    price: 110,
    description: 'Hot dog bun stuffed with spicy minced paneer bhurji, diced onions, and garlic sauce.',
    isPopular: true,
    image: '/images/hotdog-paneer.webp',
    isVeg: true
  },
  {
    id: 'manchurian-hot-dog',
    name: 'Manchurian Hot Dog',
    category: 'Hot Dog',
    price: 100,
    description: 'Indo-Chinese fusion hot dog filled with dry Manchurian balls, capsicum, and sweet soy glaze.',
    isPopular: false,
    image: '/images/hotdog-manchurian.webp',
    isVeg: true
  },

  // Puffs
  {
    id: 'veg-puff',
    name: 'Veg Puff',
    category: 'Puffs',
    price: 25,
    description: 'Crispy, flaky puff pastry filled with spiced potatoes, green peas, and carrots.',
    isPopular: true,
    image: '/images/puff-veg.webp',
    isVeg: true
  },
  {
    id: 'paneer-puff',
    name: 'Paneer Puff',
    category: 'Puffs',
    price: 35,
    description: 'Flaky baked puff pastry shell stuffed with spicy paneer tikka filling.',
    isPopular: true,
    image: '/images/puff-paneer.webp',
    isVeg: true
  },

  // Rolls
  {
    id: 'manchurian-roll',
    name: 'Manchurian Roll',
    category: 'Rolls',
    price: 90,
    description: 'Spicy Manchurian gravy wrapped in a soft grilled chapati/tortilla roll with cabbage.',
    isPopular: false,
    image: '/images/roll-manchurian.webp',
    isVeg: true
  },
  {
    id: 'paneer-roll',
    name: 'Paneer Roll',
    category: 'Rolls',
    price: 110,
    description: 'Juicy paneer chunks marinated in spices, wrapped with sliced onions and lime juice.',
    isPopular: true,
    image: '/images/roll-paneer.webp',
    isVeg: true
  },
  {
    id: 'egg-rolls',
    name: 'Egg Rolls',
    category: 'Rolls',
    price: 80,
    description: 'Classic street style roll with egg omelette coating, filled with crunchy raw veggies and sauce.',
    isPopular: false,
    image: '/images/roll-egg.webp',
    isVeg: false
  },

  // Beverages
  {
    id: 'butterscotch-shake',
    name: 'Butterscotch Shake',
    category: 'Beverages',
    price: 100,
    description: 'Thick, creamy milkshake made with real butterscotch ice cream and caramel drizzle.',
    isPopular: true,
    image: '/images/beverage-shake.webp',
    isVeg: true
  },
  {
    id: 'coffee-latte',
    name: 'Coffee Latte',
    category: 'Beverages',
    price: 80,
    description: 'Classic espresso shot combined with steamed milk and a thin layer of microfoam.',
    isPopular: false,
    image: '/images/beverage-latte.webp',
    isVeg: true
  },

  // Others
  {
    id: 'cheese-masala-french-fries',
    name: 'Cheese Masala French Fries',
    category: 'Others',
    price: 110,
    description: 'Crispy potato fries dusted with peri-peri spices and layered with melted cheese sauce.',
    isPopular: true,
    image: '/images/others-fries.webp',
    isVeg: true
  },
  {
    id: 'chicken-lollypop',
    name: 'Chicken Lollypop',
    category: 'Others',
    price: 220,
    description: 'Golden fried chicken winglets tossed in a rich, sweet and spicy Indo-Chinese sauce.',
    isPopular: true,
    image: '/images/others-chicken-lollypop.webp',
    isVeg: false
  },
  {
    id: 'white-sauce-pasta',
    name: 'White Sauce Pasta',
    category: 'Others',
    price: 150,
    description: 'Penne pasta tossed in a creamy, velvety cheese sauce with broccoli, mushrooms, and herbs.',
    isPopular: false,
    image: '/images/others-pasta.webp',
    isVeg: true
  },
  {
    id: 'crispy-frenges',
    name: 'Crispy Frenges (100gm)',
    category: 'Others',
    price: 70,
    description: 'Delicately crunchy, spiced flour bites - a perfect light tea-time accompaniment.',
    isPopular: false,
    image: '/images/others-frenges.webp',
    isVeg: true
  }
];
