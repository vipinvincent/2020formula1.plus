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
        <div className='px-4 pt-4 pb-5 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/151100/sainz-oldschool-venues-need-good-races-to-stay'
            target='_blank'>
            Norris explains misjudgement for "basic" Ricciardo overtake in F1
            British GP
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lando Norris has explained how a misjudgement while altering
            settings on his steering wheel left the door open for Daniel
            Ricciardo to snatch fourth place in the British Grand Prix.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The McLaren driver had been looking to hold off his Renault rival
            and future team-mate in the closing stages of last weekend's
            Silverstone event. But with three laps to go, Ricciardo made a move
            down the inside at Stowe to grab fifth, which then became fourth
            when McLaren's Carlos Sainz hit late tyre trouble.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Norris has revealed how multiple factors came together to give
            Ricciardo the opportunity to pull off what he reckoned was a "basic"
            pass. "I was struggling with a couple of things, obviously tyres
            being one of them," explained Norris. "But the move he did was
            probably one of the most basic moves you could actually do. There
            was no defence.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "For me it was a misjudgement from me trying to change some things
            on my steering wheel. "Also my left mirror being completely smashed,
            so only kind of judging where he was off my right mirror.
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
