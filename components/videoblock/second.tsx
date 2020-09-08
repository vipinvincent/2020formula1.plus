import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=ZEcJJk_UrZw'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/ZEcJJk_UrZw/sddefault.jpg'
              alt=' WINNERS VLOG! Pierre Gaslys Italian Grand Prix Victory'
            />
          </div>
          <div className='h-full w-full absolute top-0 left-0 flex justify-center items-center'>
            <img
              className='w-auto h-16'
              src='/images/youtube.png'
              alt='youtube'
            />
          </div>
        </div>
      </ThumbnailLink>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Video
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=ZEcJJk_UrZw'
            target='_blank'>
            WINNER'S VLOG! Pierre Gasly's Italian Grand Prix Victory
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Formula 1 has a new winner! Pierre Gasly becomes the 109th F1 Race
            Winner at the 2020 Italian Grand Prix, and the first Frenchman to
            win a Grand Prix since Olivier Panis won the 1996 Monaco Grand Prix!
            We spent time with Pierre after all of the commotions started to die
            down, and got his thoughts on what must be the best day of his life
            (once his phone stopped buzzing!)
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.scuderiaalphatauri.com/en/'
              target='_blank'>
              Scuderia AlphaTauri
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
