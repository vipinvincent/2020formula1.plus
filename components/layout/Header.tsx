import React from 'react'
import dynamic from 'next/dynamic'
import NavLink from 'components/link/NavLink'
import { motion } from 'framer-motion'

const News = dynamic(() => import('components/icons/news'))
const Team = dynamic(() => import('components/icons/team'))
const Driver = dynamic(() => import('components/icons/driver-alt'))
const Circuit = dynamic(() => import('components/icons/circuit-alt'))
const F1Plus = dynamic(() => import('components/f1plus/animation'))

const Header: React.FC = () => {
  return (
    <header
      className='w-full bg-white-100 fixed xs:relative top-0 right-0 left-0 lg:flex lg:items-center lg:justify-between mx-auto py-1 header container z-20 shadow'
      id='top'>
      <div className='hidden lg:flex justify-end lg:order-2 w-8/12 pr-4 h-10 xs:h-20 whitespace-no-wrap'>
        <NavLink href='/' target='_self'>
          <div className='h-20 pl-2 pr-4 flex flex-row content-center self-center grow'>
            <div className='flex content-center self-center leading-tight text-base'>
              <News />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className='flex content-center self-center leading-tight text-base pt-0'>
              Latest News
            </motion.div>
          </div>
        </NavLink>
        <NavLink href='/constructor-standings' target='_self'>
          <div className='h-20 py-2 flex flex-row content-center self-center grow'>
            <div className='flex content-center self-center leading-tight text-base'>
              <Team />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className='flex content-center self-center leading-tight text-base pt-0 pr-4'>
              Team Standings
            </motion.div>
          </div>
        </NavLink>
        <NavLink href='/driver-standings' target='_self'>
          <div className='h-20 py-2 flex flex-row content-center self-center grow'>
            <div className='flex content-center self-center leading-tight text-base'>
              <Driver />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className='flex content-center self-center leading-tight text-base pt-0 pr-4'>
              Driver Standings
            </motion.div>
          </div>
        </NavLink>
        <NavLink href='/circuit-details' target='_self'>
          <div className='h-20 py-2 flex flex-row content-center self-center grow'>
            <div className='flex content-center self-center leading-tight text-base'>
              <Circuit />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className='flex content-center self-center leading-tight text-base pt-0 pr-1'>
              Circuit Details
            </motion.div>
          </div>
        </NavLink>
      </div>
      <div className='lg:order-1 w-full lg:w-4/12'>
        <div className='w-full flex justify-center lg:justify-start text-sm font-medium h-16 xs:h-20 py-1 pl-1'>
          <NavLink
            target='_self'
            href={'/'}
            className='border-transparent border border-dotted focus:outline-none focus:border-primary-focus focus:border-dotted active:outline-none active:shadow-none block px-2 grow'>
            <F1Plus />
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
