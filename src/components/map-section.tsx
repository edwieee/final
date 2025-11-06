export function MapSection() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            title="Location Map"
            className="w-full h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15725.341!2d76.267!3d9.931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
          />
        </div>
      </div>
    </section>
  );
}


