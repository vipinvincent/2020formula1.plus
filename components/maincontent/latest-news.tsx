import React from 'react'

// import F1 from 'components/contentblock/f1'
// import BBC from 'components/contentblock/bbc'
// import MotorSport from 'components/contentblock/motorsport'
// import SkySports from 'components/contentblock/skysports'
// import TheRace from 'components/contentblock/therace'
// import PlanetF1 from 'components/contentblock/planetf1'
// import FormulaSpy from 'components/contentblock/formulaspy'
// import GrandPrix from 'components/contentblock/grandprix'
// import ESPN from 'components/contentblock/espn'
// import AutoSport from 'components/contentblock/autosport'

// import RaceReport from 'components/contentblock/race-report'
// import QualifyingReport from 'components/contentblock/qualifying-report'

// import MainContent from 'components/contentblock/main'
// import FirstContent from 'components/contentblock/first'
// import SecondContent from 'components/contentblock/left'
// import ThirdContent from 'components/contentblock/right'
import FifthContent from 'components/contentblock/left-old'
import SixthContent from 'components/contentblock/right-old'
// import FourthContent from 'components/contentblock/fourth'
import Qualifying from 'components/qualifying/quick-look'
import Race from 'components/race/quick-look'

import Archive71 from 'components/newsarchives/race-report-turkish-gp'
import Archive70 from 'components/newsarchives/qualifying-report-turkish-gp'
import Archive69 from 'components/newsarchives/fp3-report-turkish-gp'
import Archive68 from 'components/newsarchives/fp1-report-turkish-gp'
import Archive67 from 'components/newsarchives/fp2-report-turkish-gp'

import Archive66 from 'components/newsarchives/race-report-emilia-romagna-gp'
import Archive65 from 'components/newsarchives/qualifying-report-emilia-romagna-gp'
import Archive64 from 'components/newsarchives/fp-report-emilia-romagna-gp'
import Archive63 from 'components/newsarchives/race-report-portuguese-gp'
import Archive62 from 'components/newsarchives/qualifying-report-portuguese-gp'
import Archive61 from 'components/newsarchives/fp3-report-portuguese-gp'
// import Archive60 from 'components/newsarchives/fp2-report-portuguese-gp'
// import Archive59 from 'components/newsarchives/fp1-report-portuguese-gp'

import ButtonLink from 'components/link/ButtonLink'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Latest News
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-0'>
          <FifthContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4 xl:mt-0'>
          <SixthContent />
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-4'>
        ROUND 14 - Turkish GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive71 />
      </div>
      <div className='w-100 mb-0 mt-4'>
        <Race />
      </div>
      <div className='w-100 mb-0 mt-0'>
        <Qualifying />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-0'>
          <Archive70 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4 xl:mt-0'>
          <Archive69 />
        </div>
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-4'>
          <Archive68 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4'>
          <Archive67 />
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-4'>
        ROUND 13 - EMILIA ROMAGNA GP 2020
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive66 />
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-4'>
        <Archive65 />
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-4'>
        <Archive64 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-4'>
        ROUND 12 - PORTUGUESE GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive63 />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 mt-4 bg-white-100 rounded-md '>
          <Archive62 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4 bg-white-100 rounded-md '>
          <Archive61 />
        </div>
      </div>
      <div className='w-100 flex flex-col md:self-center'>
        <ButtonLink href='/news' target='_self'>
          More News...
        </ButtonLink>
      </div>
      {/* <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-4 mb-1 px-2'>
        Featured news on F1 news Sources
      </div>
      <div className='rounded-md'>
        <div className='w-100 mb-4 bg-white-70 rounded-md '>
          <F1 />
        </div>
        <div className='w-100 flex flex-col xl:flex-row'>
          <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-70 rounded-md '>
            <MotorSport />
          </div>
          <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4 xl:mt-0 bg-white-70 rounded-md '>
            <AutoSport />
          </div>
        </div>
        <div className='w-100 mt-4  bg-white-70 rounded-md '>
          <PlanetF1 />
        </div>
      </div> */}
    </div>
  )
}
export default Main
