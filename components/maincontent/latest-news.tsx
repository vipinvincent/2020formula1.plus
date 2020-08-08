import React from 'react'

import F1 from 'components/contentblock/f1'
// import BBC from 'components/contentblock/bbc'
import MotorSport from 'components/contentblock/motorsport'
// import SkySports from 'components/contentblock/skysports'
// import TheRace from 'components/contentblock/therace'
// import PlanetF1 from 'components/contentblock/planetf1'
// import GrandPrix from 'components/contentblock/grandprix'
// import ESPN from 'components/contentblock/espn'
import AutoSport from 'components/contentblock/autosport'

// import Report from 'components/contentblock/report'
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
      {/* <div className='w-100 my-4'>
        <Report />
      </div> */}
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4'>
          <SecondContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4'>
          <ThirdContent />
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-4 mb-1 px-2'>
        Featured news on F1 news Sources
      </div>
      <div className='rounded-tl-xxl rounded-br-xxl'>
        <div className='w-100 mb-4'>
          <F1 />
        </div>
        <div className='w-100 flex flex-col xl:flex-row'>
          <div className='w-100 xl:w-1/2 mr-0 xl:mr-2'>
            <MotorSport />
          </div>
          <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4 xl:mt-0'>
            <AutoSport />
          </div>
        </div>
        {/* <div className='w-100 mt-4'>
          <ESPN />
        </div> */}
      </div>
    </div>
  )
}
export default Main
