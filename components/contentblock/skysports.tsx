import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-skysports'
          src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            skysports.com
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12022886/how-f1-returned-and-adapted-at-austrian-gp-rachel-brookes-diary'
            target='_blank'>
            How F1 returned and adapted at Austrian GP | Rachel Brookes' diary
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Rachel Brookes{' '}
            <span className='text-sm italic'>
              (Formula 1 Reporter & Columnist)
            </span>{' '}
            - Friday March 13 seemed a long time ago as I drove to our Sky
            headquarters in west London for my first COVID-19 test ahead of F1's
            return at the Austrian GP. We had managed to make some programmes
            during the lockdown/shutdown over the internet, but I hadn't seen
            anyone since landing back from Australia. We had all been at dinner
            on the Thursday night in Melbourne when we got the message that
            someone from McLaren had tested positive for coronavirus. Phones
            started going off and our exec. producer and production manager left
            the table to make calls. It had been a strange atmosphere in the
            paddock that day, almost as if we were all waiting for this, the
            inevitable. We all desperately wanted to go racing but we were also
            well aware of the developing crisis worldwide and no country was
            going to escape it.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12022886/how-f1-returned-and-adapted-at-austrian-gp-rachel-brookes-diary'
              target='_blank'>
              skysports.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default SkySports
