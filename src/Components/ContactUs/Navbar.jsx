import { useEffect, useState } from 'react';
import logo from '../../assets/Logo.png'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Navbar = ({ setNavIndex }) => {
    const [navButton, setNavButton] = useState(0)

    const handleNavButton = (index) => {
        navButton == 0 ? setNavButton(index) : setNavButton(0)
    }

    const NavButton = ({ ind, text }) => {
        return (
            <div className={` flex items-center  gap-2 cursor-pointer `} onClick={() => handleNavButton(ind)}><button className='bg-[#F0F8FF] font-semibold'>{text}</button>
                {navButton == ind ? <><FaChevronUp /></> : <><FaChevronDown /></>}
            </div>
        )
    }

    useEffect(() => {
        setNavIndex(navButton)
    }, [navButton, setNavIndex])
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between px-10 lg:px-28 py-10 bg-[#F0F8FF]'>
            <img className='h-[30px] w-[200px] md:h-[40px] md:w-[250px] lg:h-[50px] lg:w-[350px]' src={logo} alt="" />

            <div className='grid grid-cols-2 items-center justify-center my-5 md:flex gap-4'>
                <NavButton ind={1} text='Study Destination' />
                <NavButton ind={2} text='Services' />
                <NavButton ind={3} text='Test Prep.' />
                <NavButton ind={4} text='About Us' />
                <button className='bg-[#BFDBFE] font-bold px-5 py-2 rounded-2xl'>Log In</button>
            </div>
        </div>
    );
};

export default Navbar;