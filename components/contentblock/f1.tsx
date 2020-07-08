import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/03/thumbs/800x531/44287.jpg'
          alt='Ferrari SF1000 2020 upgrades'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Formula1.com
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.sore-and-bruised-russell-hoping-for-better-luck-in-styrian-gp-as-mercedes.4oMMmtotexj8quB3jj6aj4.html'
            target='_blank'>
            ‘Sore and bruised’ Russell hoping for better luck in Styrian GP as
            Mercedes probe engine issue
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            George Russell says he’s “sore and bruised” after getting back into
            a Formula 1 car on the weekend for the first time since February,
            but is hoping his team and engine suppliers Mercedes can solve the
            issue that cost him a race finish and potential points in time for
            the Styrian Grand Prix this Sunday. Russell had just missed out on a
            first appearance in Q2 by 0.073s on Saturday, and with a number of
            cars retiring in the early part of the race the chance of points was
            increasing. Max Verstappen, Daniel Ricciardo, Lance Stroll and Kevin
            Magnussen had all retired by the time Russell slowed and stopped on
            the inside of Turn 4, with the Willliams Head of Vehicle Performance
            Dave Robson going on to say that Mercedes want to work out what
            happened. The Williams issue was one of two retirements from the six
            Mercedes-powered cars on Sunday, with Racing Point having to tell
            Stroll to return to the garage and drop out of the race after he
            suffered a loss of power.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.sore-and-bruised-russell-hoping-for-better-luck-in-styrian-gp-as-mercedes.4oMMmtotexj8quB3jj6aj4.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
        {/* <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 py-2 md:py-4 px-4 text-sm md:text-lg text-center md:text-left'>
            <div className='w-full md:w-1/3 pb-2 md:pb-0 md:pr-4'>
              Follow this topic on -
            </div>
            <div className='w-full flex flex-row justify-center md:justify-start md:w-2/3'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/fernando-alonso-set-renault-f1-return/4827735/'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                    alt='motorsport.com'
                  />
                </ActionLink>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  )
}
export default F1
