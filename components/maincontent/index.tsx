import React from 'react'

import F1 from 'components/contentblock/f1'
import BBC from 'components/contentblock/bbc'
import MotorSport from 'components/contentblock/motorsport'
import SkySports from 'components/contentblock/skysports'
import AutoSport from 'components/contentblock/autosport'
import ESPN from 'components/contentblock/espn'
import TheRace from 'components/contentblock/therace'
import GrandPrix from 'components/contentblock/grandprix'
import PlanetF1 from 'components/contentblock/planetf1'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Latest News...
      </div>
      <F1 />
      <BBC />
      <MotorSport />
      <SkySports />
      <AutoSport />
      <ESPN />
      <TheRace />
      <GrandPrix />
      <PlanetF1 />
    </div>
  )
}
export default Main
