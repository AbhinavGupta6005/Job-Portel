import React from 'react'
import Navbar from './shared/Navbar'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDiscription = () => {

    const isApplied = false;

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    {/* <Navbar /> */}
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-[#6a38C2] font-bold'} variant="ghost">12 Positions</Badge>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">Part Time</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant="ghost">12LPA</Badge>
                    </div>
                </div>
                <Button className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#6a38C2] hover:bg-[#5b30a6] cursor-pointer'}`}>{ isApplied ? 'Already Applied' : 'Apply now' }</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'> Noida</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>0 - 2 years</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>12LPA</span></h1>
                <h1 className='font-bold my-1'>Total Allicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>07-11-2025</span></h1>
            </div>
        </div>
    )
}

export default JobDiscription