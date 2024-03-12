import React from 'react';
import { BsFillSunFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import SearchBox from './SearchBox';
import backgroundImage from '../../public/images/sky.jpg';

type Props = {}

export default function Navbar({}: Props) {
    return (
        <div>
            {/* Navigation bar */}
            <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white h-16">
                <div className="h-full flex justify-between items-center max-w-7xl px-3 mx-auto">
                    <div className="flex items-center gap-2">
                        <h2 className="text-gray-500 text-3xl">SunSafe</h2>
                        <BsFillSunFill className='text-3xl text-yellow-300'/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="text-gray-500 hover:text-gray-700">SignUp</button>
                        <button className="text-gray-500 hover:text-gray-700">Login</button>
                    </div>
                </div>
            </nav>

            {/* Picture with text overlay */}
            <div className="relative" style={{ backgroundImage: `url(${backgroundImage})`, height: '50vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute top-0 left-0 right-0 text-white text-center">
                    <div className="py-20">
                        <h1 className="text-6xl text-gray-500 font-bold mb-4">Welcome to SunSafe</h1>
                        <p className="text-lg text-gray-500 mb-4">Enjoy the sun the healthy way...</p>
                        <div className="flex flex-col items-center"> {/* Center horizontally */}
                            <div className="flex items-center"> {/* Align items vertically */}
                                <MdMyLocation className='text-2xl text-gray-400 hover:opacity-80 cursor-pointer' />
                                <p className='text-slate-900/80 text-sm'> Australia </p>
                                <FaLocationDot className='text-2xl text-gray-400 hover:opacity-80 cursor-pointer'/>
                                {/* SearchBox component */}
                                <SearchBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* White text block */}
            <div className="bg-white py-10 text-center">
                <h2 className="text-3xl text-gray-800">Why should you be sun-safe?</h2>
                <br/>
                <p className="text-lg text-gray-600 text-left">
                    Australia has the highest rate of skin cancers in the world. Since 1970s, the ozone layer above Australia has reduced significantly due to which Australia experiences high levels of UVR. The increased UV levels are causing skin cancers in Australia and has become a major issue.
                    <br /><br />
                    Read more about skin cancer at <a href="https://www.cancercouncil.com.au/skin-cancer/about-skin-cancer/#:~:text=Australia%20has%20one%20of%20the,common%20cancer%20diagnosed%20in%20Australia" className="text-blue-600 hover:underline">Cancer Council</a>. How high UV levels are impacting the health of people? Spending time outdoors has become a necessity for adults as well as children to enjoy life. Therefore, we need to focus more on protecting ourselves from UV levels using sunscreens, protective coverings.
                </p>
            </div>
        </div>
    );
}