import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/images/Icon/stars.svg";
import ArrowBack from "../public/assets/images/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/images/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Ankur Sharma",
      image: "/assets/images/face1.jpg",
      city: "Noida",
      country: "India",
      rating: "4.5",
      testimoni:
        "I can't say enough good things about the SEO service I received from this company. They were able to increase my website's visibility and drive more organic traffic to my site within just a few months. The team was always professional and responsive, and they provided me with regular updates on the progress of my SEO campaign. They also took the time to explain their strategy and answer any questions I had, which was really helpful in understanding the work they were doing.",
    },
    {
      name: "Diksha Goyal",
      image: "/assets/images/face2.JPG",
      city: "Dehradun",
      country: "India",
      rating: "5",
      testimoni:
        "This SEO service is amazing! They helped me improve my website's search rankings and drive more traffic to my site. The team was always professional and provided me with regular updates on their progress. Thanks to their help, my business has seen a significant increase in online visibility and customer engagement. I would highly recommend this SEO service to anyone looking to improve their online presence."
    },
    {
      name: "Hemant Sharma",
      image: "/assets/images/face3.JPG",
      city: "Lucknow",
      country: "India",
      rating: "4.8",
      testimoni: "I've been using this digital marketing service for several months now, and I couldn't be happier with the results. The team is incredibly knowledgeable and always responsive to my needs. They've helped me improve my website's SEO, increase my social media presence, and drive more traffic to my site. They've also provided me with detailed reports and analytics to track my progress, which has been really helpful in making informed decisions about my marketing strategy."
    }
    ,
    // {
    //   name: "Anirudha Gupta",
    //   image: "/assets/face4.JPG",
    //   city: "Mumbai",
    //   country: "India",
    //   rating: "5",
    //   testimoni:
    //     "I am so impressed with the web development service I received from this company. The team was professional, knowledgeable, and provided me with a website that exceeded my expectations. They listened to my needs and developed a website that was customized to my business. The design was clean and modern, and the site was user-friendly and easy to navigate. I would highly recommend this web development service to anyone looking to build a high-quality website that stands out from the competition."
    // },
  ],
}) => {
  const settings = {
    dots: false,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      {/* <Slider
        {...settings}
        arrows={false}
        autoplay={true}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      > */}
      <div className="conatiner">
        <div className="row">

          {listTestimoni.map((listTestimonis, index) => (
            <div className="col-12 col-lg-4" >
              <div className="border-2 border-gray-500 hover:bg-red-500 hover:text-gray-100 mb-4 transition-all rounded-lg p-8 flex flex-col">
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <Image
                      src={listTestimonis.image}
                      className="border-2 rounded-full"
                      height={50}
                      width={50}
                      alt="Icon People"
                    />
                    <div className="flex flex-col ml-5 text-left">
                      <p className="text-lg text-black-600 capitalize">
                        {listTestimonis.name}
                      </p>
                      <p className="text-sm text-black-500 capitalize">
                        {listTestimonis.city}, {listTestimonis.country}
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div> */}
                </div>

                <p className="mt-5 text-left text-sm">“{listTestimonis.testimoni}”.</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* </Slider> */}
      {/* <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Testimoni;
