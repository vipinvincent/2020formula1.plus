import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=qzodB1eCHxs'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/qzodB1eCHxs/sddefault.jpg'
              alt='Red Bull Reveals They Have F1 Exit Clause'
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
            href='https://www.youtube.com/watch?v=qzodB1eCHxs'
            target='_blank'>
            Red Bull Reveals They Have F1 Exit Clause
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Honda’s decision to leave F1 after 2021 seemed a bit abrupt to many
            especially since Red Bull team principal Christian Horner had been
            asked about it just a week ago and he appeared to be rather hopeful
            that the partnership with Honda would continue. Red Bull advisor
            Helmut Marko has now revealed they had known about the possibility
            of Honda leaving F1 among other things while speaking to Laola1
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://formula.world/' target='_blank'>
              Formula World
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
