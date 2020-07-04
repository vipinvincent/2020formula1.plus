import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Latest News Austrian GP
      </div>
      <div className='relative bg-white-100 rounded shadow-xs'>
        <div className='h-32 sm:h-40 w-full'>
          <img
            className='w-full h-full object-cover rounded-t'
            src='https://img.redbull.com/images/c_crop,x_0,y_168,h_1280,w_3840/c_fill,w_3390,h_1130/q_auto,f_auto/redbullcom/2020/2/12/wedd7uoz4szj5f221wgr/grid-season2-rbr-lead'
            alt='Formula 1 Rolex Grosser Preis Von Österreich 2020'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='px-4 py-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              Formula1.com
            </div>
            <ActionLink
              href='https://www.formula1.com/en/latest/article.what-the-teams-said-friday-in-austria-2020.2yUnf4EQL6qPsK3TVPHXWG.html'
              target='_blank'>
              What the teams said – Friday in Austria
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Ashen skies and spots of rain in FP1 did nothing to dampen
              collective spirits as Formula 1 cars returned to the track
              together for the first time in 126 days. And, amidst the glorious
              chorus of V6 engines, Mercedes rose to the occasion with Lewis
              Hamilton and Valtteri Bottas topping the session ahead of Red
              Bull’s Max Verstappen. Formula 1 fans got their first proper
              impression of the 2020 pecking order during Free Practice 1 and
              Free Practice 2 of the Austrian Grand Prix, with Mercedes’ Lewis
              Hamilton topping both sessions of the day as the teams unleashed
              their first qualifying simulations of the season. The drivers and
              teams report back on all the action from Friday practice at the
              Formula 1 Rolex Grosser Preis Von Österreich Grand Prix 2020.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.formula1.com/en/latest/article.what-the-teams-said-friday-in-austria-2020.2yUnf4EQL6qPsK3TVPHXWG.html'
                target='_blank'>
                formula1.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain lg:object-cover rounded-l bg-bbc'
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
              href='https://www.bbc.com/sport/formula1/53282619'
              target='_blank'>
              Lewis Hamilton dominates Austrian Grand Prix practice
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Lewis Hamilton made a powerful statement of intent as the Formula
              1 season finally got under way at the Austrian Grand Prix. The
              world champion was fastest in both practice sessions at the Red
              Bull Ring, leading team-mate Valtteri Bottas. Mercedes have
              repainted their cars black, a new livery reflecting support for
              anti-racism and diversity. The season is starting four months late
              after coronavirus laid waste original plans and forced a complete
              re-think.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.bbc.com/sport/formula1/53282619'
                target='_blank'>
                bbc.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3 bg-black-100'>
          <img
            className='w-full h-full object-contain rounded-l'
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
              href='https://www.motorsport.com/f1/news/austrian-gp-fp2-report-results/4824156/?filters%5Bevent%5D%5B0%5D%5Btitle%5D=Austrian+GP&filters%5Bevent%5D%5B0%5D%5Bvalue%5D=264997'
              target='_blank'>
              Austrian GP: Hamilton leads Bottas again in FP2
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Lewis Hamilton set the fastest time in Austrian Grand Prix second
              practice ahead of his teammate Valtteri Bottas, leading a second
              consecutive Mercedes 1-2 to start Formula 1's 2020 season. Racing
              Point's Sergio Perez claimed third place, with the Ferrari and Red
              Bull drivers finishing well adrift of their leading Class A rivals
              in the classification.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.motorsport.com/f1/news/austrian-gp-fp2-report-results/4824156/?filters%5Bevent%5D%5B0%5D%5Btitle%5D=Austrian+GP&filters%5Bevent%5D%5B0%5D%5Bvalue%5D=264997'
                target='_blank'>
                motorsport.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-l bg-skysports'
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
              href='https://www.skysports.com/f1/news/12433/12020652/austrian-gp-mercedes-underline-favourites-tag-but-whos-closest'
              target='_blank'>
              Austrian GP: Mercedes underline favourites tag but who's closest?
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Lewis Hamilton believes it is too early to speculate about any
              early-season Mercedes advantage after a dominant start to the
              season in Friday practice in Austria. But while Mercedes' double
              one-two on the opening day certainly confirmed their pre-season
              status of favourites, the practice timesheets also appeared to
              serve as further evidence that Racing Point have made a bigger
              step forward for 2020 than any team.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.skysports.com/f1/news/12433/12020652/austrian-gp-mercedes-underline-favourites-tag-but-whos-closest'
                target='_blank'>
                skysports.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-l bg-autosports'
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
              href='https://www.autosport.com/f1/news/150310/hamilton-leads-another-mercedes-12-in-fp2-perez-third'
              target='_blank'>
              Austrian GP: Hamilton leads second Mercedes 1-2 in FP2, Perez
              third
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Lewis Hamilton set the fastest time in Austrian Grand Prix second
              practice ahead of his team-mate Valtteri Bottas, leading a second
              consecutive Mercedes 1-2 to start Formula 1's 2020 season. Racing
              Point's Sergio Perez claimed third place, with the Ferrari and Red
              Bull drivers finishing well adrift of their leading Class A rivals
              in the classification. At the start of the 90-minute session at
              the Red Bull Ring, Romain Grosjean led the field out - the Haas
              driver looking to make up for lost time in FP1, where a brake
              issue had confined him to the garage for much of the morning
              session.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.autosport.com/f1/news/150310/hamilton-leads-another-mercedes-12-in-fp2-perez-third'
                target='_blank'>
                autosport.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 w-full'>
          <img
            className='w-full h-full object-contain rounded-t bg-espn'
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
              href='https://www.espn.in/f1/story/_/id/29405308/is-racing-point-really-mercedes-closest-competitor-austria'
              target='_blank'>
              Is Racing Point really Mercedes' closest competitor in Austria?
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              The world may be a very different place compared to four months
              ago, but it seems some things never change: Mercedes is still the
              team to beat in Formula One. Perhaps it shouldn't be a surprise
              that the reigning champions finished at the top of the timesheets
              after the first day of practice in Austria, but the margin of
              Mercedes' advantage was still alarming. Combined with Red Bull
              struggling to fulfill its preseason hype and Ferrari living up to
              its worst concerns, on the face of it the results of Friday
              practice made for depressing reading for everyone hoping for a
              true fight at the front. So was this a true reflection of the
              competitive order -- with the Racing Point outpacing both Ferrari
              and Red Bull -- or will we see a closer battle emerge later this
              weekend?
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.espn.in/f1/story/_/id/29405308/is-racing-point-really-mercedes-closest-competitor-austria'
                target='_blank'>
                espn.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-l bg-gray-800 px-8 py-8'
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
              href='https://the-race.com/formula-1/what-we-learned-on-the-first-proper-day-of-f1-2020/'
              target='_blank'>
              WHAT WE LEARNED ON THE FIRST PROPER DAY OF F1 2020
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              After four long months of anticipation, the 2020 Formula 1 season
              finally got underway in earnest on Friday with the opening
              practice sessions of the Austrian Grand Prix at the Red Bull Ring.
              With no grand prix since last December – and lots of questions
              left unanswered after pre-season testing in February- there was
              always going to be a multitude of new storylines to unpack as F1
              began again. In a strange year and an unusual Formula 1 season,
              Mercedes kicked off the cliched ‘new normal’ by proving that
              nothing’s really different after all. We expected Mercedes to be
              strong in Austria but it was out of reach on Friday, quick over
              one lap and its race runs seemed unmatchable as well.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://the-race.com/formula-1/what-we-learned-on-the-first-proper-day-of-f1-2020/'
                target='_blank'>
                the-race.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>
      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-l bg-white-50 p-8'
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
              href='https://www.grandprix247.com/2020/07/04/the-morning-after-politics-as-usual/'
              target='_blank'>
              The Morning After: Politics as Usual
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              The action on track may not have even had the chance to heat up
              yet, but off-track it took less than a day for the fireworks to
              start in Austria. Indeed, it was fair to assume a protest of DAS
              was incoming, but that made it no less amusing to see the
              shenanigans play out – a team (Mercedes) shows up having exploited
              a loophole with some technical trickery, and another team tries to
              employ a bit of regulatory skulduggery to stop them in their
              tracks. Almost as much as the cars themselves, it’s these bits of
              politicking that make F1, well… F1, and by god I’ve missed it.
              That said, I don’t see how anyone can be surprised by the result.
              Even setting aside the holes in Red Bull’s argument that it wasn’t
              “part of the steering system”, Christian Horner said himself that
              DAS had to “earn its place on the car” – if it wasn’t worth the
              time and resources invested, nor the consideration of car weight
              and aerodynamics, Mercedes wouldn’t have put it there in the first
              place.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.grandprix247.com/2020/07/04/the-morning-after-politics-as-usual/'
                target='_blank'>
                grandprix247.com
              </ContentLink>{' '}
              for more details...
            </p>
          </div>
        </div>
      </div>

      <div className='relative bg-white-100 rounded shadow-xs mt-4'>
        <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
          <img
            className='w-full h-full object-contain rounded-l bg-white-50 p-8'
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
              href='https://www.planetf1.com/news/mattia-binotto-ferrari-aero-gone-wrong/'
              target='_blank'>
              Binotto: Ferrari aero has gone wrong
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Ferrari team principal Mattia Binotto says the SF1000 is
              aerodynamically “fragile” due to a correlation problem. Coming
              into the Austrian Grand Prix weekend the team said they were “99%
              sure” that they would be struggling because their car was not
              producing the aero performance on the track that they had planned
              for in the data. After focusing on race pace during FP1 at the Red
              Bull Ring Sebastian Vettel clocked Ferrari’s fastest time in FP2
              with a 1:04.961, putting him P4, 0.65s behind Lewis Hamilton who
              topped the session for Mercedes. And Binotto said that due to the
              team focusing on increasing downforce ahead of this season, the
              SF1000 had been left lacking aerodynamically against the likes of
              Mercedes and Red Bull. Speaking on Friday ahead of the Austrian
              Grand Prix, Binotto told Motorsport.com: “In winter testing the
              car was not performing as expected.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.planetf1.com/news/mattia-binotto-ferrari-aero-gone-wrong/'
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
