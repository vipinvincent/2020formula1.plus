import React from 'react'
import ContentLink from 'components/link/ContentLink'

const RacingPoint: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        BWT Racing Point F1 - RP20
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='h-32 sm:h-48 lg:h-64 w-full text-center'>
          <img
            className='w-full h-full object-cover rounded-tl-xxl rounded-br-xl-t text-center'
            src='/images/cars/racing-point.jpg'
            alt='Racing Point RP20'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-sm leading-normal text-gray-700'>
              BWT Racing Point reveal the RP20 for the 2020 FIA Formula One
              World Championship. The 2020 BWT Racing Point Formula One car, the
              RP20, implements the changes in regulations for the 2019 season,
              with updated aerodynamics - in particular, new front and rear
              wings. With a new livery, incorporating the colours of the
              partners BWT, the new contender looks aggressive, racy - ready to
              take on the challenge of the new season
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              BWT Racing Point'S entry throws down the gauntlet at the biggest
              teams in the the pinnacle of motorsport. The RP20 aims to be
              competitive from the start and help the team push forward as it
              closes the gap towards the front of the grid.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              The RP20 is entirely new, meaning that there’s very little
              carryover from their 2019 car. For 2020, the car was designed from
              scratch, starting from almost a blank sheet of paper – which is
              very exciting, because the team hasn’t been in a position to do
              this in a very long time. Team has applied everything that they
              have learnt over the past seasons, combined this with what they
              seen seen adopted by some of our competitors, and they have given
              it their best shot at optimising the final season of these present
              regulations
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              In recent seasons, we have had two main weaknesses: car has had an
              Achilles heel as far as balance is concerned and also struggled on
              high-downforce circuits. For 2020, RP20 have addressed these two
              factors. As such, the drivers should notice a significant
              difference in terms of on-track performance. Both Checo and Lance
              have already noticed a change in the simulator, so it is hopeful
              that this performance will carry over to the track – especially
              with a strong combination in their driver line-up.
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
                    src='https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.320.medium.jpg/1584013014200.jpg'
                    alt='Sergio Perez'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Mexico
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Podiums -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        8
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Highest race finish -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        2 (2 times)
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        178
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-100 px-4 py-4 sm:px-6 racingpoint'>
              <div className='flex items-center justify-center'>
                <div className='flex-shrink-0 bg-racingpoint text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12'>
                  11
                </div>
                <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                  Sergio Perez
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
                    src='https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.320.medium.jpg/1584013824254.jpg'
                    alt='Lance Stroll'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Canada
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Podiums -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        1
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Highest race finish -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        3
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        62
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-100 px-4 py-4 sm:px-6 racingpoint'>
                <div className='flex items-center justify-center'>
                  <div className='flex-shrink-0 bg-racingpoint text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12'>
                    18
                  </div>
                  <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                    Lance Stroll
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
        Tech Specs <span className='font-light'>(RP20)</span>
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
                  Carbon fibrecomposite monocoque with zylon legality side
                  anti-intrusion panels.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Suspension
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Aluminium uprights with carbon fibre composite wishbones,
                  trackrod and pushrod. Inboard chassis mounted torsion springs,
                  dampers and anti-roll bar assembly.
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Wheels
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  BBS, Fr : 13” x 13.7” - Rr: 13” x 16.9”
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Brake System
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Brembo brake calipers and in-house design brake by wire system
                  with carbon fibre discs and pads
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Transmission
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Mercedes GP 8-speed, semi-automatic with paddle shifts
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
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
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
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Overall Weight
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Overall vehicle weight 746kg (including driver, excluding
                  fuel) Weight distribution between 45.4% and 46.4%
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine Pu Supplier
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Mercedes HPP
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine PU Specification
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Mercedes-AMG F1 M11 EQ Power 1.6L V6 Turbo charged + energy
                  recovery system
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Racing Point F1 Facts
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
                  BWT Racing Point F1 Team
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Base
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Silverstone, United Kingdom
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Team Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Otmar Szafnauer
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Technical Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Andrew Green
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Chassis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  RP20
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  BWT Mercedes
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First entry
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2019 Australian Grand Prix
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Races entered
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  21
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Constructors Championships
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Drivers Championships
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 racingpoint'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race victories
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 racingpoint'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Podiums
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 racingpoint'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Pole positions
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 racingpoint'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Fastest laps
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 racingpoint'>
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RacingPoint
