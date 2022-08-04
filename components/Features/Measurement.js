import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import MeasurementImg from '/public/assets/images/features/measurement.png';

const Measurement = ({ currentTab }) => {
    return ( <
        AnimatePresence > {
            currentTab === 'measurement' && ( <
                motion.div key = 'measurement'
                transition = {
                    { duration: 0.2, ease: 'easeInOut' }
                }
                className = 'grid lg:grid-cols-[65%_35%] gap-28 items-center h-full lg:h-[560px] ' >
                <
                div className = 'order-2 lg:order-[-1]' >
                <
                motion.h1 initial = {
                    { opacity: 0 }
                }
                animate = {
                    { opacity: 1 }
                }
                exit = {
                    { opacity: 0 }
                }
                className = 'text-3xl text-[#333]' >
                Get measurements online hassle - free <
                /motion.h1> <
                motion.p initial = {
                    { opacity: 0 }
                }
                animate = {
                    { opacity: 1 }
                }
                exit = {
                    { opacity: 0 }
                }
                className = 'my-10 leading-[28.61px]' >
                Customers upload all the measurements online via app so you can get to work without a hitch. <
                /motion.p> <
                div className = 'flex justify-center md:justify-start' >
                <
                button className = 'bg-primaryColor rounded-[12px] max-w-[212px] h-[45px] w-full md:h-[61px] text-white' >
                Download App <
                /button> < /
                div > <
                /div> <
                div >
                <
                div className = 'relative' >
                <
                svg className = 'max-w-[500px] max-h-[500px] mx-auto 2xl:w-[373px] 2xl:h-[373px]'
                style = {
                    {
                        height: '337.63px',
                        width: '337.63px'
                    }
                }
                viewBox = '0 0 373 373'
                fill = 'none'
                xmlns = 'http://www.w3.org/2000/svg' >
                <
                circle cx = '186.5'
                cy = '186.5'
                r = '186.5'
                fill = '#EEECE7' / >
                <
                /svg> <
                div className = 'absolute top-2/4 left-2/4 translate-x-[-50%]   translate-y-[-50%]'
                style = {
                    {
                        height: '466.16px',
                        width: '215.43px'
                    }
                } >
                <
                motion.img initial = {
                    { scale: 0 }
                }
                animate = {
                    { scale: 1 }
                }
                exit = {
                    { scale: 0 }
                }
                transition = {
                    {
                        ease: 'easeIn',
                    }
                }
                src = { MeasurementImg.src }
                alt = ''
                className = 'origin-bottom' /
                >
                <
                /div> < /
                div > <
                /div> < /
                motion.div >
            )
        } <
        /AnimatePresence>
    );
};

export default Measurement;