import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import React from 'react'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Chanai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "Data Science"]
  },
  {
    filterType: "Salry",
    array: ["0-40k", "40k-1lakh", "1 lakh to 5 lakh", "5 lakh to 10 lakh"]
  }
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3' />
        <RadioGroup>
          {
            filterData.map((data, index) => (
              <div>
                <h1 className='font-bold text-lg'>{data.filterType}</h1>
                {
                  data.array.map((item, index)=> {
                    return (
                      <div className='flex items-center  space-x-2 my-2 cursor-pointer'>
                        <RadioGroupItem value={item}/>
                        <Label>{item}</Label>
                      </div>
                    )
                  })
                }
              </div>
            ))
          }
        </RadioGroup>
    </div>
  )
}

export default FilterCard