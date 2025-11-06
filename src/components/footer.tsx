import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 flex flex-col md:flex-row items-center gap-6">
        <div className="order-2 md:order-1 flex-1">
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <a className="hover:text-gray-900" href="#home">Home</a>
            <a className="hover:text-gray-900" href="#about">About</a>
            <a className="hover:text-gray-900" href="#properties">Properties</a>
            <a className="hover:text-gray-900" href="#rera">RERA</a>
            <a className="hover:text-gray-900" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="order-1 md:order-2 text-center flex-1">
          <h3 className="text-lg font-semibold tracking-tight">EverGreen Realty</h3>
          <p className="text-xs text-gray-500">RERA Certificate: XXXXXXXX</p>
        </div>
        <div className="order-3 flex-1 flex justify-end">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} EverGreen Realty</div>
        </div>
      </div>
    </footer>
  );
}


