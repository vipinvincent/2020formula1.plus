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
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            bbc.com
          </div>
          <ActionLink
            href='https://www.bbc.com/sport/formula1/53383522'
            target='_blank'>
            Lewis Hamilton's statesman-like presence comes to the fore after
            Styrian GP
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton stood on the podium after a dominant victory in the
            Styrian Grand Prix with his fist raised in a black power salute, an
            image emblematic of the twin goals the Mercedes driver has set
            himself this year.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Hamilton started off the delayed Formula 1 season with a difficult
            race in Austria a week ago, amid his prominent role in organising an
            anti-racism demonstration by the drivers on the grid. On Thursday,
            he was asked before the second race of the season at the same Red
            Bull Ring track whether he now needed to refocus on the
            championship.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            "I'm still focused on both," he said. "Trying to fight and win this
            championship but also fighting for equal rights." Hamilton is
            bidding to win a seventh world championship this year, an
            achievement that would equal the all-time record held by Michael
            Schumacher. It's not clear, given his achievements, why anyone might
            have doubts about his ability to deliver on that aim while also
            expressing the need for the world to make progress on human rights.
            But if they did, they were disabused of it by his performance this
            weekend.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53383522'
              target='_blank'>
              bbc.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://the-race.com/formula-1/leclerc-summoned-to-stewards-over-two-separate-incidents/'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded border border-gray-300'
                    src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                    alt='the-race.com'
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
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default BBC
