import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Circuit de Spa-Francorchamps
      </div>
      <div className='relative bg-white-100 rounded-md mb-4'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-t-md rounded-b-md pt-4 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597814913/contentImages/circuit/spa-francorchamps_ghhxjc.png'
              alt='2020 Belgian Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 Rolex Belgian Grand Prix 2020, 2020 Belgian Grand Prix,
              which takes place over 44 laps of the 7.004 km Circuit de
              Spa-Francorchamps on Sunday, August 30.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The Circuit de Spa-Francorchamps is a motor-racing circuit located
              in Stavelot, Belgium. It is the current venue of the Formula One
              Belgian Grand Prix, hosting its first Grand Prix in 1925, and has
              held a Grand Prix every year since 1983 (except 1984, 2003 and
              2006). Spa also hosts several other international events including
              the 24 Hours of Spa and the World Endurance Championship 6 Hours
              of Spa-Francorchamps, and the TCR Spa 500. It is also home to the
              Uniroyal Fun Cup 25 Hours of Spa, one of the longest motor races
              in the world.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The circuit has undergone several redesigns through its history,
              most extensively in 1979 when the track was modified and shortened
              from a 14.10 km (8.76 mi) circuit using public roads to a 6.95 km
              (4.32 mi) permanent circuit due to safety concerns with the old
              circuit. Despite its name, the circuit is not in Spa but lies in
              the vicinity of the town of Francorchamps within the boundaries of
              the municipality of Stavelot, with a part in the boundaries of
              Malmedy.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The original, triangle-shaped track was built in 1921, with
              designers Jules de Thier and Henri Langlois van Ophem using public
              roads between the towns of Francorchamps, Malmedy, and Stavelot to
              create an amazing 14.9km circuit taking in the forests and rolling
              hills of the beautiful Ardennes region. The track was redeveloped
              in 1979, and although the new circuit is only half the original's
              length, it’s still the longest on the current calendar at 7.004km.
              Having hosted a non-championship Grand Prix as long ago as 1924,
              Belgium’s iconic circuit was one of just seven to be part of
              Formula 1’s maiden championship in 1950. That race was won by the
              legendary Juan Manuel Fangio, who led home an Alfa Romeo one-two
              ahead of team mate Nino Farina.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Spa is among Formula 1 drivers’ most loved tracks, with its mix of
              long straights and challenging fast corners allowing them to push
              their cars to the edge of their capabilities – if it’s dry, that
              is. The size of the track and the nature of Belgian weather means
              it can sometimes be raining on one part of the track and dry on
              another, meaning grip can vary from one corner to the next. Keep
              an eye on the thrilling Eau Rouge, arguably the most famous
              sequence of corners in the world, as the drivers flick left, right
              and then up the hill through Raidillon. Since its inception,
              Spa-Francorchamps has been known for its unpredictable weather. At
              one stage in its history it had rained at the Belgian Grand Prix
              for twenty years in a row. Frequently drivers confront a part of
              the course that is clear and bright while another stretch is rainy
              and slippery. The Belgian Grand Prix was designated the European
              Grand Prix six times between 1925 and 1973, when this title was an
              honorary designation given each year to one Grand Prix race in
              Europe. It is one of the most popular races on the Formula One
              calendar, due to the scenic and historical Spa-Francorchamps
              circuit being a favourite of drivers and fans.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The fearsome Eau Rouge/Raidillon corner, arguably the most famous
              on the current F1 calendar, features an elevation change of 35
              meters from its lowest to highest point. Of current drivers, Kimi
              Raikkonen has the best record at Spa with four victories. Lewis
              Hamilton and Sebastian Vettel have each won three times. In 2019,
              Charles Leclerc became the first driver to score a maiden Grand
              Prix Victory at Spa since Michael Schumacher did so in 1992.
              Fernando Alonso never took a victory at Spa during his F1 career.
              Max Verstappen was born in Belgium to a Belgian mother, but
              decided to represent The Netherlands, where his father comes from.
              Nevertheless, Spa became his defacto ‘home race’ before the Dutch
              Grand Prix rejoined the calendar for 2020, and thousands of Dutch
              fans come out to support him here. At 7.004km long, Spa is the
              longest current F1 circuit. Despite this, it has one of the
              smaller spectator capacities on the current calendar (70,000 fans)
              Spa is not only famous for Formula 1. It also holds other popular
              annual events, including the Spa 24 hours and the 6 Hours of Spa
              Francorchamps for sportscars. The entry list for races at Spa was
              usually shorter than those at other events during the early years
              of Formula 1, largely due to the track’s fearsome nature. Despite
              taking his first F1 victory at Spa and going on to win the Belgian
              Grand Prix for four consecutive seasons, Jim Clark detested the
              track. Bruno Senna set the only fastest lap of his F1 career at
              the Belgian Grand Prix in 2012. Strangely, that’s something which
              his Uncle Ayrton never achieved, despite winning six Grands Prix
              at Spa. Michael Schumacher is the only driver to have won the
              World Championship at the Spa Francorchamps track. He claimed his
              seventh and final title here in 2004. 12 of the last 20 Belgian
              Grands Prix have been won by less than five seconds. The largest
              win margin here came in 1963, when Jim Clark won by 474 seconds!
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
        2020 Belgian Grand Prix weekend{' '}
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
                  28 - August ( 11:00 - 12:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  28 - August ( 15:00 - 16:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  29 - August ( 12:00 - 13:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Qualifying
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  29 - August ( 15:00 - 16:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  30 - August ( 15:10 - 17:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Belgian Grand Prix Facts
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
                  Circuit de Spa-Francorchamps
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  7.004 km (4.352 mi)
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
                  44 laps (307.104 km)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  75
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1950
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
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  <div className='ferrari'>
                    <span className='text'> Ferrari (18)</span>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 mercedes'>
                  Valtteri Bottas (<span className='text'>Mercedes</span>)
                  <br /> 1:46.286 (2018)
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
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:24:08.761
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>)
                      <br />
                      +8.448s
                    </div>
                  </div>
                  <div className='inine-block'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>)
                      <br />
                      +15.455s
                    </div>
                  </div>
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
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:41.252
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
                      1:41.763
                    </div>
                  </div>
                  <div className='inine-block'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P3
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:41.763
                    </div>
                  </div>
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
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      +0.981s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas(<span className='text'>Mercedes</span>){' '}
                      <br />
                      +12.585s
                    </div>
                  </div>
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
