import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const AutoSport: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl bg-autosports'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
          alt='autosport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-8 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/150787/norris-happy-to-see-russell-make-f1-impact-in-2020'
            target='_blank'>
            Norris happy to see Russell making F1 impact with improved Williams
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            McLaren Formula 1 driver Lando Norris says he is happy to see friend
            and rival George Russell make an impact with a much-improved
            Williams team.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Russell was 12th in the wet qualifying session for the Styrian GP at
            the Red Bull Ring, and then repeated that outcome in a dry session
            in Hungary last weekend.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            He had little luck in either race, with an early off in the Styrian
            event and a poor start in Hungary hampering his chances, but
            nevertheless his qualifying performances have been a timely reminder
            of his talent.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            When asked for his thoughts on Russell's season by Autosport, Norris
            replied: "I'm definitely happy for him, that he's at least having a
            chance to be able to race with some people."
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            "I felt sorry for him last year, because he's a nice guy, I get
            along well with him. He's a very good driver. "So where Williams
            were last season, it's just disappointing to see him in that
            position.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/150787/norris-happy-to-see-russell-make-f1-impact-in-2020'
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
