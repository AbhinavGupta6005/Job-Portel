import React from 'react'
import LatestJobsCards from './LatestJobsCards';
import { useSelector } from 'react-redux';


const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];


const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job);
  // console.log(allJobs);
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'>Latest & Top <span className='text-[#6a38C2]'>Job Openings</span></h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
        {
          allJobs.length <= 0 ? <span>No jobs Available</span> : allJobs?.slice(0, 6).map((job) => <LatestJobsCards key={job._id} job={job} />)
        }
      </div>

    </div>
  )
}

export default LatestJobs