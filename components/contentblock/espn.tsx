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
            href='https://www.espn.in/f1/story/_/id/29452599/fia-impounds-racing-point-brake-ducts-renault-protest'
            target='_blank'>
            FIA impounds Racing Point's brake ducts Renault protest
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Motor racing's governing body, the FIA, has impounded the brake
            ducts from Racing Point's cars and ordered Mercedes to supply
            corresponding components from its 2019 car after deeming a protest
            from rivals Renault admissible.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Racing Point finished sixth and seventh at Sunday's Styrian Grand
            Prix, but Renault have protested the result over allegations Racing
            Point's car does not comply with regulations requiring teams to
            design and manufacture certain parts.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            While some components, known as non-listed parts, are allowed to be
            bought from rivals, listed parts, which include the aerodynamic
            surfaces of the car and, for the first time this year, the brake
            ducts, must be of the team's own design.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29452599/fia-impounds-racing-point-brake-ducts-renault-protest'
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
