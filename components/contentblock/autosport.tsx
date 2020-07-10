import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const AutoSport: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-autosports'
          src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
          alt='autosport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            autosport.com
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/150452/mercedes-will-drive-cautious-if-gearbox-fixes-fail'
            target='_blank'>
            Bottas: Mercedes duo will have to drive cautiously in F1 Styrian GP
            if gearbox fixes fail
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Valtteri Bottas reckons he and Lewis Hamilton will have to drive
            more cautiously in Formula 1's Styrian race if updates in practice
            do not solve Mercedes' gearbox problems.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            After Mercedes was hampered by a build-up of electrical noise -
            stemming from vibration caused by the Red Bull Ring's kerbs -
            threatening the chances of its cars finishing last weekend's
            Austrian Grand Prix, the team explained the issue was a "complex
            problem" with no quick fix that would reoccur if the W11 was run in
            the same arrangement as the season opener.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            It is understood that Mercedes will bring new parts to its 2020
            challenger to try and fix the issue, as well as understand it
            further using additional data, which will be collected during
            Friday's running.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/150452/mercedes-will-drive-cautious-if-gearbox-fixes-fail'
              target='_blank'>
              autosport.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.formula1.com/en/latest/article.bottas-says-he-may-have-to-drive-differently-in-styrian-gp-as-mercedes-work.5fTyzW23ZPn3YGy3iGPX50.html'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded border border-gray-300'
                    src='https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/f94/image/f940178e6c76f7c28047a26b1704ba0f.jpg'
                    alt='f1.com'
                  />
                </ActionLink>
              </div>

              <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/bottas-hamilton-mercedes-gearbox-caution/4829206/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                    alt='motorsport.com'
                  />
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AutoSport
