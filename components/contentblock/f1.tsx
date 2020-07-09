import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/03/thumbs/800x531/44287.jpg'
          alt='Ferrari SF1000 2020 upgrades'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Formula1.com
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.honda-introduce-power-unit-fix-for-this-weekends-race-after-red-bulls-double.3lcuvU9uD80l0Nu8b3fiHN.html'
            target='_blank'>
            Honda introduce power unit fix for this weekend’s race after Red
            Bull’s double Austria DNF
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Red Bull Team Principal Christian Horner reckoned victory could have
            been on the cards in the season-opening Austrian Grand Prix until an
            electrical issue forced both Max Verstappen and Alex Albon out of
            the race. Ahead of the Styrian GP, being held at the same track this
            weekend, power unit supplier Honda have applied a fix…
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mercedes were the class of the field in both qualifying and the
            race, but Horner felt Red Bull’s performance, particularly in race
            trim, would have been enough to take the fight to the Silver Arrows
            had it not been for the mechanical issues.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Investigations started immediately, and despite time being against
            them – there are only four days between last Sunday’s race and first
            practice for round two at the Red Bull Ring on Friday – Honda have
            found a solution.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.honda-introduce-power-unit-fix-for-this-weekends-race-after-red-bulls-double.3lcuvU9uD80l0Nu8b3fiHN.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-2 md:pb-0 md:pr-4'>
            Follow this topic on -
          </div>
          <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/verstappen-albon-honda-engine-countermeasures/4828629/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
                target='_blank'>
                <img
                  className='w-auto ull h-8 object-contain rounded'
                  src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150435/honda-applies-countermeasures-after-red-bull-double-dnf'
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
                href='https://the-race.com/formula-1/honda-has-countermeasures-for-red-bulls-engine-issues/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 mt-0 p-2 object-contain rounded bg-gray-800'
                  src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/09/honda-max-and-alex-will-use-their-same-pus-this-weekend/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 p-3 object-contain rounded border border-gray-200'
                  src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/different-electrical-issues-caused-red-bull-dnfs/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 p-2 object-contain rounded border border-gray-200'
                  src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default F1
