"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Check,
  Building2,
  Home,
  Calendar,
  Compass,
  Layers,
  Square,
  Wrench,
  Car,
  School,
  Hospital,
  ShoppingBag,
  UtensilsCrossed,
  TreePine,
  BedDouble,
  Bath,
  Ruler,
} from "lucide-react";

interface PropertyDetailsSectionProps {
  images: string[];
  title: string;
  price: string;
  address: string;
  status: string;
  description: string;
  propertyInfo: {
    propertyId: string;
    type: string;
    furnishing: string;
    age: string;
    facing: string;
    floor: string;
    balcony: string;
    maintenance: string;
  };
  keyFeatures: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  amenities: string[];
  nearbyFacilities: Array<{
    icon: string;
    name: string;
    distance: string;
  }>;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export function PropertyDetailsSection({
  images,
  title,
  price,
  address,
  status,
  description,
  propertyInfo,
  keyFeatures,
  amenities,
  nearbyFacilities,
  agent,
}: PropertyDetailsSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      building: <Building2 className="h-5 w-5" />,
      home: <Home className="h-5 w-5" />,
      calendar: <Calendar className="h-5 w-5" />,
      compass: <Compass className="h-5 w-5" />,
      layers: <Layers className="h-5 w-5" />,
      square: <Square className="h-5 w-5" />,
      wrench: <Wrench className="h-5 w-5" />,
      car: <Car className="h-5 w-5" />,
      school: <School className="h-5 w-5" />,
      hospital: <Hospital className="h-5 w-5" />,
      shopping: <ShoppingBag className="h-5 w-5" />,
      restaurant: <UtensilsCrossed className="h-5 w-5" />,
      park: <TreePine className="h-5 w-5" />,
      bed: <BedDouble className="h-5 w-5" />,
      bath: <Bath className="h-5 w-5" />,
      ruler: <Ruler className="h-5 w-5" />,
    };
    return iconMap[iconName.toLowerCase()] || <Home className="h-5 w-5" />;
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Main Layout: Image Gallery (70%) + Contact Card (30%) */}
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left Column: Image Gallery Section (70%) */}
          <div className="space-y-5">
            {/* Main Image Slider */}
            <div className="relative rounded-xl overflow-hidden shadow-md bg-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-2.5 shadow-lg transition-all hover:scale-110 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-900" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-2.5 shadow-lg transition-all hover:scale-110 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-900" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full font-medium">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentImageIndex === index
                        ? "border-blue-600 shadow-md ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-400 hover:shadow-sm"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-24 h-24 object-cover transition-all duration-200 ${
                        currentImageIndex === index
                          ? "opacity-100"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Title, Price, Address, Status */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 flex-1 leading-tight">
                  {title}
                </h1>
                <span className="inline-flex items-center rounded-full bg-green-600 text-white text-xs font-semibold px-4 py-1.5 whitespace-nowrap shadow-sm">
                  {status}
                </span>
              </div>
              
              <div className="text-3xl font-bold text-gray-900">{price}</div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 flex-shrink-0 text-gray-500" />
                <span className="text-base">{address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Agent Card (30%) */}
          <div className="lg:sticky lg:top-6 h-fit">
            <div className="rounded-xl bg-white border border-gray-200 shadow-md p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Contact Agent</h2>
              
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gray-100 p-2.5 flex-shrink-0">
                    <Phone className="h-5 w-5 text-gray-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a
                      href={`tel:${agent.phone}`}
                      className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors break-all"
                    >
                      {agent.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-gray-100 p-2.5 flex-shrink-0 mt-0.5">
                    <Mail className="h-5 w-5 text-gray-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <a
                      href={`mailto:${agent.email}`}
                      className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors break-all"
                    >
                      {agent.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-gray-100">
                <a
                  href={`tel:${agent.phone}`}
                  className="w-full flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                >
                  Enquire Now
                </a>
                <a
                  href={`https://wa.me/${agent.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center rounded-full bg-green-600 text-white px-6 py-3 text-sm font-semibold hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property Information Card */}
        <div className="mt-8 rounded-xl bg-white border border-gray-200 shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Property Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Property ID</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.propertyId}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Type</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.type}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Furnishing</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.furnishing}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Age</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.age}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Facing</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.facing}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Floor</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.floor}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Balcony</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.balcony}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Maintenance</span>
              <span className="font-semibold text-gray-900 text-right">{propertyInfo.maintenance}</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8 rounded-xl bg-white border border-gray-200 shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
            {description}
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mt-8 rounded-xl bg-white border border-gray-200 shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 text-blue-600 bg-blue-50 rounded-lg p-2.5">
                  {getIcon(feature.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 font-medium">{feature.label}</p>
                  <p className="text-base font-semibold text-gray-900 mt-0.5">{feature.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-8 rounded-xl bg-white border border-gray-200 shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-base">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Facilities Section */}
        <div className="mt-8 rounded-xl bg-white border border-gray-200 shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Nearby Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nearbyFacilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 text-gray-600 bg-gray-50 rounded-lg p-2.5">
                  {getIcon(facility.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900">{facility.name}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{facility.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
