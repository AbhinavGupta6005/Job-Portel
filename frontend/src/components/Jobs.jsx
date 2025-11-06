import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'


const jobArray = [1, 2, 3, 4, 5, 6, 7, 8]

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                {/* Filter card */}
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {/* JobsCard */}
                    {
                        jobArray.map((item, index) => <Job />)
                    }
                </div>
            </div>

        </div>
    )
}

export default Jobs