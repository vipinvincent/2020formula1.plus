import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://s3-eu-west-1.amazonaws.com/crash.net/styles/large_article/s3/image_importer/F1/1-1594392945.jpg?itok=VMlFFRaq'
          alt='Daniel Ricciardo limping following the massive accident during FP2'
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
            FP2: Verstappen heads Bottas and Perez at the Red Bull Ring as
            Ricciardo crashes
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            2019 Austrian Grand Prix winner Max Verstappen set the pace in Free
            Practice 2 for the 2020 Styrian Grand Prix at the Red Bull Ring,
            heading a session that saw a red flag early on after Daniel
            Ricciardo had a big impact with the barriers at Turn 9.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Having had two decent efforts deleted for track limit infringements,
            Red Bull’s Verstappen eventually posted a lap of 1m 03.660s – around
            seven-tenths shy of last week’s pole lap at the same track – and
            0.043s up on the Mercedes of Valtteri Bottas.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Behind Verstappen and Bottas, the Racing Points confirmed their pace
            at the sharp end of the field, FP1 leader Sergio Perez 0.217s behind
            Verstappen in third, three-tenths up on team mate Lance Stroll in
            fourth.
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
                href='https://www.bbc.com/sport/formula1/53364482'
                target='_blank'>
                <img
                  className='w-auto ull h-8 object-contain rounded'
                  src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/styrian-gp-fp2-report-verstappen/4830172/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 object-contain rounded'
                  src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12025773/styrian-gp-practice-two-max-verstappen-fastest-daniel-ricciardo-crashes'
                target='_blank'>
                <img
                  className='w-auto ull h-8 object-contain rounded'
                  src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                  alt='skysports.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150478/verstappen-tops-styrian-gp-second-practice'
                target='_blank'>
                <img
                  className='w-auto ull h-8 object-contain rounded'
                  src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto ull h-8 object-contain rounded'
                  src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/verstappen-fastest-hamilton-only-sixth-styrian-grand-prix-practice-two-report/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 mt-0 p-2 object-contain rounded bg-gray-800'
                  src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/10/styria-fp2-verstappen-shows-handy-pace/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 mt-0 p-3 object-contain rounded border border-gray-200'
                  src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/styrian-grand-prix-fp2/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 mt-0 p-2 object-contain rounded border border-gray-200'
                  src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default F1
