import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Components/ui/Navbar";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";
import { uploadMedia, getAllMedia, getMediaUrl } from '../api/mediaService';

const ClientAlbum = () => {
  const { isAdmin } = useContext(AuthContext);
  const [mediaList, setMediaList] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const data = await getAllMedia();
      setMediaList(data.content || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => setFiles(Array.from(e.target.files));

  const handleUpload = async () => {
    if (!files.length) return;
    try {
      await uploadMedia(files);
      alert("Upload successful!");
      setFiles([]);
      fetchMedia();
    } catch (err) {
      alert("Upload failed: " + (err.response?.data?.message || "Error"));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-8 border-b border-gray-300">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-0">Client Album</h1>
        <div className="flex gap-6 text-3xl md:text-4xl text-gray-700">
          <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-transform transform hover:scale-110">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Admin Upload */}
      {isAdmin && (
        <div className="flex justify-center my-6 space-x-4">
          <label htmlFor="file-upload-client" className="cursor-pointer">
            <FontAwesomeIcon icon={faPlus} size="2x" className="text-blue-600 hover:text-blue-800 transition-colors" />
          </label>
          <input id="file-upload-client" type="file" multiple className="hidden" onChange={handleFileChange} />
          {files.length > 0 && (
            <button
              onClick={handleUpload}
              className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-4 rounded-full hover:scale-110 transition-transform"
            >
              Confirm Upload
            </button>
          )}
        </div>
      )}

      {/* Gallery */}
      {loading ? (
        <p className="text-center py-20 text-xl text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-[1200px] mx-auto">
          {mediaList.map((media) => (
            <div key={media.id} className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={getMediaUrl(media.id)} alt={media.name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 px-6 md:px-12 flex flex-wrap justify-between gap-8">
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-red-600 font-semibold mb-2">About Us</h3>
          <p>We are a creative team dedicated to capturing your moments with precision and artistry.</p>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-red-600 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-red-600">Home</a></li>
            <li><a href="/portfolio" className="hover:text-red-600">Portfolio</a></li>
            <li><a href="/about" className="hover:text-red-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-red-600">Contact</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-red-600 font-semibold mb-2">Contact Us</h3>
          <p>Email: wedmakers.co@gmail.com</p>
          <p>Phone: +91 7995112432</p>
          <p>Address: Hyderabad, India</p>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-red-600 font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="w-full text-center mt-8 text-gray-400">
          © 2025 WEDMAKER'S.CO All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default ClientAlbum;
