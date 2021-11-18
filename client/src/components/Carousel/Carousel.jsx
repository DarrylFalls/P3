// import React from "react"
// import { useState } from "react"
// import { NavLink } from "react-router-dom";
// import './Carousel.css'

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item interval={4500}>
//         <img
//           className="d-block w-100"
//           src="images/cars/rimac-home-page.jpeg"
//         />


//         <Carousel.Caption>
//           <div className="home-logo">
//             <img src={'/images/logo.png'} alt="Logo" className="home-logo" />
//             <p>Your one-stop shop for Electric Supercars</p>

//           </div>
//         </Carousel.Caption>

//         <Carousel.Caption>
//           <div className='welcome-browse'>
//             <h1>WELCOME TO THE FUTURE</h1>
//             <NavLink to="/cars">Browse Inventory</NavLink>

//           </div>
//         </Carousel.Caption>

//       </Carousel.Item >
//       <Carousel.Item interval={4500}>
//         <img
//           className="d-block w-100"
//           src="images/cars/vanda-dendrobium-006-1501514776.jpg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <div className='welcome-browse'>
//             <h1>WELCOME TO THE FUTURE</h1>
//             <NavLink to="/cars">Browse Inventory</NavLink>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item interval={4500}>
//         <img
//           className="d-block w-100"
//           src="images/cars/nio_ep9_electric_supercar-2560x1440.jpg"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <div className='welcome-browse'>
//             <h1>WELCOME TO THE FUTURE</h1>
//             <NavLink to="/cars">Browse Inventory</NavLink>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel

