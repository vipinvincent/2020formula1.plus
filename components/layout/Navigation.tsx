import React from 'react'
import dynamic from 'next/dynamic'
import NavLink from 'components/link/NavLink'

const F1Car = dynamic(() => import('components/f1car/navcar'))
const F1Plus = dynamic(() => import('components/f1plus/icon'))

const Navigation: React.FunctionComponent = () => (
  <nav className='w-20 xs:w-20 sm:w-20 md:w-32 4xl:py-0 4xl:w-full bg-white-90 lg:container z-10 relative 4xl:h-16'>
    <div className='w-20 xs:w-20 sm:w-20 md:w-32 pt-0 4xl:pt-0 4xl:h-24 4xl:py-0 4xl:w-full navigation fixed 4xl:relative top-0 left-0 bg-white-90'>
      <div className='mx-auto flex flex-col 4xl:flex-row justify-between 4xl:justify-center text-xs white whitespace-nowrap py-2 xs:py-4 4xl:py-0 px-0 h-full overflow-y-auto flex-grow'>
        <div className='h-12 lg:h-16 pt-2 mb-4 flex flex-col 4xl:hidden '>
          <a href='/'>
            {' '}
            <div className='inline-block'>
              <F1Plus />
            </div>
          </a>
        </div>
        <NavLink href='/mercedes-amg-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col mercedes'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Mercedes</div>
          </div>
        </NavLink>
        <NavLink href='/scuderia-ferrari-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col ferrari'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Ferrari</div>
          </div>
        </NavLink>
        <NavLink href='/redbull-racing-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col redbull'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Red Bull</div>
          </div>
        </NavLink>
        <NavLink href='/mclaren-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col mclaren'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>McLaren</div>
          </div>
        </NavLink>
        <NavLink href='/renault-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col renault'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Renault</div>
          </div>
        </NavLink>
        <NavLink href='/racing-point-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col racingpoint'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Racing Point</div>
          </div>
        </NavLink>
        <NavLink href='/alphatauri-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col alphatauri'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>AlphaTauri</div>
          </div>
        </NavLink>
        <NavLink href='/alfa-romeo-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col alfaromeo'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Alfa Romeo</div>
          </div>
        </NavLink>
        <NavLink href='/haas-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col haas'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Haas</div>
          </div>
        </NavLink>
        <NavLink href='/williams-f1' target='_self'>
          <div className='h-12 lg:h-16 pt-2 lg:pt-4 lg:pb-4 4xl:pt-5 4xl:pb-0 flex flex-col williams'>
            <div className='flex'>
              <F1Car />
            </div>
            <div className='text-center text-secondary-on'>Williams</div>
          </div>
        </NavLink>
      </div>
    </div>
  </nav>
)

export default Navigation
