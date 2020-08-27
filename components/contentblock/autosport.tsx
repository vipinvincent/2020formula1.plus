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
            href='https://www.autosport.com/f1/news/151678/wolff-f1-nearing-biggest-transition-in-its-history'
            target='_blank'>
            Wolff: Formula 1 nearing "biggest transition" in its history
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Toto Wolff believes Formula 1 is set for the "biggest transition" in
            its history through the upcoming changes to the technical and
            financial structure of the series.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            F1 announced last Wednesday that the entire grid had met the
            early-sign deadline for the new Concorde Agreement, committing to
            the revised commercial terms that will last from 2021 to 2025. At
            the heart of the new agreement is a more equal distribution of prize
            money, which is part of F1's drive to make the championship more
            sustainable and competitive.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The revised commercial terms will work in tandem with the 2021
            budget cap and the updated technical regulations that will come into
            force in 2022. Mercedes F1 chief Wolff said ahead of this weekend's
            Belgian Grand Prix that it was no surprise to see all 10 teams sign
            up, but he nevertheless felt pleased to see talks get across the
            line. Wolff also predicted that F1 would face some of the biggest
            changes in its history as a result of all the planned shake-up.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "We have always said that we wanted to stay in F1, so the agreement
            wasn't necessarily all that surprising," Wolff said. "But we're
            happy that we could bring the negotiations to a positive conclusion.
            "We are committed to our sport and we're looking forward to the
            upcoming years which will see the biggest transition F1 has ever
            seen. "This will reward agile, open-minded teams who can adapt
            successfully to the demands of the new rules."
          </p>

          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151678/wolff-f1-nearing-biggest-transition-in-its-history'
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
