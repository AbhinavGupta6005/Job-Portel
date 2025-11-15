import React from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from '../ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
// import { Table } from 'lucide-react';

const CompaniesTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage className='rounded-full w-10 h-10 object-cover' src="https://plus.unsplash.com/premium_photo-1669075651606-4e05fb681ec1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" />
                        </Avatar>
                    </TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>10-12-2025</TableCell>
                    <TableCell className="text-right cursor-pointer">
                        <Popover>
                            <PopoverTrigger><MoreHorizontal className='cursor-pointer'/></PopoverTrigger>
                            <PopoverContent className="w-32">
                                <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                    <Edit2/>
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>

                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable;