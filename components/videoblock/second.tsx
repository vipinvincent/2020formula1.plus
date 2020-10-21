import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Eq2L16DK6DY'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Eq2L16DK6DY/sddefault.jpg'
              alt='Valtteri Bottas talks social media, Hamilton, Toto Wolff & if his career panning out how he expected'
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
            href='https://www.youtube.com/watch?v=Eq2L16DK6DY'
            target='_blank'>
            Valtteri Bottas talks social media, Hamilton, Toto Wolff & if his
            career panning out how he expected
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Natalie Pinkham sat down with Valtteri Bottas at the Eifel Grand
            Prix to discuss just what goes on in the life of the Mercedes
            driver. Bottas talks about the social media hate he receives, and
            how he tries to channel it into motivation, what it's like being
            teammates with Lewis Hamilton, what influence Toto Wolff has & is
            his career panning out how he expected?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.skysports.com/f1/' target=' _blank'>
              Sky Sports F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
