import Link from 'next/link';
import { ArrowDownPrimaryIcon, MenuIcon, XIcon } from '../../../public/icons';
import Image from 'next/image';

interface IMobileNavProps {
    isNavOpen: boolean;
    setIsNavOpen: (isNavopen: boolean) => void;
}

const MobileNav = ({isNavOpen, setIsNavOpen}: IMobileNavProps) => {
    const handleNavClick = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <>
            <header className="container md:hidden">
                <div className='py-4 flex items-center justify-between '>
                    <Link href="/"><Image src='/icons/logopng.png' alt='search' width={80} height={100} /></Link>
                    {
                        isNavOpen ?
                        <XIcon className='size-8 cursor-pointer' onClick={handleNavClick}/>
                        :
                        <MenuIcon className='size-8 cursor-pointer' onClick={handleNavClick}/>
                    }
                </div>

                {/* Navbar */}
                <>
                    {
                        isNavOpen &&
                        <nav className="absolute bg-white w-full top-[6vh] left-0 px-5 py-6 z-50 md:hidden flex flex-col gap-4">
                        <div className="w-fit flex items-center gap-2 hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>About</p>
                            <ArrowDownPrimaryIcon className="size-3" />
                        </div>
                        <div className="w-fit flex items-center gap-2 hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>What We Do</p>
                            <ArrowDownPrimaryIcon className="size-3" />
                        </div>
                        <div className="w-fit w-fu flex items-center gap-2 hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>Jobs</p>
                            <ArrowDownPrimaryIcon className="size-3" />
                        </div>
                        <div className="w-fit hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>Projects</p>
                        </div>
                        <div className="w-fit hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>TG Academy</p>
                        </div>
                        <div className="w-fit hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>Strategic Partnership</p>
                        </div>
                        <div className="w-fit hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>Pricing</p>
                        </div>
                        <div className="w-fit hover:text-primary cursor-pointer hover:border-b border-b border-transparent hover:border-primary">
                            <p>Book a Consultation</p>
                        </div>
                    </nav>
                    }
                </>
        </header>
        </>
    )
}

export default MobileNav