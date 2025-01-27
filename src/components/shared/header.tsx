import React from 'react'
import { ArrowDownLightIcon, ArrowDownPrimaryIcon, LogoIcon, UserIcon } from '../../../public/icons'
import CustomButton from '../ui/customButton'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="container">
            <div className='py-4 flex items-center justify-between '>
                <Link href="/"><LogoIcon className="w-28 h-10"/></Link>
                <div className="flex items-center gap-4">
                    <CustomButton className='flex items-center gap-2 bg-primary hover:bg-primary/80 px-2 py-[.4rem]'>
                        <UserIcon className="w-6 h-6"/>
                        <p className='text-white'>Account</p>
                        <ArrowDownLightIcon className="w-2 h-2"/>
                    </CustomButton>
                    <CustomButton className='bg-danger hover:bg-danger/80 text-white px-2 py-[.4rem]'>Take Assessment</CustomButton>
                </div>
            </div>
            <div className="py-4 border-t border-[#DDD0DA] flex items-center justify-center gap-8">
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>About</p>
                    <ArrowDownPrimaryIcon className="size-3" />
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>What We Do</p>
                    <ArrowDownPrimaryIcon className="size-3" />
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>Jobs</p>
                    <ArrowDownPrimaryIcon className="size-3" />
                </div>
                <div className="hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>Projects</p>
                </div>
                <div className="hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>TG Academy</p>
                </div>
                <div className="hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>Strategic Partnership</p>
                </div>
                <div className="hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>Pricing</p>
                </div>
                <div className="hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                    <p>Book a Consultation</p>
                </div>
            </div>
        </header>
    )
}

export default Header
