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
            href='https://www.motorsport.com/f1/news/lewis-hamilton-kaepernick-take-knee/4829307/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
            target='_blank'>
            Hamilton warned of ‘consequences’ over Kaepernick F1 helmet plan
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton has revealed he was warned of “potential
            consequences” for racing with a helmet paying tribute to Colin
            Kaepernick that forced him to abandon the plan. Amid ongoing
            activism against racism around the world, Hamilton has been the
            leading voice in F1 condemning racial injustice.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            He was joined by 13 other drivers in taking a knee before the start
            of last Sunday’s Austrian Grand Prix, a gesture made famous by
            American football player Kaepernick in 2016 in a protest against
            racial injustice and police brutality. Hamilton revealed after the
            race that he had planned to run a helmet in tribute to Kaepernick at
            the United States Grand Prix, and regretted not doing so after being
            “silenced”.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Speaking ahead of this weekend’s Styrian Grand Prix, Hamilton
            revealed he was warned of consequences for wearing the helmet by a
            high-ranking official. “I was advised from outside, from someone in
            the States who was really quite high up, that it wasn't the time for
            me to be doing so,” Hamilton said. “There were potential
            consequences for me doing it. So that's why they advised me not to
            do it.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.motorsport.com/f1/news/lewis-hamilton-kaepernick-take-knee/4829307/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
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
                  href='https://www.autosport.com/f1/news/150451/hamilton-warned-of-consequences-for-kaepernick-helmet'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                    alt='autosport.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.espn.in/f1/story/_/id/29434921/hamilton-was-warned-consequences-supporting-kaepernick'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                    alt='espn.com'
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
