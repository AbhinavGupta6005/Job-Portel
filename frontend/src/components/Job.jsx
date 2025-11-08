import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from "./ui/badge"
import { useNavigate } from 'react-router-dom'

const Job = () => {

  const navigate = useNavigate();
  const jobId = "jhfierfefwebcfjihuci";

  return (
    <div className='p-5 rounded-md shadow-xl bg-blue border-gray-100'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant="outline" className="rounded-full cursor-pointer" size="icon"><Bookmark /></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6 cursor-pointer" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://plus.unsplash.com/premium_photo-1669075651606-4e05fb681ec1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-md text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex iure harum, consectetur at nisi fugit sed. Aspernatur, est placeat.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-[#6a38C2] font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">12LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button className="bg-gray-300 hover:bg-gray-400 text-black cursor-pointer" onClick={()=> navigate(`/description/${jobId}`)}>Details</Button>
        <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] cursor-pointer">Save For Later</Button>
      </div>
    </div>
  )
}

export default Job