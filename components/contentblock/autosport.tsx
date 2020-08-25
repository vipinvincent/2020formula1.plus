import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const AutoSport: React.FC = () => {
  return (
    <div className='relative  mt-0'>
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
            href='https://www.autosport.com/f1/news/151640/red-bull-highrake-concept-still-right-direction'
            target='_blank'>
            Red Bull: High-rake F1 concept still the right direction
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull has faith that its high-rake concept is still the right way
            to go in Formula 1, despite some rivals suggesting it may have
            reached its limit of performance.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Milton Keynes-based outfit has led the way with its high-rake
            concept in F1, with technical chief Adrian Newey convinced that it
            is the best solution for maximising downforce. But amid the
            difficulties of its troublesome RB16, which has left Max Verstappen
            and Alex Albon struggling at times to find a good balance, there
            have been suggestions that the high-rake option may no longer offer
            as much scope for improvement as low-rake solutions.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            McLaren technical director James Key suggested recently that his
            outfit was considering moving to a low-rake car for 2021 because it
            felt that there could be bigger opportunities for downforce gains.
            "While I don't think the high-rake philosophy is dead necessarily,
            it does make you step back and think, well, maybe there is more out
            there that we could be finding at a lower rake," said Key. "And in
            fact we've got some ideas and thoughts on how that might work." But
            while Red Bull is aware that there is some debate about high-rake
            cars, its motorsport advisor Helmut Marko says that Newey is sure
            that its philosophy is the right one.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151640/red-bull-highrake-concept-still-right-direction'
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
