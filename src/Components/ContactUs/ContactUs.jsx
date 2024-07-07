import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import SVG from "./SVG";

const ContactUs = () => {
    const [navIndex, setNavIndex] = useState(0)
    return (
        <div>
            <Navbar setNavIndex={setNavIndex}/>
            <Banner navIndex={navIndex}/>
            <SVG/>
        </div>
    );
};

export default ContactUs;