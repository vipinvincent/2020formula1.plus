import React from 'react'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Footer: React.FunctionComponent = () => (
  <footer className='w-full flex flex-col justify-center mx-auto footer container pb-12 lg:pb-0 bg-white-100 container border-t border-gray-300'>
    <p className='text-center text-gray-700 text-xs font-normal leading-normal pt-4 px-4'>
      © 2020
      <span className='text-xs pl-1'>formula1.plus</span>
    </p>
    <div className='mt-0 flex justify-center'>
      <ThumbnailLink href='https://twitter.com/formula1_plus' target='_blank'>
        <div className='text-gray-400 hover:text-blue-500'>
          <span className='sr-only'>Twitter</span>
          <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
          </svg>
        </div>
      </ThumbnailLink>
      <ThumbnailLink href='mailto:f1plus.xtrios@gmail.com' target='_blank'>
        <div className='text-gray-400 hover:text-red-500 ml-4'>
          <span className='sr-only'>Email</span>
          <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
          </svg>
        </div>
      </ThumbnailLink>
    </div>
  </footer>
)

export default Footer
