import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Latest News
      </div>
      <div className='relative bg-white-100 rounded shadow-xs'>
        <div className='h-32 sm:h-40 w-full'>
          <img
            className='w-full h-full object-cover rounded-t'
            src='https://www.formula1.com/content/dam/fom-website/sutton/2019/France/Friday/1017562853-LAT-20190622-_1ST3958.jpg.transform/9col-retina/image.jpg'
            alt='F1 Schedule 2020 - latest information'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='px-4 py-4 text-left'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
              Formula1.com
            </div>
            <ActionLink
              href='https://www.formula1.com/en/latest/article.f1-schedule-2020-latest-information.3P0b3hJYdFDm9xFieAYqCS.html'
              target='_blank'>
              F1 Schedule 2020 - latest information
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Formula 1 has announced the opening eight races of the 2020
              calendar following the postponement of the 2020 FIA Formula 1
              World Championship due to the global COVID-19 pandemic. The
              calendar has been approved by the FIA.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.formula1.com/en/latest/article.f1-schedule-2020-latest-information.3P0b3hJYdFDm9xFieAYqCS.html'
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
              href='https://www.bbc.com/sport/formula1/53160031'
              target='_blank'>
              Daniel Ricciardo focused on Renault after McLaren switch
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Daniel Ricciardo says he and Renault have "moved on" from his
              decision to switch to McLaren next year ahead of the start of the
              new season. The Australian says he's "excited to get racing" in
              Austria next weekend and "it's really back to business". "Maybe
              the first time I see some people there might be that moment of
              perhaps, I don't know if the word is awkwardness," Ricciardo said.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.bbc.com/sport/formula1/53160031'
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
              href='https://www.motorsport.com/f1/news/brown-mclaren-2020-season-shorter/4812678/'
              target='_blank'>
              Brown cautions F1 season might not be as full as hoped
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              At the moment only eight races are formally scheduled, starting in
              Austria next week, although more are expected to be confirmed in
              the coming days. F1 CEO Chase Carey has consistently said that
              there will be a calendar of at least 15 races, but he has
              struggled to confirm any events outside Europe thus far.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.motorsport.com/f1/news/brown-mclaren-2020-season-shorter/4812678/'
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
              href='https://www.skysports.com/f1/news/12433/11999683/f1-2020-revised-race-calendar-schedule-and-driver-line-ups'
              target='_blank'>
              F1 2020: Revised race calendar, schedule, and driver line-ups
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              The 2020 season begins with the Austrian GP on July 3-5. An
              initial eight-race European calendar has been confirmed by F1 so
              far with further dates set to be added soon as the sport targets a
              schedule of between 15 and 18 races. The opening race of the new
              season is underway at 2.10pm on Sunday, July 5.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.skysports.com/f1/news/12433/11999683/f1-2020-revised-race-calendar-schedule-and-driver-line-ups'
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
              href='https://www.autosport.com/f1/news/150189/renault-will-still-involve-ricciardo-in-car-development'
              target='_blank'>
              Renault can involve Ricciardo in F1 car development despite
              McLaren move
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Renault boss Cyril Abiteboul says the team can involve Daniel
              Ricciardo in car development this year, as McLaren will use up
              development tokens on switching to Mercedes in 2021. Ricciardo has
              already signed to join McLaren for next season, as replacement for
              the Ferrari-bound Carlos Sainz Jr.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.autosport.com/f1/news/150189/renault-will-still-involve-ricciardo-in-car-development'
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
              href='https://www.espn.in/f1/story/_/id/29369868/how-racing-look-f1-new-normal'
              target='_blank'>
              How racing will look under F1's new normal
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Seven months on from the finale of the 2019 season, Formula One
              cars will finally return to racing next weekend at the Red Bull
              Ring in Austria. The race will be held behind closed doors, with
              no fans or VIPs in attendance, and access to the circuit will be
              limited to those with essential jobs in the sport.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.espn.in/f1/story/_/id/29369868/how-racing-look-f1-new-normal'
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
              href='https://the-race.com/formula-1/ricciardo-f1-at-mugello-would-be-insane/'
              target='_blank'>
              Ricciardo: F1 at Mugello would be ‘insane’
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Renault driver Daniel Ricciardo believes driving a 2020 Formula 1
              car at Mugello would be “insane” should the Italian venue hold a
              grand prix this season. The Ferrari-owned circuit, which is
              located north of Florence, is set to secure a place on the
              reshaped 2020 F1 calendar with a likely slot after the Italian
              Grand Prix at Monza. Ricciardo tested at the circuit for Toro
              Rosso in 2012, but believes the extra grip of a 2020 car would be
              a step forward even from that level of performance.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://the-race.com/formula-1/ricciardo-f1-at-mugello-would-be-insane/'
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
              href='https://www.grandprix247.com/2020/06/28/hamilton-f1-should-return-to-africa/'
              target='_blank'>
              Mercedes: ‘There will be staff redundancies’
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Formula 1 must return to Africa as part of its shift to become a
              more socially-conscious sport, says six-time champion Lewis
              Hamilton. Asked in a fan Q&A on Mercedes sponsor Petronas’ YouTube
              Channel where he would like to go for a new F1 race, Hamilton did
              not hesitate with his answer. “Easy, Africa. It’s such an
              important place to go back,” he said, referring to the continent
              which last hosted a race with the 1993 South African Grand Prix at
              Kyalami.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.grandprix247.com/2020/06/28/hamilton-f1-should-return-to-africa/'
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
              href='https://www.planetf1.com/news/mercedes-staff-redundancies/'
              target='_blank'>
              Hamilton: F1 should return to Africa
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Mercedes F1 boss Toto Wolff has confirmed that although the team
              are looking at solutions, it’s inevitable that staff will be made
              redundant. This is all down to the upcoming budget cap which from
              next year will require teams to slash their spending to $145m per
              season with only a handful of exceptions. That cap will reduce
              further over the coming years and it is the three highest-spending
              teams, them being Mercedes, Ferrari and Red Bull, who are
              expecting to be hit hardest by this.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.planetf1.com/news/mercedes-staff-redundancies/'
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
