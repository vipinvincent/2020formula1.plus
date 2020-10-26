import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'
// import SiderBarLink from 'components/link/SiderBarLink'

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
            {/*             
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              <span className='font-bold italic'>
                A lap in a Formula One car
              </span>{' '}
              would be as follows - Cars approach the first corner at 340
              kilometres per hour (210 mph) in eighth gear, and brake at about
              120 metres (390 ft) before the first chicane – the Variante del
              Rettifilo – entering at 86 km/h (53 mph) in first gear, and
              exiting at 74 kilometres per hour (46 mph) in second gear. Good
              traction out of the first corner is imperative for a quick lap.
              Conservation of speed through the first chicane is made possible
              by driving the straightest line, as a small mistake here can
              result in a lot of time being lost through the Curva Grande down
              to the Variante della Roggia chicane in seventh gear, at 330
              kilometres per hour (210 mph). The braking point is just under the
              bridge. The kerbs are very vicious and it is very easy for a car
              to become unbalanced and a driver to lose control. This chicane is
              probably the best overtaking chance on the lap, as it is the only
              one with the "slow corner, long straight, slow corner"; one of the
              characteristics of modern circuits. The Curve di Lesmo are two
              corners that are not as fast as they used to be, but are still
              challenging corners. The first is blind, entered at 264 km/h (164
              mph) in fifth gear, dropping to fourth gear at 193 km/h (120 mph),
              and has a slight banking. The second is a fifth gear entry at 260
              km/h (160 mph), apexing in third gear at 178 kilometres per hour
              (111 mph), and it is very important that all the kerb is used. A
              mistake at one of these corners will result in a spin into the
              gravel, while good exits can set you up for an overtaking move
              into Variante Ascari. The downhill straight down to Variante
              Ascari is very bumpy under the bridge. Variante Ascari is a very
              tricky sequence of corners and is key to the lap time. The final
              challenge is the Curva Parabolica: approaching at 335 kilometres
              per hour (208 mph) in seventh gear, cars quickly dance around the
              corner, apexing in fourth gear at 215 kilometres per hour (134
              mph) and exiting in fifth gear at 285 kilometres per hour (177
              mph), accelerating onto the main start/finish straight. A good
              exit and slipstream off a fellow driver along the main straight
              can produce an overtaking opportunity under heavy braking into
              Variante del Rettifilo; however, it is difficult to follow a
              leading car closely through the Parabolica as the tow will reduce
              downforce and cornering speed. Maximum speed achieved in a 2019
              Formula One car is 359.7 km/h (223.5 mph), established at the end
              of the start/finish straight. They experience a maximum g-force of
              4.50 during deceleration, as the track has many dramatic high to
              low speed transitions. Cars are on full throttle for 80% of the
              lap, and hit their Vmax on the circuit’s 1.1km start/finish
              straight.
            </p> */}
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
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  23 - October ( 15:00 - 16:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  24 - October ( 11:00 - 12:00 )
                </div>
              </div> */}
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Qualifying
                  {/* <SiderBarLink
                    className='text-primart-on'
                    href='/qualifying-results'
                    target='_self'>
                    Qualifying Results
                  </SiderBarLink> */}
                </div>
                {/* <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  <SiderBarLink
                    className='text-primart-on'
                    href='/qualifying-results'
                    target='_self'>
                    Qualifying Results
                  </SiderBarLink>
                </div> */}
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  21 - October ( 14:00 - 15:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race
                  {/* <SiderBarLink
                    className='text-primart-on'
                    href='/race-results'
                    target='_self'>
                    Race Results
                  </SiderBarLink> */}
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
              {/*   <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (drivers)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Rudolf Caracciola (6)
                  <br />
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari (22)
                </div>
              </div> */}
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most points
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Lewis Hamilton (73)
                </div>
              </div> */}
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  <div className='ferrari'>
                    <span className='text'> Ferrari (20)</span>
                  </div>
                </div>
              </div> */}
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  Michael Schumacher (<span className='text'>Ferrari</span>){' '}
                  <br />
                  1:29.468 (2004)
                </div>
              </div> */}
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2013 Qualifying Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      I<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:29.398
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Sebastian Vettel (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:29.501
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block '>
                      III<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Mark Webber (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:29.608
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2013 Race Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      I<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Sebastian Vettel (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:33:38.992
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block'>
                      Kimi Räikkönen (<span className='text'>Lotus</span>){' '}
                      <br />
                      +1.008s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block '>
                      Romain Grosjean (<span className='text'>Lotus</span>){' '}
                      <br />
                      +5.830s
                    </div>
                  </div>
                </div> 
            </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Schedule
