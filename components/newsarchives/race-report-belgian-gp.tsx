import React from 'react'
import H1 from 'components/heading/H1'
import Zoom from 'react-medium-image-zoom'

const Archive34: React.FC = () => {
  return (
    <div className='relative'>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - BELGIAN GP 2020
          </div>
          <H1>
            Hamilton dominates and wins his fourth win at Spa with Mercedes 1-2
            finish as Verstappen finished in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’ Lewis Hamilton from the pole. leading every lap, took
            fifth victory of the season at the Belgian Grand Prix. Meanwhile his
            team mate Valtteri Bottas couldn’t overcome the first lap
            slipstreaming contest down to Les Combes, only to cross the line in
            second as Red Bull’s Max Verstappen took third to maintain his
            record of finishing on the podium in each race of 2020 season.
            Bottas finished eight seconds behind his team mate, with Verstappen
            a further seven seconds in P3.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault’s Daniel Ricciardo finished fourth which was the team’s best
            of the year, crossed the line under four seconds behind Verstappen
            with the last lap fastest lap point. His team mate Esteban Ocon also
            impressed by overtaking the struggling Red Bull of Alex Albon on the
            final lap to take fifth. Albon could hold onto sixth from the
            McLaren of Lando Norris who finished under 1 second from the Red
            Bull car. An impressive drive aided with a good strategy helped
            Pierre Gasly to take eighth for AlphaTauri. Meanwhile the Spa
            specialists Racing Points, could only manage P9 and P10 with Lance
            Stroll leading Sergio Perez rounded top 10.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The second Alpha Tauri of Daniil Kvyat finished eleventh with Kimi
            Räikkönen of Alfa Romeo in twelfth. Notably Kimi finished ahead of
            both the Ferrari drivers Sebastian Vettel and Charles Leclerc who
            finished out of the points in P13 and P14 respectively. It was a
            extremely frustrating Spa weekend for ferrari with tough qualifying
            followed up by an equally burdensome race, with the team’s cars
            coming home in the positions they’d started in, but Sebastian Vettel
            having moved ahead of Charles Leclerc. Both Haas drivers crossed the
            line in 15th and 17th with Romain Grosjean leading his team mate
            Kevin Magnussen. Nicholas Latifi of Williams spitted the Haas
            drivers and finished 16th. McLaren’s Carlos Sainz was unable to take
            the race start after a power unit issue, Meanwhile a big crash for
            Alfa Romeo’s Antonio Giovinazzi ended his race in lap 11, with
            Williams’ George Russell arriving on the scene and hitting
            Giovinazzi’s wheel, which forced his own retirement. Luckily both
            drivers emerged unhurt.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Check out the positions of Top-5 drivers at the time Hamilton
            crossing the finish line.
          </p>
          <div className='h-full w-full zoom-image'>
            <Zoom>
              <img
                className='w-full h-full object-cover rounded-tl-xxl'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1598860581/contentImages/content/spa_fj1j8u.png'
                alt='Check out the positions of top5 drivers when Hamilton crossing the finish line!!!!'
              />
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Archive34
