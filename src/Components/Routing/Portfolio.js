// import React, { useState, useEffect  } from "react";
// import Navbar from "./Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { FaInstagram, FaYoutube } from "react-icons/fa";
// import "./portfolio.css";

// const Portfolio = () => {
//   const [likedImages, setLikedImages] = useState([]);

//    useEffect(() => {
//     debugger; // ✅ pauses after login navigation
//   }, []);
//   const images = [
//     { id: 1, src: "https://images.pexels.com/photos/29914937/pexels-photo-29914937/free-photo-of-elegant-portrait-of-a-fashion-model-in-fur-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Urban Photography 1" },
//     { id: 2, src: "https://images.pexels.com/photos/7910811/pexels-photo-7910811.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Urban Photography 2" },
//     { id: 3, src: "https://images.pexels.com/photos/2173016/pexels-photo-2173016.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Urban Photography 3" },
//     { id: 4, src: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Urban Photography 4" },
//     { id: 5, src: 'https://images.pexels.com/photos/29914958/pexels-photo-29914958/free-photo-of-sophisticated-studio-portrait-in-london.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 2' },
//     { id: 6, src: 'https://images.pexels.com/photos/29899911/pexels-photo-29899911/free-photo-of-elegant-woman-in-a-vintage-dress-at-istanbul-location.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 3' },
//     { id: 7, src: 'https://images.pexels.com/photos/29902717/pexels-photo-29902717/free-photo-of-scenic-view-of-mount-bromo-landscape.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 1' },
//     { id: 8, src: 'https://images.pexels.com/photos/29895396/pexels-photo-29895396/free-photo-of-portrait-of-woman-holding-vintage-orange-telephone.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 2' },
//     { id: 9, src: 'https://images.pexels.com/photos/29879991/pexels-photo-29879991/free-photo-of-moody-portrait-of-a-woman-in-grey-sweater.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 3' },
//     { id: 10, src: 'https://images.pexels.com/photos/29855994/pexels-photo-29855994/free-photo-of-woman-enjoying-scenic-view-in-cagayan-valley.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 1' },
//     { id: 11, src: 'https://images.pexels.com/photos/20415076/pexels-photo-20415076/free-photo-of-model-fashion-shoot.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 2' },
//     { id: 12, src: 'https://images.pexels.com/photos/23437381/pexels-photo-23437381/free-photo-of-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 3' },
//     { id: 13, src: 'https://images.pexels.com/photos/15102094/pexels-photo-15102094/free-photo-of-portrait-of-a-brunette-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 1' },
//     { id: 14, src: 'https://images.pexels.com/photos/29864715/pexels-photo-29864715/free-photo-of-stylish-woman-in-retro-jumpsuit-holding-camera.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 2' },
//     { id: 15, src: 'https://images.pexels.com/photos/17602715/pexels-photo-17602715/free-photo-of-woman-hands-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Urban Photography 3' }
//   ];

//   const toggleLike = (id) => {
//     if (likedImages.includes(id)) {
//       setLikedImages(likedImages.filter((imageId) => imageId !== id));
//     } else {
//       setLikedImages([...likedImages, id]);
//     }
//   };

//   // const handleDownload = (src) => {
//   //   const link = document.createElement("a");
//   //   link.href = src;
//   //   link.download = "image.jpg";
//   //   link.click();
//   // };
//   const handleDownload = async (src) => {
//     try {
//       const response = await fetch(src);
//       if (!response.ok) throw new Error("Failed to fetch image");
  
