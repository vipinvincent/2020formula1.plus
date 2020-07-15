import React from 'react'
import YouTube from 'react-youtube'
import ContentLink from 'components/link/ContentLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube videoId='GA7Qf69fXoE' className='w-full h-82 md:h-48' />
        </div>
        <div className='px-2 py-2'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Podcast
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=GA7Qf69fXoE'
            target='_blank'>
            Vettel & Leclerc Crash Analysis: Onboard Ferrari’s Styrian Double
            DNF
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Does Ferrari have a double standard when it comes to their drivers?
            The purpose isn’t to pile on, it’s simply to say if Ferrari doesn't
            hold a fair, CONSISTENT level of accountability, these trends will
            continue making it nearly impossible to recover. Subscribe for more
            F1 Analysis:
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Courtesy{' '}
            <ContentLink href='https://www.crankyyankeef1.com/' target='_blank'>
              CrankyYankeeF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
