import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=qguY_T0cnQM'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/qguY_T0cnQM/sddefault.jpg'
              alt='Can Ferrari save itself from embarrassment? | LATEST NEWS | Hamiltons seventh, Pirellis Mario Isola, and Red Bulls Bosphorus run
'
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
            href='https://www.youtube.com/watch?v=qguY_T0cnQM'
            target='_blank'>
            Can Ferrari save itself from embarrassment?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point heads to the Kingdom of Bahrain with momentum behind
            it, having overtaken its midfield rivals for third place in the
            standings, which it’ll have to work hard to keep. … with the minnow
            Silverstone squad just five points up on McLaren, and 18 ahead of
            Renault in fifth: a comfort for now, as the French marque has scored
            just five double points finishes this year. Watch the video, and
            tell us what you think in the comments…
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://unbeaten.com/formula1' target='_blank'>
              Unbeaten F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
