import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Haas: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Haas F1 - VF-20
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='h-32 sm:h-48 lg:h-64 w-full text-center'>
          <img
            className='w-full h-full object-cover rounded-tl-xxl rounded-br-xl-t text-center'
            src='/images/cars/haas.jpg'
            alt='Haas F1 VF-20'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-sm leading-normal text-gray-700'>
              Haas have become the first team to unveil their 2020 F1 livery
              after they revealed the VF-20's new look. Before the car hits the
              track for pre-season testing in Barcelona next week, here's how
              the American outfit's colour schemes have evolved, from their
              first car in 2016 to this year's challenger. Last season was the
              most difficult yet for the newest team on the grid as they
              struggled with an inconsistent car and lost their title sponsor
              mid-season. Haas have gone back to a more traditional look. The
              American outfit switched to a black and gold livery ahead of the
              2019 season after Rich Energy became the team’s title sponsors.
              That ended in disaster and was part of a rather forgettable
              campaign for the team as they were only able to muster 28 points
              in the Constructors’ Championship. But, they are hoping a return
              to a familiar look will bring back some of the good times that the
              team have experienced during their relatively short life as a
              Formula 1 team.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              Haas admitted it would take until the new season to address them
              properly. The VF-20 is the product of last year’s painful lessons
              and as a result there will be many anxious faces at Haas not only
              when it tests for the first time but, just as importantly, over
              the opening races. With little change in the technical regulations
              compared to last year the VF-20 is a clear evolution of its
              predecessor. And while teams are likely to hold back their major
              aerodynamic changes until later, the car’s front wing already
              sports a noticeably different shape, following the trend for
              ‘outswept’ designs which its fellow Ferrari users preferred. At
              the rear of the car there is little indication of any significant
              changes in the layout of its Ferrari power unit, which was widely
              thought to be the best in the championship last year. However the
              car’s air intake is noticeably different to last year’s, adopting
              a triangular shape more similar to that used by the factory team.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              Gene Haas, founder of Haas Automation and chairman of Haas F1 Team
              stated that “I’m pleased to see the car return to the more
              familiar Haas Automation colours, it’s certainly a livery that
              people identify with. Frankly, I’m hoping the VF-20 will return us
              to the kind of form we ran in 2018 when we finished fifth in the
              constructors’ championship. 2019 was a tough season to endure.
              We’ve been through a real education process, one that comes to all
              Formula 1 teams at some stage. I’m trusting we’ve learned from
              those lessons and have applied that knowledge into making the
              VF-20 a more competitive entry. It’s important to me that we’re
              back in the mix and consistently scoring points, we certainly have
              the capability and we’ve proved as an organisation we can do it.”
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              As per Guenther Steiner, team principal “It’s always exciting to
              see the development of a new Formula 1 car and undoubtedly the
              VF-20 has to deliver where our previous car didn’t. With the
              regulations remaining stable into this season, it’s allowed us to
              improve our understanding of the car and to scrutinise ourselves
              more in order to find solutions and applications to channel into
              the design of the VF-20. Last year was definitely a set-back, one
              I would never have asked for, but you learn from such situations –
              we all have. Everybody at the team was forced to look at
              themselves and understand what they can do better. I’m looking
              forward to seeing the VF-20 make its track debut. As always in
              testing, you want many things, but lots of mileage, reliability
              and speed would be welcomed as we ready ourselves for the first
              race in Australia.”
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
                    src='https://www.formula1.com/content/fom-website/en/drivers/romain-grosjean/_jcr_content/image.img.320.medium.jpg/1584013014200.jpg'
                    alt='Romain Grosjean'
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
                        10
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
                        166
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-100 px-4 py-4 sm:px-6 haas'>
              <div className='flex items-center justify-center'>
                <div className='flex-shrink-0 bg-haas text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12'>
                  8
                </div>
                <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                  Romain Grosjean
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
                    src='https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.320.medium.jpg/1584013824254.jpg'
                    alt='Kevin Magnussen'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Denmark
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
                        2
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        103
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-100 px-4 py-4 sm:px-6 haas'>
                <div className='flex items-center justify-center'>
                  <div className='flex-shrink-0 bg-haas text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12'>
                    20
                  </div>
                  <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                    Kevin Magnussen
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
        Tech Specs <span className='font-light'>(VF-20)</span>
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  CHaasis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Carbon-fiber and honeycomb composite structure
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Suspension
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Independent suspension
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Wheels
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  OZ Racing
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Brake System
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Carbon-fiber disc brakes, pads and six-piston calipers
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Transmission
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari servo-controlled hydraulic limited-slip differential
                  with semi-automatic sequential and electronically-controlled
                  gearbox, quick shift (eight gears, plus reverse)
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
                  Clutch
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  AP Racing
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
                  746 kg (including driver)
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
                  Ferrari 065, a turbocharged 1.6 liter V-6 capable of 15,000
                  rpm
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
                  Haas F1 Team
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Base
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Kannapolis, United States
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Team Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Guenther Steiner
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Technical Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Rob Taylor
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  CHaasis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  VF-20
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Engine
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First entry
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  2016 Australian Grand Prix
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Races entered
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  83
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
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 haas'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race victories
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 haas'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Podiums
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 haas'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Pole positions
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 haas'>
                  0
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Fastest laps
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 haas'>
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Haas
