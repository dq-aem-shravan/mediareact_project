import React, { useRef, useState } from "react";
import Navbar from "../Components/ui/Navbar";
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_c0hhubg",
        "template_vk3mkbq",
        form.current,
        "ZMkfyJpu7lmiZJJmm"
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
          setIsSubmitting(false);
        },
        (error) => {
          alert("Error sending message. Check console.");
          console.error(error);
          setIsSubmitting(false);
        }
      );

    e.target.reset();
  };

  return (
    <div className="bg-black text-yellow-400 min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 md:px-12 py-6 border-b border-gray-700">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          Contact Us
        </h1>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/wedmakers.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@wedmakers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl hover:text-red-500 transition transform hover:scale-110"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-12 py-12">
        {/* Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md border border-yellow-400 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit number"
              className="p-3 rounded-md border border-yellow-400 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 rounded-md border border-yellow-400 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-white hover:text-black transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="flex items-center gap-2">
            <FaPhone /> +91 7995112432
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> wedmakers.co@gmail.com
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Visit Us:</h3>
          <div className="w-full h-60 md:h-80 lg:h-96 border-2 border-yellow-400 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2170496012927!2d-74.00601528460894!3d40.71277597933183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19cfae3b5d%3A0x9b6c748e63f91f60!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1614790626114!5m2!1sen!2sus"
              title="Google Maps Location"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
};

export default Contact;
