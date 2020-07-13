import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            planetf1.com
          </div>
          <ActionLink
            href='https://www.planetf1.com/news/daniel-ricciardo-lance-stroll-penalty/'
            target='_blank'>
            Ricciardo expected Stroll to be penalised
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Daniel Ricciardo expected Lance Stroll to be handed a penalty for
            forcing him off track in the pair’s battle late on. The Renault
            driver enjoyed an excellent first stint on the medium tyre to
            position himself as the best of the race and close up to the Red
            Bull of Alex Albon.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            However, he struggled considerably more for pace in his second stint
            and, having already been passed by Sergio Perez, his mirror was
            quickly full of the pink of Lance Stroll’s Racing Point. He managed
            to hold the Canadian off for a number of laps before, with two left,
            Stroll tried a move to take P5 from him.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            It forced them both off the track and allowed Lando Norris to
            capitalise and pass them both. The incident was investigated but no
            further action was taken “Firstly he [Stroll] didn’t really get
            past, he forced both of us off the track,” Ricciardo said after the
            race before the stewards had announced Stroll wouldn’t be penalised.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/daniel-ricciardo-lance-stroll-penalty/'
              target='_blank'>
              planetf1.com
            </ContentLink>{' '}
            for more details...
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
                    src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
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
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
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
