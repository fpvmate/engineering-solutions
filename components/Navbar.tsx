export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Engineering Solutions
          </h1>
          <p className="text-xs text-gray-500">
            Precision Engineering for Research & Innovation
          </p>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-900">Home</a></li>
          <li><a href="#about" className="hover:text-blue-900">About</a></li>
          <li><a href="#services" className="hover:text-blue-900">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-900">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-900">Contact</a></li>
        </ul>

      </nav>
    </header>
  );
}