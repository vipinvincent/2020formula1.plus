import React from 'react'
import dynamic from 'next/dynamic'
import NavLink from 'components/link/NavLink'
import TopNav from 'components/link/TopNav'
import { motion } from 'framer-motion'

const Home = dynamic(() => import('components/icons/latest'))
const Team = dynamic(() => import('components/icons/team'))
const Driver = dynamic(() => import('components/icons/driver-alt'))
const Circuit = dynamic(() => import('components/icons/circuit-alt'))
const F1Plus = dynamic(() => import('components/f1plus/animation'))

const Header: React.FC = () => {
  return (
    <header
      className='w-full bg-white-100 lg:flex lg:items-center lg:justify-between mx-auto py-1 header container z-20'
      id='top'>
      <div className='hidden lg:flex justify-end lg:order-2 w-8/12 pr-4 h-20 whitespace-no-wrap'>
        <div className='h-20 pl-2 pr-4 flex flex-row content-center self-center'>
          <div className='flex content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover'>
            <Home />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className='flex  content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover pt-0 pr-4'>
            <TopNav href='/' target='_self'>
              Home
            </TopNav>
          </motion.div>
        </div>
        <div className='h-20 py-2 flex flex-row content-center self-center'>
          <div className='flex content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover'>
            <Team />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className='flex  content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover pt-0 pr-4'>
            <TopNav href='/constructor-standings' target='_self'>
              Team Standings
            </TopNav>
          </motion.div>
        </div>
        <div className='h-20 py-2 flex flex-row content-center self-center'>
          <div className='flex content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover'>
            <Driver />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className='flex  content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover pt-0 pr-4'>
            <TopNav href='/driver-standings' target='_self'>
              Driver Standings
            </TopNav>
          </motion.div>
        </div>
        <div className='h-20 py-2 flex flex-row content-center self-center'>
          <div className='flex content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover'>
            <Circuit />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className='flex  content-center self-center leading-tight text-base text-primary-on hover:text-primary-hover pt-0 pr-1'>
            <TopNav href='/circuit-details' target='_self'>
              Circuit Details
            </TopNav>
          </motion.div>
        </div>
      </div>
      <div className='lg:order-1 w-full lg:w-4/12'>
        <div className='w-full flex justify-center lg:justify-start text-sm font-medium h-20 pt-1 pl-1'>
          <NavLink
            target='_self'
            href={'/'}
            className='border-transparent border border-dotted focus:outline-none focus:border-primary-focus focus:border-dotted active:outline-none active:shadow-none block w-auto h-auto rounded-tl-xl rounded-br-xl px-2'>
            <F1Plus />
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
