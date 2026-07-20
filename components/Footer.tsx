export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Skyline
          </h2>

          <p className="mt-6">
            Professional residential, commercial and industrial construction services.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">
            Company
          </h3>

          <p>About</p>
          <p className="mt-3">Services</p>
          <p className="mt-3">Projects</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">
            Contact
          </h3>

          <p>+91 8626034157</p>
          <p className="mt-3">info@skyline.com</p>
          <p className="mt-3">Kolhapur, Maharashtra</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">
            Working Hours
          </h3>

          <p>Mon - Sat</p>
          <p className="mt-3">9:00 AM - 6:00 PM</p>
        </div>

      </div>

      <div className="text-center mt-16 border-t border-gray-800 pt-8">
        © 2026 Skyline Constructions. All Rights Reserved. | Devloped By OM S PATIL
      </div>

    </footer>
  );
}