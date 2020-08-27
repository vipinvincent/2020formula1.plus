import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=HO2P3LcZcTA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/HO2P3LcZcTA/sddefault.jpg'
              alt='Renault call off their protest against Racing Point in brake duct saga'
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
            href='https://www.youtube.com/watch?v=HO2P3LcZcTA'
            target='_blank'>
            Renault call off their protest against Racing Point in brake duct
            saga
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault have decided to call off the dogs in their pursuit of a
            larger punishment for Racing Point. The pink team were stripped of
            fifteen points and fined 400,000 euro for the Styrian Grand Prix,
            and reprimanded for every other race they’ve entered since. This was
            after an FIA investigation into their brake ducts adjudged them to
            have been designed by Mercedes in 2019, with Racing Point using the
            parts throughout 2019 and into 2020. This was legal in 2019, but not
            in 2020, leading to a complicated mess where the parts in question
            are legal from a technical perspective, but not from a sporting
            perspective.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href=' http://www.formulaspy.com' target='_blank'>
              Thomas Maher
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
