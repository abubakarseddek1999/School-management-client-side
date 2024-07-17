import React from 'react';
import banner from "../../assets/image/AboutPage/About-banner.png"
const Contact = () => {
    return (
        <div className='pt-20'>

            {/* Banner */}
            <div className="relative h-[600px] lg:h-[700px] ">
                <img
                    src={banner} // replace with the actual image URL
                    alt="Classroom"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-3xl text-white font-bold">Contact Us</h1>
                </div>
            </div>

            {/* form section */}
            <div className="bg-white  ">

                <div>
                    <div className="bg-white p-5">
                        <div className="max-w-[1400px] mx-auto">

                            <div className=" mt-8">
                                <h2 className="text-center text-xl font-semibold mb-4">
                                    Call us at <a href="tel:7184023300" className="text-blue-500">+8801728-306504</a> or fill out the form below.
                                </h2>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-4 ">Name:</label>
                                        <input
                                            type="text"
                                            className="w-full h-14 px-3 py-2 border border-gray-300 rounded-md"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-4">Email:</label>
                                        <input
                                            type="email"
                                            className="w-full h-14 px-3 py-2 border border-gray-300 rounded-md"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-4">Phone:</label>
                                        <input
                                            type="tel"
                                            className="w-full h-14 px-3 py-2 border border-gray-300 rounded-md"
                                            placeholder="Your Phone"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-4">Comments / Questions:</label>
                                        <textarea
                                            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md"
                                            placeholder="Your Comments or Questions"
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <div className="g-recaptcha" data-sitekey="your-site-key"></div>
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* location section */}
            <div className='bg-[#ced1d7] px-5 pt-10'>
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-center">
                    <div className='md:w-1/2'>
                        <h1 className="text-xl md:text-2xl font-bold mb-4">Getting Here</h1>
                        <p className="mb-4">
                            There are many ways to get to The Bronx Charter School for Children, which is located in the Mott Haven neighborhood of the South Bronx. Our elementary school (grades K-5) is located at 388 Willis Avenue (at the corner of 144th Street). Our middle school (grades 6-7) is located at 423 East 138th Street.
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Student Transportation Options</h2>
                        <p className="mb-4">
                            New families receive information in the spring and summer about transportation options, which include student Metrocards or free yellow bus service for those who meet eligibility requirements.
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Public Transportation</h2>
                        <p className="mb-4">
                            For those taking public transportation, The Bronx Charter School is within walking distance of many subway lines, including the 6 (3rd Avenue/138th Street) and the 2/5 (3rd Avenue/149th Street). The Bx15 bus passes directly in front of the elementary school.
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">By Car</h2>
                        <p className="mb-8">
                            The school is also accessible by car off the 3rd Avenue/Willis Avenue Bridge or the East 138th Street/Madison Avenue Bridge. Street parking and parking lots are available in the area.
                        </p>
                    </div>

                    <div className=" md:w-1/2 md:h-100% ">
                        {/* <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9029023130043!2d-73.92584188459352!3d40.81292757932114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5bf43b8b2b5%3A0x64ab7cf19a60ed97!2s388%20Willis%20Ave%2C%20The%20Bronx%2C%20NY%2010454%2C%20USA!5e0!3m2!1sen!2sin!4v1649601199940!5m2!1sen!2sin"
                            className=" inset-0 w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                        */}
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2442.472676913065!2d91.11165369504928!3d23.963737868735652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDU3JzQ5LjUiTiA5McKwMDYnNDUuNSJF!5e1!3m2!1sen!2sbd!4v1721207022417!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;