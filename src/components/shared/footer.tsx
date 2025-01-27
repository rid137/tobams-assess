import React from 'react'
import { InstagramIcon, LinkedInIcon, LogoIcon, MailIcon, PhoneIcon, TwitterIcon } from '../../../public/icons'

const Footer = () => {
    return (
        <footer className='container py-10 bg-[#11040E]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-10">
                <div>
                    <LogoIcon className="w-28 h-10 mb-4" />
                    <p className="text-sm text-[#F8F8F8] mb-4">Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
                    <div className="flex items-center gap-4">
                        <LinkedInIcon className="size-6 cursor-pointer hover:scale-95 transition-all" />
                        <InstagramIcon className="size-6 cursor-pointer hover:scale-95 transition-all" />
                        <TwitterIcon className="size-6 cursor-pointer hover:scale-95 transition-all" />
                    </div>
                </div>

                <div>
                    <p className="text-[#F8F8F8] font-semibold mb-6 text-sm">What We Do</p>
                    <ul className="text-sm text-white flex flex-col gap-3">
                        <li className="cursor-pointer hover:opacity-70 w-fit">Sustainability Services</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Strategy Planning and Implementation</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Tech Talent Solutions</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Training and Development</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">IT Consulting Services</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Social Impact</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Talent Recruitment</li>
                    </ul>
                </div>

                <div>
                    <p className="text-[#F8F8F8] font-semibold mb-6 text-sm">Company</p>
                    <ul className="text-sm text-white flex flex-col gap-3">
                        <li className="cursor-pointer hover:opacity-70 w-fit">About</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Jobs</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Projects</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Our Founder</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Business Model</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">The Team</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Contact Us</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Blog</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">FAQs</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Testimonials</li>
                    </ul>
                </div>

                <div>
                    <p className="text-[#F8F8F8] font-semibold mb-6 text-sm">Solution</p>
                    <ul className="text-sm text-white flex flex-col gap-3">
                        <li className="cursor-pointer hover:opacity-70 w-fit">Tobams Group Academy</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Help a Tech Talent</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Campus Ambassadors Program</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Join Our Platform</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Pricing</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Book a Consultation</li>
                        <li className="cursor-pointer hover:opacity-70 w-fit">Join Our Slack Community</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white/5 p-6 rounded-md flex items-start gap-16 mb-10">
                <div className="flex flex-col w-1/3">
                    <p className="text-sm font-semibold text-white mb-2">Registered Offices</p>
                    <p className="text-sm text-danger">United Kingdom</p>
                    <p className="text-sm text-white">07451196 (Registered by Company House)Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
                </div>
        
                <div className="flex flex-col w-1/3 text-sm">
                    <p className="text-sm font-semibold text-white mb-2 invisible">Title</p>
                    <p className="text-danger">Nigeria</p>
                    <p className='text-white'>RC 1048722 (Registered by the Corporate Affairs Commission)4, Muaz Close, Angwar-Rimi</p>
                </div>

                <div className="flex flex-col w-1/3 text-white">
                    <p className="text-sm font-semibold mb-2">Contact Information</p>
                    <div className="flex items-center gap-2 mb-1">
                        <MailIcon />
                        <p className="text-sm">theteam@tobamsgroup.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneIcon />
                        <p className="text-sm">+447886600748</p>
                    </div>
                </div>
            </div>

            <div className="text-sm text-white border-t-[.5px] border-gray-500 flex items-center justify-between py-6">
                <p className="">Copyright © 2021 Tobams Group. All rights reserved</p>
                <div className="flex items-center gap-6">
                    <p className="cursor-pointer hover:opacity-70 underline">Terms and Conditions</p>
                    <p className="cursor-pointer hover:opacity-70 underline">Privacy Policy</p>
                    <p className="cursor-pointer hover:opacity-70 underline">Cookies Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
