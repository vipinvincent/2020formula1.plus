import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Renault: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Renault F1 - R.S.20
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='h-32 sm:h-48 lg:h-64 w-full text-center'>
          <img
            className='w-full h-full object-cover rounded-tl-xxl rounded-br-xl-t text-center'
            src='/images/cars/renault.jpg'
            alt='Renault R.S.20'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-sm leading-normal text-gray-700'>
              The 2020 competition vehicle is based on a Renault R.S.20 chassis
              developed and manufactured at the Renault F1 Team centre in
              Enstone. It was originally intended to compete in the 2020 Formula
              One World Championship, but under an agreement reached between
              teams and the Fédération Internationale de l'Automobile,
              2020-specification cars—including the R.S.20 will have their
              lifespan extended to compete in 2021.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              The chassis was designed by Nick Chester, Simon Virrill, Matthew
              Harman and Dirk de Beer with Marcin Budkowski overseeing the
              design and production of the car as executive technical director
              and Rémi Taffin leading the powertrain design. The car was planned
              to make its competitive début at the 2020 Australian Grand Prix,
              but this was delayed when the next nine events in were cancelled
              or postponed in response to the COVID-19 pandemic. It is set to be
              driven by Daniel Ricciardo and Esteban Ocon in 2020, and by Ocon
              in 2021 as Ricciardo is due to move to McLaren.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              The Renault R.S. 20 is the last car to be designed by Nick
              Chester. Chester was replaced as Technical Director in the
              off-season by former McLaren Engineering Director Pat Fry. Peter
              Machin was replaced as Head of Aerodynamics by Williams' former
              chief aerodynamicist Dirk de Beer, who had returned to Renault
              after last working for the team in 2013.
            </p>
          </div>
        </div>
        <div className='mt-4 pb-2 grid grid-cols-1 gap-5 sm:grid-cols-2 px-4'>
          <div className='flex flex-col justify-between bg-white-100 overflow-hidden shadow rounded-tl-xxl rounded-br-xxl border border-gray-100'>
            <div className='px-0'>
              <div className='flex flex-row bg-white-100 items-center'>
                <div className='h-32 sm:h-40 w-full lg:w-1/3 text-center bg-photobg'>
                  <img
                    className='w-full h-full object-contain rounded-tl-xxl rounded-br-xl-t text-center'
                    src='https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.320.medium.jpg/1584013014200.jpg'
                    alt='Daniel Ricciardo'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Australia
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Podiums -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        29
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Highest race finish -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        1 (7 times)
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        171
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-100 px-4 py-4 sm:px-6 renault'>
              <div className='flex items-center justify-center'>
                <div className='flex-shrink-0 bg-renault text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12 three-d-text '>
                  3
                </div>
                <div className='text-xl leading-5 text font-medium flex-0 px-4 three-d-text '>
                  Daniel Ricciardo
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between bg-white-100 overflow-hidden shadow rounded-tl-xxl rounded-br-xxl border border-gray-100'>
            <div className='px-0'>
              <div className='flex flex-row bg-white-100 items-center'>
                <div className='h-32 sm:h-40 w-full lg:w-1/3 text-center bg-photobg'>
                  <img
                    className='w-full h-full object-contain rounded-tl-xxl rounded-br-xl-t text-center'
                    src='https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/image.img.320.medium.jpg/1584013243241.jpg'
                    alt='Esteban Ocon'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        France
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Podiums -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        0
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Highest race finish -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        5 (2 times)
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-100 px-4 py-4 sm:px-6 renault'>
                <div className='flex items-center justify-center'>
                  <div className='flex-shrink-0 bg-renault text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12 three-d-text '>
                    31
                  </div>
                  <div className='text-xl leading-5 text font-medium flex-0 px-4 three-d-text '>
                    Esteban Ocon
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
        Tech Specs <span className='font-light'>(R.S.20)</span>
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Chassis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Moulded carbon fibre and aluminium honeycomb composite
                  monocoque, manufactured by Renault F1 Team and designed for
                  maximum strength with minimum weight. Renault E-Tech 19 power
                  unit installed as a fully-stressed member.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Suspension
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Front : Carbon fibre top and bottom wishbones operate an
                  inboard rocker via a pushrod system. This is connected to
                  torsion bar and damper units which are mounted inside the
                  front of the monocoque. Aluminium uprights and OZ machined
                  magnesium wheels.
                  <br /> Rear : Carbon fibre top and bottom wishbones with pull
                  rod operated torsion bars and transverse-mounted damper units
                  mounted inside the gearbox casing. Aluminium uprights and OZ
                  machined magnesium wheels.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Cockpit
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Removable driver’s seat made of anatomically formed carbon
                  composite, with six-point harness seat belt. Steering wheel
                  integrates gear change paddles, clutch paddles, and DRS.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Brake System
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Carbon discs and pads. Calipers and Master cylinders Brembo
                  S.p.A.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Transmission
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Eight-speed semi-automatic carbon maincase gearbox with
                  reverse gear. “Quickshift” system in operation to maximise
                  speed of gearshifts.
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
                  Electrical
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  MES-Microsoft Standard Electronic Control Unit.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine Pu Supplier
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  RENAULT R.S.20
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
        RENAULT F1 Facts
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Full Team Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Renault F1 Team
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Base
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Enstone, United Kingdom
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Team Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Cyril Abiteboul
                </div>
              </div>
              {/* <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Technical Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  James Key
                </div>
              </div> */}
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Chassis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  R.S.20
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Renault E-Tech 20
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First entry
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1977 British Grand Prix
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Races entered
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  386 (383 starts)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Constructors Championships
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Drivers Championships
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 Renault'>
                  2
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race victories
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 Renault'>
                  35
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Podiums
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 Renault'>
                  100
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Pole positions
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 Renault'>
                  51
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Fastest laps
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 Renault'>
                  31
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Renault
