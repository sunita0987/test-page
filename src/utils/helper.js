import Card1 from "../assets/images/beautiful.jpg";
import Card2 from "../assets/images/flower.jpg";
import Card3 from "../assets/images/city.jpg";

export const products = [
  {
    name: "Wireless Earbuds",
    price: "$29.99",
    features: [
      "Bluetooth 5.0",
      "Noise Cancellation",
      "12hr Battery",
      "Compact Case",
    ],
  },
  {
    name: "Smart Watch",
    price: "$59.99",
    features: [
      "Heart Rate Monitor",
      "Sleep Tracking",
      "Water Resistant",
      "1 Week Battery",
    ],
  },
  {
    name: "Gaming Mouse",
    price: "$19.99",
    features: [
      "RGB Lighting",
      "Adjustable DPI",
      "Ergonomic Design",
      "6 Buttons",
    ],
  },
];
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
    heading: "Kitchen Backsplash",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
  },
  {
    stepImg: Card2,
    imgContent: "Custom Showers",
    heading: "Custom Showers",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
  },
  {
    stepImg: Card3,
    heading: "Custom Flooring",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
  },
  {
    stepImg: Card2,
    imgContent: "Custom Showers",
    heading: "Custom Showers",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
  },
];
