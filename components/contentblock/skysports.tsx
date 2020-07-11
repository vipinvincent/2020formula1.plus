import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-skysports'
          src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            skysports.com
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12026424/lewis-hamilton-the-class-of-the-field-with-dominant-styrian-gp-pole'
            target='_blank'>
            Lewis Hamilton the 'class of the field' with dominant Styrian GP
            pole
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Anthony Davidson and Karun Chandhok compare Lewis Hamilton and Max
            Verstappen, the top two in qualifying at the Styrian GP
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton's qualifying performance for the Styrian GP was
            hailed as "extraordinary" by Sky F1's Jenson Button, after the
            in-form, six-time champion beat his rivals by over a second in
            Austria's torrential rain.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Less than a week after falling 13 points behind Mercedes team-mate
            Valtteri Bottas in the Spielberg season-opener, Hamilton mastered
            the treacherous conditions at the same track to take a dominant pole
            position.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12026424/lewis-hamilton-the-class-of-the-field-with-dominant-styrian-gp-pole'
              target='_blank'>
              skysports.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='w-full flex flex-row justify-center my-1'>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.formula1.com/en/latest/article.norris-handed-styrian-gp-grid-penalty-for-fp1-yellow-flag-infraction.5QfUaE1MCFeMd61tswxXaw.html'
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
                    href='https://www.motorsport.com/f1/news/norris-handed-grid-penalty-for-yellow-flag-incident/4830040/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-6'
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
                    href='https://www.autosport.com/f1/news/150473/norris-gets-threeplace-f1-grid-drop-for-styrian-gp'
                    target='_blank'>
                    <img
                      className='w-auto h-8 object-contain rounded'
                      src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                      alt='autosport.com'
                    />
                  </ActionLink>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default SkySports
