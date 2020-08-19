import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative  mt-0'>
      <div className='h-32 sm:h-48 w-full bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl bg-skysports'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12046960/nico-hulkenberg-eyes-seat-on-2021-f1-grid-after-super-silverstone'
            target='_blank'>
            Nico Hulkenberg eyes seat on 2021 F1 grid after super Silverstone
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Nico Hulkenberg says he will continue talks with Formula 1 teams
            about a full-time return to the grid in 2021 - even if he doesn't
            get another chance to shine as a Racing Point stand-in this year.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Hulkenberg, who by paddock consensus was unfortunate to lose his
            seat last season, shot back to F1 prominence as a temporary
            replacement for Sergio Perez for the two races at Silverstone, and
            last weekend qualified an incredible third before securing valuable
            points for Racing Point. His performances will only increase
            speculation about a possible return next season, and Hulkenberg
            admitted to Sky F1 after the 70th Anniversary GP that he is staying
            in touch with team bosses, but that a resolution might still take
            some time.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "There are conversations already ongoing for quite a while, not just
            now because of this," the 32-year-old, who left Renault last year,
            said. "Obviously that's kind of a process, you stay in touch with
            team principals, you talk about possible opportunities and what
            might change. "That's still ongoing, obviously behind the scenes. I
            think it's still going to take a while to get an answer there, but
            that's OK for me."
          </p>
          <p className='mt-8 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12046960/nico-hulkenberg-eyes-seat-on-2021-f1-grid-after-super-silverstone'
              target='_blank'>
              skysports.com
            </ContentLink>{' '}
            for More Details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='w-full flex flex-row justify-center my-1'>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.formula1.com/en/latest/article.charles-leclerc-hit-with-three-place-grid-penalty-for-styrian-grand-prix.5WZl6mpWdKvacCkzIDROiN.html'
                    target='_blank'>
                    <img
                      className='w-auto h-8 object-contain rounded border border-gray-300'
                      src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/icon_ufqtuk.png'
                      alt='f1.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.motorsport.com/f1/news/leclerc-grid-penalty-styrian-grand-prix/4831419/'
                    target='_blank'>
                    <img
                      className='w-auto h-8 object-contain rounded'
                      src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                      alt='motorsport.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.autosport.com/f1/news/150505/leclerc-to-start-14th-after-blocking-grid-penalty'
                    target='_blank'>
                    <img
                      className='w-auto h-8 object-contain rounded'
                      src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                      alt='autosport.com'
                    />
                  </ActionLink>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default SkySports
