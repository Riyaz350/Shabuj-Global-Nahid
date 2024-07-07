import large from '../../assets/Dhaka-Expo-11-may-2024--Rectangle 1.png'
import small from '../../assets/Dhaka-Event-1s 1.png'
import bg from '../../assets/Blue Background.png'
import { HiOutlineLocationMarker } from "react-icons/hi";

import { useState } from 'react';
const Events = () => {
    const [active, setActive] = useState(1)
    return (
        <div className=''>
            <div className='text-center space-y-10 font-bold '>
                <div className='  '>
                    <div style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                        <div className=' mx-10 lg:mx-auto space-y-10 h-96 flex flex-col pt-20'>
                            <h1 className='text-5xl   '>Ongoing Event</h1>
                            <h2 className='text-[#00399F] text-3xl   '>Multi-Destination Education Expo - Dhaka</h2>
                        </div>
                    </div>
                    <div className='-mt-20 max-w-5xl mx-auto border-b-2 border-[#CACACA] pb-20'>
                        <img className='    mx-auto rounded-3xl ' src={large} alt="" />
                        <div className='max-w-3xl mx-auto flex gap-2'>
                            <button onMouseEnter={() => setActive(1)} className={`${active == 1 ? 'bg-[#2563EB] text-white' : ' bg-white text-[#2563EB]'} rounded-3xl h-10 w-full`}>Join Now</button>
                            <button onMouseEnter={() => setActive(2)} className={`${active == 2 ? 'bg-[#2563EB] text-white' : ' bg-white text-[#2563EB]'} rounded-3xl h-10  w-full flex items-center justify-center gap-2`}><HiOutlineLocationMarker />Event Location</button>
                        </div>
                         
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Events;