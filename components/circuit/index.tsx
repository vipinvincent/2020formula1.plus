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
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1600089180/contentImages/circuit/Sochi_jviier.png'
              alt='2020 Russian Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 VTB Russian Grand Prix 2020, the 2020 Russian Grand
              Prix, which takes place over 53 laps of the 5.848-kilometre Sochi
              Autodrom on Sunday, September 27
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The Sochi Autodrom was Designed by Hermann Tilke, is effectively a
              street circuit, evolving out of the internal roads of the park
              built for the city’s 2014 Winter Olympics. The circuit is similar
              to the Beijing Olympic Green Circuit and the Sydney Olympic Park
              Circuit in that it runs around a former Olympic complex; in this
              case, the Sochi Olympic Park site, scene of the 2014 Winter
              Olympic Games. The inaugural World Championship Russian Grand Prix
              took place in 2014, beginning a seven-year contract.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              <p className='mt-2 text-normal leading-normal text-gray-700'>
                The 5.848-kilometre (3.634 mi) circuit is the fourth-longest
                circuit on the Formula One calendar, behind Spa-Francorchamps in
                Belgium, Baku City Circuit in Azerbaijan and Silverstone in the
                UK. The circuit is built around the Sochi Olympic Park, that is
                the coastal cluster of Olympic venues built for the 2014 Winter
                Olympics that have hosted competitions in ice hockey, speed
                skating, curling, figure skating, short track etc., and Fisht
                Olympic Stadium where Opening and Closing ceremonies were held.
                The surface was not laid until after the Closing Ceremony of the
                Olympics. The circuit has the start grid on the northern edge of
                the Olympic Park next to the railway station, heading southwest
                towards the Black Sea coast. Then it runs along the outer edge
                of the central Sochi Medals Plaza, that is the podium for
                Olympic medal ceremonies. The long Turn 3 is one of the most
                notable on the circuit, and has been compared to the famous Turn
                8 in Istanbul Park. Then, the track circles the plaza
                counterclockwise and makes three turns around the Bolshoy Ice
                Dome. Then follow series of tight corners before turning north
                where the track skirts the edge of the Olympic Park, above the
                main Olympic Village and the Adler Arena Skating Center. Then it
                passes the skating and curling centres, before funneling up
                behind the pit paddock toward the train station, and completing
                a circuit with two ninety-degree right turns.
              </p>
              The Sochi Autodrom, previously known as the Sochi International
              Street Circuit and the Sochi Olympic Park Circuit, is a 5.848 km
              Formula One permanent race track in the Black Sea resort town of
              Sochi in Krasnodar Krai, Russia.Sochi Autodrom hosted Formula 1’s
              first ever Russian Grand Prix on October 12 2014. The race was won
              by Mercedes’ Lewis Hamilton, who was midway through a five-race
              winning streak that would ultimately see him clinch that year’s
              drivers’ title.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Looking at a map of the track, your eye can’t help but be drawn to
              the epic Turn 3, a 750m constant-radius left-hander taking the
              drivers around the outside of the dramatic Poyushchiye fountain.
              The rest of the track is characterised by a series of 90-degree
              bends coupled to some rapid, flowing
              straights-that-aren’t-straight. Occupying a prime spot on the
              Black Sea, Sochi is one of Russia’s top beach resorts in the
              summer, while the race’s early autumn slot should mean it’s just
              about warm enough for you to work on your tan. If you were
              inspired by the city’s Winter Olympics, however, you’re out of
              luck – the ski season in the resorts around Sochi doesn’t get
              going until December.
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
        2020 Russian Grand Prix weekend{' '}
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
                  25 - September ( 11:00 - 12:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  25 - September ( 15:00 - 16:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  26 - September ( 12:00 - 13:00 )
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
                  26 - September ( 15:00 - 16:00 )
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
                  27 - September ( 14:10 - 16:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Russian Grand Prix Facts
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
                  Sochi Autodrom
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  5.848 km (3.634 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  18 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  53 laps (309.745 km)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  6
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2014
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (drivers)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Lewis Hamilton (4)
                  <br />
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Mercedes (8)
                </div>
              </div>
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
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 mercedes'>
                  Lewis Hamilton (<span className='text'>Mercedes</span>)
                  <br /> 1:35.761 (2019)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2019 Qualifying Results
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
                      1:31.628
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
                      1:32.030
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Sebastian Vettel (<span className='text'>Ferrari</span>){' '}
                      <br />
                      1:32.053
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
                      1:33:38.992
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
                      +3.829s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Charles Leclerc (<span className='text'>Ferrari</span>){' '}
                      <br />
                      +5.212s
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
