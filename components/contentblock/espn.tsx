import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const ESPN: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 w-full'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-espn'
          src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
          alt='espn.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            espn.com
          </div>
          <ActionLink
            href='https://www.espn.in/f1/report/_/id/401220848'
            target='_blank'>
            Hamilton claims easy Stryian GP win, Ferrari pair crash out
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton claimed a comfortable win at the Styrian Grand Prix
            ahead of teammate Valtteri Bottas and Max Verstappen, as Ferrari's
            drivers took each other out of the race on lap one.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Hamilton only lost the lead briefly after pitting, with teammate
            Bottas extending his first stint in an attempt to beat Verstappen to
            second, in what was a fairly lonely race for the world champion to
            the finish. The foundations for Hamilton's win were set with a
            supreme qualifying performance in a wet qualifying session on
            Saturday afternoon and the six-time world champion carried that form
            over to Sunday.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Bottas' strategy created an entertaining fight late on, with the
            Finn catching Verstappen five laps from the finish of the race.
            Verstappen did not make things easy for Bottas, brilliantly fighting
            back in a wheel-to-wheel battle on lap 66 to briefly hold on to
            second. The Red Bull driver was unable to do the same on the next
            lap as Bottas finally got by to secure Mercedes' first one-two
            finish of the season.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/report/_/id/401220848'
              target='_blank'>
              espn.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default ESPN
