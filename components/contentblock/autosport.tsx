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
            href='https://www.autosport.com/f1/news/151745/horner-mercedes-rake-move-proves-concept-works'
            target='_blank'>
            Horner: Mercedes rake move proves F1 car concept still works
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull team boss Christian Horner says Mercedes' slow shift
            towards a higher rake car proves the concept still works in Formula
            1.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            There has been intense debate this year about whether high-rake
            solutions have reached the end of the line, with Red Bull struggling
            with some balance issues at the start of the season. But while lower
            rake cars like Mercedes and Racing Point are performing strongly,
            Horner thinks there is not actually much of a difference now between
            the different concept solutions. "I think Mercedes have been raising
            and raising their rear ride height," explained Horner, when asked if
            the high-rake concept was now the wrong route for F1.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "If you look at how much it has increased over the last few years,
            it's not a long way off where we are. So I would disagree with that
            comment." Horner says that the issues Red Bull have faced with the
            RB16 are not down to the choice of rake, but are instead just a
            legacy of trying to get complicated aero solutions to work in
            harmony. "These cars are incredibly complicated aerodynamically
            now," he said. "You have only got to look at the components that
            make up a barge board, a front wing, and the underside of a front
            wing.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151745/horner-mercedes-rake-move-proves-concept-works'
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
