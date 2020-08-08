import React from 'react'
import ContentLink from 'components/link/ContentLink'

const AlfaRomeo: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Alfa Romeo Racing F1 - C39
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mb-4'>
        <div className='h-32 sm:h-48 lg:h-64 w-full text-center'>
          <img
            className='w-full h-full object-cover rounded-tl-xxl rounded-br-xl-t text-center'
            src='/images/cars/alfa-romeo.jpg'
            alt='Alfa Romeo Racing ORLEN C39'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-sm leading-normal text-gray-700'>
              Sauber Motorsport ‘to manages and operates’ le team ‘Alfa Romeo
              Racing ORLEN’ engagé dans le championnat du monde de F1, a
              présenté la monplace pour la saison 2020, dénommé C39, juste avant
              la session début des essais hivernaux, sur la pitlane du Circuit
              de Barcelona-Catalunya. La révélation de la voiture vient
              compléter la grille de départ, Alfa Romeo Racing ORLEN étant
              ‘final team to launch its livery ahead of the new season’. ellipse
              narrative. Les sessions de F1 Testings, ‘six days of on-track’
              viennent de se terminer et c’est la F1 2020 C39 qui a roulé le
              plus rapidement en terme de top speed avec 334 km/h. Sous le capot
              carénage de la monoplace Alfa Romeo c’est un bloc moteur V6 1.6L
              Power Unit Ferrari. Présentation.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              The livery, developed in close cooperation with the Centro Stile
              Alfa Romeo, features the iconic red of Alfa Romeo, with scarlet
              stripes now extending all the way towards the front of the
              chassis. Designed and developed under the coordination of
              Technical Director, Jan Monchaux, the C39 is a completely new
              concept aimed at helping the team build on the strong steps made
              in the last two years and continue its progress towards the front
              of the grid.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              In the current era of hybrid Formula One power units, the main
              power source is provided by a V6 1600cc engine, mated to a single
              turbocharger. The energy harvested during a lap by two electric
              motors (MGUK and MGUH) is stored into a battery pack and deployed
              via a 120kW electric motor. The gearbox has 8 forward gears and 1
              reverse gear. The entire drivetrain is supplied by Ferrari.
            </p>
            <p className='mt-2 text-sm leading-normal text-gray-700'>
              The C39 is a natural evolution of last year’s car, even though it
              doesn’t share a lot with its predecessor. It’s the usual process
              of constant improvement, but it’s a brand new beast. It is
              expected to improve on what they achieved last season, to make a
              step forward and hopefully be able to fight for the position at
              the top of the midfield. The survival cell is the heart of the
              entire car and by far the most complicated structure in a modern
              Formula One car. The survival cell is made from a sandwich style
              carbon composite structure. It offers superior stiffness to weight
              ratio and structural integrity. The survival cell accommodates the
              driver’s cockpit area and it is secured to the engine and gearbox
              by 6 fasteners which have regulated dimensions and coordinates.
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
                    src='https://www.formula1.com/content/fom-website/en/drivers/kimi-raikkonen/_jcr_content/image.img.320.medium.jpg/1584013014200.jpg'
                    alt='Kimi Räikkönen'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Finland
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Podiums -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        103
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      World Championships -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        1
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        315
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-100 px-4 py-4 sm:px-6 aifaromeo'>
              <div className='flex items-center justify-center'>
                <div className='flex-shrink-0 bg-alfaromeo text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12'>
                  7
                </div>
                <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                  Kimi Räikkönen
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
                    src='https://www.formula1.com/content/fom-website/en/drivers/antonio-giovinazzi/_jcr_content/image.img.320.medium.jpg/1584013824254.jpg'
                    alt='Antonio Giovinazzi'
                  />
                </div>
                <div className='h-32 sm:h-40 hidden lg:w-2/3   lg:flex flex-col justify-between text-left bg-white-100 pl-4'>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Country -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        Italy
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
                        5
                      </span>
                    </div>
                  </div>
                  <div className='px4 py-2 border-b border-gray-100'>
                    <div className='text-sm leading-5 font-medium text-gray-500'>
                      Grands Prix -{' '}
                      <span className='text-base leading-5 font-bold text-gray-700'>
                        23
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-100 px-4 py-4 sm:px-6 aifaromeo'>
                <div className='flex items-center justify-center'>
                  <div className='flex-shrink-0 bg-alfaromeo text-xl font-black text-white-100 rounded-tl-xxl rounded-br-xxl py-2 px-4 w-16 h-12'>
                    99
                  </div>
                  <div className='text-xl leading-5 text font-medium flex-0 px-4'>
                    Antonio Giovinazzi
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
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Tech Specs <span className='font-light'>(C39)</span>
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
                  Alfa Romeo Racing Orlen Carbon-composite monocoque
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Suspension
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Front : Double wishbone, inboard spring and Multimatics damper
                  units actuated by pushrods
                  <br /> Rear : Multilink, inboard hydraulic suspension actuated
                  by pullrods
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
                  Brembo 6 piston brake callipers. Brembo carbon-composite and
                  discs and pads
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Transmission
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari 8-speed quick-shift carbon gearbox, longitudinally
                  mounted, carbon-composite clutch
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
                  Magneti Marelli, McLaren Electronic Systems, Bosch
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
                  746 kg minimum weight including driver at all times
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
                  2020 Ferrari Hybrid
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
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
                  Alfa Romeo Racing ORLEN
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Base
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Hinwil, Switzerland
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Team Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Frédéric Vasseur
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Technical Chief
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Jan Monchaux
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Chassis
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  C39
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
                  1950 British Grand Prix
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Races entered
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  131
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
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 aifaromeo'>
                  2
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race victories
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 aifaromeo'>
                  10
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Podiums
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 aifaromeo'>
                  26
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Pole positions
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 aifaromeo'>
                  12
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Fastest laps
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 aifaromeo'>
                  14
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AlfaRomeo
