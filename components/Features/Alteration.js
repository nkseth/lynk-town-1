import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import MeasurementImg from "/public/assets/images/features/alteration.png";

const Alteration = ({ currentTab }) => {
  return (
    <AnimatePresence>
      {currentTab === "alterations" && (
        <motion.div
          key="alterations"
          className="grid lg:grid-cols-[65%_35%] gap-28 items-center h-full lg:h-[560px] py-20"
        >
          <div className="order-2 lg:order-[-1]">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-3xl text-[#333]"
            >
              Gain customer trust by accepting alteration requests
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="my-10 leading-[28.61px]"
            >
              Accepting alteration request helps your customers get better
              experience.
            </motion.p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-primaryColor rounded-[12px] max-w-[212px] h-[45px] w-full md:h-[61px] text-white">
                Download App
              </button>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <svg
                className="mx-auto w-[337px] h-[337px] xl:w-[337px] xl:h-[337px]"
                viewBox="0 0 373 373"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="186.5" cy="186.5" r="186.5" fill="#EEECE7" />
              </svg>
              <div
                className="absolute  top-2/4 left-2/4 translate-x-[-50%]   translate-y-[-50%]"
                style={{ height: "466px", width: "215px" }}
              >
                <motion.img
                  initial={{ scale: 0 }}
                  style={{ height: "466px", width: "215px" }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  src={MeasurementImg.src}
                  transition={{
                    ease: "easeIn",
                  }}
                  alt=""
                  className="origin-bottom"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alteration;
