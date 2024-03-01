// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { FreeMode } from "swiper/modules";
// import SolutionCard from "./solutionCard";
// import "swiper/swiper-bundle.css";

// const SolutionsSlider = ({ activities }) => {
//   return (
//     <div className="w-full sm:px-[20px] flex-col flex items-center justify-center ">
//       <Swiper
//         // configure how many cards to show and the spacing between the cards
//         breakpoints={{
//           280: {
//             slidesPerView: 1.5,
//             spaceBetween: 35,
//           },
//           390: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           420: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//           500: {
//             slidesPerView: 2.5,
//             spaceBetween: 15,
//           },
//           600: {
//             slidesPerView: 3,
//             spaceBetween: 25,
//           },
//           640: {
//             slidesPerView: 2.5,
//             spaceBetween: 25,
//           },
//           700: {
//             slidesPerView: 3,
//             spaceBetween: 35,
//           },
//         }}
//         freeMode={true}
//         modules={[FreeMode]}
//         className="w-full">
//         {activities.map((activity, index) => (
//           <SwiperSlide key={activity.imgUrl}>
//             <div key={index} className="w-full ">
//               <SolutionCard
//                 imgUrl={activity.imgUrl}
//                 description={activity.description}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SolutionsSlider;
