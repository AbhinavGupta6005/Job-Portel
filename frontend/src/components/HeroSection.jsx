import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [Query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(Query));
        navigate("/browse");
    }
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#6A38C2] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-gray-500 font-medium'>Reach your better work, your success start from now, let's find and let's work</p>
                {/* for searching */}
                <div className='flex w-[40%] shadow border border-[#6a38c2] pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input type="text"
                    placeholder='Find your dream jobs'
                    onChange={(e)=> setQuery(e.target.value)}                  
                    variant="outline"
                    className='outline-none border-none w-full' />
                    <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6A38C2] hover:bg-[#5b30a6] cursor-pointer'>
                        <Search className='h-5 w-5'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection