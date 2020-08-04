import React from 'react'

import Report from 'components/contentblock/report'
import FirstContent from 'components/contentblock/main'
import SecondContent from 'components/contentblock/left'
import ThirdContent from 'components/contentblock/right'

import Archive11 from 'components/newsarchives/team-performance-after-3-races'
import Archive10 from 'components/newsarchives/ferrari-restructured'
import Archive9 from 'components/newsarchives/impact-of-triple-header-races'
import Archive8 from 'components/newsarchives/race-report-hungarian-gp'
import Archive7 from 'components/newsarchives/qualifying-report-hungarian-gp'
import Archive6 from 'components/newsarchives/fp3-report-hungarian-gp'
import Archive5 from 'components/newsarchives/fp2-report-hungarian-gp'
import Archive4 from 'components/newsarchives/fp1-report-hungarian-gp'
import Archive3 from 'components/newsarchives/redbull-expects-competitive-for-hungarian-gp'
import Archive2 from 'components/newsarchives/vettel-perez-about-2021-astonmartin-seat'
import Archive1 from 'components/newsarchives/team-on-teammates-battles'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Latest News
      </div>
      <div className='w-100'>
        <FirstContent />
      </div>
      <div className='w-100 mt-4'>
        <Report />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4'>
          <SecondContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4'>
          <ThirdContent />
        </div>
      </div> */}
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-2 mb-1 px-2 '>
        Archived News
      </div>
      <div className='w-100'>
        <Archive11 />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4'>
          <Archive10 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4'>
          <Archive9 />
        </div>
      </div>
      <div className='w-100 mt-4'>
        <Archive8 />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4'>
          <Archive7 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4'>
          <Archive6 />
        </div>
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4'>
          <Archive5 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4'>
          <Archive4 />
        </div>
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4'>
          <Archive3 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4'>
          <Archive2 />
        </div>
      </div>
      <div className='w-100 mt-4'>
        <Archive1 />
      </div>
    </div>
  )
}
export default Main
