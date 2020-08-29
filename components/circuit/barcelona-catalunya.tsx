import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'
// import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Circuit de Barcelona-Catalunya
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='h-32 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-32 sm:h-84 object-contain rounded-tl-xxl rounded-br-xl-t p-4 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597123333/contentImages/circuit/catalunya-circuit_hicodt.png'
              alt='2020 Spanish Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 Aramco Gran Premio De España 2020, which takes place
              over 66 laps of the 4.655-kilometre Circuit de Barcelona-Catalunya
              on Sunday, August 16.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The Circuit de Barcelona-Catalunya is a motorsport race track in
              Montmeló, Catalonia, Spain. With long straights and a variety of
              corners, the Circuit de Barcelona-Catalunya is seen as an
              all-rounder circuit. The track has stands with a capacity of
              140,700. The circuit has FIA Grade 1 license. Until 2013 the track
              was known only as the Circuit de Catalunya, before a sponsorship
              deal with Barcelona City Council added Barcelona to the track's
              title.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The drivers love the Circuit de Barcelona-Catalunya, which is just
              as well, because they spend huge amounts of time pounding around
              it during winter testing. The track is a good mix of high- and
              low-speed corners, with the challenging Turn 3 right-hander a
              great chance to evaluate the balance of the car your team’s
              designers have given you to fight with for the season. Because so
              much testing is done at this circuit, Formula One drivers and
              mechanics are extremely familiar with it. This has led to
              criticism that drivers and mechanics are too familiar with
              Catalunya, reducing the amount of on-track action.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The Circuit de Barcelona-Catalunya has hosted a motorcycle Grand
              Prix since 1992, originally the European motorcycle Grand Prix
              from 1992 and later the Catalan motorcycle Grand Prix since 1996.
              There are at least five points on the track (turns 1, 2, 4, 10,
              14) where riders are known to overtake. As in Formula 1, Turn 1 is
              arguably the most popular place for overtaking. The circuit is not
              known to produce copious amounts of overtaking, despite the long
              straights. Originally, the Formula 1 circuit changes were not
              instituted for MotoGP; however, after a fatal crash in the 2016
              MotoGP round involving a Moto2 rider, Luis Salom, the Formula 1
              layout was implemented to slow down riders for safety purposes.
              The FIM made a further change to the chicane for 2017 by moving up
              the chicane to prevent riders from cutting the pit lane entrance,
              but that was abandoned because the motorcycle chicane had a
              surface change that created more safety issues with the
              transition. Further changes were made to the circuit in December
              2017 as grandstands were removed to add additional runoff that
              allowed the FIM to eliminate that chicane (although the Turn 10
              hairpin was kept). The track was resurfaced in 2018 as a result of
              calls by MotoGP riders to improve the amount of grip on the
              surface. Previously the track had been resurfaced in 2004.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The track is demanding of a car's aerodynamic qualities. The wind
              direction at the circuit can change drastically during the day, a
              significant factor given the importance of aerodynamics to modern
              Formula One cars. It is then hard to find a good setup since cars
              can have massive aerodynamic drag and understeer on one part of
              the circuit in the morning, but suffer oversteer at the same part
              of the circuit in the afternoon. A given tyre compound can work
              well when tested, but not so well a couple of months later. These
              changeable conditions can make for unexpected performances from
              some teams during the race. The changeable wind conditions have
              also caused accidents at the circuit, with Fernando Alonso's
              testing accident in 2015 partly blamed on the severity of the
              wind.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              <span className='font-bold italic'>
                A lap in a Formula One car
              </span>{' '}
              would be as follows - Turn 1 is the main overtaking point at
              Catalunya, as it is a braking zone at the end of a long DRS
              straight. The inside and outside are equally difficult for
              overtaking; drivers who can hold the line around the outside of
              turn one, can get the inside line for turn two. The corners
              themselves make up a medium-speed chicane – drivers brake rather
              late for turn one and shift down to gear two, and turn two is
              almost full throttle as they try to gain as much exit speed as
              possible. Turn 3 is a long, flat-out right-hander that has a
              g-force of about four, and it leads to a short straight before
              turn 4, the Repsol curve. Another right-hander, turn four is
              similar to Monza's Curva Parabolica – drivers brake and take an
              early apex (in third gear), carrying great speed out of the exit.
              Turn 5 comes immediately after and is a slow left-hander taken in
              second gear which drops rapidly downhill towards the left kink of
              turn 6 which is ignored by F1 cars. Turns 7 and 8 make up a
              medium-speed, uphill, left-right chicane. Drivers brake and shift
              down to gear three, and must not run too wide as turn eight has a
              large kerb on its apex which could potentially damage cars'
              suspensions. Turn 9, Campsa Corner, is a very fast, sixth-gear
              right-hander which is made incredibly difficult by being
              completely blind (drivers cannot see the apex on approach). It is
              initially quite steep uphill but the exit is then downhill, so it
              is quite easy to run wide onto the astroturf. The long back
              straight leads into turn 10, a second-gear, left-hand hairpin,
              then turns 11 and 12, a left kink before a long, slow, third-gear
              right. The next section has been redesigned by German engineer
              Hermann Tilke to lower speeds onto the 1,047 m (1,145 yd) pit
              straight – which in turn increases overtaking opportunities and
              safety. Turn 13 is a tight, third-gear right-hander and drivers
              have to cross the track quickly to take the racing line through
              the slow left-right chicane of turns 14 and 15, taken in second
              gear. Good traction is needed here as it determines speed down the
              pit straight. Turn 16 is a flat-out right-hander which takes cars
              across the start/finish line.
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
        2020 Spanish Grand Prix weekend{' '}
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
                  14 - August ( 11:00 - 12:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  14 - August ( 15:00 - 16:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  15 - August ( 12:00 - 13:00 )
                </div>
              </div>
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
                  15 - August ( 15:00 - 16:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Day
                  {/* <SiderBarLink
                    className='text-primart-on'
                    href='/race-results'
                    target='_self'>
                    Race Results
                  </SiderBarLink> */}
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  16 - August ( 15:10 - 17:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Spanish Grand Prix Facts
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
                  Circuit de Barcelona-Catalunya
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  4.655 km (2.892 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  16 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  66 laps (307.104 km)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  60
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1913
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Michael Schumacher (6)
                </div>
              </div>
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Podiums
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  David Coulthard (5)
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
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  <div className='ferrari'>
                    <span className='text'> Ferrari (12)</span>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 redbull'>
                  Daniel Ricciardo (<span className='text'>Red Bull</span>)
                  <br /> 1:18.441 (2018)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2019 Results
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
                      1:35:50.443
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas(<span className='text'>Mercedes</span>){' '}
                      <br />
                      +4.074s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      +7.679s
                    </div>
                  </div>
                  {/* <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Charles Leclerc (<span className='text'>Ferrari</span>){' '}
                      <br />
                      +30.117s
                    </div>
                  </div> */}
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
