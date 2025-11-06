"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BedDouble, Bath, MapPin } from "lucide-react";
import { MapSection } from "@/components/map-section";

const propertyImages = [
  // Switched to Pexels CDN for hotlink-friendly, reliable images
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const properties = [
  {
    id: 1,
    title: "2BHK Apartment, Kochi",
    location: "Maradu, Kochi",
    price: "₹75 Lakhs",
    img: propertyImages[0],
    beds: 2,
    baths: 2,
    sqft: 1200,
    tags: ["2 Bedrooms", "2 Bathrooms", "+2 more"],
  },
  {
    id: 2,
    title: "3BHK Villa, Ernakulam",
    location: "Kakkanad, Ernakulam",
    price: "₹1.8 Crores",
    img: propertyImages[1],
    beds: 3,
    baths: 3,
    sqft: 2500,
    tags: ["3 Bedrooms", "3 Bathrooms", "+2 more"],
  },
  {
    id: 3,
    title: "1BHK Apartment, Fort Kochi",
    location: "Fort Kochi, Kochi",
    price: "₹45 Lakhs",
    img: propertyImages[2],
    beds: 1,
    baths: 1,
    sqft: 800,
    tags: ["1 Bedroom", "1 Bathroom", "+2 more"],
  },
  {
    id: 4,
    title: "4BHK Independent House",
    location: "Thripunithura, Ernakulam",
    price: "₹2.8 Crores",
    img: propertyImages[3],
    beds: 4,
    baths: 4,
    sqft: 3500,
    tags: ["4 Bedrooms", "4 Bathrooms", "+2 more"],
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 10]);

  return (
    <div>
      {/* 1. Hero */}
      <section id="home" className="relative h-[92svh] w-full overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Villa"
          className="absolute inset-0 h-full w-full object-cover sm:blur-[1px] md:blur-[2px]"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/40" />
        <div className="relative mx-auto max-w-[1200px] px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white max-w-[760px] md:text-left text-center md:items-start items-center mx-auto -mt-10"
          >
            <motion.div className="mb-5 flex gap-2 justify-center md:justify-start flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {['House','Apartment','Residential'].map((c) => (
                <span key={c} className="rounded-full bg-white/30 text-white border border-white/50 backdrop-blur-sm shadow-[0_6px_18px_rgba(0,0,0,0.12)] px-2.5 py-1 text-xs md:text-sm">
                  {c}
                </span>
              ))}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-[0.5px] text-white"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.45)" }}
            >
              Trusted RERA Registered Real Estate Agent
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-white/80 max-w-prose md:text-left text-center text-base md:text-2xl"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
            >
              Your trusted partner for buying, selling, and investing in real estate.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <a href="tel:+910000000000" className="rounded-full bg-green-600 px-6 py-2 sm:px-8 sm:py-3 text-sm font-medium shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition will-change-transform hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110">Call Now</a>
              <a href="#contact" className="rounded-full bg-white/90 text-gray-900 px-6 py-2 sm:px-8 sm:py-3 text-sm font-medium shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition will-change-transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-white">Get Started</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. About */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              RERA-registered real estate professional focused on transparency, diligence, and client-first service. I help buyers and sellers make informed decisions with verified listings and guided processes.
            </p>
            <div className="rounded-2xl border border-gray-100 shadow-sm p-6 bg-white">
              <h3 className="text-lg font-semibold">RERA Registration Details</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="flex justify-between"><span>Certificate No.</span><span>XXXXXXXXXX</span></div>
                <div className="flex justify-between"><span>Status</span><span className="text-green-600">Active</span></div>
                <div className="flex justify-between"><span>Location</span><span>Kerala</span></div>
                <div className="flex justify-between"><span>Phone</span><span>+91 00000 00000</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="About visual" className="w-full h-[420px] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Properties */}
      <section id="properties" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Properties</h2>
            <p className="text-gray-600">Explore a curated selection of properties in your area.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <motion.article key={p.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt="Property" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-600 text-white text-xs px-3 py-1">For Sale</span>
                  <span className="absolute right-3 bottom-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-semibold">{p.price}</span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600"><MapPin className="h-4 w-4" />{p.location}</div>
                  <div className="flex items-center gap-5 text-sm text-gray-600 pt-2">
                    <span className="inline-flex items-center gap-2"><BedDouble className="h-4 w-4" /> 5 Bedrooms</span>
                    <span className="inline-flex items-center gap-2"><Bath className="h-4 w-4" /> 2 Bathroom</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RERA */}
      <section id="rera" className="bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">RERA Registration</h2>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-5">
              <li>Transparency</li>
              <li>Legal Compliance</li>
              <li>Verified Credentials</li>
              <li>Grievance Redressal</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Certificate</h3>
              <span className="inline-block rounded-full bg-blue-50 text-blue-700 text-xs px-3 py-1 border border-blue-100">Verified</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between"><span>Certificate No.</span><span>XXXXXXXXXX</span></div>
              <div className="flex justify-between"><span>Agent Name</span><span>Placeholder</span></div>
              <div className="flex justify-between"><span>State</span><span>Kerala</span></div>
              <div className="flex justify-between"><span>Status</span><span className="text-green-600">Active</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Contact + CTA with Map */}
      <section id="contact" className="relative bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-20">
          <div className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Make Your Dream Property a Reality?</h2>
                <p className="mt-3 text-gray-600">Explore a curated selection of properties that align with your vision and goals.</p>
                <div className="mt-6 flex gap-3">
                  <a href="#" className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm">Get Started</a>
                  <a href="tel:+910000000000" className="rounded-full border border-gray-300 px-5 py-3 text-sm">Call Now</a>
                </div>
                <div className="mt-8 space-y-2 text-gray-700 text-sm">
                  <div>Phone: (+91) 839-849-8483</div>
                  <div>Email: hello@example.com</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 12345, Kochi, Kerala</div>
                </div>
              </div>
              <div className="bg-gray-50">
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
