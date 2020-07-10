import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const MotorSport: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3 bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl'
          src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
          alt='motorsport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            motorsport.com
          </div>
          <ActionLink
            href='https://www.motorsport.com/f1/news/norris-back-pain-mclaren-practice/4830238/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
            target='_blank'>
            Norris had to limit F1 practice running due to back pain
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lando Norris chose to limit his running in second free practice for
            the Austrian Grand Prix in a bid to help minimise aggravating some
            back pain he picked up earlier in the day.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The British driver felt some upper back pain during the opening
            practice session at the Red Bull Ring, but felt better after
            treatment between sessions.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            However, with his McLaren team eager to not overstress his body in
            the afternoon, it was decided to restrict his running in second
            practice. He completed 31 laps to end up eighth overall, with
            teammate Carlos Sainz ending three place ahead and putting in 45
            laps.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.motorsport.com/f1/news/norris-back-pain-mclaren-practice/4830238/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
              target='_blank'>
              motorsport.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.autosport.com/f1/news/150481/norris-limited-fp2-running-due-to-back-pain'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                    alt='autosport.com'
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
export default MotorSport
