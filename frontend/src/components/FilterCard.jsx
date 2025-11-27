import { useDispatch } from 'react-redux'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import React, { useEffect, useState } from 'react'
import { setSearchedQuery } from '@/redux/jobSlice'

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
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue))
  },[selectedValue])
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3' />
        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
          {
            filterData.map((data, index) => (
              <div>
                <h1 className='font-bold text-lg'>{data.filterType}</h1>
                {
                  data.array.map((item, idx)=> {
                    const itemId = `${index}-${idx}`
                    return (
                      <div className='flex items-center  space-x-2 my-2 cursor-pointer'>
                        <RadioGroupItem value={item}/>
                        <Label htmlFor={itemId}>{item}</Label>
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

export default FilterCard;