import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive4: React.FC = () => {
  return (
    <div className='relative'>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1 REPORT - HUNGARIAN GP 2020
          </div>
          <H1>
            Mercedes dominates FP1 - Hamilton leads the timesheets in Hungarian
            GP first practice
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton leading a dominant Mercedes one-two ahead of Valtteri
            Bottas. Hamilton set his fastest time - a 1:16.003 - on the hardest
            tyre available which is incredible. Mercedes' close rival, Red Bull
            had a low start to the weekend with P8 and P13 for Max Verstappen
            and Alex Albon respectively; while Ferrari again finished well
            behind of the practice pace setters in P6 and P7.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point's Sergio Perez was third, 0.527secs adrift, and
            0.437secs ahead of team-mate Lance Stroll. Renault's Daniel
            Ricciardo took fifth. Lando Norris and Esteban Ocon rounded out the
            top 10 for McLaren and Renault, with Norris’s McLaren team-mate
            Carlos Sainz Jr close behind in 11th. Sebastian Vettel was the lead
            driver for the Ferarri on a 1m17.238s and Charles Leclerc was 0.166s
            behind his team-mate. Romain Grosjean was 14th, ahead of Williams’
            Nicholas Latifi.
          </p>
          {/*  <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull's pace was at a low level since they were running in a
            possible different specification than the others. Sebastian Vettel
            was the lead driver for the Ferarri on a 1m17.238s and Charles
            Leclerc was 0.166s behind his team-mate.
          </p>
           <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Romain Grosjean was 14th, ahead of Williams’ Nicholas Latifi, who
            finished 15. Daniil Kvyat was 16th Alfa Romeo's Antonio Giovinazzi
            in 17th. George Russell and guest-participant Robert Kubica were the
            last of the drivers to set a time, as Pierre Gasly failed to leave
            the garage with an issue on his Honda engine
          </p> */}
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The session was affected by intermittent light rain. But the drivers
            was not affected as they continued the session using dry-weather
            'slick' tyres.
            {/* Spots of rain over the Hungaroring for Free Practice
            1 indicates a sign of things to come during weekend. */}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive4
