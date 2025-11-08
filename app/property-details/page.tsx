"use client";

import { PropertyDetailsSection } from "@/components/property-details-section";

// Sample property data for preview
const samplePropertyData = {
  images: [
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ],
  title: "3BHK Luxury Apartment, Maradu",
  price: "₹1.2 Crores",
  address: "Maradu, Kochi, Kerala 682304",
  status: "Available",
  description: `This stunning 3BHK apartment offers a perfect blend of modern luxury and comfort. Located in the heart of Maradu, this property features spacious rooms, premium finishes, and breathtaking views.

The apartment includes a fully equipped modern kitchen, elegant living area, and three well-appointed bedrooms with attached bathrooms. The master bedroom features a walk-in closet and a private balcony overlooking the city skyline.

The property is part of a gated community with 24/7 security, landscaped gardens, a swimming pool, gymnasium, and children's play area. It's conveniently located near schools, hospitals, shopping malls, and major transportation hubs.

Perfect for families looking for a premium lifestyle in one of Kochi's most sought-after neighborhoods.`,
  propertyInfo: {
    propertyId: "PROP-2024-001",
    type: "Apartment",
    furnishing: "Semi-Furnished",
    age: "2 Years",
    facing: "East",
    floor: "5th Floor",
    balcony: "2 Balconies",
    maintenance: "₹3,500/month",
  },
  keyFeatures: [
    {
      icon: "building",
      label: "Built-up Area",
      value: "1,850 sqft",
    },
    {
      icon: "home",
      label: "Carpet Area",
      value: "1,450 sqft",
    },
    {
      icon: "calendar",
      label: "Possession",
      value: "Ready to Move",
    },
    {
      icon: "compass",
      label: "Parking",
      value: "2 Covered",
    },
    {
      icon: "layers",
      label: "Total Floors",
      value: "12 Floors",
    },
    {
      icon: "square",
      label: "Plot Area",
      value: "N/A",
    },
  ],
  amenities: [
    "24/7 Security",
    "Swimming Pool",
    "Gymnasium",
    "Landscaped Gardens",
    "Children's Play Area",
    "Power Backup",
    "Lift",
    "Parking",
    "Water Supply",
    "Rainwater Harvesting",
    "Waste Management",
    "Clubhouse",
  ],
  nearbyFacilities: [
    {
      icon: "school",
      name: "International School",
      distance: "500 m",
    },
    {
      icon: "hospital",
      name: "City Hospital",
      distance: "1.2 km",
    },
    {
      icon: "shopping",
      name: "Shopping Mall",
      distance: "800 m",
    },
    {
      icon: "restaurant",
      name: "Restaurants & Cafes",
      distance: "300 m",
    },
    {
      icon: "car",
      name: "Metro Station",
      distance: "1.5 km",
    },
    {
      icon: "park",
      name: "Public Park",
      distance: "600 m",
    },
  ],
  agent: {
    name: "John Doe",
    phone: "+91 98765 43210",
    email: "john.doe@evergreenrealty.com",
  },
};

export default function PropertyDetailsPage() {
  return <PropertyDetailsSection {...samplePropertyData} />;
}
