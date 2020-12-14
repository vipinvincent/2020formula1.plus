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

import MainContent from 'components/contentblock/main'
import FirstContent from 'components/contentblock/first'
import SecondContent from 'components/contentblock/left'
import ThirdContent from 'components/contentblock/right'
import FifthContent from 'components/contentblock/left-old'
import SixthContent from 'components/contentblock/right-old'
import FourthContent from 'components/contentblock/fourth'
import Qualifying from 'components/qualifying/quick-look'
import Race from 'components/race/quick-look'
import Archive76 from 'components/newsarchives/race-report-bahrain-gp'
import Archive75 from 'components/newsarchives/qualifying-report-bahrain-gp'
import Archive74 from 'components/newsarchives/fp3-report-bahrain-gp'
import Archive73 from 'components/newsarchives/fp2-report-bahrain-gp'
import Archive72 from 'components/newsarchives/fp1-report-bahrain-gp'
import Archive71 from 'components/newsarchives/race-report-turkish-gp'
import Archive70 from 'components/newsarchives/qualifying-report-turkish-gp'
import Archive69 from 'components/newsarchives/fp3-report-turkish-gp'
import Archive66 from 'components/newsarchives/race-report-emilia-romagna-gp'
import Archive63 from 'components/newsarchives/race-report-portuguese-gp'
import Archive58 from 'components/newsarchives/race-report-eifel-gp'
import Archive53 from 'components/newsarchives/race-report-russian-gp'
import Archive48 from 'components/newsarchives/race-report-tuscan-gp'
import Archive41 from 'components/newsarchives/race-report-italian-gp'
import Archive34 from 'components/newsarchives/race-report-belgian-gp'
import Archive26 from 'components/newsarchives/race-report-spanish-gp'
import Archive20 from 'components/newsarchives/race-report-anniversary-gp'
import Archive14 from 'components/newsarchives/race-report-british-gp'
import Archive8 from 'components/newsarchives/race-report-hungarian-gp'

import Driver from 'components/driver'
import Team from 'components/team'
import ButtonLink from 'components/link/ButtonLink'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        2020 Season
      </div>

      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <FourthContent />
      </div>
      <div className='w-100 mt-4'>
        <Team />
      </div>
      <div className='w-100 mt-0'>
        <Driver />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-0'>
        ROUND 17 - Abu Dhabi GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <MainContent />
      </div>
      <div className='w-100 mb-0 mt-4'>
        <Race />
      </div>
      <div className='w-100 mb-0 mt-0'>
        <Qualifying />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-0'>
        ROUND 16 - Sakhir GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <FirstContent />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-4'>
          <SecondContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4'>
          <ThirdContent />
        </div>
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-4'>
          <FifthContent />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4'>
          <SixthContent />
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-4'>
        ROUND 15 - Bahrain GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive76 />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-4'>
          <Archive75 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4'>
          <Archive74 />
        </div>
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-4'>
          <Archive73 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4'>
          <Archive72 />
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-4'>
        ROUND 14 - Turkish GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive71 />
      </div>
      <div className='w-100 flex flex-col xl:flex-row'>
        <div className='w-100 xl:w-1/2 mr-0 xl:mr-2 bg-white-100 rounded-md mt-4'>
          <Archive70 />
        </div>
        <div className='w-100 xl:w-1/2 ml-0 xl:ml-2 bg-white-100 rounded-md mt-4'>
          <Archive69 />
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 13 - EMILIA ROMAGNA GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive66 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 12 - PORTUGUESE GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive63 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 11 - EIFEL GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive58 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 10 - RUSSIAN GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive53 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 9 - TUSCAN GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive48 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 8 - ITALIAN GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive41 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 7 - BELGIAN GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive34 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 6 - SPANISH GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive26 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 5 - 70TH ANNIVERSARY GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive20 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 4 - BRITISH GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive14 />
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 mt-2'>
        ROUND 3 - HUNGARIAN GP
      </div>
      <div className='w-100 bg-white-100 rounded-md mt-0'>
        <Archive8 />
      </div>
      <div className='w-100 flex flex-col md:self-center'>
        <ButtonLink href='/news' target='_self'>
          More Details...
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
