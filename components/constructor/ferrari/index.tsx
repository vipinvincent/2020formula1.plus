import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Ferrari: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Ferrari F1 - SF1000
      </div>
      <div className='relative bg-white-100 rounded-tl-xl rounded-br-xl shadow-xs mb-4'>
        <div className='h-32 sm:h-48 lg:h-64 w-full text-center'>
          <img
            className='w-full h-full object-cover rounded-tl-xl rounded-br-xl-t text-center'
            src='/images/cars/ferrari.jpg'
            alt='Ferrari SF 1000'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-sm leading-normal text-gray-700'>
              The SF1000 - design code 671 - is the 66th car built by Ferrari to
              take part in the Formula 1 World Championship. Although this
              year’s technical regulations have changed very little since 2019,
              this year’s car is significantly different to last year’s SF90,
              with the changes aimed at optimising aerodynamic downforce and
              balance.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              For the 2020 season, the Ferrari 065 power unit represents a step
              forward in the combustion efficiency of its Internal Combustion
              Engine, due mainly to two factors, a new design and a new fuel. A
              new Turbocharger and Energy Recovery System have been developed in
              order to maximize the overall Power Unit performance. As part of
              the overall concept of the 671 car, the PU layout design has
              focused on being as compact as possible, while also rationalising
              the weight and size of the Energy Store.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              The SF1000 is the seventh car built to race in Formula 1’s hybrid
              era, which began in 2014. Its name reflects the fact that, when we
              get to the ninth race of this year, the Scuderia will have taken
              part in a thousand Grands Prix. Ferrari made its Formula 1 debut
              on 21 May 1950, in Monaco, in the second ever championship Grand
              Prix. The Maranello team is the most successful in the sport with
              16 Constructors’ titles, 15 Drivers’ and 238 Grand Prix victories.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              For many, Ferrari and Formula 1 racing have become inseparable.
              The only team to have competed in every season since the world
              championship began, the Prancing Horse has grown from the humble
              dream of founder Enzo Ferrari to become one of the most iconic and
              recognised brands in the world. Success came quickly through the
              likes of Alberto Ascari and John Surtees, and continued – in
              amongst leaner times – with Niki Lauda in the 1970s and then
              Michael Schumacher in the 2000s, when Ferrari claimed a then
              unprecedented five consecutive title doubles, securing their
              status as the most successful and decorated team in F1 history.
            </p>
          </div>
        </div>
        <div className='mt-4 pb-2 grid grid-cols-1 gap-5 sm:grid-cols-2 px-4'>
          <div className='flex flex-col justify-between bg-white-100 overflow-hidden shadow rounded-tl-xl rounded-br-xl border border-gray-100'>
            <div className='px-0'>
              <div className='flex flex-row bg-white-100 items-center'>
                <div className='h-32 sm:h-40 w-full lg:w-1/3 text-center bg-photobg'>
                  <img
                    className='w-full h-full object-contain rounded-tl-xl rounded-br-xl-t text-center'
                    src='https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.320.medium.jpg/1584013014200.jpg'
                    alt='Sebastian Vettel'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Germany
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Podiums -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        120
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      World Championships -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        4
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        241
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-100 px-4 py-4 sm:px-6 ferrari'>
              <div className='flex items-center justify-center'>
                <div className='flex-shrink-0 bg-ferrari text-xl font-black text-white-100 rounded-tl-xl rounded-br-xl py-2 px-4 w-16 h-12'>
                  5
                </div>
                <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                  Sebastian Vettel
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between bg-white-100 overflow-hidden shadow rounded-tl-xl rounded-br-xl border border-gray-100'>
            <div className='px-0'>
              <div className='flex flex-row bg-white-100 items-center'>
                <div className='h-32 sm:h-40 w-full lg:w-1/3 text-center bg-photobg'>
                  <img
                    className='w-full h-full object-contain rounded-tl-xl rounded-br-xl-t text-center'
                    src='https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.320.medium.jpg/1584013824254.jpg'
                    alt='Charles Leclerc'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Monaco
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Podiums -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        10
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      World Championships -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        0
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        42
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-100 px-4 py-4 sm:px-6 ferrari'>
                <div className='flex items-center justify-center'>
                  <div className='flex-shrink-0 bg-ferrari text-xl font-black text-white-100 rounded-tl-xl rounded-br-xl py-2 px-4 w-16 h-12'>
                    16
                  </div>
                  <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                    Charles Leclerc
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
          <ContentLink href='/' target='_self'>
            Latest News...
          </ContentLink>
        </p>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Tech Specs <span className='font-light'>(SF1000)</span>
      </div>
      <div className='relative bg-white-100 rounded-tl-xl rounded-br-xl shadow-xs mb-4'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Chassis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Carbon fibre and honeycomb composite chassis, with halo fitted
                  to the cockpit.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Suspension
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Front : Push-rod front suspension
                  <br /> Rear : Pull-rod rear suspension.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Wheels
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Front and rear 13” wheels.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Brake System
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Front and rear Brembo self-ventilating carbon disc brakes,
                  with electronic control on rear brakes.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Transmission
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari longitudinal gearbox, with 8 forward and 1 reverse
                  gear. Electronic high-speed sequential semi-automatic gear
                  change.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Tyres
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Pirelli P Zero
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Electronics
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  FIA single ECU within-house design electrical harness
                </div>
              </div>
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Overall Width
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2000mm
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Overall Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  5600mm
                </div>
              </div> */}
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Overall Weight
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1645 lbs | 746.159 kg
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine Pu Supplier
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine PU Specification
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  V6 90° (Engine); 1600cc (Total displacement); 15000 (Maximum
                  rpm); 4 MJ (Battery energy); 120kW (MGU-K power)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Ferrari F1 Facts
      </div>
      <div className='relative bg-white-100 rounded-tl-xl rounded-br-xl shadow-xs'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Full Team Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Scuderia Ferrari Mission Winnow
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Base
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Maranello, Italy
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Team Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Mattia Binotto
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Technical Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Simone Resta
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Chassis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  SF1000
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari 065
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First entry
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1950 Monaco Grand Prix
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Races entered
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  993 (990 starts)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Constructors Championships
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  16
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Drivers Championships
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  15
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race victories
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  237
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Podiums
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  765
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Pole positions
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  221
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Fastest laps
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  253
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ferrari
