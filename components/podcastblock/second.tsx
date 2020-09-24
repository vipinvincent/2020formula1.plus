import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Y2ag7rFAyjE'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Y2ag7rFAyjE/sddefault.jpg'
              alt='When will Mercedes dominance end? | Questions from our YouTube audience | The Race F1 Podcast'
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
            Podcast
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=Y2ag7rFAyjE'
            target='_blank'>
            When will Mercedes' dominance end? | Questions from our YouTube
            audience | The Race F1 Podcast
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            For this special episode of The Race F1 Podcast we asked you, our
            dear YouTube audience, for questions about the 2020 F1 season so
            far. We received far more questions than we could answer, but we did
            our best to pick up on the main topics that kept coming up! You can
            listen to our main F1 podcast every week by searching for 'The Race
            F1 Podcast' on your platform of choice, but as these questions came
            from you, we're uploading this episode onto our YouTube channel as a
            special thank you.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/new-f1-squads-must-now-pay-existing-teams-200m-to-enter/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
