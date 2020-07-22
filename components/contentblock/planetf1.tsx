import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-white-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl p-12 border-b border-gray-200'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.planetf1.com/news/sebastian-vettel-is-what-it-is/'
            target='_blank'>
            ‘Ousting could have been different but is what it is’
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Although still not entirely happy with the manner in which Ferrari
            dropped him, Sebastian Vettel will be “professional” in his final
            season with the Scuderia. With 2020 the final year on Vettel’s
            second Ferrari contract, the Scuderia told the German, and the
            media, several times that he was the number one pick for 2021.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Team boss Mattia Binotto continued with that line right up until the
            moment in late April that he phoned Vettel to inform that his
            services wouldn’t be required after this season. Instead he blamed
            finances and the world’s pandemic for Ferrari decision to change its
            tune on the German.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Italian acknowledged that Ferrari’s decision had come as a shock
            to Vettel. “I heard that he was surprised, do I remember that he was
            surprised? I would say yes certainly, I understand it,” he said at
            the Austrian GP weekend. “It is pretty normal to be surprised. “I
            think that is why he accepted our decision but I think even today he
            is not fully happy with it which again I think is normal and
            obvious.” Weeks later Vettel says he is still not happy with the way
            Ferrari went about things but says he’s dealing with it.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/sebastian-vettel-is-what-it-is/'
              target='_blank'>
              planetf1.com
            </ContentLink>{' '}
            for More Details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/williams-wolff-shareholding-mercedes/4830004/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-6'
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
                  href='https://www.autosport.com/f1/news/150472/williams-explains-wolff-shareholding-in-team'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                    alt='autosport.com'
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
export default PlanetF1
