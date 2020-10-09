import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=jIDT-EDprPM'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/jIDT-EDprPM/sddefault.jpg'
              alt='How to Master the Nürburgring F1 Track! | Nico Rosberg'
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
            PODCAST
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=jIDT-EDprPM'
            target='_blank'>
            How to Master the Nürburgring F1 Track! | Nico Rosberg
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            My next F1 Fridays episode – this time on a Thursday, as there’s the
            special surprise Hot Lap video going live on Friday...stay tuned!!
            F1 is back in Germany for the 2020 Eifel Grand Prix at the
            Nürburgring! It’s amazing to see the F1 having a GP in Germany again
            – I’m sure it’s going to be an interesting race weekend. Check out
            my F1 Q&A answering your questions – right from the Nürburgring! Of
            course there’s also the simulator hot lap and in-depth analysis of
            the Nürbugring F1 Track. I’m looking forward to your feedback &
            don’t forget to subscribe for the Hot Lap video!!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.nicorosberg.com/' target='_blank'>
              Nico Rosberg
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
