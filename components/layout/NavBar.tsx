import React from 'react'
import dynamic from 'next/dynamic'

const News = dynamic(() => import('components/icons/news-archive'))
const Team = dynamic(() => import('components/icons/car'))
const Driver = dynamic(() => import('components/icons/driver'))
const Circuit = dynamic(() => import('components/icons/circuit'))

const NavBar: React.FunctionComponent = () => (
  <nav className='w-full mx-auto flex justify-center container'>
    <div className='w-full flex flex-row justify-between h-12 bg-white-90'>
      <a
        href='/news'
        className='bg-white-10 hover:bg-white-100 inline-block border border-dotted border-b-0 border-l-0 border-primary-on'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <News />
          </div>
        </div>
      </a>
      <a
        href='/constructor-standings'
        className='bg-white-10 hover:bg-white-100 inline-block border  border-dotted border-b-0 border-l-0 border-primary-on'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <Team />
          </div>
        </div>
      </a>
      <a
        href='/driver-standings'
        className='bg-white-10 hover:bg-white-100 inline-block border  border-dotted border-b-0 border-l-0 border-primary-on'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <Driver />
          </div>
        </div>
      </a>
      <a
        href='/circuit-details'
        className='bg-white-10 hover:bg-white-100 inline-block border  border-dotted border-b-0 border-l-0 border-r-0 border-primary-on'>
        <div className='h-32 py-2 flex flex-col ferrari'>
          <div className='flex'>
            <Circuit />
          </div>
        </div>
      </a>
    </div>
  </nav>
)

export default NavBar
