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
            href='https://www.bbc.com/sport/formula1/53382391'
            target='_blank'>
            Lewis Hamilton takes dominant Styrian Grand Prix win after Ferraris
            collide
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mercedes driver Lewis Hamilton cruised to a comfortable victory in
            the Styrian Grand Prix. The world champion's first victory of the
            year was founded on a stupendous performance in wet qualifying, in
            which he took pole by more than 1.2 seconds.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Hamilton led from pole position, headed only at the pit-stops, as
            team-mate Valtteri Bottas overtook Red Bull's Max Verstappen late on
            for second. The Ferraris retired early after colliding with each
            other on lap one.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            It was another dark day for the Italian team, after an uncompetitive
            showing in qualifying, as Charles Leclerc apologised for a rash move
            on the first lap that took out both cars.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53382391'
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
