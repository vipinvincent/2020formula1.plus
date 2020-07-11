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
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            autosport.com
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/150498/brake-issue-hindered-bottas-in-styria-qualifying'
            target='_blank'>
            Brake issue led to Bottas' 1.4s gap to F1 Styrian GP poleman
            Hamilton
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mercedes Formula 1 driver Valtteri Bottas says a brake issue
            contributed to a frustrating fourth place in a dramatic wet
            qualifying session for the Syrian Grand Prix.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Bottas, who won the Austrian GP from pole last weekend, says a
            glazed front brake knocked his confidence in the wet conditions of
            qualifying on Saturday at the Red Bull Ring.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            In Q3 he was 1.428s slower than team-mate Lewis Hamilton, who topped
            the times to claim his 89th poole position in F1. The pair were
            split by the Red Bull of Max Verstappen and the McLaren of Carlos
            Sainz.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/150498/brake-issue-hindered-bottas-in-styria-qualifying'
              target='_blank'>
              autosport.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.formula1.com/en/latest/article.racing-point-dont-have-space-for-vettel-in-2021-says-szafnauer.1xIcoT6yFDRBjGLh6xeDaQ.html'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded border border-gray-300'
                    src='https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/f94/image/f940178e6c76f7c28047a26b1704ba0f.jpg'
                    alt='f1.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/racing-point-no-space-vettel-2021/4830027/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-6'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
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
