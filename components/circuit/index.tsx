import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'
// import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Autodromo Internazionale del Mugello
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-6'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-tl-xxl rounded-br-xl-t py-4 px-2 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1599458704/contentImages/circuit/MugelloRacingCircui_wikiwe.png'
              alt='2020 Tuscan Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 Pirelli Gran Premio Della Toscana Ferrari 1000 2020, the
              2020 Tuscan Grand Prix, Ferrari's 1,000th F1 race, which takes
              place over 59 laps of the 5.245-kilometre Autodromo Internazionale
              del Mugello in Italy on Sunday, September 13.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Mugello Circuit (Autodromo Internazionale del Mugello) is a race
              track in Scarperia e San Piero, Tuscany, Italy. The circuit length
              is 5.245 km (3.259 mi). It has 15 turns and a 1.141 km (0.709 mi)
              long straight. The circuit stadium stands have a capacity of
              50,000. Although the ‘Mugello’ name had been associated with
              racing in that area of Tuscany since back in 1914 – having
              previously referred to a fearsome 61-km road racing course – the
              Mugello circuit proper opened in June 1974. Ferrari then purchased
              the track, based a 120-km drive away from their headquarters, in
              1988.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The present-day closed Mugello circuit was constructed in 1973 and
              opened in 1974, about 5 km east from the easternmost part of the
              original road circuit. The circuit was used for the in-season test
              during the 2012 Formula One season, by all teams except HRT. An
              unofficial track record of 1:21.035 was set by Romain Grosjean
              during the test. The track was praised by Mark Webber, who stated
              that he "did 10 dry laps today around Mugello, which is the same
              as doing 1000 laps around Abu Dhabi track in terms of
              satisfaction". Four-time Formula One world champion Sebastian
              Vettel said “unfortunately we don’t have this track on the
              calendar. It’s an incredible circuit with a lot of high-speed
              corners”. It holds a grade 1 FIA license, meaning that it meets
              the standards to host a Formula 1 race.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Despite having been a fixture for a number of international series
              over the years, most notably MotoGP, 2020 marks the first time
              that Mugello hosts a Formula 1 World Championship event. On 10
              July 2020, it was announced that the circuit would be the ninth
              race in the 2020 Formula One calendar, marking the 1000th Grand
              Prix for Ferrari.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Mugello is a swooping, undulating circuit that the drivers almost
              universally adore. Set in a valley, the natural topography makes a
              lap of the 5.2-km track which has hosted many an F1 test in its
              time, including Kimi Raikkonen’s famous first outing with Sauber a
              real rollercoaster ride, with the stomach-churning run through
              Casanova, Savelli and into Arrabbiata 1 and 2 a particular
              highlight.
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
        2020 Tuscan Grand Prix weekend{' '}
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
                  11 - September ( 11:00 - 12:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  11 - September ( 15:00 - 16:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  12 - September ( 12:00 - 13:00 )
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
                  12 - September ( 15:00 - 16:00 )
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
                  13 - September ( 15:10 - 17:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Tuscan Grand Prix Facts
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
                  Autodromo Internazionale del Mugello
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  5.245 km (3.259 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  15 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  53 laps (306.72 km)
                </div>
              </div>
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  0
                </div>
              </div> */}
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2020
                </div>
              </div> */}
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Michael Schumacher (5)
                  <br />
                  Kingdom Lewis Hamilton (5)
                </div>
              </div> */}
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
                  Rubens Barrichello (<span className='text'>Ferrari</span>)
                  <br /> 1:21.046
                </div>
              </div> */}
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
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
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Charles Leclerc (<span className='text'>Ferrari</span>){' '}
                      <br />
                      1:23:45.710
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      +0.835s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton(<span className='text'>Mercedes</span>){' '}
                      <br />
                      +35.199s
                    </div>
                  </div> */}
              {/* <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      +7.679s
                    </div>
                  </div> */}
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
              {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Schedule
