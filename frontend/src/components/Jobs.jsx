import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'


// const jobArray = [1, 2, 3, 4, 5, 6, 7, 8]

const Jobs = () => {
    const {allJobs, searchedquery} = useSelector(store => store.job);
    const {filterJobs, setFilterJobs } = useState(allJobs);

    useEffect(()=>{
        if(searchedquery){
            const filterJobs = allJobs.filter((job)=>{
                return job.title.toLowerCase().includes(searchedquery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchedquery.toLowerCase()) ||
                job.location.toLowerCase().includes(searchedquery.toLowerCase()) ||
                job.salary.toLowerCase().includes(searchedquery.toLowerCase())
            });
            setFilterJobs(filterJobs);
        } else {
            setFilterJobs(allJobs);
        }
    },[allJobs, searchedquery])

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
                        allJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[80vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        allJobs.map((job) => (
                                            <div key={job?._id}>
                                                <Job job={job}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Jobs