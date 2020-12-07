import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=bkfMVc9ACCE'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/bkfMVc9ACCE/sddefault.jpg'
              alt='Norris Strong Words Against Alonsos "Young" Driver Test'
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
            href='https://www.youtube.com/watch?v=bkfMVc9ACCE'
            target='_blank'>
            Norris' Strong Words Against Alonso's "Young" Driver Test
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The post-season Abu Dhabi young drivers test scheduled for later
            this month is meant for drivers who have raced in no more than two
            F1 races. With 314 F1 races under his belt, future Renault driver
            Fernando Alonso definitely does not qualify for this test. However,
            the FIA has given Alonso special permission upon request from his
            future team to take part in this test. McLaren driver Lando Norris
            and current Renault driver Daniel Ricciardo have given their
            thoughts on this{' '}
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
export default First
