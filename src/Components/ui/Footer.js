import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-red-500 font-semibold mb-3">About Us</h3>
          <p>
            We are a creative team dedicated to capturing your moments with
            precision and artistry.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-red-400">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-red-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-3">Contact</h3>
          <p>Email: wedmakers.co@gmail.com</p>
          <p>Phone: +91 7995112432</p>
          <p>Hyderabad, India</p>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-sm">
        © 2025 WEDMAKER'S.CO All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
