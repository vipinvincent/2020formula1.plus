import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const F1Plus = dynamic(() => import('components/f1plus/animation'))

const Header: React.FC = () => {
  return (
    <header className='w-full flex bg-black-5 justify-center mx-auto py-1 header container z-20'>
      <div className='w-full flex justify-center text-sm font-medium h-20 pt-2 pl-1'>
        <Link href={'/'}>
          <a
            href={'/'}
            className='border-transparent border border-dotted focus:outline-none focus:border-primary-focus focus:border-dotted active:outline-none active:shadow-none block w-64 h-auto'>
            <F1Plus />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
