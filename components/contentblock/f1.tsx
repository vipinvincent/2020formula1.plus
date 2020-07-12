import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://image-cdn.essentiallysports.com/wp-content/uploads/20200206193502/RBR.jpg'
          alt='What To Watch For in the Styrian GP : Hamilton vs Verstappen'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Formula1.com
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.vettel-says-hed-take-red-bull-seat-if-offered-but-verstappen-would-prefer-to.6rC5OsifstIe237yLfl2FT.html'
            target='_blank'>
            What To Watch For in the Styrian GP : Hamilton vs Verstappen and
            Russell in the hunt for points
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            From a mouthwatering match-up on the front row to a mixed up grid
            further back, and Ferrari’s upgraded car to George Russell looking
            to open his point-scoring account, we highlight five key topics to
            keep an eye out for as we go racing for the second consecutive
            weekend at the Red Bull Ring…
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Qualifying was an absolute treat as we saw two incredible talents
            fighting it out for pole position in the wet. But after being so
            closely matched in Q1 and Q2, Lewis Hamilton had too much for Max
            Verstappen in the top 10 shootout, ending up a full 1.216s ahead as
            Verstappen spun away his chance at improving.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Still, after Hamilton was only fifth on the grid last weekend
            following a penalty, this time round we will see the pair line up
            side-by-side as they both look to respond to Valtteri Bottas’ win
            from the first race. On that occasion, Verstappen’s race potential
            was hidden somewhat as he retired early on, but Mercedes held an
            advantage until gearbox issues caused concern for both cars.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.vettel-says-hed-take-red-bull-seat-if-offered-but-verstappen-would-prefer-to.6rC5OsifstIe237yLfl2FT.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-2 md:pb-0 md:pr-4'>
            Follow this topic on -
          </div>
          <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53377338'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                  alt='skysports.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/podcast-styrian-gp-qualifying-hamilton/4831578/'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div> */}
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/hamiltons-not-from-this-world-pole-lap-explained/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-2 object-contain rounded bg-gray-800'
                  src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/11/hamilton-when-youre-really-at-one-with-the-car/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-3 object-contain rounded border border-gray-200'
                  src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/qualifying-report-styrian-gp-2020/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-2 object-contain rounded border border-gray-200'
                  src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default F1
