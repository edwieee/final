import Link from "next/link";
import { MessageCircle } from "lucide-react";

const mock = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "2BHK Apartment, Kochi",
  location: "Edappally, Kochi",
  price: i % 2 ? "₹75 Lakhs" : "₹1.2 Crores",
  img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
  beds: 2,
  baths: 2,
  sqft: 1100,
}));

export default function PropertiesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Featured Properties</h1>
        <p className="text-gray-600 mt-2">Explore a curated selection of properties in your area.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mock.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white">
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt="Property" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-green-600 text-white text-xs px-3 py-1">Available</span>
                <span className="absolute right-3 bottom-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-semibold">{p.price}</span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.location}</p>
                <div className="flex items-center gap-4 text-xs text-gray-600 pt-2">
                  <span>{p.beds} Beds</span>
                  <span>{p.baths} Baths</span>
                  <span>{p.sqft} sqft</span>
                </div>
                <div className="pt-3 flex gap-2">
                  <Link 
                    href="/property-details"
                    className="flex-1 text-center rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-2.5 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
                  >
                    View Details
                  </Link>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 px-3 py-2.5 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


