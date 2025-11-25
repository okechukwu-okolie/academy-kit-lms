import { UserCircle2 } from 'lucide-react'
import React from 'react'

const OverviewTabs = ({overviewDetails}) => {
  return <>
  {overviewDetails.map((detail) => (
    <div key={detail.id} className='flex flex-col justify-center items-center gap-2 border border-grey-300 p-4 w-[165px] h-[110px] rounded-2xl'>
      <div className='flex gap-2'>
        {detail.icon}
        <p>{detail.title}</p>
      </div>
      <p className='flex gap-3'><span>{detail.count}</span><span>{detail.groupName}</span></p>
    </div>
  ))}
  </>
}

export default OverviewTabs
