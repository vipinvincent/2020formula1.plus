import React from 'react'

import FirstVideo from 'components/videoblock/first'
import SecondVideo from 'components/videoblock/second'
import ThirdVideo from 'components/videoblock/third'

import FirstPodcast from 'components/podcastblock/first'
import SecondPodcast from 'components/podcastblock/second'
// import ThirdPodcast from 'components/podcastblock/third'
import FourthPodcast from 'components/podcastblock/fourth'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-4 mb-1 px-2'>
        Latest Videos from Youtube
      </div>
      <div className='w-100 flex flex-col '>
        <div className='w-100 mr-0'>
          <div className='w-100 mt-0'>
            <FirstVideo />
          </div>
          <div className='w-100 mt-4'>
            <SecondVideo />
          </div>
          <div className='w-100 mt-4'>
            <ThirdVideo />
          </div>
        </div>
        <div className='w-100 flex flex-wrap lg:hidden md:w-full xl:w-1/3'>
          <div className='w-full sm:w-1/2 md:w-full mt-4 md:mt-0 md:pl-4'>
            <FirstPodcast />
          </div>
          <div className='w-full sm:w-1/2 md:w-full mt-4 sm:pl-4'>
            <SecondPodcast />
          </div>
          {/* <div className='w-full sm:w-1/2 md:w-full mt-4 md:pl-4'>
            <ThirdPodcast />
          </div> */}
          <div className='w-full sm:w-1/2 md:w-full mt-4 sm:pl-4'>
            <FourthPodcast />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
