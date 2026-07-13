export type PropertyTag = "For Sale" | "New" | "Featured";

export type Property = {
  id: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  tag: PropertyTag;
};

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Modern Family Home",
    address: "1247 Maplewood Drive, Austin, TX 78704",
    price: 685000,
    beds: 4,
    baths: 3,
    sqft: 2650,
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    tag: "Featured",
  },
  {
    id: "prop-002",
    title: "Charming Craftsman Bungalow",
    address: "382 Willow Lane, Portland, OR 97214",
    price: 529000,
    beds: 3,
    baths: 2,
    sqft: 1820,
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    tag: "For Sale",
  },
  {
    id: "prop-003",
    title: "Luxury Hillside Villa",
    address: "9015 Skyline Terrace, Los Angeles, CA 90068",
    price: 2450000,
    beds: 5,
    baths: 5,
    sqft: 4800,
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    tag: "Featured",
  },
  {
    id: "prop-004",
    title: "Sunny Suburban Retreat",
    address: "56 Birchwood Court, Naperville, IL 60540",
    price: 445000,
    beds: 3,
    baths: 2,
    sqft: 1975,
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    tag: "New",
  },
  {
    id: "prop-005",
    title: "Contemporary Downtown Loft",
    address: "710 Market Street, Unit 12B, Denver, CO 80202",
    price: 598000,
    beds: 2,
    baths: 2,
    sqft: 1420,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    tag: "New",
  },
  {
    id: "prop-006",
    title: "Coastal Cottage Getaway",
    address: "18 Seabreeze Avenue, Charleston, SC 29412",
    price: 739000,
    beds: 4,
    baths: 3,
    sqft: 2280,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    tag: "For Sale",
  },
];
