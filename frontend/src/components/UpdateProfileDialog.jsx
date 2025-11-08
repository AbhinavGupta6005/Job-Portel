import React, { useState } from 'react'
import { DialogHeader, Dialog, DialogContent, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'

const UpdateProfileDialog = (open, setOpen) => {

    const[loading, setLoading] = useState(false);
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlfor="name" className="text-right">Name</Label>
                                <input type="text" id='name' name= "name" className='col-span-3' placeholder='Enter name' />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlfor="email" className="text-right">Email</Label>
                                <input type="email" name="email" id='email' className='col-span-3' placeholder='email' />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlfor="number" className="text-right">Number</Label>
                                <input type="text" id='number' name="number" className='col-span-3' placeholder='+91 ' />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlfor="bio" className="text-right">Bio</Label>
                                <input type="text" id='bio' name="bio" className='col-span-3' placeholder='bio' />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlfor="skills" className="text-right">Skills</Label>
                                <input type="text" id='skills' name="skills" className='col-span-3' placeholder='skills' />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlfor="file" className="text-right">Resume</Label>
                                <input type="file" id='file' name="file" className='col-span-3' placeholder='skills' accept='application/pdf' />
                            </div>
                        </div>
                    </form>
                    
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog