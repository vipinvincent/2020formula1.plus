import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const GrandPrix: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
          alt='grandprix247.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            grandprix247.com
          </div>
          <ActionLink
            href='https://www.grandprix247.com/2020/07/11/hamilton-when-youre-really-at-one-with-the-car/'
            target='_blank'>
            Hamilton: When you’re really at one with the car
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Defending six-time F1 world champion Lewis Hamilton delivered one of
            his greatest qualifying performances in treacherous rain-swept
            conditions on Saturday when he stormed to pole position for the
            Styrian Grand Prix.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Mercedes driver, who struggled in practice on Friday, bounced
            back to his best with a fastest lap in 1: 19.273 seconds, outpacing
            nearest rival Max Verstappen of Red Bull by a stunning 1.2 seconds
            and a further two-tenths up on his teammate Valtteri Bottas.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Hamilton’s performance – in the mould of his idol and great
            qualifier Ayrton Senna – confirmed his enduring class on a day when
            heavy rainstorms had delayed the session by 45 minutes and forced
            the cancellation of third practice.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/11/hamilton-when-youre-really-at-one-with-the-car/'
              target='_blank'>
              grandprix247.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default GrandPrix
