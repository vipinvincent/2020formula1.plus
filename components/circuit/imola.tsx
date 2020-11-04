import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Autodromo Internazionale Enzo e Dino Ferrari
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-6'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-tl-xxl rounded-br-xl-t py-4 px-2 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1603716743/contentImages/circuit/Imola_xexqmc.png'
              alt='2020 Emilia Romagna Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 Emirates Gran Premio Dell'emilia Romagna 2020, the 2020
              Emilia Romagna Grand Prix, which takes place in Imola, over 63
              laps of the 4.959-kilometre Autodromo Internazionale Enzo e Dino
              Ferrari, former home of the San Marino GP, on Sunday, November 1.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The Autodromo Internazionale Enzo e Dino Ferrari is a race track
              near the Italian town of Imola, 40 kilometres (24.9 mi) east of
              Bologna. It is one of the few major international circuits to run
              in an anti-clockwise direction. The circuit is named after
              Ferrari's late founder, Enzo Ferrari, and his son, Alfredo
              Ferrari, who died in 1956 at age 24. The circuit has a FIA Grade
              One license.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              It was the venue for the San Marino Grand Prix. For many years,
              two Grands Prix were held in Italy every year, so the race held at
              Imola was named after the nearby state. It also hosted the 1980
              Italian Grand Prix, the Italian Grand Prix usually takes place at
              the Autodromo Nazionale Monza. When Formula One visits Imola, it
              is seen as the home circuit of Scuderia Ferrari, and masses of
              supporters come out to support the local team.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Imola first hosted a non-championship F1 race in 1963, but it
              would take some politicking with Monza in 1980 before the track
              was awarded the honour of hosting the Italian Grand Prix for the
              first time that year. From 1981, the two tracks worked together in
              perfect harmony, with Imola taking on its famous ‘San Marino’
              title, and going on to host a total of 27 Grands Prix up until
              2006.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The track was inaugurated as a semi-permanent venue in 1953. It
              had no chicanes, so the runs from Acque Minerali to Rivazza, and
              from Rivazza all the way to Tosa, through the pits and the
              Tamburello, were just straights with a few small bends; the
              circuit remained in this configuration until 1972.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              In April 1953, the first motorcycle races took place, while the
              first car race took place in June 1954. In April 1963, the circuit
              hosted its first Formula One race, as a non-championship event,
              won by Jim Clark for Lotus. A further non-championship event took
              place at Imola in 1979, which was won by Niki Lauda for
              Brabham-Alfa Romeo. In 1980 Imola officially debuted in the
              Formula One calendar by hosting the 1980 Italian Grand Prix. It
              was the first time since the 1948 Edition held at Parco del
              Valentino that the Autodromo Nazionale Monza did not host the
              Italian Grand Prix. The race was won by Nelson Piquet and it was
              such a success that a new race, the San Marino Grand Prix, was
              established especially for Imola in 1981. The race was held over
              60 laps of the 5 kilometre circuit for a total race distance of
              300 kilometres.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Despite the addition of the chicanes, the circuit was subject to
              constant safety concerns, mostly regarding the flat-out Tamburello
              corner, which was very bumpy and had dangerously little room
              between the track and a concrete wall which protects the Santerno
              river that runs behind it. In 1987, Nelson Piquet crashed heavily
              during practice after a tyre failure and missed the race due to
              injury. In the 1989 San Marino Grand Prix, Gerhard Berger crashed
              his Ferrari at Tamburello after a front wing failure. Michele
              Alboreto also had a fiery accident at the Tamburello corner
              testing his Footwork Arrows at the circuit in 1991 but escaped
              injury. Riccardo Patrese also had an accident at the Tamburello
              corner in 1992 while testing for the Williams team. The death of
              Ayrton Senna on 1 May 1994 sealed the fate of the corner being run
              flat out ever again.
            </p>
          </div>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
          <ContentLink href='/' target='_self'>
            Latest News...
          </ContentLink>
        </p>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        2020 Emilia Romagna Grand Prix weekend{' '}
        <span className='font-light'>(Track Time)</span>
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='relative max-w-screen-xl mx-auto rounded-tl-xxl rounded-br-xl'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200 rounded-tl-xxl rounded-br-xl'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 1
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  31 - October ( 10:00 - 11:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Qualifying
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  21 - October ( 14:00 - 15:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  01 - November ( 13:10 - 15:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Emilia Romagna Grand Prix Facts
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Circuit Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Autodromo Internazionale Enzo e Dino Ferrari (Imola Circuit)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  4.909 km (3.050 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  19 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  63 laps (309.049km - 192.034mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  27
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1980
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Schedule
