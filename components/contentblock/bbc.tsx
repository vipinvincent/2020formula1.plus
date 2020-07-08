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
            href='https://www.bbc.com/sport/formula1/53325412'
            target='_blank'>
            Fernando Alonso to return to Formula 1 with Renault in 2021
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Fernando Alonso is set to return to Formula 1 with Renault next
            year. The Spanish two-time world champion, who will be 39 later this
            month, has signed and will be confirmed soon, sources have told BBC
            Sport. Alonso will return to the outfit with whom he won his World
            Championships, and for whom he has already driven twice during his
            career. He left BBC in 2018 and is due to make a third attempt to
            win the Indianapolis 500 with McLaren in August. A spokesperson for
            Renault said the team "declined to comment on rumours". Alonso will
            partner Frenchman Esteban Ocon and replace Australian Daniel
            Ricciardo, who is moving to McLaren at the end of this season.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53325412'
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
                  href='https://www.motorsport.com/f1/news/fernando-alonso-set-renault-f1-return/4827735/'
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
                  href='https://www.skysports.com/f1/news/12433/12023184/fernando-alonso-to-return-to-f1-with-renault-for-2021-season'
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
                  href='https://www.autosport.com/f1/news/150405/alonso-set-to-sign-with-renault-f1-team-from-2021'
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
                  href='https://www.espn.in/f1/story/_/id/29421931/fernando-alonso-set-return-f1-renault-2021'
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
                  href='https://the-race.com/formula-1/alonso-to-return-to-f1-with-renault-in-2021-reports/'
                  target='_blank'>
                  <img
                    className='w-auto ull h-6 mt-1 p-1 object-contain rounded bg-gray-800'
                    src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                    alt='the-race.com'
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
