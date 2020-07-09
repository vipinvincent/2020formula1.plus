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
            href='https://www.motorsport.com/f1/news/mugello-september-2020-calendar-slot/4828667/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
            target='_blank'>
            Mugello set for September slot on updated F1 calendar
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mugello is set to be the first new Formula 1 event to follow the
            initial schedule of eight European races. The Ferrari-owned venue
            has been handed the September 13 slot to form the last part of a
            triple-header, following on from Spa and Monza.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            It's believed that the name chosen for the race will reflect the
            support of the local Tuscany region, just as this weekend's second
            Red Bull Ring event carries the Styria identity.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Russian GP in Sochi is also set to be confirmed on its original
            date of September 27, with the organisers having already begun to
            advertise ticket sales, having earlier put them on hold.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The move indicates that the race could be one of the first in 2020
            to allow spectators to attend.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.motorsport.com/f1/news/mugello-september-2020-calendar-slot/4828667/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
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
                  href='https://www.autosport.com/f1/news/150436/mugello-to-be-confirmed-in-next-f1-calendar-update'
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
