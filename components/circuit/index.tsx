import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'
// import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Intercity Istanbul Park
      </div>
      <div className='relative bg-white-100 rounded-md mb-6'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-t-md rounded-b-md py-4 px-2 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1604485992/contentImages/circuit/Istanbul_park_tvltgy.png'
              alt='2020 Turkish Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 DHL Turkish Grand Prix 2020, the 2020 Turkish Grand
              Prix, which takes place over 58 laps of the 5.338-kilometre
              Intercity Istanbul Park circuit on Sunday, November 15.
            </p>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Intercity Istanbul Park (İstanbul Park), also known as the
              Istanbul Racing Circuit, or initially as the Istanbul Otodrom, is
              a motor sports race track in Tuzla, east of Istanbul, Turkey. It
              was designed by the well-known racetrack architect Hermann Tilke
              and was inaugurated on 21 August 2005. It has been called "the
              best race track in the world" by former Formula One Chief
              Executive Bernie Ecclestone, who held the managing rights of the
              circuit between 2007 and 2011. The circuit is currently managed by
              the Turkish company Intercity.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The venue of the Turkish Grand Prix is located in crossing of
              boundaries of Pendik and Tuzla districts on the Asian side of
              Istanbul, close to the junction of Kurtköy on the north side of
              the O-4 motorway, linking Istanbul to Ankara. It is adjacent to
              the newly constructed Sabiha Gökçen International Airport and is
              surrounded by forests and fields. The Istanbul Park racing circuit
              is running anticlockwise. The circuit is 5.338 km (3.317 mi) long,
              with an average width of 15 m (49 ft) ranging from 14 to 21.5 m
              (46 to 71 ft), and covers over 2.215 million square metres (547
              acres). With a total of 14 corners, the sharpest with a radius of
              merely 15 m (49 ft), the circuit runs over four different ground
              levels with a start/finish straight over 650 m (2,133 ft) in
              length. The total race distance of the Turkish Grand Prix is
              309.356 km (192.225 mi) over 58 laps.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The Turkish Grand Prix was first held on 21 August 2005 as part of
              the 2005 Formula One season and last held on 8 May 2011 as part of
              the 2011 Formula One season. The circuit had not hosted a Formula
              One race in nine years before being announced to return for the
              2020 Formula One World Championship after major schedule changes
              as a result of the COVID-19 pandemic. There’s no doubt that
              Istanbul is one of the best tracks ever penned by Tilke, with
              parts of the circuit having been compared over the years to
              similar features at Spa-Francorchamps, Interlagos and Laguna Seca.
              The crown jewel of Intercity Istanbul Park, however, remains Turn
              8, an incredibly fast, bumpy, multi-apex downhill left-hander
              that’s a proper test of drivers’ commitment.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Turn 8 (nicknamed "Diabolica" by some in reference to Monza's
              Curva Parabolica) particularly caught the imagination. The corner
              is a fast, sweeping corner with four apexes, similar to one of the
              multi-apex sections of the old Nürburgring. Spectators and drivers
              alike raved about Turn 8, comparing it to legendary corners such
              as Eau Rouge and 130R. The corner eventually became the basis of
              turns 17 and 18 at the Circuit of the Americas. Another notable
              corner is Turn 1, a sharp downhill left-hander immediately after
              the front straight. This corner has been nicknamed by some as the
              "Turkish Corkscrew" in reference to the famous Corkscrew at
              WeatherTech Raceway Laguna Seca. Both the 2006 F1 and MotoGP races
              at the circuit featured multiple incidents at this corner. A third
              noteworthy area is the uphill kink in the middle of the back
              straight; due to its similarity to Eau Rouge, it has been jokingly
              referred to as "Faux Rouge".
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The circuit is not, however, without its critics. After
              qualifying, Jenson Button claimed that the track was getting
              bumpier as the weekend went on, particularly at Turn 8, which was
              what caused so many drivers to spin off. This harks back to
              another circuit designed by Hermann Tilke, Shanghai International
              Circuit, which is said to be sinking in places because it was
              built on the site of a former swamp. Jarno Trulli was notable for
              his lukewarm feeling towards the circuit, saying that he felt the
              circuit was easy to learn, and that good performance was down more
              to the car than the driver.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The first Grand Prix of Turkey took place in 2005. Due to
              financial disagreement, the last Turkish Grand Prix took place in
              2011, despite earlier agreements concerning Istanbul Park. The top
              speed measured of an F1 car measured by the speed trap was 329.5
              km/h (204.8 mph) in 2005. F1 cars equipped with the smaller
              2.4-litre V8 engines (instead of the 3.0-litre V10s of previous
              years) reached 320 km/h (200 mph) in 2006. Felipe Massa has an
              affinity with this circuit, with the Brazilian winning three of
              the seven Grands Prix held at Istanbul Park.
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
        2020 Turkish Grand Prix weekend{' '}
        <span className='font-light'>(Track Time)</span>
      </div>
      <div className='relative bg-white-100 rounded-md mb-4'>
        <div className='relative max-w-screen-xl mx-auto rounded-t-md rounded-b-md'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200 rounded-t-md rounded-b-md'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 1
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  13 - November ( 11:00 - 12:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  13 - November ( 15:00 - 16:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  14 - November ( 12:00 - 13:00 )
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
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  14 - November ( 15:00 - 16:00 )
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
                  15 - November ( 13:10 - 15:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Turkish Grand Prix Facts
      </div>
      <div className='relative bg-white-100 rounded-md'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Circuit Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Intercity Istanbul Park
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  5.338 km (3.317 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  14 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  58 laps (309.396km - 192.250mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  7
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2005
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (drivers)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Felipe Massa (3)
                  <br />
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari (3)
                </div>
              </div>
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most points
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Lewis Hamilton (73)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Points (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  <div className='ferrari'>
                    <span className='text'> Ferrari (20)</span>
                  </div>
                </div>
              </div> */}
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 mclaren'>
                  Juan Pablo Montoya (<span className='text'>McLaren</span>){' '}
                  <br />
                  1:24.770 (2005)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2011 Qualifying Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P1
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Sebastian Vettel (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:25.049
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P2
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Mark Webber (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:25.454
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block '>
                      P3
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Nico Rosberg (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:25.574
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2011 Race Results
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
                      1:30:17.558
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Mark Webber (<span className='text'>Red Bull</span>){' '}
                      <br />
                      +8.807s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Fernando Alonso (<span className='text'>Ferrari</span>){' '}
                      <br />
                      +10.075s
                    </div>
                  </div>
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
