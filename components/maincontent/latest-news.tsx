import React from 'react'

import MotorSport from 'components/contentblock/motorsport'
import F1 from 'components/contentblock/f1'
import TheRace from 'components/contentblock/therace'

import FirstContent from 'components/contentblock/main'
import SecondContent from 'components/contentblock/left'
import ThirdContent from 'components/contentblock/right'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Latest News
      </div>
      <div className='w-100'>
        <FirstContent />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4'>
          <SecondContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4'>
          <ThirdContent />
        </div>
      </div>
      <div className='bg-white-50 mt-4 rounded-tl-xxl rounded-br-xxl px-2 pb-4'>
        <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-4 mb-1'>
          Featured news on F1 news Sources
        </div>
        <div className='w-100 flex flex-col xl:flex-row'>
          <div className='w-100 xl:w-1/2 mr-0 xl:mr-2'>
            <MotorSport />
          </div>
          <div className='w-100 xl:w-1/2 ml-0 xl:ml-2'>
            <TheRace />
          </div>
        </div>
        <div className='w-100 mt-4'>
          <F1 />
        </div>
      </div>
    </div>
  )
}
export default Main
