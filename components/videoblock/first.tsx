import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=voE9jvxOy88'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/voE9jvxOy88/sddefault.jpg'
              alt='Why the Racing Point controversy erupted into F1 civil war'
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
            href='https://www.youtube.com/watch?v=voE9jvxOy88'
            target='_blank'>
            Why the Racing Point controversy erupted into F1 civil war
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Formula 1 appeared to turn into a soap opera that broke off for 90
            minutes to let some cars race at the 70th Anniversary Grand Prix at
            Silverstone, with off-track politics taking centre stage as civil
            war broke out in the paddock. Renault's successful protest of Racing
            Point's brake ducts turned out not to be the end of the 'Pink
            Mercedes' storyline, with the guilty verdict prompting more battle
            lines to be drawn, more verbal sparring between the teams, and more
            threats of legal action. With F1's 'Concorde Agreement' talks
            getting messy just before the intended deadline for the teams to
            sign new contracts for 2021 and beyond as well, this is a bad time
            for F1 to drop the harmonious spirit that was fostered during the
            earlier months of 2020. What's really going on, and why is everyone
            so angry? Scott Mitchell is your guide through this tangled web of
            F1 politics.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/mercedes-happy-to-go-to-court-to-prove-innocence/'
              target='_blank'>
              the-race.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
