import React, { useState } from 'react'
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogFooter, } from './ui/dialog'
import { Label } from './ui/label'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.bio,
        // use a comma-separated string for the skills input to keep the text input controlled
        skills: user?.profile?.skills ? user.profile.skills.join(', ') : '',
        file: user?.profile?.resume
    });

    const dispatch = useDispatch()

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("fullname", input.fullname || "");
        formData.append("email", input.email || "");
        formData.append("phoneNumber", input.phoneNumber || "");
        formData.append("bio", input.bio || "");

        // Handle skills: convert comma-separated string into array and send as JSON
        if (Array.isArray(input.skills)) {
            formData.append("skills", JSON.stringify(input.skills));
        } else if (typeof input.skills === 'string') {
            const skillsArr = input.skills.split(',').map(s => s.trim()).filter(Boolean);
            formData.append('skills', JSON.stringify(skillsArr));
        }

        // Only append resume if user selected a File object
        if (input.file && input.file instanceof File) {
            formData.append("file", input.file);
        }

        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res?.data?.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message || 'Profile updated');
                setOpen(false)
            } else {
                toast.error(res?.data?.message || 'Update failed');
            }
        } catch (error) {
            console.error('Profile update error', error);
            const msg = error?.response?.data?.message || error?.message || 'Something went wrong';
            toast.error(msg);
        } finally {
            setLoading(false);
        }
        console.log(input)
    }

    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4 '>
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <input
                                    type="text"
                                    id='name'
                                    name="fullname"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className='col-span-3 border border-[#6A38C2] rounded'
                                    placeholder='Enter name' />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <input
                                    type="email"
                                    name="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    id='email' className='col-span-3 border border-[#6A38C2] rounded'
                                    placeholder='email' />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number" className="text-right">Number</Label>
                                <input
                                    type="text"
                                    id='number'
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    name="phoneNumber"
                                    className='col-span-3 border border-[#6A38C2] rounded'
                                    placeholder='+91 ' />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className="text-right">Bio</Label>
                                <input
                                    type="text"
                                    id='bio'
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    name="bio"
                                    className='col-span-3 border border-[#6A38C2] rounded'
                                    placeholder='bio' />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className="text-right">Skills</Label>
                                <input
                                    type="text"
                                    id='skills'
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    name="skills"
                                    className='col-span-3 border border-[#6A38C2] rounded'
                                    placeholder='skills' />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className="text-right">Resume</Label>
                                <input
                                    type="file"
                                    id='file'
                                    name="file"
                                    onChange={fileChangeHandler}
                                    className='col-span-3 border border-[#6A38C2] rounded '
                                    accept='application/pdf' />
                            </div>

                        </div>
                        <DialogFooter>
                            {
                                loading ? <Button type="button" disabled className="w-full my-4 bg-[#6A38C2] hover:bg-[#5b30a6] cursor-not-allowed"><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</Button> : <Button type="submit" className="w-full my-4 bg-[#6A38C2] hover:bg-[#5b30a6] cursor-pointer">Update Profile</Button>
                            }
                        </DialogFooter>
                    </form>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog