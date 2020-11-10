import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Autódromo Internacional do Algarve
      </div>
      <div className='relative bg-white-100 rounded-md mb-6'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-t-md rounded-b-md py-4 px-2 text-center'
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
      <div className='relative bg-white-100 rounded-md mb-4'>
        <div className='relative max-w-screen-xl mx-auto rounded-t-md rounded-b-md'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200 rounded-t-md rounded-b-md'>
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
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  24 - October ( 14:00 - 15:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race
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
      <div className='relative bg-white-100 rounded-md'>
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
                      1:29:56.828
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
                      +25.592s
                    </div>
                  </div>
                  <div className='inine-block'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull '>
                      Max Verstappen (<span className='text'>Red Bull </span>){' '}
                      <br />
                      +34.508s
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
                      1:16.652
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
                      1:16.754
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
                      1:16.904
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
