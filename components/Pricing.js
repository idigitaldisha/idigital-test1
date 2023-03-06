import React, { useMemo, useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";

import ButtonOutline from "./misc/ButtonOutline.";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// import { useForm, ValidationError } from '@formspree/react';   



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Proposal from "./Modal/Propsal";





const Pricing = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [state, handleSubmit] = useForm("xbjeyabz");


  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const Service = [
    {
      title: "Search Engine Optimization ",
      description: "Our SEO services are designed to help your website rank higher in search engine results pages (SERPs), drive organic traffic to your site, and increase your online visibility. We use a variety of proven techniques, such as keyword research, on-page optimization, and link building, to improve your website's search engine rankings.",
      image: "/assets/images/banner6.gif",
      link: ""
    }, {
      title: "Social Media Optimization  ",
      description: "We offer a range of social media marketing services that can help you build your brand, engage your audience, and drive conversions. We'll help you create compelling content, run targeted ad campaigns, and monitor your social media channels to ensure that you're getting the best possible results.",
      image: "/assets/images/banner8.gif",
      link: ""
    }, {
      title: "Email Marketing ",
      description: "Our email marketing services can help you reach your audience with personalized messages and targeted campaigns. We'll help you build your email list, create engaging content, and track your campaign's performance to ensure that you're getting the best possible results.",
      image: "/assets/images/banner9.gif",
      link: ""
    }, {
      title: "Facebook & Instagram Marketing ",
      description: "Our Digital Marketing Services Company specializes in Facebook and Instagram marketing services to help your business succeed on these popular social media platforms. We offer account setup and optimization, targeted advertising, content creation, and performance tracking to maximize your social media presence and drive results for your business. Contact us today to learn more about how we can help you succeed with Facebook and Instagram marketing.",
      image: "/assets/images/banner6.gif",
      link: ""
    }, {
      title: "Pay-per-click (PPC) Advertising  ",
      description: "Our PPC advertising services can help you reach your target audience quickly and effectively. We create targeted ads that appear in search engine results pages and other online platforms, such as social media and display networks. Our team of PPC experts will help you optimize your campaigns for maximum performance and ROI.",
      image: "/assets/images/banner9.gif",
      link: ""
    }, {
      title: "Graphic designing ",
      description: "At iDigital Disha, we offer professional graphic design services to help your brand stand out from the competition. Our experienced designers can create eye-catching graphics for your website, social media, advertising, and other marketing collateral. We offer custom designs that are tailored to your brand's unique identity, ensuring that your marketing materials are consistent and engaging. Contact us today to learn more about our graphic design services and how we can help enhance your brand's visual presence.",
      image: "/assets/images/banner6.gif",
      link: ""
    }, {
      title: "Web Development ",
      description: "Our Web Development service offers professional web development services to help you create a high-performing website that is optimized for both user experience and search engine performance. We specialize in building custom websites that are tailored to your business's unique needs, goals, and brand identity. Our team of experienced developers and designers can create a website that is visually engaging, easy to navigate, and optimized for conversions. Contact us today to learn more about our web development services and how we can help you create a website that stands out and drives results.",
      image: "/assets/images/banner6.gif",
      link: ""
    },
    {
      title: "Conversion Rate Optimization ",
      description: "Our CRO services are designed to help you increase your website's conversion rate and drive more sales and leads. We'll analyze your website's user experience and create targeted improvements that can help you achieve your online business goals.",
      image: "/assets/images/banner6.gif",
      link: ""
    },
    {
      title: "Content Marketing ",
      description: "We specialize in creating high-quality, engaging content that can help you attract and retain your target audience. We'll help you create blog posts, articles, videos, and other types of content that are optimized for search engines and social media.      ",
      image: "/assets/images/banner6.gif",
      link: ""
    }
  ]



  const Packages = [
    {
      title: "SILVER ",
      // description: "By employing ethical SEO techniques, leveraging top-notch SEO tools, and conducting comprehensive keyword research, we can assist in securing top rankings for your website on search engine results pages.",
      image: "/assets/images/shop.png",
      price: "10,000 INR",
      type:"Monthly",
      suitable:"Best for Small Business",
      button:"Basic SEO plan",
      link: ""
    }, {
      title: "GOLD  ",
      // description: "In the current digital landscape, companies that underestimate the impact of social media may struggle to succeed. Therefore, we aid in maintaining your connection to your desired audience on social media and ensuring their engagement.",
      image: "/assets/images/company.png",
      price: "20,000 INR",
      type:"Monthly",
      suitable:"Best for Mid Size Business",
      button:"Advance SEO plan",
      link: ""
    }, {
      title: "PLATINUM",
      // description: "Email marketing is a cost-effective way to reach a large audience and build strong relationships with customers. By sending targeted, personalized messages, businesses can increase engagement, drive conversions, and generate valuable leads.",
      image: "/assets/images/eccomerce.png",
      price: "40,000 INR",
      type:"Monthly",
      suitable:"Best for eCommerce Business",
      button:"Ecommerce SEO plan",
      link: ""
    }
  ]


  const truncate = (str) => {
    // console.log(str.length)
    return str.length > 180 ? str.substring(0, 180) + ".." : str;
  }

  return (
    <>
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">




        {/*  ___________________ service ___________________  */}
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Our Specialized Digital Marketing Services

            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-sm"
            >
            At our Digital Marketing Services Company, we offer a comprehensive range of specialized digital marketing services that can help your business grow and succeed online. 

            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {Service.filter((item, i) => i < 3).map((items, i) => (
              <>
                <ScrollAnimationWrapper className="grid grid-cols-1">

                  <motion.div
                    variants={scrollAnimation}
                    className="  justify-center items-center border-2 border-gray-500 rounded-xl py-0 px-6 lg:px-6 xl:px-6"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: .2
                      }
                    }}
                  >
                    <div className="p-4 lg:p-0 mt-6 lg:mt-4">
                      <Image
                        src={items.image}
                        width={200}
                        height={180}
                        alt="Free Plan"
                      />
                    </div>
                    <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-2">
                      {items.title}
                    </p>
                  
                    <p className="text-sm">   {truncate(items.description)}   </p>
                    <div className="flex flex-col w-full justify-center mb-8 flex-none mt-6">

                      <ButtonOutline>Select</ButtonOutline>
                    </div>
                  </motion.div>
                  
                </ScrollAnimationWrapper>
              </>
            ))}
          </div>

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">



            {Service.filter((item, i) => i > 2 && i < 6).map((items, i) => (
              <>
                <ScrollAnimationWrapper className="flex justify-center">
                  <motion.div
                    variants={scrollAnimation}
                    className="  justify-center items-center border-2 border-gray-500 rounded-xl py-0 px-6 lg:px-6 xl:px-6"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: .2
                      }
                    }}
                  >
                    <div className="p-4 lg:p-0 mt-6 lg:mt-4">
                      <Image
                        src={items.image}
                        width={200}
                        height={180}
                        alt="Free Plan"
                      />
                    </div>
                    <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-2">
                      {items.title}
                    </p>
                    <p className="text-sm">     {truncate(items.description)} </p>
                    <div className="flex flex-col w-full justify-center mb-8 flex-none mt-6">

                      <ButtonOutline>Select</ButtonOutline>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              </>
            ))}








          </div>

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

            {Service.filter((item, i) => i > 5).map((items, i) => (
              <>
                <ScrollAnimationWrapper className="flex justify-center">
                  <motion.div
                    variants={scrollAnimation}
                    className="  justify-center items-center border-2 border-gray-500 rounded-xl py-0 px-6 lg:px-6 xl:px-6"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: .2
                      }
                    }}
                  >
                    <div className="p-4 lg:p-0 mt-6 lg:mt-4">
                      <Image
                        src={items.image}
                        width={200}
                        height={180}
                        alt="Free Plan"
                      />
                    </div>
                    <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-2">
                      {items.title}
                    </p>
                    <p className="text-sm">      {truncate(items.description)} </p>
                    <div className="flex flex-col w-full justify-center mb-8 flex-none mt-6">

                      <ButtonOutline>Select</ButtonOutline>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              </>
            ))}

          </div>

        </div>
        {/*  ___________________ service ___________________  */}


    

        {/*  ___________________ PACKAGE ___________________  */}

        <div className="flex flex-col w-full mt-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Our SEO Packages
            </motion.h3>

          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">



            {Packages.map((items, i) => (
              <>
                <ScrollAnimationWrapper className="">
                  <motion.div
                    variants={scrollAnimation}
                    className="  justify-center items-center border-2 border-gray-500 bg-red-500 text-white  rounded-xl py-0 px-6 lg:px-6 xl:px-6"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: .2
                      }
                    }}
                  >
                    <div className="p-4 lg:p-0 mt-6 lg:mt-4 flex justify-center">
                      <Image
                        src={items.image}
                        width={60}
                        height={60}
                        alt="Free Plan"
                      />
                    </div>
                    <p className="text-2xl text-white-500  font-medium capitalize my-2 sm:my-2">
                      {items.title}
                    </p>
                   
                    <p className="text-white-500">
                     <strong> {items.price} </strong>/ {items.type}
                    </p>
                    <p className="text-xs text-white-500">
                      {items.suitable}
                    </p>

                    <div className="flex flex-col w-full justify-center mb-8 flex-none mt-6">

                      <ButtonOutline>{items.button}</ButtonOutline>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              </>
            ))}
          </div>

        </div>

         {/*  ___________________ PACKAGE ___________________  */}

         {/* <Feature1/> */}

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Our Customer Review
            </motion.h3>
           
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>

       
        </div>





        <div className="font-medium tracking-wide py-12 px-5 sm:px-8 border border-orange-500  outline-none rounded-l-lg rounded-r-lg capitalize bg-red-500 text-gray-100 transition-all shadow-orange">
          <h1 className="text-4xl mb-3">Get a complimentary Site Audit</h1>
          <p className="mb-8 text-white-500 ">Connect with one of our specialists for a free consultation from our customer success team, today!</p>

          <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 
          hover:border hover:border-white-500 text-red-500 bg-gray-100 outline-none rounded-l-full 
          rounded-r-full capitalize hover:bg-red-500 hover:text-gray-100 transition-all hover:shadow-orange mb-2 mr-2" onClick={handleShow}>Request Free Audit</button> 
        
           
          <button className="py-2 lg:py-2 px-12 lg:px-16 rounded-l-full border border-white-500 rounded-r-full text-gray-100 font-semibold rounded-lg bg-red-500 hover:shadow-orange-md transition-all outline-none undefined hover:bg-gray-100 hover:text-red-500"> + 91 99713 22654</button>
        </div>





      </div>
    </div>


    <Proposal show={show} handleClose={handleClose}/>
    {/* <Modal className="modal-contact" show={show} onHide={handleClose}>
       
       <Modal.Body>

       
   {state.succeeded? <>  <p className="mt-40 text-center text-2xl text-orange-500">Thanks for Contacting us!</p>
      <div className="flex justify-center my-4">
      <img className="" src="https://img.icons8.com/emoji/256/folded-hands-light-skin-tone.png" width={100}/>
      </div>
      <p className="text-center">Our agent will contact you soon</p>
   </> : <section class="contact_us mt-32">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <div class="contact_inner">
                       <div class="row">
                           <div class="col-md-10">
                               <div class="contact_form_inner">
                                   <div class="contact_field">
                                       <h3>Contatc Us</h3>
                                       <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                       <form onSubmit={handleSubmit}>
                                       <input type="text" class="form-control form-group"  id="name" name="name" placeholder="Name" />
                                       <input type="email" class="form-control form-group" id="email" name="email" placeholder="Email" />
                                       <input type="number" class="form-control form-group" id="phone" name="phone" placeholder="Phone Number" />
                                       <textarea class="form-control form-group" id="message" name="message" placeholder="Message"></textarea>
                                       <button class="contact_form_submit" type="submit" disabled={state.submitting}> Send</button>
                                       </form>
                                   </div>
                               </div>
                           </div>
                           <div class="col-md-2">
                               <div class="right_conatct_social_icon d-flex align-items-end">
                                  <div class="socil_item_inner d-flex">
                                     <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                     <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                     <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                  </div>
                               </div>
                           </div>
                       </div>
                       <div class="contact_info_sec">
                           <h4>Contact Info</h4>
                           <div class="d-flex info_single align-items-center">
                               <i class="fas fa-headset"></i>
                               <span>+91- 9971322654</span>
                           </div>
                           <div class="d-flex info_single align-items-center">
                               <i class="fas fa-envelope-open-text"></i>
                               <span>info@idigitaldisha.com</span>
                           </div>
                           <div class="d-flex info_single align-items-center">
                               <i class="fas fa-map-marked-alt"></i>
                               <span>If you're looking for a digital marketing agency that delivers results and helps you grow your business, then iDigital Disha is the perfect partner for you. </span>
                           </div>
           
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
}


       </Modal.Body>
       
     </Modal> */}
 <hr/>
    </>
  );
};

export default Pricing;
