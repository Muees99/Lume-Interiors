export type DecorItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export const decorItems: DecorItem[] = [
  {
    id: 1,
    name: "Nordic Floor Lamp",
    category: "Lighting",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=958",
    description:
      "Minimalist floor lamp made of oak wood and linen shade for warm lighting.",
  },
  {
    id: 2,
    name: "Velvet Accent Chair",
    category: "Furniture",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1759722667762-6ca081ea1844?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=754",
    description:
      "Plush velvet chair designed for comfort and sophistication in your living room.",
  },
  {
    id: 3,
    name: "Marble Coffee Table",
    category: "Tables",
    price: 680,
    image:
      "https://images.unsplash.com/photo-1652137007126-c2a3948eabfb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    description:
      "Elegant marble-top coffee table with gold-finished steel legs.",
  },
  {
    id: 4,
    name: "Wall Art Abstract Painting",
    category: "Wall Art",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1628148452557-749ffd3cd619?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    description:
      "Hand-painted abstract canvas art to add personality to your space.",
  },
  {
    id: 5,
    name: "Rattan Storage Basket",
    category: "Accessories",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1627202626612-1e304a201b32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    description:
      "Eco-friendly woven rattan basket perfect for storage and decoration.",
  },
  {
    id: 6,
    name: "Ceramic Vase Set",
    category: "Decor",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1549734422-3abcb1a9881f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=756",
    description:
      "Elegant ceramic vases in earthy tones to enhance your tabletop aesthetic.",
  },
];
