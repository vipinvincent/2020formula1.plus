import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'
// import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Autódromo Internacional do Algarve
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-6'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-tl-xxl rounded-br-xl-t py-4 px-2 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1602748565/contentImages/circuit/Auto%CC%81dromo_do_Algarve_alt.svg_uvsatk.png'
              alt='2020 Portugal Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 Heineken Grande Prémio De Portugal 2020, the 2020
              Portuguese Grand Prix, which takes place over 66 laps of the 4.653
              km (2.891 mi) Autodromo Internacional do Algarve on Sunday,
              October 25.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Algarve International Circuit (Portuguese: Autódromo Internacional
              do Algarve), commonly referred to as Portimão Circuit, after the
              port city it sits is a 4.692 km (2.915 mi) race circuit located in
              Portimão. With a total cost of €195 million (approximately $250
              million), the project includes a karting track, technology park,
              five-star hotel, sports complex and apartments was opened in the
              autumn of 2008, with construction of the permanent facility
              completed in just seven months.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Construction was finished in October 2008 and the circuit was
              homologated by both the FIM on 11 October 2008 and the FIA two
              days later. The circuit was designed by Ricardo Pina, Arquitectos.
              In October 2010 the teams agreed to add the Portimão Circuit to
              the Formula One testing roster along with Bahrain. In September
              2013, the company that manages the circuit, Parkalgar Serviços,
              was taken over by Portugal Capital Ventures, which is a Portuguese
              state-owned venture capitalist, effectively placing the circuit
              under state management. The sale was forced by the debts
              accumulated by Parkalgar Serviços, believed to be approximately
              160 million Euros.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              In July 2020 it was announced that the circuit would host the
              Formula One Portuguese Grand Prix from 23 to 25 October 2020, as
              part of a revised calendar arising from the disruption caused by
              the COVID-19 pandemic. This marks the first time a Portuguese
              Grand Prix will be held since the 1996 race which was held at the
              Autódromo do Estoril.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              like Mugello, Portimao is yet another track that joined the F1
              calendar in 2020, has never hosted a Formula 1 World Championship
              event. The track was used for F1 pre-season testing in the winter
              of 2008-09, however – while several drivers on the grid, including
              Daniel Ricciardo, Charles Leclerc and Valtteri Bottas, experienced
              the Portuguese circuit during their junior careers.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Rather like Austin’s Circuit of The Americas, Portimao is a modern
              venue with elevation change baked into its layout. The Ricardo
              Pena-designed 4.6-km lap sends drivers swooping up hill and down
              dale, before culminating in a plunge down to the final
              right-hander at Galp leading back onto the pit straight.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The circuit is the site of a statue in tribute to Craig Jones,
              representing Jones on his motorbike after passing the finishing
              line. This statue will be the main part of a monument, already
              partially built, which also includes the architectural arrangement
              of the main access roundabout to the racetrack, created by Paula
              Hespanha and Portuguese architect Manuel Pedro Ferreira Chaves.
              This monument is a landscape sculpture, representing the main
              straight of a racing circuit, which extends up to the car park of
              the main grandstand.
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
        2020 Portugal Grand Prix weekend{' '}
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
                  23 - October ( 11:00 - 12:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
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
                  24 - October ( 14:00 - 15:00 )
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
                  25 - October ( 13:10 - 15:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Portugal Grand Prix Facts
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
                  Algarve International Circuit (Portimão Circuit)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  4.653 km (2.891 mi)
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
                  66 laps (306.826km - 190.653mi)
                </div>
              </div>
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  78
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1926
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
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
