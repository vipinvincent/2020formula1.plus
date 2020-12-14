import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'
// import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Yas Marina Circuit
      </div>
      <div className='relative bg-white-100 rounded-md mb-6'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-t-md rounded-b-md py-4 px-2 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1607325175/contentImages/circuit/Yasmarina-circuit_ydy7md.png'
              alt='2020 Abu Dhabi Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 Etihad Airways Abu Dhabi Grand Prix 2020, the 2020 Abu
              Dhabi Grand Prix, which takes place over 55 laps of the
              5.554-kilometre Yas Marina Circuit on Yas Island on Sunday,
              December 13.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The 2020 Abu Dhabi Grand Prix is scheduled to take place at the
              Yas Marina Circuit in Yas Island, Abu Dhabi, UAE. The Abu Dhabi
              Grand Prix was announced in early 2007 at the Abu Dhabi F1
              Festival in the United Arab Emirates. The first race took place on
              1 November 2009, held at the Hermann Tilke designed Yas Marina
              Circuit. On 25 June 2008 the FIA announced the provisional 2009
              Formula One calendar including the Abu Dhabi Grand Prix as the
              19th and final race of the season on 15 November. On 5 November
              2008, however, it was announced that the race would be held as the
              season finale on 1 November, two weeks before the initially
              planned date, as the 17th and final race. The inaugural race was
              Formula One's first ever day–night race, starting at 17:00 local
              time. Floodlights used to illuminate the circuit were switched on
              from the start of the event to ensure a seamless transition from
              daylight to darkness. Subsequent Abu Dhabi Grands Prix have also
              been day–night races.
            </p>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              The circuit was designed by Hermann Tilke, and is situated on Yas
              Island, about 30 minutes from the capital of the UAE, Abu Dhabi.
              Yas Marina is the second Formula One track in the Middle East,
              with the first being in Abu Dhabi. A two-day GP2 Asia Series test
              was held to officially open the circuit, which was held a week
              before the 2009 Abu Dhabi Grand Prix. It also hosted the opening
              event for the Australian V8 Supercars series, the Yas V8 400, in
              February 2010. Outside motorsport the circuit was used for the
              final stage of the inaugural Abu Dhabi Tour cycle race in 2015.
              The circuit has FIA Grade 1 license.
            </p>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              The twenty-one corners twist through Yas Island off the Abu Dhabi
              coast, passing by the marina and through the Yas Hotel Abu Dhabi
              designed by New York-based architects Hani Rashid and Lise Anne
              Couture of Asymptote Architecture with a striking facade lighting
              design by Rogier van der Heide, and winding its way through
              several long straights and tight corners. The marina-based
              development includes a theme park, a water park, as well as
              residential areas, hotels and beaches.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The circuit has five grandstand areas (Main Grandstand, West
              Grandstand, North Grandstand, South Grandstand and Marina
              Grandstand (aka Support)) and part of its pit lane exit runs
              underneath the track. It also houses a team building behind the
              pit building, Media Center, Dragster Track and VIP Tower.
              Additionally, one of the run-off areas runs underneath the West
              grandstand. Seating Capacity is 41,093 spanned under Area of
              161.9HA. the track length s 5.5 km with the longest straight being
              1.14km (1,246.72yd). The change of elevation is about 10.7m.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The circuit was built by main contractor Cebarco-WCT WLL, under
              contract from developer Aldar Properties. Among the
              sub-contractors involved were KOH AH HING (KAHBINA) from Malaysia
              (structural contractor), as well as specialised subcontractors
              like Voltas (MEP), PKE-Siemens (MEP), Able-Middle East
              (earthworks), Hamilton International (interior) and Bau Bickhardt
              (track) to name a few. The circuit was constructed with a
              permanent lighting system provided by Musco Lighting, similar to
              that also installed at the Losail Circuit in Qatar. Yas Marina
              Circuit is the largest permanent sports venue lighting project in
              the world; previously that title was held by Losail.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The surface of the track is made of graywacke aggregate, shipped
              to Abu Dhabi from a Bayston Hill quarry in Shropshire, England.
              The surface material is highly acclaimed by circuit bosses and
              Formula One drivers for the high level of grip it offers. The same
              aggregate material is used at the Abu Dhabi International Circuit
              for the Abu Dhabi Grand Prix. On 7 October 2009, the circuit was
              granted final approval to hold Formula One races by the FIA. Bruno
              Senna was the first driver to complete a test run on the circuit.
              GP3 visited Abu Dhabi for the first time at the end of the 2013
              season.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              After the first practice sessions at the 2009 Abu Dhabi Grand
              Prix, the circuit was welcomed by the drivers, with Nico Rosberg
              commenting that every corner was 'unique', while double World
              Champion Fernando Alonso echoed his sentiments, stating that it
              was enjoyable because there was always something to do. Force
              India's Adrian Sutil rated the circuit as being better than
              Formula One's other night race in Singapore as he felt there was
              too much light at Marina Bay. Not all of the drivers were
              complimentary, with Giancarlo Fisichella expressing a particular
              dislike of the pit exit, which dips under the main circuit by way
              of a tunnel. Although the pit exit remained free of incidents for
              the early practice sessions, Fisichella claimed that it was both
              very difficult and dangerous. Kimi Räikkönen notoriously gave his
              thoughts on the circuit, stating "the first few turns are quite
              good, but the rest of it is shit".
            </p>

            {/* <p className='mt-2 text-normal leading-normal text-gray-700'>
              <span className='font-bold italic'>
                A lap in a Formula One car -
              </span>{' '}
              The DRS zone is on the pit straight at the Abu Dhabi Grand Prix
              (starting 2012), so turn 1 ("Michael Schumacher turn") is the
              prime overtaking opportunity. The corner itself is incredibly
              tight; a typical F1 car must brake approximately 100 metres before
              the corner and shift right down to gear one. The width of the
              track further adds to the overtaking possibilities.[14] Turns 2
              and 3 are flat out and gaining a good exit can set up an
              overtaking opportunity into turn 4. The straight leading to turn 4
              is very long with a DRS zone, and the track at the corner itself
              is incredibly wide, at about thirty metres.[14] Turns 5, 6 and 7
              make up a high-speed left-right-left "S" section that leads into
              turn 8, a right-hand hairpin where taking a wide line can avoid
              the bump on the apex which unsettles the car.[15] Turns 9 and 10
              are very challenging as they are two blind left-handers where cars
              must brake, downshift and turn simultaneously – they go from 205
              km/h in gear 5 down to 63 km/h in gear 1 whilst trying to avoid
              locking up their inside front tyres.[14] The back straight leads
              down into turns 11, 12 and 13, a medium-speed complex of corners.
              Turn 11 is a fourth-gear left hander that leads immediately into
              the flat-out right hander of 12, then the third gear right-hander
              of turn 13 which requires a good exit to gain speed down the
              following straight. It is worth braking quite early for turn 14 to
              gain speed down the main straight.[15] If you brake about 100
              metres before the apex then it is easy to keep it tidy through the
              slow right hander and you can also put the power down early, and
              gain speed all the way through turn 15 and the main straight
              (which is the DRS zone).
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
        2020 Abu Dhabi Grand Prix weekend{' '}
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
                  11 - December ( 13:00 - 14:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  11 - December ( 17:00 - 18:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  12 - December ( 14:00 - 15:00 )
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
                  12 - December ( 17:00 - 18:00 )
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
                  13 - December ( 17:10 - 19:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Abu Dhabi Grand Prix Facts
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
                  Yas Marina Circuit
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  5.554 km (3.451 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  21 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  55 laps (305.355km - 189.739mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  11
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2009
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (drivers)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Lewis Hamilton (5)
                  <br />
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5  sm:mt-0 sm:col-span-2 mercedes'>
                  <span className='text'> Mercedes (6)</span>
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
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 mercedes'>
                  Lewis Hamilton (<span className='text'>Mercedes</span>) <br />
                  1:39.283 (2019)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2020 Qualifying Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P1
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:35.246
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P2
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:35.271
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block '>
                      P3
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:35.332
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2020 Race Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      I<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:36:28.645
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
                      +15.976s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      +18.415s
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2019 Qualifying Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P1
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:34.779
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P2
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:34.973
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block '>
                      P3
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen(<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:35.139
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2019 Race Results
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
                      1:34:05.715
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen(<span className='text'>Red Bull</span>){' '}
                      <br />
                      +16.772s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Charles Leclerc (<span className='text'>Ferrari</span>){' '}
                      <br />
                      +43.435s
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
