export interface Review {
  id: string;
  firstName: string;
  rating: number;
  text: string;
  date: string;
  avatarBg: string; // CSS or Tailwind gradient classes
}

export const reviews: Review[] = [
  {
    id: 'rev-1',
    firstName: 'Nikhil',
    rating: 5,
    text: 'Nice place to satisfy your appetite with delicious snacks options available here. There is good seating arrangement to celebrate your birthday. Nice and helpful staff. Great Taste.',
    date: '4 years ago',
    avatarBg: 'from-amber-400 to-amber-600'
  },
  {
    id: 'rev-2',
    firstName: 'Jayant',
    rating: 5,
    text: 'Nice place to have quick bites inside the city. Loved it!',
    date: '4 years ago',
    avatarBg: 'from-yellow-500 to-yellow-700'
  },
  {
    id: 'rev-3',
    firstName: 'Aishu',
    rating: 5,
    text: 'Awesome place. Great food. Do visit at least once. They give really great service.',
    date: '4 years ago',
    avatarBg: 'from-orange-400 to-amber-600'
  },
  {
    id: 'rev-4',
    firstName: 'Minal',
    rating: 5,
    text: 'We ordered a cake at very last minute..but thanks to them..they were able to pull it off.',
    date: '2 years ago',
    avatarBg: 'from-yellow-400 to-amber-600'
  },
  {
    id: 'rev-5',
    firstName: 'Rucha',
    rating: 5,
    text: "Thank you cake floor for making my son's birthday special,cake was yummy,beautifully designed and upto the mark,totally satisfied with service...",
    date: '4 years ago',
    avatarBg: 'from-amber-500 to-orange-700'
  },
  {
    id: 'rev-6',
    firstName: 'Sumit',
    rating: 5,
    text: 'Thank you very much! The cake was wonderful and prepared as demanded, most importantly it tasted great! Great job ✌',
    date: '4 years ago',
    avatarBg: 'from-orange-500 to-yellow-600'
  },
  {
    id: 'rev-7',
    firstName: 'Mayuri',
    rating: 5,
    text: 'The staff here are helpful and polite. The vibe in here is also gr8.',
    date: '4 years ago',
    avatarBg: 'from-yellow-600 to-amber-800'
  },
  {
    id: 'rev-8',
    firstName: 'Prachi',
    rating: 5,
    text: "Good place to eat. I've always loved their burgers. They do have good snack options",
    date: '4 years ago',
    avatarBg: 'from-amber-600 to-orange-600'
  },
  {
    id: 'rev-9',
    firstName: 'Shubhangi',
    rating: 5,
    text: 'For the cake it is best..nevere ever disappointed. And paneer tikka piza is also best.rest atmosphere is best.',
    date: '2 years ago',
    avatarBg: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'rev-10',
    firstName: 'Piyush',
    rating: 5,
    text: "It's a place where calories count doesn't matter... So just if u r hungry.. U can take a bite of any fast food.. All bakery places looks same to me... In bhandara standard it's good. 🤘👍",
    date: '5 years ago',
    avatarBg: 'from-orange-600 to-amber-700'
  },
  {
    id: 'rev-11',
    firstName: 'Bullet Foodie',
    rating: 5,
    text: 'Great place to hangout',
    date: '2 years ago',
    avatarBg: 'from-amber-500 to-yellow-700'
  },
  {
    id: 'rev-12',
    firstName: 'Khushi',
    rating: 5,
    text: "The pizza and sandwich is delicious and tasty 😋😋😋😋❤️❤️❤️❤️ it's just too good 😍😍",
    date: '5 years ago',
    avatarBg: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'rev-13',
    firstName: 'Hardika',
    rating: 5,
    text: "Quality of cakes and other products are up to the mark and hav lot's of variety",
    date: '4 years ago',
    avatarBg: 'from-orange-400 to-yellow-600'
  },
  {
    id: 'rev-14',
    firstName: 'Garima',
    rating: 5,
    text: 'Cake tastes really great. I ordered chocolate truffle for my friend on his birthday. And he said that the cake was super duper delicious and chocolate overloaded. Thank you THE CAKES FLOOR for your great service.',
    date: '5 years ago',
    avatarBg: 'from-amber-700 to-yellow-900'
  },
  {
    id: 'rev-15',
    firstName: 'Animesh',
    rating: 5,
    text: 'A great place to order and get cakes for numerous occasions. They have various eateries even. I found this place online and ordered a cake from pune for my friend in bhandara and it went too well. The owner is very nice. The service is also amazing and the quality is also great.',
    date: '6 years ago',
    avatarBg: 'from-yellow-500 to-amber-600'
  },
  {
    id: 'rev-16',
    firstName: 'Shreyash',
    rating: 5,
    text: 'Food is really good and the staff is also good',
    date: '1 year ago',
    avatarBg: 'from-orange-500 to-amber-600'
  },
  {
    id: 'rev-17',
    firstName: 'Sumit S.',
    rating: 5,
    text: 'At my first visit... Such a good place to visit with family. U can enjoy lots of pizzas, desert, cakes, gifts, CD, all over there available in one roof... 👍',
    date: '4 years ago',
    avatarBg: 'from-amber-400 to-yellow-500'
  }
];

export const reviewsSummary = {
  rating: 4.1,
  totalReviews: 700
};
