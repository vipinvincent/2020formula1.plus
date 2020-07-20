import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const BBC: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-bbc rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
          alt='bbc.com/sport'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.bbc.com/sport/formula1/53449283'
            target='_blank'>
            What the teams said – Race day in Hungary
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong>Mercedes</strong>
            Hamilton had a dream start, led into the first corner and never
            looked back as he scored his eighth win in Hungary and third in a
            row – both records, as if he needed any more. That result has given
            him the championship lead too. Bottas had to work a lot harder after
            he nearly jumped the start. That brief pause let several cars
            through down to the first corner, meaning the Finn had his work cut
            out right from the off. He dispatched Stroll in the first round of
            pit stops but, despite changing onto fresh tyres late on, ran out of
            time to chase down Verstappen for second.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong> Red Bull</strong>
            Verstappen had a day to remember. He crashed on his way out of the
            pits before the race had even started, and it was touch and go
            whether he’d take the lights. A heroic effort from his crew was
            immediately rewarded when the Dutchman launched himself up to second
            in the early stages from seventh on the grid. Verstappen even
            managed to split the Silver Arrows, extracting enough life from his
            tyres to keep the charging Bottas at bay. As for Albon, he too made
            steady progress up the field from a lowly starting slot, and made
            several bold overtaking moves to come home an impressive fifth.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong>Racing Point</strong>
            Stroll had a great start and was running second early on, before
            losing out in the pits to both Bottas and Verstappen. That aside,
            the Canadian had a solid race and came home well ahead of the rest
            of the field albeit some way behind the top three. As for Perez, he
            lost places from the off and had a slow pit stop to boot. That meant
            the Mexican was in traffic for most of the race but he at least
            picked off a few midfield runners to get a good haul of points.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong>Ferrari</strong>
            Vettel was racy off the start and right in the mix with Leclerc not
            far behind. Ferrari opted to pit their drivers earlier than the rest
            and it paid off for the German but Leclerc was put on the soft
            compound tyre which didn’t work out and he dropped back through the
            field. That left Vettel to fight it out for points and he held Albon
            at bay for lap after lap despite his aging tyres but couldn’t keep
            the quicker Red Bull behind and lost out right at the end of the
            race.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53449283'
              target='_blank'>
              bbc.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'> */}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://the-race.com/formula-1/leclerc-summoned-to-stewards-over-two-separate-incidents/'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded border border-gray-300'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
                    alt='the-race.com'
                  />
                </ActionLink>
              </div> */}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.skysports.com/f1/news/12474/12027615/ross-brawn-on-a-long-road-ahead-for-ferrari-after-very-painful-crash'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                    alt='skysports.com'
                  />
                </ActionLink>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default BBC
