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
import Archive58 from 'components/newsarchives/race-report-eifel-gp'
import Archive57 from 'components/newsarchives/qualifying-report-eifel-gp'
import Archive56 from 'components/newsarchives/fp3-report-eifel-gp'
import Archive55 from 'components/newsarchives/fp1-fp2-report-eifel-gp'
import Archive54 from 'components/newsarchives/driver-market-at-mid-2020'

import Archive53 from 'components/newsarchives/race-report-russian-gp'
// import Archive52 from 'components/newsarchives/qualifying-report-russian-gp'
// import Archive51 from 'components/newsarchives/fp3-report-russian-gp'

import MainContent from 'components/contentblock/main'
// import FirstContent from 'components/contentblock/first'
// import SecondContent from 'components/contentblock/left'
// import ThirdContent from 'components/contentblock/right'
import FifthContent from 'components/contentblock/left-old'
import SixthContent from 'components/contentblock/right-old'
// import FourthContent from 'components/contentblock/fourth'
import Qualifying from 'components/qualifying/quick-look'
import Race from 'components/race/quick-look'

import ButtonLink from 'components/link/ButtonLink'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* <div className='w-100 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
        <QualifyingReport />
      </div> */}

      <div className='w-100 mb-0 mt-0'>
        <Qualifying />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Latest News
      </div>
      <div className='w-100 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
        <MainContent />
      </div>
      {/* <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
          <SecondContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4 xl:mt-0'>
          <ThirdContent />
        </div>
      </div> */}
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
          <FifthContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
          <SixthContent />
        </div>
      </div>
      <div className='w-100 mb-0 mt-4'>
        <Race />
      </div>
      <div className='w-100 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
        <Archive58 />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
          <Archive57 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4 xl:mt-0'>
          <Archive56 />
        </div>
      </div>
      {/* <div className='w-100 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
        <FourthContent />
      </div> */}
      <div className='w-100 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <Archive55 />
      </div>
      <div className='w-100 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <Archive54 />
      </div>
      <div className='w-100 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <Archive53 />
      </div>
      {/* <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
          <Archive52 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
          <Archive51 />
        </div>
      </div> */}
      <div className='w-100 flex flex-col md:self-center'>
        <ButtonLink href='/news' target='_self'>
          More News...
        </ButtonLink>
      </div>
      {/* <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-4 mb-1 px-2'>
        Featured news on F1 news Sources
      </div>
      <div className='rounded-tl-xxl rounded-br-xxl'>
        <div className='w-100 mb-4 bg-white-70 rounded-tl-xxl rounded-br-xxl shadow'>
          <F1 />
        </div>
        <div className='w-100 flex flex-col xl:flex-row'>
          <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-70 rounded-tl-xxl rounded-br-xxl shadow'>
            <MotorSport />
          </div>
          <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 mt-4 xl:mt-0 bg-white-70 rounded-tl-xxl rounded-br-xxl shadow'>
            <AutoSport />
          </div>
        </div>
        <div className='w-100 mt-4  bg-white-70 rounded-tl-xxl rounded-br-xxl shadow'>
          <PlanetF1 />
        </div>
      </div> */}
    </div>
  )
}
export default Main
