// import React from "react";
// import Navbar from "./Navbar";
// import "../Routing/clientAlbum.css";
// import { FaInstagram, FaYoutube } from "react-icons/fa";
// import img16 from "../assets/images/img16.jpg";
// import img3 from "../assets/images/img3.jpg";
// import img5 from "../assets/images/img5.jpg";
// import img6 from "../assets/images/img6.jpg";
// import img7 from "../assets/images/img7.jpg";
// import img14 from "../assets/images/img14.jpg";
// import img8 from "../assets/images/img8.jpg";
// import img9 from "../assets/images/img9.jpg";
// import img10 from "../assets/images/img10.jpg";
// import img11 from "../assets/images/img11.jpg";
// import img12 from "../assets/images/img12.jpg";
// import img13 from "../assets/images/img13.jpg";
// import img17 from "../assets/images/img17.jpg";
// import img15 from "../assets/images/img15.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

// const ClientAlbum = () => {
//   const images = [
//     img16,
//     img3,
//     img5,
//     img6,
//     img7,
//     img14, 
//     img8,
//     img9,
//     img10,
//     img11,
//     img12,
//     img13,
//     img17,
//     img15,
//     img3,
//   ];

//   return (
//     <div>
//       <Navbar />
     
//       <div className="header-container">
//         <h1 className="portfolio-title">Client Album</h1>
//         <div className="social-media">
//           <a
//             href="https://www.instagram.com/wedmakers.co?igsh=MW9rYzYwOHpxaTNqZw=="
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram className="social-icon" />
//           </a>
//           <a
//             href="https://youtube.com/@wedmakers?si=wnURn1LP7zlckZoQ"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaYoutube className="social-icon" />
//           </a>
//         </div>
//       </div>

      
//       <div>
//         <a href="../media-project/work.html">
//           <i
//             className="fa-solid fa-arrow-left"
//             style={{
//               fontSize: 30,
//               color: "black",
//               paddingLeft: 30,
//               paddingTop: 30,
//             }}
//           />
//         </a>
//       </div>

    
//       <h1>
//   Sneha <FontAwesomeIcon icon={faHeart} style={{ color: "black" }} /> Santosh
// </h1>


    
//       <div className="gallery">
//         {images.map((image,index)=>
//         <div key={index} className="gallery-item">
//         <img src={image} alt={`Gallery Image ${index + 1}`} />
//       </div>)}
//       </div>

//       {/*  */} 
//       <footer className="footer">
//               <div className="footer-section">
//                 <h3>About Us</h3>
//                 <p style={{width:"70%"}}>We are a creative team dedicated to capturing your moments with precision and artistry.</p>
//               </div>
//               <div className="footer-section">
//                 <h3>Quick Links</h3>
//                 <p><a href="/">Home</a></p>
//                 <p><a href="/portfolio">Portfolio</a></p>
//                 <p><a href="/about">About Us</a></p>
//                 <p><a href="/contact">Contact</a></p>
//               </div>
//               <div className="footer-section">
//                 <h3>Contact Us</h3>
//                 <p>Email: wedmakers.co@gmail.com</p>
//                 <p>Phone: +91 7995112432</p>
//                 <p>Address: Hyderabad, India</p>
//               </div>
//               <div className="footer-section">
//                 <h3>Follow Us</h3>
//                 <div className="social-icons">
//                   <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer">
//                     <FaInstagram className="social-icon" />
//                   </a>
//                   <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
//                     <FaYoutube className="social-icon" />
//                   </a>
//                 </div>
//               </div>
//               <div className="footer-bottom">
//                 <p>© 2025 WEDMAKER'S.CO All Rights Reserved.</p>
//               </div>
//             </footer>
//     </div>
//   );
// };

// export default ClientAlbum;


import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import "../Routing/clientAlbum.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons"; // Add faPlus
import { AuthContext } from "../../context/AuthContext";
import { uploadMedia, getAllMedia, getMediaUrl } from '../../api/mediaService';

// Remove static imports for images

const ClientAlbum = () => {
  const { isAdmin } = useContext(AuthContext);
  const [mediaList, setMediaList] = useState([]); // Dynamic
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const data = await getAllMedia(); // Reuse same endpoint, or customize if client-specific
      setMediaList(data.content || []);
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
      fetchMedia();
    } catch (err) {
      alert("Upload failed: " + (err.response?.data?.message || "Error"));
    }
  };

  return (
    <div>
      <Navbar />
      {/* ... existing header ... */}
      <div className="header-container">
        <h1 className="portfolio-title">Client Album</h1>
        <div className="social-media">
          <a
            href="https://www.instagram.com/wedmakers.co?igsh=MW9rYzYwOHpxaTNqZw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://youtube.com/@wedmakers?si=wnURn1LP7zlckZoQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>

      {isAdmin && (
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <label htmlFor="file-upload-client" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faPlus} size="2x" color="blue" />
          </label>
          <input
            id="file-upload-client"
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
        <div className="gallery">
          {mediaList.map((media, index) => (
            <div key={media.id} className="gallery-item">
              <img src={getMediaUrl(media.id)} alt={media.name} loading="lazy" />
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

export default ClientAlbum;