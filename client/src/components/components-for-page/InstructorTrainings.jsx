import React from 'react'
import trainer1thumbnail from '/trainer1thumbnail.png'
import trainer2thumbnail from '/trainer2thumbnail.png'
import trainer3thumbnail from '/trainer3thumbnail.png'
import trainer1image from '/trainer1image.png'
import otherTrainerImage from '/otherTrainers.png'

const InstructorTrainings = () => {
  const trainingDetails = [
    {
      id:1,
      image: trainer1thumbnail,
      title:'ChatGPT with OpenAI',
      trainerName:'Ania Kubow',
      trainerImage:trainer1image,
      trainerTitle:'Trainer',
      otherTrainerImage:otherTrainerImage,
      othersCount:'+21'
    },
    {
      id:2,
      image: trainer2thumbnail,
      title:'ChatGPT with OpenAI',
      trainerName:'Ania Kubow',
      trainerImage:trainer1image,
      trainerTitle:'Trainer',
      otherTrainerImage:otherTrainerImage,
      othersCount:'+21'
    },
    {
      id:3,
      image: trainer3thumbnail,
      title:'ChatGPT with OpenAI',
      trainerName:'Ania Kubow',
      trainerImage:trainer1image,
      trainerTitle:'Trainer',
      otherTrainerImage:otherTrainerImage,
      othersCount:'+21'
    },
    {
      id:4,
      image: trainer1thumbnail,
      title:'ChatGPT with OpenAI',
      trainerName:'Ania Kubow',
      trainerImage:trainer1image,
      trainerTitle:'Trainer',
      otherTrainerImage:otherTrainerImage,
      othersCount:'+21'
    },{
      id:5,
      image: trainer1thumbnail,
      title:'ChatGPT with OpenAI',
      trainerName:'Ania Kubow',
      trainerImage:trainer1image,
      trainerTitle:'Trainer',
      otherTrainerImage:otherTrainerImage,
      othersCount:'+21'
    },
    
  ]
  return (
    <>
    {trainingDetails.map((detail)=>(
      <div key={detail.id} className='flex flex-col  p-2  rounded-[10px] border-grey-900 border w-[170px]'>
      <div>
        <img src={detail.image} alt='thumbnail'className='w-[155px]'/>
      </div>
      <h1 className='text-[14px] font-semibold'>{detail.title}</h1>
      <hr className='border-black'/>
      <div className='flex gap-3 mt-2'>
        <div>
          <img src={detail.trainerImage} alt="" />
        </div>
        <div>
          <p className='mb-[-3px] tracking-tight font-semibold text-[16px]'>{detail.trainerName}</p>
          <p className='text-[14px]'>{detail.trainerTitle}</p>
        </div>
      </div>
      <div className='flex gap-2 pt-[11px]'>
        <img src={detail.otherTrainerImage} alt="" className='w-[60px] h-[30px] rounded-full'/>
        <p className='text-[14px]'>{detail.othersCount} others</p>
      </div>
     
    </div>
    ))}</>
  )
}

export default InstructorTrainings
