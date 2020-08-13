import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=oA7Bf-D3qAY'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/oA7Bf-D3qAY/sddefault.jpg'
              alt='Ferrari & Renault appeal Racing Point brake duct ruling '
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
            href='https://www.youtube.com/watch?v=oA7Bf-D3qAY'
            target='_blank'>
            Ferrari & Renault appeal Racing Point brake duct ruling
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Last week, the FIA released their findings into the numerous
            protests against the Racing Point brake ducts, with the protests
            being lodged after every race by Renault. The crux of the matter is
            that the brake ducts were found by the FIA to have been designed by
            Mercedes in early 2019, with the Sporting Regulations making this
            illegal for 2020 through a 'listed parts' rule that means teams must
            design the brake ducts themselves. The team were deducted 15 points
            in the Constructor's Championship, and given a 400,000 euro fine.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.formulaspy.com' target='_blank'>
              Thomas Maher
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
