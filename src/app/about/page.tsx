export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Neutral placeholder: K-RERA-registered real estate professional focused on
              transparency, diligence, and client-first service. I help buyers and
              sellers make informed decisions with verified listings and guided processes.
            </p>
            <p>
              My approach is simple: clarity, responsiveness, and reliable after-sale
              support.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6 bg-white">
            <h3 className="text-lg font-semibold">K-RERA Registration Details</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between"><span>Certificate No.</span><span>XXXXXXXXXX</span></div>
              <div className="flex justify-between"><span>Status</span><span className="text-green-600">Active</span></div>
              <div className="flex justify-between"><span>Location</span><span>Kerala</span></div>
              <div className="flex justify-between"><span>Phone</span><span>+91 00000 00000</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


