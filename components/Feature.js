import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import Modal from 'react-bootstrap/Modal';
// import { useForm, ValidationError } from '@formspree/react';   



const features = [
  "Hire Us today to grow your business.",
 
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
//  const [state, handleSubmit] = useForm("xbjeyabz");



  return (
    <>
    <div
      className="max-w-screen-xl mt-0 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/banner5.gif"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={400}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col  justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-xl lg:text-2xl font-medium leading-relaxed text-black-600 mt-4">
          Why Choose iDigital Disha For Your Digital Marketing Agency?
          </h3>
          <p className="mb-2 mt-4 text-black-500  ">
          If you're looking for a digital marketing agency that delivers results and helps you grow your business, then iDigital Disha is the perfect partner for you. We specialize in providing comprehensive digital marketing services that are customized to meet the unique needs of each of our clients.          </p>
          <p>
          Here are some of the top reasons why you should choose iDigital Disha as your digital marketing agency:
          </p>
          <br/>
          
          {/* <ul className="text-black-500 self-start list-inside ml-8 ">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul> */}
          <button onClick={handleShow} className="btn btn-primary">Contact Us</button>
        </motion.div>
     
        </ScrollAnimationWrapper>
      </div>
    </div>






    </>
  );
};

export default Feature;