//       const blob = await response.blob();
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = "downloaded-image.jpg"; 
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(link.href); 
//     } catch (error) {
//       console.error("Download failed:", error);
//       alert("Failed to download image. Check CORS restrictions.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="header-container">
//         <h1 className="portfolio-title">Portfolio</h1>
//         <div className="social-media">
//           <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="social-icon" />
//           </a>
//           <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
//             <FaYoutube className="social-icon" />
//           </a>
//         </div>
//       </div>
//       <div className="portfolio-container">
//         {images.map((image) => (
//           <div className="image-container" key={image.id}>
//             <img src={image.src} alt={image.alt} />
//             <div className="icon-container">
//               <FontAwesomeIcon
//                 icon={faHeart}
//                 className={`icon-heart ${likedImages.includes(image.id) ? "liked" : ""}`}
//                 onClick={() => toggleLike(image.id)}
//               />
//               <FontAwesomeIcon
//                 icon={faArrowDown}
//                 className="icon-download"
//                 onClick={() => handleDownload(image.src)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <footer className="footer">
//         <div className="footer-section">
//           <h3>About Us</h3>
//           <p style={{width:"70%"}}>We are a creative team dedicated to capturing your moments with precision and artistry.</p>
//         </div>
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <p><a href="/">Home</a></p>
//           <p><a href="/portfolio">Portfolio</a></p>
//           <p><a href="/about">About Us</a></p>
//           <p><a href="/contact">Contact</a></p>
//         </div>
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: wedmakers.co@gmail.com</p>
//                 <p>Phone: +91 7995112432</p>
//           <p>Address: Hyderabad, India</p>
//         </div>
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="social-icon" />
//             </a>
//             <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
//               <FaYoutube className="social-icon" />
//             </a>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 WEDMAKER'S.CO All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;



import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowDown, faPlus } from "@fortawesome/free-solid-svg-icons"; // Add faPlus
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./portfolio.css";
import { AuthContext } from "../../context/AuthContext";
import { uploadMedia, getAllMedia, getMediaUrl } from '../../api/mediaService'; // Import services

const Portfolio = () => {
  const { isAdmin } = useContext(AuthContext); // Get admin status
  const [likedImages, setLikedImages] = useState([]);
  const [mediaList, setMediaList] = useState([]); // Dynamic media
  const [files, setFiles] = useState([]); // For upload
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      // debugger;
      const data = await getAllMedia();
      console.log("Fetched media data:", data);
      // debugger; // ✅ pauses here to inspect data
      setMediaList(data.content || []); // Assume backend returns { content: [...] }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    try {
      await uploadMedia(files);
      alert("Upload successful!");
      setFiles([]);
      fetchMedia(); // Refresh grid
    } catch (err) {
      alert("Upload failed: " + (err.response?.data?.message || "Error"));
    }
  };

  const toggleLike = (id) => {
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter((imageId) => imageId !== id));
    } else {
      setLikedImages([...likedImages, id]);
    }
  };

  const handleDownload = async (src) => {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error("Failed to fetch image");
  
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "downloaded-image.jpg"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href); 
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image. Check CORS restrictions.");
    }
  };


  // ... (keep your existing like/download logic)

  return (
    <div>
      <Navbar />
      {/* ... existing header ... */}
      <div className="header-container">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="social-media">
          <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>

      {isAdmin && (
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faPlus} size="2x" color="blue" />
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {files.length > 0 && <button className="upload-button" onClick={handleUpload}>Confirm Upload</button>}
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="portfolio-container">
          {mediaList.map((media) => (
            <div key={media.id} className="image-container">
              <img src={getMediaUrl(media.id)} alt={media.name} loading="lazy" />
              {/* ... existing icons ... */}
              <div className="icon-container">
              <FontAwesomeIcon
                icon={faHeart}
                className={`icon-heart ${likedImages.includes(media.id) ? "liked" : ""}`}
                onClick={() => toggleLike(media.id)}
              />
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon-download"
                onClick={() => handleDownload(getMediaUrl(media.id))}
              />
            </div>
            </div>
          ))}
        </div>
      )}

      <footer className="footer">
        <div className="footer-section">
          <h3>About Us</h3>
          <p style={{width:"70%"}}>We are a creative team dedicated to capturing your moments with precision and artistry.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><a href="/">Home</a></p>
          <p><a href="/portfolio">Portfolio</a></p>
          <p><a href="/about">About Us</a></p>
          <p><a href="/contact">Contact</a></p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: wedmakers.co@gmail.com</p>
                <p>Phone: +91 7995112432</p>
          <p>Address: Hyderabad, India</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 WEDMAKER'S.CO All Rights Reserved.</p>
        </div>
      </footer>
      {/* ... existing footer ... */}
    </div>
  );
};

export default Portfolio;