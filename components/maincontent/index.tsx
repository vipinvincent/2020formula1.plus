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
              href='https://www.formula1.com/en/latest/article.sore-and-bruised-russell-hoping-for-better-luck-in-styrian-gp-as-mercedes.4oMMmtotexj8quB3jj6aj4.html'
              target='_blank'>
              ‘Sore and bruised’ Russell hoping for better luck in Styrian GP as
              Mercedes probe engine issue
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              George Russell says he’s “sore and bruised” after getting back
              into a Formula 1 car on the weekend for the first time since
              February, but is hoping his team and engine suppliers Mercedes can
              solve the issue that cost him a race finish and potential points
              in time for the Styrian Grand Prix this Sunday. Russell had just
              missed out on a first appearance in Q2 by 0.073s on Saturday, and
              with a number of cars retiring in the early part of the race the
              chance of points was increasing. Max Verstappen, Daniel Ricciardo,
              Lance Stroll and Kevin Magnussen had all retired by the time
              Russell slowed and stopped on the inside of Turn 4, with the
              Willliams Head of Vehicle Performance Dave Robson going on to say
              that Mercedes want to work out what happened. The Williams issue
              was one of two retirements from the six Mercedes-powered cars on
              Sunday, with Racing Point having to tell Stroll to return to the
              garage and drop out of the race after he suffered a loss of power.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.formula1.com/en/latest/article.sore-and-bruised-russell-hoping-for-better-luck-in-styrian-gp-as-mercedes.4oMMmtotexj8quB3jj6aj4.html'
                target='_blank'>
                formula1.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 py-2 md:py-4 px-4 text-sm md:text-lg text-center md:text-left'>
            <div className='w-full md:w-1/3 pb-2 md:pb-0 md:pr-4'>
              Follow this topic on -
            </div>
            <div className='w-full flex flex-row justify-center md:justify-start md:w-2/3'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/fernando-alonso-set-renault-f1-return/4827735/'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                    alt='motorsport.com'
                  />
                </ActionLink>
              </div>
            </div>
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
          <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              bbc.com
            </div>
            <ActionLink
              href='https://www.bbc.com/sport/formula1/53325412'
              target='_blank'>
              Fernando Alonso to return to Formula 1 with Renault in 2021
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Fernando Alonso is set to return to Formula 1 with Renault next
              year. The Spanish two-time world champion, who will be 39 later
              this month, has signed and will be confirmed soon, sources have
              told BBC Sport. Alonso will return to the outfit with whom he won
              his World Championships, and for whom he has already driven twice
              during his career. He left F1 in 2018 and is due to make a third
              attempt to win the Indianapolis 500 with McLaren in August. A
              spokesperson for Renault said the team "declined to comment on
              rumours". Alonso will partner Frenchman Esteban Ocon and replace
              Australian Daniel Ricciardo, who is moving to McLaren at the end
              of this season.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.bbc.com/sport/formula1/53325412'
                target='_blank'>
                bbc.com
              </ContentLink>{' '}
              for more details...
            </p>
            <div className='flex flex-col xl:flex-row justify-start border-t border-gray-200 mt-4 py-2 md:py-4 px-4 text-sm xl:text-lg text-center xl:text-left'>
              <div className='w-full xl:w-1/3 pb-2 xl:pb-0 xl:pr-4'>
                Follow this topic on -
              </div>
              <div className='w-full flex flex-row justify-center lg:justify-start md:w-2/3'>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.motorsport.com/f1/news/fernando-alonso-set-renault-f1-return/4827735/'
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
                    href='https://www.skysports.com/f1/news/12433/12023184/fernando-alonso-to-return-to-f1-with-renault-for-2021-season'
                    target='_blank'>
                    <img
                      className='w-auto ull h-8 object-contain rounded'
                      src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                      alt='skysports.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.autosport.com/f1/news/150405/alonso-set-to-sign-with-renault-f1-team-from-2021'
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
                    href='https://www.espn.in/f1/story/_/id/29421931/fernando-alonso-set-return-f1-renault-2021'
                    target='_blank'>
                    <img
                      className='w-auto ull h-8 object-contain rounded'
                      src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                      alt='espn.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://the-race.com/formula-1/alonso-to-return-to-f1-with-renault-in-2021-reports/'
                    target='_blank'>
                    <img
                      className='w-auto ull h-6 mt-1 p-1 object-contain rounded bg-gray-800'
                      src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                      alt='the-race.com'
                    />
                  </ActionLink>
                </div>
              </div>
            </div>
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
          <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              motorsport.com
            </div>
            <ActionLink
              href='https://www.motorsport.com/f1/news/red-bull-undecided-wing-styrian-gp/4827426/'
              target='_blank'>
              Red Bull undecided on nose concept for Styrian GP
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Red Bull is undecided on which specification of nose to run with
              at the Styrian Grand Prix, after going different ways with its two
              drivers last weekend. Max Verstappen ran with a new concept of
              nose (inset in the main image) over the Austria weekend while Alex
              Albon remained with the original version. The team wants to have
              both cars running in the same specification for the second race in
              Austria, but needs to go through the data from the weekend to get
              a definitive answer on which one it thinks has the best potential.
              "The spec difference was more about characteristics than outright
              performance," explained Red Bull team boss Christian Horner. "Both
              drivers will converge on to the same spec next week, but at the
              moment we're unsure whether it'll be Alex's spec or Max's spec. We
              need to really look and focus at the data on that."
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.motorsport.com/f1/news/red-bull-undecided-wing-styrian-gp/4827426/'
                target='_blank'>
                motorsport.com
              </ContentLink>{' '}
              for more details...
            </p>
            <div className='flex flex-col xl:flex-row justify-start border-t border-gray-200 mt-4 py-2 md:py-4 px-4 text-sm xl:text-lg text-center xl:text-left'>
              <div className='w-full xl:w-1/3 pb-2 xl:pb-0 xl:pr-4'>
                Follow this topic on -
              </div>
              <div className='w-full flex flex-row justify-center lg:justify-start md:w-2/3'>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.autosport.com/f1/news/150403/red-bull-undecided-on-new-nose-concept'
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
              href='https://www.skysports.com/f1/news/12433/12022886/how-f1-returned-and-adapted-at-austrian-gp-rachel-brookes-diary'
              target='_blank'>
              How F1 returned and adapted at Austrian GP | Rachel Brookes' diary
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Rachel Brookes{' '}
              <span className='text-sm italic'>
                (Formula 1 Reporter & Columnist)
              </span>{' '}
              - Friday March 13 seemed a long time ago as I drove to our Sky
              headquarters in west London for my first COVID-19 test ahead of
              F1's return at the Austrian GP. We had managed to make some
              programmes during the lockdown/shutdown over the internet, but I
              hadn't seen anyone since landing back from Australia. We had all
              been at dinner on the Thursday night in Melbourne when we got the
              message that someone from McLaren had tested positive for
              coronavirus. Phones started going off and our exec. producer and
              production manager left the table to make calls. It had been a
              strange atmosphere in the paddock that day, almost as if we were
              all waiting for this, the inevitable. We all desperately wanted to
              go racing but we were also well aware of the developing crisis
              worldwide and no country was going to escape it.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.skysports.com/f1/news/12433/12022886/how-f1-returned-and-adapted-at-austrian-gp-rachel-brookes-diary'
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
          <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              autosport.com
            </div>
            <ActionLink
              href='https://www.autosport.com/f1/news/150404/kubica-gets-alfa-romeo-fp1-outing-at-styrian-gp'
              target='_blank'>
              Robert Kubica gets Alfa Romeo FP1 outing at F1 Styrian Grand Prix
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Robert Kubica will make his Formula 1 race weekend return with an
              opening practice outing for Alfa Romeo at this weekend's Styrian
              Grand Prix. Kubica, who left Williams at the end of his comeback
              campaign in 2019, is Alfa's reserve driver for the 2020 season. He
              will drive Antonio Giovinazzi's C39 in the first practice session
              at the Red Bull Ring on Friday. Kubica completed two half-day
              outings for Alfa during pre-season testing, ending up as the
              fastest driver on the opening morning of the second test.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.autosport.com/f1/news/150404/kubica-gets-alfa-romeo-fp1-outing-at-styrian-gp'
                target='_blank'>
                autosport.com
              </ContentLink>{' '}
              for more details...
            </p>
            <div className='flex flex-col xl:flex-row justify-start border-t border-gray-200 mt-4 py-2 md:py-4 px-4 text-sm xl:text-lg text-center xl:text-left'>
              <div className='w-full xl:w-1/3 pb-2 xl:pb-0 xl:pr-4'>
                Follow this topic on -
              </div>
              <div className='w-full flex flex-row justify-center lg:justify-start md:w-2/3'>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.motorsport.com/f1/news/kubica-f1-race-return-alfa/4827729/'
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
                    href='https://www.formula1.com/en/latest/article.robert-kubica-to-return-to-f1-action-with-fp1-run-for-alfa-romeo-in-austria.5flmN8g3mJhW0lxw4OP8u4.html'
                    target='_blank'>
                    <img
                      className='w-auto ull h-8 object-contain rounded border border-gray-300'
                      src='https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/f94/image/f940178e6c76f7c28047a26b1704ba0f.jpg'
                      alt='f1.com'
                    />
                  </ActionLink>
                </div>
              </div>
            </div>
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
              href='https://www.espn.in/f1/story/_/id/29417103/formula-one-boss-brawn-vettel-bound-distracted-ferrari-axe'
              target='_blank'>
              Formula One boss Brawn: Vettel bound to be distracted by Ferrari
              axe
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Sebastian Vettel endured a nightmare start to the season in
              Austria on Sunday and Formula One's motorsport managing director
              Ross Brawn suggested being dropped by Ferrari for 2021 had
              affected his concentration. Vettel, a four-times world champion
              with Red Bull, qualified only 11th at the Red Bull Ring and then
              tangled with McLaren's Carlos Sainz in the race, finishing 10th
              for the final point on offer. Spaniard Sainz is also the man
              replacing the German at Maranello next year alongside Charles
              Leclerc, who finished a surprise second on Sunday despite
              Ferrari's performance problems.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.espn.in/f1/story/_/id/29417103/formula-one-boss-brawn-vettel-bound-distracted-ferrari-axe'
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
              href='https://the-race.com/formula-1/mercedes-gearbox-problem-will-reappear-with-current-spec/'
              target='_blank'>
              Mercedes’ gearbox problem will reappear with current spec
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Mercedes says its gearbox problem at the Formula 1 season opener
              will reappear with the car’s current specification but hopes to
              minimise the impact at the second Austrian race. F1 is sticking
              with the Red Bull Ring to follow up the Austrian Grand Prix with
              the Styrian Grand Prix as the same circuit is used twice for the
              first time in championship history because of the calendar
              revisions prompted by the coronavirus pandemic. As the teams face
              the challenges of the Spielberg circuit for the second week in a
              row, Mercedes could be hit by the gearbox concerns than team boss
              Toto Wolff said could have been an “instant kill” in Sunday’s
              grand prix. Mercedes had a critical sensor problem on both cars
              during the race which it believes is due to oscillations caused by
              the nature of the aggressive track layout and the impact that has
              with the specific design of its car.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://the-race.com/formula-1/mercedes-gearbox-problem-will-reappear-with-current-spec/'
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
              href='https://www.grandprix247.com/2020/07/07/italian-media-hot-for-little-prince-leclerc-cool-on-vettel/'
              target='_blank'>
              Italian Media hot for Little Prince Leclerc, cool on Vettel
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              The Italian media has hailed “Little Prince” Charles Leclerc’s
              second-place performance at the 2020 F1 season-opening Austrian
              Grand Prix, while criticising the other Ferrari driver Sebastian
              Vettel who did himself no favours when again he fell victim to his
              own mistake. La Gazzetta dello Sport focused on the positives of
              Leclerc’s race and wrote, “The talent of Leclerc overcame
              Ferrari’s shortcomings which bodes well for the young driver’s
              career. He defended intelligently and attacked when the right time
              came to do so.” “Who would have thought that Charles Leclerc, in
              his second year with the team, would be ahead of big favourite
              Lewis Hamilton in the drivers’ standings. After Ferrari’s mediocre
              performance in qualifying – almost a second slower at the same
              venue as they were last year – no one would have dared to predict
              this, but it happened.”
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.grandprix247.com/2020/07/07/italian-media-hot-for-little-prince-leclerc-cool-on-vettel/'
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
              href='https://www.planetf1.com/news/red-bull-developing-das/'
              target='_blank'>
              Horner: Red Bull may develop ‘more extreme’ DAS
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Christian Horner has confirmed that Red Bull is working on their
              own version of DAS, and suggested they may opt for a “more
              extreme” system. The device designed by Mercedes was a talking
              point throughout the first race weekend of the system, with Red
              Bull lodging a protest to the FIA about it. Many believe that they
              did so that, if it was deemed legal, they’d be able to develop a
              system of their own. Speaking to Servus TV, Horner confirmed that
              they are indeed looking into doing so and implementing it at some
              point this season, and said that they may go for something more
              “extreme” than the German team.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.planetf1.com/news/red-bull-developing-das/'
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
