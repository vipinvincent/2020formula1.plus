import React from 'react'

import FirstVideo from 'components/videoblock/first'
import SecondVideo from 'components/videoblock/second'
import ThirdVideo from 'components/videoblock/third'

import FirstPodcast from 'components/podcastblock/first'
import SecondPodcast from 'components/podcastblock/second'
import ThirdPodcast from 'components/podcastblock/third'
import FourthPodcast from 'components/podcastblock/fourth'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-4 mb-1 px-2'>
        Latest Videos from Youtube
      </div>
      <div className='w-full flex flex-col'>
        <div className='w-full mr-0'>
          <div className='w-full mt-0'>
            <FirstVideo />
          </div>
          <div className='w-full mt-4'>
            <SecondVideo />
          </div>
          <div className='w-full mt-4'>
            <ThirdVideo />
          </div>
        </div>
        <div className='w-full text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-4 mb-1 px-2'>
          Latest Podcasts from Youtube
        </div>
        <div className='w-full flex flex-wrap'>
          <div className='w-full mt-4 md:mt-0 md:pl-4'>
            <FirstPodcast />
          </div>
          <div className='w-full mt-4 sm:pl-4'>
            <SecondPodcast />
          </div>
          <div className='w-full mt-4 md:pl-4'>
            <ThirdPodcast />
          </div>
          <div className='w-full mt-4 sm:pl-4'>
            <FourthPodcast />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
