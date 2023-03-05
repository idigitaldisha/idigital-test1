import React, { useState, useEffect } from "react";

import Image from "next/image";

import whatsapp from "../../public/assets/images/Icon/whatsapp.png"
import call from "../../public/assets/images/Icon/call.png"
import email from "../../public/assets/images/Icon/email.png"

import Facebook from "../../public/assets/images/Icon/facebook.png";
import Twitter from "../../public/assets/images/Icon/linkedin.png";
import Instagram from "../../public/assets/images/Icon/insta.png";

const TopHeader = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);
    return (
        <>
            <header
                style={{ background: "rgb(245 56 85)", color: "white" }}
                className={
                    "fixed top-0 w-full  z-30 bg-white-500 transition-all border-b-2 border-orange-500  " +
                    (scrollActive ? " shadow-md pt-0" : " ")
                }
            >
                <div className="grid grid-cols-3 px-48 ">
                    <div className="flex justify-left col-span-2">
                        <span className=" justify-center flex text-sm pt-2 pb-2 pr-4">
                        <a href="tel:9971322654"><Image src={call} height={20} width={20} className="rounded-full " /></a>
                            <strong className=" px-2 ">+91- 9971322654</strong>
                        </span>

                        <span className=" justify-center flex text-sm pt-2 pb-2 pr-4">
                        <a>  <Image src={whatsapp} height={20} width={20} className="rounded-full " /></a>
                            <strong className=" px-2 ">+91- 9971322654</strong>
                        </span>

                        <span className=" justify-center flex text-sm pt-2 pb-2 pr-4">
                        <a href="mailto:info@idigitaldisha.com">   <Image src={email} height={20} width={25} className="rounded-full " /></a>
                            <strong className=" px-2 ">info@idigitaldisha.com</strong>
                        </span>


                    </div>


                  
                    <div >
                        <span className=" float-right flex text-sm pt-2 pb-2 pr-4">
                      
                           <a href="https://www.facebook.com/idigitaldisha" target={`_blank`}><Image src={Facebook} height={20} width={20} className="rounded-full " /></a> &nbsp;&nbsp;
                           <a href="https://www.linkedin.com/company/idigitaldisha/" target={`_blank`}> <Image src={Twitter} height={20} width={20} className="rounded-full " /></a>&nbsp;&nbsp;
                           <a href="https://www.instagram.com/idigitaldisha/" target={`_blank`}> <Image src={Instagram} height={20} width={20} className="rounded-full " /></a>&nbsp;&nbsp;
                        </span>
                       
                    </div>





                </div>
            </header>

        </>
    );
};

export default TopHeader;
