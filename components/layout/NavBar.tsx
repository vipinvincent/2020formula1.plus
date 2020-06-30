import React from 'react'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('components/icons/home'))
const Team = dynamic(() => import('components/icons/car'))
const Driver = dynamic(() => import('components/icons/driver'))
const GoTop = dynamic(() => import('components/icons/gotop'))

const NavBar: React.FunctionComponent = () => (
  <nav className='w-full mx-auto flex justify-center container'>
    <div className='w-full flex flex-row justify-between h-12 bg-black-85'>
      <a href='/'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <Home />
          </div>
        </div>
      </a>
      <a href='/circuit-details'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <Team />
          </div>
        </div>
      </a>
      <a href='/driver-standings'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <Driver />
          </div>
        </div>
      </a>
      <a href='#top'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <GoTop />
          </div>
        </div>
      </a>
    </div>
  </nav>
)

export default NavBar
