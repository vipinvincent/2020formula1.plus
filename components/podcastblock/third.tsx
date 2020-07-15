import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=GA7Qf69fXoE'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-contain rounded-tl-xxl'
              src='https://img.youtube.com/vi/GA7Qf69fXoE/maxresdefault.jpg'
              alt=' Vettel & Leclerc Crash Analysis: Onboard Ferrari’s Styrian Double DNF'
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
            View more at{' '}
            <ContentLink href='https://www.crankyyankeef1.com/' target='_blank'>
              CrankyYankeeF1
            </ContentLink>
          </p>
        </div>
        {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53377338'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/red-bull-albon-slow-pace-styria/4833470/'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150565/red-bull-expects-to-close-gap-on-mercedes-in-hungary'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/hamiltons-not-from-this-world-pole-lap-explained/'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg bg-gray-800'
                  src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/14/horner-i-hope-well-be-more-competitive-in-hungary/'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/qualifying-report-styrian-gp-2020/'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div> */}
        {/* </div>
    </div> */}
      </div>
    </div>
  )
}
export default Third
