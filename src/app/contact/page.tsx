"use client";

import { useForm } from "react-hook-form";

type FormData = { name: string; phone: string; message: string };

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  function onSubmit(data: FormData) {
    console.log(data);
    reset();
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Contact Me</h1>
          <p className="text-gray-600">Get in touch for personalized assistance.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-gray-700">
            <p>Email: hello@example.com</p>
            <p>Phone: +91 00000 00000</p>
            <p>Address: Kochi, Kerala</p>
            <p>K-RERA Certificate: XXXXXXXX</p>
            <div className="flex gap-3 pt-2">
              <a href="tel:+910000000000" className="rounded-full bg-blue-600 text-white px-4 py-2 text-sm">Call Now</a>
              <a href="#" className="rounded-full border border-gray-200 px-4 py-2 text-sm">WhatsApp</a>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-gray-100 shadow-sm p-6 bg-white space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input {...register("name")} required className="w-full rounded-xl border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <input {...register("phone")} required className="w-full rounded-xl border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea {...register("message")} rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <button type="submit" className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}


