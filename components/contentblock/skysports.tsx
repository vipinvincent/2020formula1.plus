import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl bg-skysports'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12037245/lando-norris-why-mclaren-can-stay-in-fight-for-third-and-his-development-in-f1'
            target='_blank'>
            Lando Norris: Why McLaren can stay in fight for third and his
            development in F1
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lando Norris believes McLaren can maintain a challenge for third
            place in the Constructors' Championship over the season. McLaren
            head into their home British GP this week behind only Mercedes and
            Red Bull in the standings after a start to the season in which they
            have already achieved three top-five race results - including a
            maiden F1 podium for Norris in Austria.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Back on the rise after a fourth-placed finish last year, McLaren
            currently sit a point clear of Racing Point and 14 ahead of Ferrari,
            who have slipped away from their usual front-running rivals at the
            start of this campaign.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Speaking to Sky Sports News at the McLaren's Woking Technology
            Centre ahead of the forthcoming Silverstone double-header, Norris
            spoke with optimism about their prospects of remaining a threat
            behind the current top two. "We can definitely fight for it," said
            Norris, in an interview with Craig Slater.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12037245/lando-norris-why-mclaren-can-stay-in-fight-for-third-and-his-development-in-f1'
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
