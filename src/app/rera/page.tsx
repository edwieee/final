export default function ReraPage() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">RERA Registration</h1>
          <ul className="mt-6 space-y-3 text-white/90 list-disc pl-5">
            <li>Transparency</li>
            <li>Legal Compliance</li>
            <li>Verified Credentials</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>
        <div className="bg-white text-gray-900 rounded-3xl shadow-2xl border border-blue-100 p-6 md:p-8 min-h-[260px]">
          <h3 className="text-lg font-semibold">Certificate</h3>
          <div className="mt-4 space-y-3 text-base text-gray-700">
            <div className="flex justify-between"><span>Certificate No.</span><span>
            K-RERA/XX/XXXX/2025=</span></div>
            <div className="flex justify-between"><span>Agent Name</span><span>Your Name</span></div>
            <div className="flex justify-between"><span>State</span><span>Kerala</span></div>
            <div className="flex justify-between"><span>Status</span><span className="text-green-600">Active</span></div>
          </div>
          <a href="#" className="mt-6 inline-flex rounded-full bg-blue-600 text-white px-4 py-2 text-sm">Verify on Official RERA Website</a>
        </div>
      </div>
    </section>
  );
}


