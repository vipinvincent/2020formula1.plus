import React from 'react'
import dynamic from 'next/dynamic'

const F1Car = dynamic(() => import('components/f1car/navcar'))

const Navigation: React.FunctionComponent = () => (
  <nav className='w-16 xs:w-20 sm:w-20 md:w-32 4xl:w-full bg-white-100 lg:container z-10 navigation'>
    <div className='mx-auto flex flex-col 4xl:flex-row justify-between 4xl:justify-center text-xs white whitespace-no-wrap bg-white-30 py-0 xs:py-4 4xl:py-0 px-2 4xl:px-6 h-full overflow-y-auto flex-grow'>
      <div className='h-16 py-2 flex flex-col ferrari'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Ferrari</div>
      </div>
      <div className='h-16 py-2 flex flex-col mercedes'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Mercedes</div>
      </div>
      <div className='h-16 py-2 flex flex-col haas'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Haas</div>
      </div>
      <div className='h-16 py-2 flex flex-col mclaren'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>mclaren</div>
      </div>
      <div className='h-16 py-2 flex flex-col alfaromeo'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Alfa Romeo</div>
      </div>
      <div className='h-16 py-2 flex flex-col redbull'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Red Bull</div>
      </div>
      <div className='h-16 py-2 flex flex-col renault'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Renault</div>
      </div>
      <div className='h-16 py-2 flex flex-col alphatauri'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>AlphaTauri</div>
      </div>
      <div className='h-16 py-2 flex flex-col williams'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Williams</div>
      </div>
      <div className='h-16 py-2 flex flex-col racingpoint'>
        <div className='flex'>
          <F1Car />
        </div>
        <div className='text-center text'>Racing Point</div>
      </div>
    </div>
  </nav>
)

export default Navigation
