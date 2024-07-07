import { FaChevronDown } from 'react-icons/fa6';
import Tablet from '../../assets/Tablet.png'
import { MdDone } from "react-icons/md";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { BsGridFill, BsCameraVideoFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp, IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaClock, FaUserFriends, FaHeart } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";
import { RiNewsFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMicrophoneLines } from "react-icons/fa6";





const Banner = ({ navIndex }) => {
    const [tik, setTik] = useState(false)
    const [width, setWidth] = useState(null)
    const iconStyle= 'flex items-center gap-2'

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    const inputClass = `   rounded-md w-full outline-none placeholder:text-xs  placeholder:text-[8px]   ${width >= 1024 & width <= 1300 ? 'placeholder:text-[10px]   px-2 text-[10px]' : width > 1300 ? 'text-base placeholder:text-base px-2 py-1' : 'text-[8px] md:text-base pl-[2px] md:p-2 '}`
    const inputClass2 = `bg-gray-100 text-center flex items-center p-2 text-gray-400 text-[8px] md:text-[12px] ${width >= 1024 & width <= 1300 ? 'placeholder:text-[10px]   px-2 text-[10px]' : width > 1300 ? 'text-base placeholder:text-base px-2 py-1' : 'text-[8px] md:text-base md:p-2 '}`
    return (
        <div className='relative'>
            <div className="flex flex-col lg:grid grid-cols-5 overflow-hidden bg-[#F5F5F5] rounded-b-2xl">
                <div className="col-span-2 flex flex-col items-center justify-center  ">
                    <div>
                        <h1 className="text-7xl font-bold">We’d love <br /> to hear <br /> from you!</h1>
                        <p className="my-10">Interested in studying abroad with Shabuj <br /> Global Education?
                            Enter your details and <br /> {`we'll`} call you back when it suits you.</p>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col justify-center items-center relative">
                    <motion.div initial={{ y: '-200px' }} animate={{ y: 0 }} transition={{ duration: 1 }} className={`${width >= 1024 & width <= 1300 && 'mt-5'} w-1/3 md:w-2/5  z-10 lg:w-1/4  absolute `}>
                        <form className=' w-full z-10 -mt-10 flex flex-col gap-2 text-xs lg:text-base'>
                            <input className={inputClass} type="text" placeholder='Name' />

                            <div className='flex'>
                                <input className={`${inputClass} rounded-r-none `} type="text" placeholder='Email' />
                                <p className={`${inputClass2} rounded-r-md  text-[8px] `}>.com</p>
                            </div>

                            <div className='flex gap-2'>
                                <p className={`${inputClass2} rounded-md  `}>+880</p>
                                <input className={`${inputClass}  `} type="text" placeholder='Mobile Number' />
                            </div>

                            <div className='space-y-2'>
                                <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Destination <span><FaChevronDown /></span></p>
                                <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Year <span><FaChevronDown /></span></p>
                                <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Intake <span><FaChevronDown /></span></p>
                            </div>

                            <div className='flex items-center gap-2 bg-transparent text-[8px] md:text-base'>
                                <p onClick={() => { setTik(!tik) }}><MdDone className={tik ? 'text-white bg-[#3560ff]' : 'text-transparent bg-white'} /></p>
                                <p className={`${width >= 1024 & width <= 1300 ? '  text-[10px]' : width > 1300 ? 'text-base' : 'text:sm md:text-base'} text-white`}>By clicking you agree to our <span className='text-[#0d7ddc]'> Privacy Policy</span> and <span className='text-[#0d7ddc]'>Terms & Conditions</span></p>
                            </div>

                            <button className='bg-[#3b82f6] text-white font-bold p-1 lg:p-2 rounded-3xl text-[8px] md:text-base '>SUBMIT</button>
                        </ form>
                    </motion.div>
                    <motion.img initial={{ y: '200px' }} animate={{ y: '0px' }} transition={{ duration: 1 }} className={`${width <= 1500 ? 'w-full' : 'w-3/4'} z-0  mx-auto lg:mt-10`} src={Tablet} alt="" />
                </div>
            </div>

            {/* Navbar Item */}
            <div className='bg-white absolute w-full top-0 z-10 shadow-lg'>
                {navIndex == 1 &&
                    <div >
                        <ul className='flex justify-between max-w-7xl mx-auto'>
                            <li>Study in UK</li>
                            <li>Study in USA</li>
                            <li>Study in Australia</li>
                            <li>Study in Canada</li>
                            <li>Study in Germany</li>
                            <li>Study in New Zealand</li>
                            
                        </ul>
                    </div>
                }
                {navIndex == 2 &&
                    <>
                        <div className='flex flex-col  mx-20 my-10 md:grid  grid-cols-3  md:max-w-7xl lg:mx-auto '>
                            <div className='col-span-2 my-10'>
                                <h2 className='my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]'>FOR STUDENTS</h2>
                                <div className='flex flex-col md:flex-row  justify-center md:justify-start gap-10'>
                                    <ul className='space-y-2 text-lg'>
                                        <li>Free Study Abroad Counselling</li>
                                        <li>Student Visa</li>
                                        <li>University Application Process</li>
                                        <li>International Student Visa Guidance</li>
                                    </ul>
                                    <ul className='space-y-2 text-lg'>
                                        <li>University Scholarship Guidance</li>
                                        <li>Study Abroad Destination Guide</li>
                                        <li>Personality Assessment Test</li>
                                        <li>Study Accommodation</li>
                                    </ul>
                                </div>
                            </div>




                            <div className='col-span-1 md:my-10'>
                                <h2 className='my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]'>FOR PARTNERS</h2>
                                <ul className='space-y-2 text-lg'>
                                    <li>Customized Solution</li>
                                    <li>Instant Support</li>
                                    <li>Commissions</li>
                                    <li>Technological Support</li>
                                </ul>
                            </div>
                        </div>
                    </>
                }
                {navIndex == 3 &&
                    <div className='lg:flex  justify-around'>
                        <img src="" alt="img1" />
                        <img src="" alt="img2" />
                    </div>
                }
                {navIndex == 4 &&
                    <div className='md:grid md:grid-cols-2 lg:grid-cols-4  max-w-7xl mx-10 space-y-2 lg:space-y-0 lg:mx-auto my-10'>
                        <ul className='col-span-1 space-y-4 text-lg '>
                            <li className={iconStyle}><BsGridFill />Who We Are</li>
                            <li className={iconStyle}><FaHeart />Our Partners</li>
                            <li className={iconStyle}><FaClock />Our Timeline</li>
                            <li className={iconStyle}><FaUserFriends />Our Leadership Team</li>
                        </ul>
                        <ul className='col-span-1 space-y-4 text-lg '>
                            <li className={iconStyle}><IoShieldCheckmarkSharp />Partner With Us</li>
                            <li className={iconStyle}><IoCheckmarkDoneCircleSharp />Award Recognitions</li>
                            <div className={`${iconStyle}'flex gap-2 items-center'`}><SiGooglesheets /><li>Careers</li> <span className='text-sm bg-green-500 text-white mx-2 p-1 rounded-sm'>Hiring</span></div>
                            <li className={iconStyle}><RiNewsFill />Blog</li>
                        </ul>
                        <ul className='col-span-1 space-y-4 text-lg '>
                            <li className={iconStyle}><BiSolidPhoneCall />Contact Us</li>
                            <li className={iconStyle}><FaMicrophoneLines />News & Press</li>
                            <li className={iconStyle}><BsCameraVideoFill />Events & Webinars</li>
                        </ul>
                        <ul>

                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Banner;