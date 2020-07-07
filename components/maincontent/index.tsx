import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Latest News Austrian GP
      </div>
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
              href='https://www.formula1.com/en/latest/article.we-have-to-respond-immediately-ferrari-aiming-to-bring-big-update-to-austria.44WBmZABalMXfvWjy9Z3Wu.html'
              target='_blank'>
              'We have to respond immediately' – Ferrari aiming to bring big
              update to Austria ahead of schedule
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Second place for Charles Leclerc in the first race of the 2020
              season masked bigger problems for Ferrari and their SF1000. But
              their drivers and fans have received a boost with news the team is
              aiming to bring the update initially planned for Hungary forward
              to this weekend's race in Austria. On the eve of the 2020 season
              restart, Ferrari admitted they are taking a “significant change of
              direction in terms of development” after analysing data from
              winter testing. That means the car they had for Sunday's Austrian
              Grand Prix was the same as the one which ran in Barcelona, back in
              February. Their updated car was set to break cover at round three
              in Hungary, but on Monday, the Italian team revealed they would be
              bringing forward the update to this weekend’s Styrian GP, which
              will be held at the Red Bull Ring.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.formula1.com/en/latest/article.we-have-to-respond-immediately-ferrari-aiming-to-bring-big-update-to-austria.44WBmZABalMXfvWjy9Z3Wu.html'
                target='_blank'>
                formula1.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-tl-xxl bg-bbc'
            src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
            alt='bbc.com/sport'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              bbc.com
            </div>
            <ActionLink
              href='https://www.bbc.com/sport/formula1/53309834'
              target='_blank'>
              Ferrari bring forward car upgrades for Styrian Grand Prix
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Ferrari are bringing forward some planned upgrades to their car
              after a disappointing showing at the season-opening Austrian Grand
              Prix. Lead driver Charles Leclerc was runner-up on Sunday, but the
              car was a second off the pace in qualifying seventh. At this
              weekend's Styrian Grand Prix, Ferrari will introduce some of the
              parts originally scheduled for the subsequent race in Hungary. "We
              have to respond immediately," chief executive officer Louis
              Camilleri said. "We know there's lots of work to do. This is
              certainly not the grid position that a team like Ferrari should
              have. "It's clear that we have to improve on all fronts. The only
              solution is to react."
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.bbc.com/sport/formula1/53309834'
                target='_blank'>
                bbc.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3 bg-black-100 rounded-tl-xl'>
          <img
            className='w-full h-full object-contain rounded-tl-xl'
            src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
            alt='motorsport.com'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              motorsport.com
            </div>
            <ActionLink
              href='https://www.motorsport.com/f1/news/ferrari-reveals-plan-updates-styrian-gp/4827143/'
              target='_blank'>
              Ferrari reveals plan to bring forward updates for Styrian GP
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Ferrari hopes to fast track some, if not all, of its major
              Hungarian Grand Prix update package to this weekend’s Styrian GP
              at the Red Bull Ring. The Italian outfit headed into last
              weekend’s season opener in Austria aware that it was on the back
              foot, with its car in the same specification as it had been in
              pre-season testing. That is because the team uncovered some
              aerodynamic flaws with the SF1000 during the Barcelona running
              which it has decided to address with a major overhaul. The changes
              were originally planned to be introduced at this month’s third
              round of the season at the Hungaroring. But competitive struggles
              last weekend have left the team pushing extra hard to bring as
              many of the new components as possible to this weekend’s Styrian
              GP. A statement from Ferrari on Monday said that it was flat out
              with development work at Maranello “in the hope of bringing
              forward to next weekend the introduction of the aerodynamic
              package scheduled for the Hungarian Grand Prix – or, at least,
              some of its components”.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.motorsport.com/f1/news/ferrari-reveals-plan-updates-styrian-gp/4827143/'
                target='_blank'>
                motorsport.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
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
              href='https://www.skysports.com/f1/news/12475/12022289/red-bull-austrian-gp-brutal-after-max-verstappen-alex-albon-woe'
              target='_blank'>
              Red Bull: Austrian GP 'brutal' after Max Verstappen, Alex Albon
              woe
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Nightmare start to 2020 for hopeful title challengers as
              Verstappen and Albon both DNF; It "feels pretty brutal", says
              Horner. Red Bull boss Christian Horner has admitted that leaving
              the Austrian GP empty-handed "feels pretty brutal" after Max
              Verstappen and Alex Albon both hit problems on a nightmare start
              to the team's F1 title quest. Verstappen was running second before
              his electrical failure while Albon made contact with Lewis
              Hamilton when challenging for that position before retiring from
              the race himself, leaving Red Bull with zero points.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.skysports.com/f1/news/12475/12022289/red-bull-austrian-gp-brutal-after-max-verstappen-alex-albon-woe'
                target='_blank'>
                skysports.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-tl-xxl bg-autosports'
            src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
            alt='autosport.com'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              autosport.com
            </div>
            <ActionLink
              href='https://www.autosport.com/f1/news/150387/ferrari-to-fast-track-update-package-for-styrian-gp'
              target='_blank'>
              Ferrari to fast track update package for F1 Styrian GP
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              The Ferrari Formula 1 team is now hoping to fast track some, if
              not all, of its major Hungarian Grand Prix update package to this
              weekend's Styrian Grand Prix. The Italian outfit braced for last
              weekend's F1 season opener in Austria aware that it was on the
              backfoot, with its car in the same specification as it had been in
              pre-season testing. That is because the team uncovered some
              aerodynamic flaws with the SF1000 during the Barcelona running
              which it has decided to address with a major overhaul. The changes
              were originally planned to be introduced at this month's third
              round of the season at the Hungaroring. But competitive struggles
              last weekend left it pushing extra hard to bring as many of the
              new components as possible to this weekend's Styrian GP.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.autosport.com/f1/news/150387/ferrari-to-fast-track-update-package-for-styrian-gp'
                target='_blank'>
                autosport.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
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
              href='https://www.espn.in/f1/story/_/id/29418526/ferrari-hoping-fast-track-f1-upgrades-second-race'
              target='_blank'>
              Ferrari hoping to fast-track F1 upgrades for second race
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Ferrari hopes it can introduce some of the upgrades it intended to
              bring to the Hungarian Grand Prix at Formula One's second race in
              Austria this weekend. Despite Charles Leclerc's second-place
              finish, the opening race confirmed fears that Ferrari's car is off
              the pace of Mercedes and Red Bull. Instead, it spent much of the
              weekend fighting McLaren and Racing Point. Ferrari's poor
              performance in February's preseason tests had prompted a complete
              rethink of the SF1000 car. That rethink meant its original batch
              of upgrades were scrapped in favour of more significant changes,
              which were not supposed to be ready for the Austria double-header.
              As a result, the car that raced on Sunday was effectively the same
              as the one the team used in the final days of preseason testing.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.espn.in/f1/story/_/id/29418526/ferrari-hoping-fast-track-f1-upgrades-second-race'
                target='_blank'>
                espn.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-tl-xxl bg-gray-800 px-8 py-8'
            src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
            alt='the-race.com'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              the-race.com
            </div>
            <ActionLink
              href='https://the-race.com/formula-1/why-any-driver-wouldve-made-albons-move-on-hamilton/'
              target='_blank'>
              Why any driver would’ve made Albon’s move on Hamilton
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              lice Powell is our first columnist in the wake of an Austrian
              Grand Prix that left her feeling heartbroken for Alex Albon.
              Congratulations to Valtteri Bottas, but Alex Albon should have
              been celebrating victory in Austria on Sunday. Without Lewis
              Hamilton’s intervention, I’m sure he would have been stood atop
              the makeshift podium. The race was dropping into the Thai driver’s
              lap. His team-mate, Max Verstappen, retired early and Mercedes had
              a gearbox issue which resulted in both cars being told to stay off
              the kerbs. Red Bull rolled the dice as the final safety car came
              out, pitting for soft tyres to charge down the Mercedes duo, who
              didn’t pit and had both been on the hard tyres for a number of
              laps. This was Albon’s chance and then along came Hamilton. The
              world champion’s five-second penalty for causing a collision was
              correct. I saw lots of people accusing Albon of being too bold or
              impatient, but I would have made exactly the same move as he did
              and I’m sure the vast majority of racing drivers would agree.
              Sure, the attempt around the outside of Hamilton at Turn 4 was
              brave, but there were only 11 laps remaining and Albon had two
              cars to pass. His race engineer would have told him about
              Mercedes’ gearbox issue and so Albon would have thought, given the
              Silver Arrows’ straight-line speed and fear of the kerbs, that his
              best chance of overtaking them was through the corners.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://the-race.com/formula-1/why-any-driver-wouldve-made-albons-move-on-hamilton/'
                target='_blank'>
                the-race.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
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
              href='https://www.grandprix247.com/2020/07/07/ferrari-some-upgrades-to-debut-this-weekend/'
              target='_blank'>
              Ferrari: Some upgrades to debut this weekend
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Ferrari are planning to speed up the introduction of upgrades to
              their under-performing Formula One car after a difficult
              season-opening race in Austria last Sunday. The Italian team had
              aimed to bring new parts to the July 19 Hungarian Grand Prix but
              said on Monday they hoped to have some for next weekend’s Styrian
              Grand Prix at the same Austrian circuit. “The SF1000 (car) didn’t
              measure up, even compared to expectations ahead of the event,”
              Ferrari said on their website. “Because of this, development has
              already been going on at full pace for some time. “This is in the
              hope of bringing forward to next weekend the introduction of the
              aerodynamic package scheduled for the Hungarian Grand Prix – or,
              at least, some of its components.” Ferrari said having two
              back-to-back races at the same circuit allowed the upgrades to be
              checked more accurately.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.grandprix247.com/2020/07/07/ferrari-some-upgrades-to-debut-this-weekend/'
                target='_blank'>
                grandprix247.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>

      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
            src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
            alt='planetf1.com'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              planetf1.com
            </div>
            <ActionLink
              href='https://www.planetf1.com/news/truth-behind-sebastian-vettel-ferrari-split/'
              target='_blank'>
              ‘Truth behind Vettel’s Ferrari split had to come out’
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Bernie Ecclestone says Sebastian Vettel had to “free himself” by
              telling the truth about why he is leaving Ferrari at the end of
              this season. Back in May, Vettel and Ferrari announced that 2020
              would the four-time World Champion’s sixth and final season racing
              for the Scuderia. At the time the German in the press released
              that he and Ferrari no longer had a “common desire” to work
              together. Weeks later, Vettel revealed that wasn’t the truth.
              While Ferrari had been stating he was the team’s number one pick
              to partner Charles Leclerc in 2021, team boss Mattia Binotto
              phoned Vettel prior to the May announcement to inform him that his
              services would not be required.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.planetf1.com/news/truth-behind-sebastian-vettel-ferrari-split/'
                target='_blank'>
                planetf1.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
