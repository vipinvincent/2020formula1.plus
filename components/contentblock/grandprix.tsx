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
            href='https://www.grandprix247.com/2020/07/12/haas-we-still-need-to-find-some-pace/'
            target='_blank'>
            Haas: We still need to find some pace
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Haas F1 Team drivers Kevin Magnussen and Romain Grosjean finished
            P12 and P13 respectively at the second race of the 2020 FIA Formula
            One World Championship, the Styrian Grand Prix, held at the Red Bull
            Ring in Spielberg, Austria.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            After the torrential rain that drenched the circuit on Saturday the
            skies cleared for Sunday’s track action, albeit with cooler
            temperatures compared to Friday’s running.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Magnussen started P15 on the Pirelli P Zero Red soft tires while
            Grosjean was mandated to begin from the pit lane after essential
            work was carried out on his VF-20 post-qualifying, contravening Parc
            Ferme regulations.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/12/haas-we-still-need-to-find-some-pace/'
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
