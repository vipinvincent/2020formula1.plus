import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-skysports'
          src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            skysports.com
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12024230/fernando-alonso-jenson-button-martin-brundle-on-renault-f1-move'
            target='_blank'>
            Fernando Alonso: Jenson Button and Martin Brundle on Renault F1 move
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Sky F1's Jenson Button and Martin Brundle believe Fernando Alonso's
            return to Formula 1 will be "box-office" and great for the sport,
            after the two-time champion's 2021 move to Renault was confirmed.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Alonso, after two seasons out of F1, will be back next year with the
            team that took him to his titles in 2005 and 2006, replacing Daniel
            Ricciardo. Button was one of Alonso's last team-mates in F1 -
            partnering him at McLaren from 2015 to 2017 - and he admitted he was
            not surprised that the Spaniard wanted to return, nor that Renault
            came calling.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            "Fernando just loves his racing, it doesn't really matter what it
            is, he wants to get behind the wheel of something," said the 2009
            world champion ahead of this weekend's Styrian GP - live and
            exclusive on Sky Sports F1.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12024230/fernando-alonso-jenson-button-martin-brundle-on-renault-f1-move'
              target='_blank'>
              skysports.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default SkySports
