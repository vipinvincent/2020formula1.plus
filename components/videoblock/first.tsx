import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=LLVM70-TUpc'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/LLVM70-TUpc/sddefault.jpg'
              alt='Is Alonso Wasting His Time Testing A 2018 F1 Car?'
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
            href='https://www.youtube.com/watch?v=LLVM70-TUpc'
            target='_blank'>
            Is Alonso Wasting His Time Testing A 2018 F1 Car?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            In preparation for his full time return to F1 in 2021, Fernando
            Alonso has been testing Renault's 2018 challenger, to try and fully
            acclimatise himself with the new regulations and re-solidify his
            place with his former team. But is he really going to get something
            out of these recent test sessions? Jon Noble takes a look at if
            Alonso is wasting his time.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
