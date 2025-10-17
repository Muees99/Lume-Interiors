export const articles = [
  {
    slug: "modern-minimalist-trends",
    title: "Modern Minimalist Trends Redefining Interior Architecture",
    date: "October 8, 2025",
    description:
      "Explore how minimalism is transforming interior spaces through balance, simplicity, and mindful design.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    content: `
      Minimalism is more than a design choice — it’s a lifestyle philosophy that prioritizes clarity, calm, and balance.
      Designers today are embracing neutral tones, open layouts, and natural lighting to create interiors that evoke serenity.

      The trend emphasizes purposeful design — where every piece of furniture, artwork, or fixture serves a clear function.
      Instead of filling spaces with objects, designers are focusing on breathing room, allowing light and flow to define beauty.

      This minimalist movement continues to evolve with sustainable materials, modular furniture, and technology that enhances simplicity.
      It’s a reminder that true luxury often lies in restraint, not abundance.
    `,
  },
  {
    slug: "sustainable-materials",
    title: "Sustainable Materials Shaping the Future of Design",
    date: "September 25, 2025",
    description:
      "Eco-conscious materials are leading a revolution in architecture and interior design — combining beauty with responsibility.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    content: `
      Sustainability is no longer an option — it’s a standard for modern design.
      From bamboo flooring to recycled glass countertops and reclaimed wood, designers are embracing materials that tell a story of care and longevity.

      Eco-conscious interiors don’t compromise beauty; they redefine it.
      Organic fabrics, low-VOC paints, and locally sourced materials help create healthier environments for both people and the planet.

      The growing demand for sustainable spaces reflects a cultural shift toward mindfulness — where elegance meets ethical responsibility.
      Each design choice becomes a step toward a more regenerative future.
    `,
  },
  {
    slug: "artisanal-spaces",
    title: "The Rise of Artisanal Spaces: Craft Meets Modern Living",
    date: "August 30, 2025",
    description:
      "Discover how handcrafted artistry is reshaping modern interiors with warmth, texture, and personality.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    content: `
      In an era dominated by mass production, artisanal interiors celebrate authenticity and individuality.
      Handmade ceramics, woven textiles, and carved wooden furniture introduce a tactile warmth that machines cannot replicate.

      These handcrafted pieces carry the soul of their creators — adding character and narrative to modern living spaces.
      Designers are increasingly collaborating with local artisans to create one-of-a-kind interiors that blend tradition with innovation.

      The result is a shift from generic to genuine — homes that feel deeply personal, rooted in culture, and rich with meaning.
    `,
  },
  {
    slug: "color-inspiration-2025",
    title: "Color Inspirations for 2025: Earthy Neutrals and Warm Accents",
    date: "August 10, 2025",
    description:
      "A soft return to nature — discover the color palettes that evoke calm, sophistication, and timelessness this season.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    content: `
      2025 is all about grounded palettes that connect us back to the earth.
      Designers are embracing muted taupes, olive greens, and terracotta tones — shades that feel organic and enduring.

      Warm metallics like bronze and brushed gold are reemerging as subtle accents, adding sophistication without overpowering a room.
      Pairing these with soft beige or chalk-white walls creates a harmonious, lived-in aesthetic.

      This year’s trend isn’t about fleeting color fads — it’s about creating spaces that comfort and rejuvenate.
      The palette celebrates simplicity, warmth, and emotional balance.
    `,
  },
  {
    slug: "biophilic-design",
    title: "Biophilic Design: Bringing Nature Indoors",
    date: "July 18, 2025",
    description:
      "Learn how natural elements create breathing, inspiring spaces that blend wellness and design.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    content: `
      Biophilic design is about creating a strong connection between indoor spaces and the natural world.
      It incorporates elements such as sunlight, plants, water features, and organic materials to promote well-being and comfort.

      Studies have shown that spaces enriched with natural elements improve focus, reduce stress, and foster creativity.
      Designers use biophilic principles to introduce greenery, maximize natural light, and utilize textures inspired by nature.

      Whether it’s a lush living wall, a tranquil indoor garden, or wood and stone finishes, biophilic design invites calmness and serenity.
      The goal is not just aesthetics, but to create a living environment that supports physical and mental health.
    `,
  },
  {
    slug: "smart-interiors",
    title: "Smart Interiors: Where Technology Meets Aesthetic",
    date: "June 30, 2025",
    description:
      "Explore how smart devices are seamlessly blending into elegant interiors to create intuitive, stylish living spaces.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    content: `
      Smart interiors are redefining convenience through design that feels effortless.
      With voice-controlled lighting, adaptive climate systems, and hidden technology, modern homes are becoming more intuitive than ever.

      The beauty lies in the seamless integration — where innovation complements, rather than competes with, aesthetics.
      Designers are embedding sensors and smart appliances into minimalist layouts to maintain a sense of elegance and calm.

      The future of interior architecture lies at this intersection — where technology enhances comfort and design remains timeless.
    `,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article)
    return { title: "Article Not Found | Lumé Interiors", description: "" };
  return {
    title: `${article.title} | Lumé Interiors`,
    description: article.description,
  };
}
