import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { getMediaUrl } from "../../api/mediaService";

gsap.registerPlugin(ScrollTrigger);

const WeddingStorySection = ({ section }) => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".story-img").forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: 120 * (i + 1), opacity: 0 },
          {
            y: -80,
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // console.log("Rendering WeddingStorySection for:", section);

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] bg-[#f6f3ef] overflow-hidden"
    >
      {/* Sticky Couple Name */}
      <div className="sticky top-[35vh] z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-serif text-gray-800">
          {section.coupleName}
        </h2>
      </div>

      {/* Preview Images */}
      <div className="absolute inset-0">
        {section.images.map((img, index) =>{ 

          console.log("Image in section:", img.image, section.slug);
          return (
          <img
            key={index}
            // src={getMediaUrl(img.id)}
            src={`http://192.168.1.20:8080/uploads/users/${section.slug}/${img.image}`}
            
            alt=""
            onClick={() =>
              navigate(`/wedding/${section.slug}`)
            }
            className={`story-img absolute cursor-pointer rounded-lg shadow-xl transition-transform hover:scale-105
              ${index === 0 && "top-[20%] left-[10%] w-[300px]"}
              ${index === 1 && "top-[45%] right-[12%] w-[360px]"}
              ${index === 2 && "bottom-[15%] left-[35%] w-[260px]"}
            `}
          />
        )
      }
      )}
      </div>
    </section>
  );
};

export default WeddingStorySection;

// `/wedding/${section.slug}`


//preview of the section 

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const WeddingStorySection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".story-img").forEach((img, i) => {
//         gsap.fromTo(
//           img,
//           { y: 100 * (i + 1), opacity: 0 },
//           {
//             y: -80,
//             opacity: 1,
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top bottom",
//               end: "bottom top",
//               scrub: true,
//             },
//           }
//         );
//       });

//       gsap.fromTo(
//         ".couple-title",
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 60%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[180vh] bg-[#f6f3ef] overflow-hidden"
//     >
//       {/* Sticky Title */}
//       <div className="sticky top-[35vh] z-10 text-center">
//         <h2 className="couple-title text-5xl md:text-7xl font-serif text-gray-800">
//           Emma & Liam
//         </h2>
//       </div>

//       {/* Images */}
//       <div className="absolute inset-0">
//         <img
//           src="https://picsum.photos/id/1027/600/800"
//           className="story-img absolute top-[20%] left-[10%] w-[300px] rounded-lg shadow-xl"
//           alt=""
//         />
//         <img
//           src="https://picsum.photos/id/1011/700/900"
//           className="story-img absolute top-[45%] right-[12%] w-[360px] rounded-lg shadow-xl"
//           alt=""
//         />
//         <img
//           src="https://picsum.photos/id/1005/500/700"
//           className="story-img absolute bottom-[15%] left-[35%] w-[260px] rounded-lg shadow-xl"
//           alt=""
//         />
//       </div>
//     </section>
//   );
// };

// export default WeddingStorySection;
