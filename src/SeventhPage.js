// import React, { Component } from 'react'
// import Swiper from 'swiper'; // Make sure Swiper is imported

// // import 'swiper/css'; // Import Swiper styles
// // import 'swiper/css/navigation'; // Import Swiper Navigation styles
// // import 'swiper/css/pagination'; // Import Swiper Pagination styles

// export default class SeventhPage extends Component {
//     componentDidMount() {
//         this.swiper = new Swiper(".mySwiper", {
//           slidesPerView: 1,
//           grabCursor: true,
//           loop: true,
//           pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },
//           navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//         });
//       }

//       componentWillUnmount() {
//         // Cleanup Swiper instance on unmount
//         if (this.swiper) {
//           this.swiper.destroy();
//         }
//       }

//       render() {
//         return (
//           <section className="container" id="community">
//             <div className="testimonial mySwiper">
//               <div className="testi-content swiper-wrapper">
//                 <div className="slide swiper-slide">
//                   {/* Your slide content */}
//                 </div>
//                 {/* Additional slides */}
//               </div>
//               <div className="swiper-pagination"></div>
//               <div className="swiper-button-next"></div>
//               <div className="swiper-button-prev"></div>
//             </div>
//           </section>
//         );
//       }

// //   render() {
// //     return (
// //         <section class="container" id="community">
// //             <div class="testimonial mySwiper">
// //                 <div class="testi-content swiper-wrapper">
// //                     <div class="slide swiper-slide">
// //                         <img src="gym_images/img7.jpg" alt="" class="image" />
// //                         <p>What truly sets this gym apart is their expert team of trainers. The trainers are
// //                             knowledgeable, approachable, and genuinely invested in helping members achieve their fitness
// //                             goals. They take the time to understand individual needs and create personalized workout
// //                             plans, ensuring maximum results and safety.</p>

// //                         <i class="bx bxs-quote-alt-left quote-icon"></i>

// //                         <div class="details">
// //                             <span class="name"> Dan White</span>
// //                             <span class="job"> Footballer</span>
// //                         </div>
// //                     </div>
// //                     <div class="slide swiper-slide">
// //                         <img src="gym_images/img1.jpg" alt="" class="image" />
// //                         <p>Love the gym website! Easy navigation, awesome workouts, and the personalized tracker keep me
// //                             on track. Quick and helpful customer support too. Thanks for making fitness so accessible!
// //                         </p>
// //                         <i class="bx bxs-quote-alt-left quote-icon"></i>

// //                         <div class="details">
// //                             <span class="name">Marnie Lotter</span>
// //                             <span class="job">Web Developer</span>
// //                         </div>
// //                     </div>
// //                     <div class="slide swiper-slide">
// //                         <img src="gym_images/img5.jpg" alt="" class="image" />
// //                         <p>Awesome gym site! User-friendly, varied workouts, and a personal tracker keep me engaged.
// //                             Superb customer support. Thanks for making fitness enjoyable and stress-free. Highly
// //                             recommend!</p>

// //                         <i class="bx bxs-quote-alt-left quote-icon"></i>

// //                         <div class="details">
// //                             <span class="name">Emily Smith</span>
// //                             <span class="job">Model</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div class="swiper-button-next nav-btn"></div>
// //                 <div class="swiper-button-prev nav-btn"></div>
// //                 <div class="swiper-pagination"></div>

// //             </div>

// //         </section>
// //     )
// //   }
// }



// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SeventhPage() {
    return (
        <section class="container-tm" id="community">
            <div class="testimonial mySwiper">
                <div class="testi-content swiper-wrapper">

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination,  A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>

                            <div class="slide swiper-slide">
                                <img src="gym_images/img7.jpg" alt="" class="image" />
                                <p>What truly sets this gym apart is their expert team of trainers. The trainers are
                                    knowledgeable, approachable, and genuinely invested in helping members achieve their fitness
                                    goals. They take the time to understand individual needs and create personalized workout
                                    plans, ensuring maximum results and safety.</p>

                                <i class="bx bxs-quote-alt-left quote-icon"></i>

                                <div class="details">
                                    <span class="name"> Dan White</span>
                                    <span class="job"> Footballer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="slide swiper-slide">
                                <img src="gym_images/img1.jpg" alt="" class="image" />
                                <p>Love the gym website! Easy navigation, awesome workouts, and the personalized tracker keep me
                                    on track. Quick and helpful customer support too. Thanks for making fitness so accessible!
                                </p>
                                <i class="bx bxs-quote-alt-left quote-icon"></i>

                                <div class="details">
                                    <span class="name">Marnie Lotter</span>
                                    <span class="job">Web Developer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="slide swiper-slide">
                                <img src="gym_images/img5.jpg" alt="" class="image" />
                                <p>Awesome gym site! User-friendly, varied workouts, and a personal tracker keep me engaged.
                                    Superb customer support. Thanks for making fitness enjoyable and stress-free. Highly
                                    recommend!</p>

                                <i class="bx bxs-quote-alt-left quote-icon"></i>

                                <div class="details">
                                    <span class="name">Emily Smith</span>
                                    <span class="job">Model</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    );
}
export default SeventhPage;