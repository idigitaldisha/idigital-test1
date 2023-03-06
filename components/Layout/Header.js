import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import LogoVPN from "../../public/assets/Logo.svg";
import logo from "../../public/assets/images/newlogo2.png"
import Modal from 'react-bootstrap/Modal';
import Proposal from "../Modal/Propsal";
// import { useForm, ValidationError } from '@formspree/react';   


const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  const [mobilemenu, setMobileMenu] = useState(false);



  // const [state, handleSubmit] = useForm("xbjeyabz");
  // if (state.succeeded) {
  //     return <>


  //     </>;
  // }


  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScrollActive(window.scrollY > 20);
  //   });
  // }, []);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <header
        style={{ background: "#f1f1f1" }}
        className={
          "header-height w-full fixed lg:top-9 sm:top-0 z-30 -500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " ")
        }
      >

        {mobilemenu? 
        <div className="fixed block lg:hidden h-screen z-50 w-screen bg-gray-200">
          <div className="py-10 px-8 ">
            <img className="float-right" onClick={() => setMobileMenu(false)} src="https://img.icons8.com/fluency-systems-regular/256/close-window.png" width={40} />
          </div>

          <ul className="block lg:hidden col-start-4 col-end-8 text-black-500  items-center">




            <div class="group w-full block place-self-center my-10  ">
              <button
                class="  px-3 py-1  rounded-sm  flex justify-center w-full button"
              >
                <span class="pr-1 font-semibold flex-1"> <Link
                  href="services"
                > Services   </Link></span>
                <span>
                  <svg
                    class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul class="bg-red-500 w-full text-white border rounded-sm transform scale-0 z-40 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top " >



                <li class="rounded-sm relative px-3 w-full py-1 hover:bg-gray-100 hover:text-orange-500">
                  <div className="butto">
                    <button
                      class="px-3 py-1  rounded-sm  flex justify-center w-full"
                    >
                      <span class="pr-1 flex-1">SEO Service</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-red-500 w-full text-white border rounded-sm transform scale-0 butto-hover:scale-100 absolute 
                    transition duration-150 ease-in-out origin-top z-50" >
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Custom SEO Solutions</li>

                      <li class="px-3 py-1 bg-red-500 z-40 hover:bg-gray-100 hover:text-orange-500">Local SEO Service</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Audit Service</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Technical SEO Service </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Ecommerce SEO Service </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Penalty Recovery </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Competition Analysis </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Consultation </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Full Time Dedicated SEO Expert </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Reseller </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Packages </li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Live Rank Tracking </li>

                    </ul>
                  </div>

                </li>

                <li class="rounded-sm relative px-3 w-full py-1 hover:bg-gray-100 hover:text-orange-500">
                  <div className="butto">
                    <button
                      class="px-3 py-1  rounded-sm  flex justify-center w-full"
                    >
                      <span class="pr-1 flex-1">PPC Service</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-red-500 w-full text-white border rounded-sm transform scale-0 butto-hover:scale-100 absolute 
                      transition duration-150 ease-in-out origin-top z-50">
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Ads Management</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Shopping</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Ads Remarketing</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Mobile Advertising</li>

                    </ul>
                  </div>

                </li>

                <li class="rounded-sm relative px-3 w-full py-1 hover:bg-gray-100 hover:text-orange-500">
                  <div className="butto">
                    <button
                      class="px-3 py-1  rounded-sm  flex justify-center w-full"
                    >
                      <span class="pr-1 flex-1">SMO Service</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-red-500 w-full text-white border rounded-sm transform scale-0 butto-hover:scale-100 absolute 
                      transition duration-150 ease-in-out origin-top z-50">
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Facebook Ads</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Instagram Ads</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Youtube Ads</li>

                    </ul>
                  </div>

                </li>



                <li class="rounded-sm relative px-3 w-full py-1 hover:bg-gray-100 hover:text-orange-500">
                  <div className="butto">
                    <button
                      class="px-3 py-1  rounded-sm  flex justify-center w-full"
                    >
                      <span class="pr-1 flex-1">CONTENT MARKETING</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-red-500 w-full text-white border rounded-sm transform scale-0 butto-hover:scale-100 absolute 
                      transition duration-150 ease-in-out origin-top z-50">
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Content Writing</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Digital PR</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Blog Marketing</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Guest Post Services</li>
                    </ul>
                  </div>

                </li>


                <li class="rounded-sm relative px-3 w-full py-1 hover:bg-gray-100 hover:text-orange-500">
                  <div className="butto">
                    <button
                      class="px-3 py-1  rounded-sm  flex justify-center w-full"
                    >
                      <span class="pr-1 flex-1">ONLINE REPUTATION MANAGEMENT</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-red-500 w-full text-white border rounded-sm transform scale-0 butto-hover:scale-100 absolute 
                      transition duration-150 ease-in-out origin-top z-50">
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Brand Reputation Management</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Corporate Reputation Management</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Celebrity Reputation Management</li>

                    </ul>
                  </div>

                </li>

                <li class="rounded-sm relative px-3 w-full py-1 hover:bg-gray-100 hover:text-orange-500">
                  <div className="butto">
                    <button
                      class="px-3 py-1  rounded-sm  flex justify-center w-full"
                    >
                      <span class="pr-1 flex-1">WEB DEVELOPMENT</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-red-500 w-full text-white border rounded-sm transform scale-0 butto-hover:scale-100 absolute 
                      transition duration-150 ease-in-out origin-top z-50">
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">WordPress Web Development</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Custom Full Stack Development</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Magento Development</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Shopify Development</li>
                    </ul>
                  </div>

                </li>


                <li class="rounded-sm relative px-3 w-full py-1 hover:bg-gray-100 hover:text-orange-500">
                  <div className="butto">
                    <button
                      class="px-3 py-1  rounded-sm  flex justify-center w-full"
                    >
                      <span class="pr-1 flex-1">WEB DESIGNING</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class="bg-red-500 w-full text-white border rounded-sm transform scale-0 butto-hover:scale-100 absolute 
                      transition duration-150 ease-in-out origin-top z-50">
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Responsive Web Design</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Logo Design</li>
                      <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Logo Design</li>
                    </ul>
                  </div>

                </li>




              </ul>
            </div>




            <Link
              className=""
              href="services"
            >
              <span className="w-full block text-center  my-10" >   Services</span>
            </Link>
            <Link
              className="w-full block"
              href="pricing"
            >
              <span className="w-full block text-center my-10">   Pricing</span>

            </Link>

            <div class="group w-full block place-self-center my-10  ">
              <button
                class="  px-3 py-1  rounded-sm  flex justify-center w-full"
              >
                <span class="pr-1 font-semibold flex-1"> <Link
                  href="about-us"
                > About Us   </Link></span>
                <span>
                  <svg
                    class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-red-500 w-full text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top "
              >
                <li class="rounded-sm px-3  text-center  w-full py-1 hover:bg-gray-100 hover:text-orange-500">Why Choose Us</li>
                <li class="rounded-sm px-3 text-center  w-fullpy-1 hover:bg-gray-100 hover:text-orange-500">Career</li>
              </ul>
            </div>

            <Link
              href="blog"
            >
              <span className="w-full block text-center my-10">   Blogs</span>

            </Link>

            <Link
              href="contact-us"
              spy={true}
            >
              <span className="w-full block text-center my-10">   Contact</span>

            </Link>

            <Link
              href="faq"
              spy={true}
            >
              <span className="w-full block text-center my-10">   FAQ</span>

            </Link>



          </ul>
        </div>:""}

       


        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col ">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <LogoVPN className="h-8 w-auto" /> */}

            {/* <Image
              src="/assets/logo2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={400}
              width={508}
            /> */}
            {/* <strong>iDigital Disha</strong> */}
            <Link href={`/`}>
              <Image
                src={logo}
                className="cursor-pointer"
                height={100}
                width={100}
              /></Link>

          </div>




          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">

            <div class="group inline-block cursor-pointer animation-hover inline-block relative text-black-500 ">
              <button
                class="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32"
              >
                <span class="pr-1 flex-1"> <Link
                  href="services"
                  className="text-black"
                > Services   </Link></span>
                <span>
                  <svg
                    class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-red-500 text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top "
              >
                {/* <li class="rounded-sm px-3 w-72 py-1 hover:bg-gray-100  hover:text-orange-500">SEO</li>
                <li class="rounded-sm px-3 w-72 py-1 hover:bg-gray-100 hover:text-orange-500">PPC</li>
                <li class="rounded-sm px-3 w-72 py-1 hover:bg-gray-100 hover:text-orange-500">SMO</li>
                <li class="rounded-sm px-3  w-72 py-1 hover:bg-gray-100 hover:text-orange-500">Content Marketing</li> */}
                {/* <li class="rounded-sm px-3  w-72 py-1 hover:bg-gray-100 hover:text-orange-500">Online Reputation Managemnet</li>
                <li class="rounded-sm px-3 w-72 py-1 hover:bg-gray-100 hover:text-orange-500">Website Development</li>
                <li class="rounded-sm px-3 w-72 py-1 hover:bg-gray-100 hover:text-orange-500">Website Designing</li> */}


                <li class="rounded-sm relative px-3 w-80 py-1 hover:bg-gray-100 hover:text-orange-500">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">SEO Service</span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-red-500 text-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Custom SEO Solutions</li>
                    {/* <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100 hover:text-orange-500">
                    <button
                      class="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span class="pr-1 flex-1">Python</span>
                      <span class="mr-auto">
                        <svg
                          class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      class=" border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                    >
                      <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                      <li class="px-3 py-1 hover:bg-gray-100">3+</li>
                    </ul>
                  </li> */}
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Local SEO Service</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Audit Service</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Technical SEO Service </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Ecommerce SEO Service </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Penalty Recovery </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Competition Analysis </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Consultation </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Full Time Dedicated SEO Expert </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Reseller </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">SEO Packages </li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Live Rank Tracking </li>

                  </ul>
                </li>


                <li class="rounded-sm relative px-3 w-80 py-1 hover:bg-gray-100 hover:text-orange-500">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">PPC Service</span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-red-500 text-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Ads Management</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Shopping</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Google Ads Remarketing</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Mobile Advertising</li>

                  </ul>
                </li>

                <li class="rounded-sm relative px-3 w-80 py-1 hover:bg-gray-100 hover:text-orange-500">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">SMO Service</span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-red-500 text-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Facebook Ads</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Instagram Ads</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Youtube Ads</li>
                  </ul>
                </li>

                <li class="rounded-sm relative px-3 w-80 py-1 hover:bg-gray-100 hover:text-orange-500">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">CONTENT MARKETING</span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-red-500 text-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Content Writing</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Digital PR</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Blog Marketing</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Guest Post Services</li>
                  </ul>
                </li>

                <li class="rounded-sm relative px-3 w-80 py-1 hover:bg-gray-100 hover:text-orange-500">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">ONLINE REPUTATION MANAGEMENT </span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-red-500 text-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Brand Reputation Management</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Corporate Reputation Management</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Celebrity Reputation Management</li>

                  </ul>
                </li>

                <li class="rounded-sm relative px-3 w-80 py-1 hover:bg-gray-100 hover:text-orange-500">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">WEB DEVELOPMENT </span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-red-500 text-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">WordPress Web Development</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Custom Full Stack Development</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Magento Development</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Shopify Development</li>

                  </ul>
                </li>

                <li class="rounded-sm relative px-3 w-80 py-1 hover:bg-gray-100 hover:text-orange-500">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">WEB DESIGN </span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-red-500 text-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Responsive Web Design</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Logo Design</li>
                    <li class="px-3 py-1 hover:bg-gray-100 hover:text-orange-500">Mobile Website Design</li>
                  </ul>
                </li>









              </ul>
            </div>


            <Link
              href="pricing"
            >
              <span className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 ">  Pricing </span>
            </Link>


            <div class="group inline-block cursor-pointer animation-hover inline-block relative text-black-500 ">
              <button
                class="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32"
              >
                <span class="pr-1 flex-1"> <Link
                className="hover:text-black"
                  href="about-us"
                > About Us   </Link></span>
                <span>
                  <svg
                    class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-red-500 text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top "
              >
                <li class="rounded-sm px-3  w-72 py-1 hover:bg-gray-100 hover:text-orange-500">Why Choose Us</li>
                <li class="rounded-sm px-3 w-72 py-1 hover:bg-gray-100 hover:text-orange-500">Career</li>












              </ul>
            </div>

            <Link
              href="blog"
            >
              <span className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 "> Blogs</span>
            </Link>

            <Link
              href="contact-us"
              spy={true}
            >
              <span className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 ">    Contact Us</span>
            </Link>

            <Link
              href="faq"
              spy={true}
            >
              <span className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 ">    FAQ</span>
            </Link>



          </ul>

          <div className="col-start-10 col-end-12 font-medium flex lg:hidden justify-end items-center">
            {/* <ButtonGreen> */}
            <img onClick={() => setMobileMenu(true)} src="https://img.icons8.com/ios/256/menu-rounded.png" width={40} />
            {/* </ButtonGreen> */}
          </div>




          <div className="col-start-10 col-end-12 font-medium hidden lg:flex justify-end items-center">
            {/* <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a>
            </Link> */}
            <button className="btn btn-success" onClick={handleShow}>Free Website Analysis</button>
          </div>
        </nav>


      </header>


      <Proposal show={show} handleClose={handleClose}/>


    </>
  );
};

export default Header;
