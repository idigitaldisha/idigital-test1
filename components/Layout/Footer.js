import React from "react";

import Facebook from "../../public/assets/images/Icon/facebook.png";
import Twitter from "../../public/assets/images/Icon/linkedin.png";
import Instagram from "../../public/assets/images/Icon/insta.png";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/newlogo2.png"
import whatsapp from "../../public/assets/images/Icon/whatsapp.png"

const Footer = () => {
  return (
    <div className="bg-white-300  pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          {/* <Link href={`/`}>
            <Image
              src={logo}

              height={100}
              width={100}
            /></Link> */}
          <p className="mb-4">
            <strong className="cursor-pointer"> <Link href={`/`}> iDigital Disha</Link> </strong>| Digital Marketing Service Agency in India
          </p>

          
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className=" p-2 ">
              {/* <Facebook className="h-6 w-6" /> */}
              <a href="https://www.facebook.com/idigitaldisha " target={`_blank`}><Image
                src={Facebook}
                className=" rounded-full"
                height={40}
                width={40}
                alt="Icon People"
              /></a>
            </div>
            <div className="p-2 ">
              {/* <Twitter className="h-6 w-6" /> */}
              <a href="https://www.linkedin.com/company/idigitaldisha/ " target={`_blank`}> <Image
                src={Twitter}
                className=" rounded-full"
                height={40}
                width={40}
                alt="Icon People"
              /></a>
            </div>
            <div className=" p-2 ">
              {/* <Instagram className="h-6 w-6" /> */}
              <a href="https://www.instagram.com/idigitaldisha/  " target={`_blank`}>  <Image
                src={Instagram}
                className=" rounded-full"
                height={40}
                width={40}
                alt="Icon People"
              /></a>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - iDigital Disha</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Services</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              SEO {" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              SMO {" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              PPC {" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Email Marketing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Facebook & Instagram Marketing{" "}
            </li>

            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Graphic designing {" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Web Development {" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>


     
    </div>
  );
};

export default Footer;
