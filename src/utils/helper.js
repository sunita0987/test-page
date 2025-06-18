import Card1 from "../assets/images/city.jpg";
import Card2 from "../assets/images/flower.jpg";
import Card3 from "../assets/images/city.jpg";

export const products = [
  {
    name: "Samsung",
    price: "25,000",
    features: ["5G Support", "256GB Storage", "OLED Display"],
  },
  {
    name: "Laptop",
    price: "40,000",
    features: ["Intel i7", "16GB RAM", "512GB SSD"],
  },
  {
    name: "Smartwatch",
    price: "5,000",
    features: ["Heart Rate Monitor", "GPS", "Water Resistant"],
  },
];
export default products;

export const inputGroups = [
  [
    { type: "text", placeholder: "First Name" },
    { type: "text", placeholder: "Last Name" },
  ],
  [{ type: "email", placeholder: "Email Address" }],
];

export const swiperSlider = [
  {
    stepImg: Card1,
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
  },
  {
    stepImg: Card2,
    imgContent: "Custom Showers",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
  },
  {
    stepImg: Card3,
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
  },
];
