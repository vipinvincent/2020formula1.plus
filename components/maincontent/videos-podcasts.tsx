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
        Latest Videos and Podcasts from Youtube
      </div>
      <div className='w-100 flex flex-col md:flex-row'>
        <div className='w-100 lg:w-1/2 xl:w-2/3 mr-0 md:mr-2'>
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
        <div className='w-100 lg:w-1/2 xl:w-1/3 ml-0 md:ml-2'>
          <div className='w-100  mt-4 md:mt-0'>
            <FirstPodcast />
          </div>
          <div className='w-100 mt-4'>
            <SecondPodcast />
          </div>
          <div className='w-100 mt-4'>
            <ThirdPodcast />
          </div>
          <div className='w-100 mt-4'>
            <FourthPodcast />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
