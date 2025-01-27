import React from 'react'
import { InstagramIcon, LinkedInIcon, LogoIcon, MailIcon, PhoneIcon, TwitterIcon } from '../../../public/icons'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='container py-5 md:py-10 bg-[#11040E]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 mb-10">
                {/* Logo and about */}
                <div>
                    <Link href="/" className="hidden md:block"><LogoIcon className="w-28 h-10 mb-4" /></Link>
                    <Link href="/" className="md:hidden"><Image src='/icons/logopng.png' alt='search' width={100} height={100} /></Link>
                    <p className="text-sm text-[#F8F8F8] mb-4">Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
                    <div className="flex items-center gap-4">
                        <LinkedInIcon className="size-6 cursor-pointer hover:scale-95 transition-all" />
                        <InstagramIcon className="size-6 cursor-pointer hover:scale-95 transition-all" />
                        <TwitterIcon className="size-6 cursor-pointer hover:scale-95 transition-all" />
                    </div>
                </div>

                {/* Links */}
                <div>
                    <p className="text-[#F8F8F8] font-semibold mb-3 md:mb-6 text-sm">What We Do</p>
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
                    <p className="text-[#F8F8F8] font-semibold mb-3 md:mb-6 text-sm">Company</p>
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
                    <p className="text-[#F8F8F8] font-semibold mb-3 md:mb-6 text-sm">Solution</p>
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

            {/* Offices and contact */}
            <div className="bg-white/5 p-6 rounded-md flex flex-col-reverse md:flex-row items-start gap-8 md:gap-16 mb-10">
            <div className='w-full md:w-2/3 md:flex gap-8 md:gap-16'>
                <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-sm font-semibold text-white mb-2">Registered Offices</p>
                    <p className="text-sm text-danger">United Kingdom</p>
                    <p className="text-sm text-white">07451196 (Registered by Company House)Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
                </div>
        
                <div className="flex flex-col w-full md:w-1/2 text-sm">
                    <p className="text-sm font-semibold text-white mb-2 invisible">Title</p>
                    <p className="text-danger">Nigeria</p>
                    <p className='text-white'>RC 1048722 (Registered by the Corporate Affairs Commission)4, Muaz Close, Angwar-Rimi</p>
                </div>
            </div>

                <div className="flex flex-col w-full md:w-1/3 text-white">
                    <p className="text-sm font-semibold mb-2">Contact Information</p>
                    <div className="flex items-center gap-2 mb-1">
                        <MailIcon className="hidden md:block" />
                        <div className="md:hidden">
                            <svg width="12" height="12" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 20.9714C3.45 20.9714 2.979 20.7754 2.587 20.3834C2.195 19.9914 1.99934 19.5208 2 18.9714V6.97144C2 6.42144 2.196 5.95044 2.588 5.55844C2.98 5.16644 3.45067 4.97077 4 4.97144H20C20.55 4.97144 21.021 5.16744 21.413 5.55944C21.805 5.95144 22.0007 6.4221 22 6.97144V18.9714C22 19.5214 21.804 19.9924 21.412 20.3844C21.02 20.7764 20.5493 20.9721 20 20.9714H4ZM12 13.9714L20 8.97144V6.97144L12 11.9714L4 6.97144V8.97144L12 13.9714Z" fill="#EF4353"/>
                            </svg>
                        </div>
                        <p className="text-sm flex-1">theteam@tobamsgroup.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneIcon />
                        <p className="text-sm">+447886600748</p>
                    </div>
                </div>
            </div>

            {/* Copy right */}
            <div className="text-sm text-white border-t-[.5px] border-gray-500 flex flex-col-reverse md:flex-row gap-6 items-center justify-between py-6">
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
