import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const HomeCliclk2 = () => {
    return (
        <div className="min-h-screen flex flex-col pt-30">
            {/* Search Section */}
            <div className=" p-6 md:p-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
                    <input
                        type="text"
                        placeholder="Pincode"
                        className="p-3 border rounded-md"
                    />
                    <select className="p-3 border rounded-md">
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                    </select>
                    <select className="p-3 border rounded-md">
                        <option value="">Select Listing Type</option>
                        <option value="rent">Rent</option>
                        <option value="resale">Resale</option>
                    </select>
                    <select className="p-3 border rounded-md">
                        <option value="">Select Furnishing</option>
                        <option value="0-1000">0–1000 sqft</option>
                        <option value="1000-2000">1000–2000 sqft</option>
                        <option value="2000-3000">2000–3000 sqft</option>
                    </select>
                    <select className="p-3 border rounded-md">
                        <option value="">Select Price Range</option>
                        <option value="0-40000">0–40K</option>
                        <option value="40000-80000">40K–80K</option>
                        <option value="80000-120000">80K–1.20L</option>
                        <option value="120000-160000">1.20L–1.60L</option>
                        <option value="200000-240000">2.00L–2.40L</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Location"
                        className="p-2 border rounded-md col-span-1 md:col-span-1"
                    />
                    <button className="bg-blue-600 text-white  rounded-md hover:bg-blue-700 col-span-1  md:col-span-1 ">
                        Search
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white mt-auto pt-30">
               
            <img src="/Logo.jpg" alt="Boblick Logo" className="h-15 p-2 mb-10 w-auto" />
                <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Properties</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:pincodepillars@gmail.com"
                                className="underline"
                            >
                                pincodepillars@gmail.com
                            </a>
                        </p>
                        <p>
                            Phone:{" "}
                            <a href="tel:+919884855955" className="underline">
                                +91 9884855955
                            </a>
                        </p>
                        <p>Location: Chennai, India</p>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">
                            Subscribe to our Newsletter
                        </h3>
                        <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 w-1/2 rounded-md text-black bg-white"
                        />
                        <button className="mt-2 w-1/2 bg-yellow-400 font-bold text-black py-3  rounded-md hover:bg-blue-700">
                            Subscribe
                        </button>
                        </div>
                        <div className="flex gap-2 p-5 ml-10">
                        <FaFacebook size={24} />
                        <FaTwitter size={24}  />
                        <FaInstagram size={24} />
                        <CiLinkedin size={24} />
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-400 py-3 border-t border-gray-700">
                    © 2025 Pincode Pillars. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default HomeCliclk2;
