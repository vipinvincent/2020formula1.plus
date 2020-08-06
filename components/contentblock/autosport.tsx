import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const AutoSport: React.FC = () => {
  return (
    <div className='relative bg-white-50 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl bg-autosports'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
          alt='autosport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/151100/sainz-oldschool-venues-need-good-races-to-stay'
            target='_blank'>
            Sainz: fate of "old-school" F1 circuits will rest on 2020 spectacle
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The fate of Formula 1's 'old school circuits' like Imola and the
            Nurburgring will rest on their returns this year producing
            spectacular racing, reckons McLaren's Carlos Sainz Jr.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The coronavirus pandemic has prompted F1 to radically shake-up its
            calendar in a bid to get enough races in, with venues that had been
            dropped by the sport years ago suddenly getting a fresh chance.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Such an opportunity for the older circuits will offer a fascinating
            insight into how well suited they are for delivering exciting
            battles in the modern era, especially compared to contemporary
            circuit thinking. Sainz believes that the verdict on the returning
            venues will go as far as defining if the classic tracks have a
            future in F1 too.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "If those old-school circuits give spectacular races and fun races,
            the people of F1 and the FIA and the FOM will think, why we are
            going to modern circuits if the old circuits give such a spectacle?"
            he said. "It depends on what happens in those next races that will
            decide the future."
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151100/sainz-oldschool-venues-need-good-races-to-stay'
              target='_blank'>
              autosport.com
            </ContentLink>{' '}
            for More Details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'> */}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.formula1.com/en/latest/article.racing-point-dont-have-space-for-vettel-in-2021-says-szafnauer.1xIcoT6yFDRBjGLh6xeDaQ.html'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded border border-gray-300'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/icon_ufqtuk.png'
                    alt='f1.com'
                  />
                </ActionLink>
              </div>*/}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/drugged-up-norris-expecting-back-issues-in-race/4831384/'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                    alt='motorsport.com'
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
export default AutoSport
