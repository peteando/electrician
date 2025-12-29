// "use client";

// import { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdClose } from "react-icons/md";
// import Link from "next/link";
// import Image from "next/image";
// import { site } from "@/lib/content";

// export default function Header() {
//   const [dropdown, setDropdown] = useState(false);

//   const showDropdown = () => {
//     setDropdown(!dropdown);
//   };

//   return (
//     <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto lg:px-3 w-full">
//         <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center">
          
            
//             <span className="text-4xl font-bold text-lime-900 ml-2">{site.brand.logoText}</span>
//             <span className="text-4xl font-bold "> Site</span>
//           </div>

//           <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
//             <li>
//               <Link href="/" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
//                 Testimonials
//               </Link>
//             </li>
//             <li>
//               <Link href="/store/products" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
//               Contact
//               </Link>
//             </li>
            
//           </ul>

//           {/* Mobile Menu Icon */}
//           <div className="flex gap-4 max-lg:hidden">
//             {dropdown ? (
//               <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
//                 <MdClose />
//               </div>
//             ) : (
//               <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
//                 <HiMenuAlt3 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {dropdown && (
//           <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
//             <div className="w-full flex flex-col items-baseline gap-4">
//               <ul className="flex flex-col justify-center w-full">
//                 <li>
//                   <Link href="/" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/ticket" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
//                     Ticket
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/explore" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
//                     Explore
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/activity" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
//                     Activity
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { site } from "@/lib/content";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => setDropdown(!dropdown);

  return (
    <header>
      <div className="h-8 bg-cyan-950">
        <div className="container mx-auto lg:px-3 w-full grid grid-cols-3 items-center">
  <span className="text-left text-white text-sm">Need electrical work in a hurry</span>
  <span className="text-center text-white text-sm">70+ five star reviews</span>
  <span className="text-right text-white text-sm">Mon-Sunday 24/7 Emergency Services</span>
</div>
      </div>
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-4xl font-bold text-cyan-900 ml-2">
              {site.brand.logoText}
            </span>
            {/* <span className="text-4xl font-bold"> Site</span> */}
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <li><Link href="/" className="text-cyan-950 text-lg hover:text-black">Home</Link></li>
            <li><Link href="#" className="text-cyan-950 text-lg hover:text-black">Services</Link></li>
            <li><Link href="#" className="text-cyan-950 text-lg hover:text-black">About</Link></li>
            <li><Link href="#" className="text-cyan-950 text-lg hover:text-black">Testimonials</Link></li>
            <li><Link href="/store/products" className="text-cyan-950 text-lg hover:text-black">Contact</Link></li>
          </ul>

          {/* ✅ Call Button (Aligned Right) */}
          <div className="max-lg:hidden flex items-center">
            <a
              href="tel:+61412345678"
              className="bg-cyan-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md text-lg transition-transform hover:scale-105"
            >
              📞 0412 345 678
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden text-[22px] cursor-pointer text-black" onClick={showDropdown}>
            {dropdown ? <MdClose /> : <HiMenuAlt3 />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-cyan-900 text-white transition-all">
            <ul className="flex flex-col justify-center w-full">
              <li><Link href="/" className="px-6 py-3 border-b border-white/10">Home</Link></li>
              <li><Link href="/ticket" className="px-6 py-3 border-b border-white/10">Ticket</Link></li>
              <li><Link href="/explore" className="px-6 py-3 border-b border-white/10">Explore</Link></li>
              <li><Link href="/activity" className="px-6 py-3 border-b border-white/10">Activity</Link></li>
              {/* ✅ Mobile Call Button */}
              <li className="px-6 py-4">
                <a
                  href="tel:+61412345678"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg text-center"
                >
                  📞 Call 0412 345 678
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </header>
  );
}
