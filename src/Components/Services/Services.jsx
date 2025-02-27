import project from '../../assets/college-project-animate.svg'
import counsel from '../../assets/counseling-pana.svg'
import passport from '../../assets/Health passport-pana.svg'
import airport from '../../assets/Airport-amico.svg'
import circle from '../../assets/Circle.png'
import '../../App.css'
const Services = () => {

    const Card = ({ circle, position }) => {
        return (
            <div className='w-80 mx-auto lg:mx-0 relative bg-white h-96  shadow-lg px-5 py-10 rounded-2xl'>
                <h2 className='text-2xl w-1/3 font-semibold'>Personalized Counseling</h2>
                <p className='text-sm mt-5 font-medium'>Our experienced counselors provide personalized guidance to help you choose the best university and program that aligns with your academic goals and career aspirations. We take into account your preferences, strengths, and future plans to recommend the most suitable options.</p>
                <button className='hover:border-blue-400 hover:text-blue-400 border-[2px] border-b-[1px] rounded-full px-4 py-2 text-sm mt-2'>Learn More</button>
                {circle &&
                    <div>
                        {position == 'top-center' ?
                            <img className=' absolute -top-3 left-[135px]' src={circle} alt="" /> :
                            <img className=' absolute  -right-6 top-9' src={circle} alt="" />
                        }
                    </div>
                }
            </div>
        )
    }

    const Connector1 = () => {
        return (
            <div className='border-[#8EBBE8] hidden lg:flex absolute border-2 rounded-2xl border-dashed w-[700px] -z-10 h-[80px] -top-5  border-t-0 border-l-0 '>

            </div>

        )
    }

    const Connector2 = () => {
        return (
            <div className='border-[#8EBBE8] hidden lg:flex absolute border-2 rounded-2xl border-dashed w-[800px] -z-10 h-[80px] top-28  border-b-0 border-l-0 '>

            </div>
        )
    }

    return (
        <div className='poppins  '>
            <div className=" lg:flex items-center  max-w-5xl mx-auto">
                <img className='w-2/3 lg:w-1/2 mx-auto lg:mx-0' src={project} alt="" />
                <div className='w-2/3 md:w-2/5 mb-10 mx-auto lg:mx-0 lg:ml-auto'>
                    <h1 className='text-center md:text-start text-4xl lg:text-5xl my-10'>Our Services</h1>
                    <p className=' font-semibold lg:font-bold '>Welcome to Shabuj Global Education! We are dedicated to guiding you through the exciting journey of studying abroad. Our comprehensive range of services is designed to ensure a smooth and successful experience for every student. Explore our services below to see how we can help you achieve your academic dreams.</p>
                </div>
            </div>

            <div className='max-w-5xl z-0    mx-auto  flex flex-col items-center justify-center  gap-10 lg:gap-0'>
                {/* first 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card />
                    </div>
                    <div className='lg:grid grid-cols-3  -z-10 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-2/3   mx-auto mr-16' src={counsel} alt="" />
                        </div>
                        <Card circle={circle} position='top-center' />
                    </div>

                    {/* first bordered card */}
                    <Connector2 />
                </div>




                {/* second 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card circle={circle} />
                    </div>
                    <div className='lg:grid grid-cols-3  -z-10 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <Card circle={circle} position='top-center' />
                    </div>
                    {/* second bordered card */}
                    <Connector1 />
                    <Connector2 />
                </div>

                {/* third 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card circle={circle} />
                    </div>
                    <div className='lg:grid grid-cols-3  -z-10 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-2/5   ml-auto  mb-5' src={passport} alt="" />
                        </div>
                        <Card circle={circle} position='top-center' />
                    </div>
                    <Connector1 />
                    <Connector2 />
                </div>

                {/* fourth 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card circle={circle} />
                    </div>
                    <div className='lg:grid grid-cols-3  z-20 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-6/12 z-20  ml-auto mr-20' src={airport} alt="" />
                        </div>
                        <Card circle={circle} position='top-center' />
                    </div>
                    <Connector1 />
                    <Connector2 />

                </div>

                {/* fifth card */}
                <div className='relative'>
                    <div className='  mb-10 lg:mb-0'>
                        <Card circle={circle} />
                    </div>
                    <div className='lg:grid grid-cols-3    lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-6/12 z-10  hidden ml-auto mr-20' src={airport} alt="" />
                        </div>
                        <div className='invisible'>
                            <Card />
                        </div>
                        <Connector1 />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Services;