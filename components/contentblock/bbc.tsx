import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const BBC: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-bbc'
          src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
          alt='bbc.com/sport'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            bbc.com
          </div>
          <ActionLink
            href='https://www.bbc.com/sport/formula1/53362027'
            target='_blank'>
            Formula 1: Italy and Russia announced as next venues for season
            return
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Formula 1 has added two more races to its 2020 calendar as it seeks
            to rebuild the season during the coronavirus crisis.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Italy's Mugello will stage its debut Grand Prix on 13 September,
            with the Russian GP in Sochi on 27 September. The two additions take
            the total number of races confirmed so far to 10.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            F1 bosses are aiming to add further races within the coming days and
            are said still to be on target for a calendar of 15-18 races this
            year. The Portimao track in Portugal, another venue new to F1, is
            expected to host a race after Russia.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53362027'
              target='_blank'>
              bbc.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.formula1.com/en/latest/article.formula-1-adds-mugello-and-sochi-to-revised-2020-f1-race-calendar.2tpfQ80LAax8Q0j0OIxdct.html'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded border border-gray-300'
                    src='https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/f94/image/f940178e6c76f7c28047a26b1704ba0f.jpg'
                    alt='f1.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.skysports.com/f1/news/12433/12025410/f1-2020-calendar-increases-with-additions-of-mugello-and-russia'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                    alt='skysports.com'
                  />
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BBC
