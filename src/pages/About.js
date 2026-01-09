import React from "react";

import ai1 from '../Components/assets/images/ai1.jpg';
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 border-b border-gray-300">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          About
        </h1>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/wedmakers.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-125 transition text-gray-700 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@wedmakers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-125 transition text-gray-700 hover:text-red-500"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-12 py-12">
        <div className="flex-1 text-gray-700 text-lg leading-relaxed">
          <p className="font-semibold mb-4">
            Welcome to my world of photography!
          </p>

          <p className="mb-4">
            Wedmaker’s.Co is a young team of wedding photographers. We capture
            every moment on your important day. Our intention is to bring out
            beautiful stories of unforgettable moments that you'll cherish
            forever.
          </p>

          <p className="mb-4">
            Our team provides photography, videography, and cinematography
            services. We approach events with a friendly demeanor to capture
            your natural moments.
          </p>

          <p className="mb-4">We capture and travel around the world.</p>

          <p className="font-semibold">
            I fell in love with love, and photographing weddings has become my
            favorite event to capture.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={ai1}
            alt="About"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Work Process */}
      <div className="bg-amber-100 py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Way We Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: "01",
              title: "Our Support",
              color: "text-orange-500",
              bg: "bg-orange-50",
              text:
                "Every client that approaches us receives support from stem to stern.",
            },
            {
              id: "02",
              title: "Propose the Best",
              color: "text-blue-500",
              bg: "bg-blue-50",
              text:
                "We recommend the best for your event within your budget.",
            },
            {
              id: "03",
              title: "What We Stand For",
              color: "text-purple-500",
              bg: "bg-purple-50",
              text:
                "We keep you updated on all crucial aspects of your event.",
            },
            {
              id: "04",
              title: "Cordial Relationship",
              color: "text-green-500",
              bg: "bg-green-50",
              text:
                "We value long-term relationships with our clients.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} p-6 rounded-xl shadow-lg transform ${
                index % 2 === 0 ? "-translate-y-4" : "translate-y-4"
              } hover:scale-105 transition`}
            >
              <h3 className={`text-3xl font-bold ${item.color}`}>
                {item.id}
              </h3>
              <h4 className="text-xl font-semibold my-3">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default About;
