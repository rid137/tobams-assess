import React from 'react';
import CustomButton from '../ui/customButton';

const Subscribe = () => {
    return (
        <section className='container pb-12 bg-gray-1'>
            <div className="bg-[#E9E2E7] rounded-md p-8">
                <h4 className="text-dark text-lg font-semibold mb-2">Sign Up for Our Newsletter</h4>
                <p className="text-sm mb-4">Subscribe to receive our latest company updates</p>

                <div className="flex items-center justify-center gap-4 w-full">
                    <input 
                        type="text" 
                        placeholder='Enter your email address'
                        className="flex-1 outline-none text-sm border-2 border-gray-2 bg-transparent px-3 py-2 rounded-sm" 
                    />
                    <CustomButton className='bg-primary hover:bg-primary/80 text-white px-3 py-2'>Subscribe</CustomButton>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
