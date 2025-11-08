import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from "./ui/badge"
import { Label } from '@radix-ui/react-label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'

const skills = ["Html", "CSS", "JavaScript", "React", "NodeJS", "ExpressJS", "MongoDB"]
const isResume = true;

const Profile = () => {
  const[open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-6'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://plus.unsplash.com/premium_photo-1669075651606-4e05fb681ec1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="profileImg" />
            </Avatar>
            <div>
              <h1 className='font-md text-xl'>Full Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum nobis?</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
        </div>

        <div className='my-5'>
          <div className='flex items-center gap-4 my-2'>
            <Mail />
            <span>jobportel@gmail.com</span>
          </div>

          <div className='flex items-center gap-4 my-2'>
            <Contact />
            <span>+91 1234567890</span>
          </div>
        </div>

        <div className='my-5'>
          <h1 className='my-3 text-md font-bold'>Skills</h1>
          <div className='flex items-center gap-1'>
            {
              skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>N/A</span>
            }
          </div>
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='text-md font-bold'>Resume</Label>
          {
            isResume ? <a target='blank' href='https://google.com/' className='text-blue-500 w-full hover:underline cursor-pointer'>Google</a> : <span>N/A</span>
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
        <h1 className='text-purple-700 text-medium font-bold'>Applied Jobs</h1>
        {/* {Applied Job Table} */}
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile