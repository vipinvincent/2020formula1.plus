import React from 'react'
import YouTube from 'react-youtube-embed'
import ContentLink from 'components/link/ContentLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube id='jTatcZ0QWhk' />
        </div>
        <div className='px-2 py-2'>
          <ContentLink
            href='https://www.youtube.com/watch?v=jTatcZ0QWhk'
            target='_blank'>
            Mattia Binotto: The WRONG Man for Ferrari?
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mattia Binotto is the current Ferrari Team Principal, ex Ferrari
            Chief Technical Officer, and wearer of wonderful glasses. Today we
            take a deep dive into the man himself, where he's from, how he got
            to where he is today, and whether he's the right man to take Ferrari
            forward.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Courtesy{' '}
            <ContentLink href='https://tommof1.buzzsprout.com/' target='_blank'>
              Tommo F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
