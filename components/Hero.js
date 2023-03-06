import React, { useMemo, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Slider from 'react-slick';

import banner1 from "../public/assets/images/carousal.png"
import banner2 from "../public/assets/images/carousal2.png"
import banner3 from "../public/assets/images/carousal3.png"
import banner4 from "../public/assets/images/carousal4.png"



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Proposal from "./Modal/Propsal";


const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,

    arrows: false, // Set to false to remove both previous and next buttons
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const [state, handleSubmit] = useForm("xbjeyabz");

  return (
    <>

    <div className="lg:mt-32 mt-24 ">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image src={banner1}  />
        
      </Carousel.Item>
      <Carousel.Item>
      <Image src={banner2}  />

       
      </Carousel.Item>
      <Carousel.Item>
      <Image src={banner3}  />

        
      </Carousel.Item>

      <Carousel.Item>
      <Image src={banner4}  />

        
      </Carousel.Item>
    </Carousel>

    </div>
      <div
        // style={{ backgroundColor: "#f5f0e5" }}
        className="max-w-screen-xl mt-0 px-8 py-1 xl:px-16 mx-auto mb-0"
        id="about"
      >
        <ScrollAnimationWrapper>



          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>




            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Digital Marketing Company In India
              </h1>
              <br />
              <h3>SEO  |  SMO  |  Email Marketing  |  Facebook & Instagram Marketing  |  PPC  |  Web Development  |  Graphic Designing  </h3>
              {/* <p className="text-black-500 mt-2 mb-6">
               
              Our Digital Marketing Company is widely recognized for its exclusive emphasis on advancing its clients' businesses.
              </p> */}
              <br />
              <button className="btn btn-primary" onClick={handleShow}>Request Proposal</button>
            </div>

            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/images/banner10.gif"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>





      </div>

   <Proposal show={show} handleClose={handleClose}/>

    </>


  );
};

export default Hero;
