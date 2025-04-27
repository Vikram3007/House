import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const HomeDetiles5 = () => {
  const faqs = [
    {
      question: "What is Pincode Pillars?",
      answer: "Pincode Pillars is a real estate platform offering hyperlocal property services through trained local consultants.",
    },
    {
      question: "How does the Pincode Consultant model work?",
      answer: "Each pincode is managed by a dedicated, trained local consultant — called a Pincode Entrepreneur — who handles all property-related services in that specific area. This ensures hyperlocal expertise and faster, more reliable service.",
    },
    {
      question: "Can I buy or rent a property through Pincode Pillars?",
      answer: "Yes, Pincode Pillars offers both buying and renting options across multiple property types.",
    },
    {
      question: "Are the property listings on your site verified?",
      answer: "Yes, all listings go through a verification process to ensure authenticity and accuracy.",
    },
    {
      question: "What types of properties do you deal with?",
      answer: "We deal with residential, commercial, and rental properties including plots, villas, apartments, and offices.",
    },
    {
      question: "What support do I get from Pincode Pillars?",
      answer: "Our consultants assist you through the entire property journey — from search to legal, documentation, and handover.",
    },
    {
      question: "Can I sell my property through Pincode Pillars?",
      answer: "Absolutely. You can list and sell your property through our local consultants.",
    },
    {
      question: "Do you provide legal and finance assistance?",
      answer: "Yes, we provide legal verification, documentation support, and finance assistance through partner banks.",
    },
    {
      question: "Is Pincode Pillars available only in Chennai?",
      answer: "Currently, we are focused on Chennai, but expansion plans are underway.",
    },
    {
      question: "How can I get in touch with a local consultant?",
      answer: "You can contact a consultant via our website by selecting your pincode or contacting our support team.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFAQs = faqs.slice(0, 5);
  const rightFAQs = faqs.slice(5);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 ml-20">
        <h2 className="text-3xl font-bold  text-blue-950 mb-6 mr-10">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[leftFAQs, rightFAQs].map((faqGroup, colIndex) => (
            <div key={colIndex}>
              {faqGroup.map((faq, index) => {
                const realIndex = colIndex * 5 + index;
                return (
                  <div key={realIndex} className="border-0 shadow rounded-2xl  py-5 p-3">
                    <button
                      className="flex justify-between items-center w-full text-left font-semibold text-lg"
                      onClick={() => toggleFAQ(realIndex)}
                    >
                      {faq.question}
                      {openIndex === realIndex ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </button>
                    {openIndex === realIndex && (
                      <p className="mt-2 text-gray-700">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
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
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <CiLinkedin size={24} />
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 py-3 border-t border-gray-700">
          © 2025 Pincode Pillars. All rights reserved.
        </div>
      </footer>

    </>
  );
};

export default HomeDetiles5;
