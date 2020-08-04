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
        <div className='px-4 pt-4 pb-6 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/151046/ferrari-restructure-frees-binotto-from-technical-role'
            target='_blank'>
            Ferrari restructuring sees Binotto step back from F1 technical role
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari team principal Mattia Binotto says the recent restructuring
            at Maranello has allowed him to step back from his involvement in
            its Formula 1 technical department.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Since moving up from his technical director role to become team boss
            last year, Binotto has had to juggle responsibilities across the
            entire Maranello organisation - which has left him stretched at
            times.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            But on the back of a difficult start to 2020, Ferrari last week
            announced a new structure that included the creation of a new
            performance development division.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The changes will now allow Binotto to move away from being directly
            hands on with technical aspects, so he can better focus on other
            aspects that will help Ferrari.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151046/ferrari-restructure-frees-binotto-from-technical-role'
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
