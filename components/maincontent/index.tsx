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
              href='https://www.formula1.com/en/latest/article.qualifying-report-scintillating-bottas-takes-masterful-pole-as-ferrari.9DCxyNAuIA3gywPVRvyc3.html'
              target='_blank'>
              Bottas beats Hamilton to pole as Ferrari struggle in Austria
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Mercedes continued their vice-like grip on the Austrian Grand Prix
              weekend, with an emphatic one-two finish in qualifying as Valtteri
              Bottas escaped an off-track excursion to beat team mate Lewis
              Hamilton to take the first pole position of 2020. Formula 1 has
              been in a holding pattern as the coronavirus pandemic struck the
              world, but after nearly four months, the cars finally hit the
              track – and it was Mercedes, running a black livery in a stand
              against racism – who continued their rampant form in F1 who seized
              the advantage. Bottas set an early marker with a new track record,
              pipping Hamilton after the opening salvos. The Finn looked immense
              in the first sector on the second run, but threw it all away as he
              lost control of the car and bounced across the track before
              re-joining. That opened the door for Hamilton to take advantage,
              the Briton running last on track, and while he did improve on his
              first effort, he couldn’t quite make the difference, finishing
              0.012s off Bottas' pace.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.formula1.com/en/latest/article.qualifying-report-scintillating-bottas-takes-masterful-pole-as-ferrari.9DCxyNAuIA3gywPVRvyc3.html'
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
            className='w-full h-full object-contain rounded-l bg-bbc'
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
              href='https://www.bbc.com/sport/formula1/53292525'
              target='_blank'>
              Valtteri Bottas beats Lewis Hamilton to Austrian Grand Prix pole
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas beat Lewis Hamilton to pole position as Mercedes
              dominated qualifying at the Austrian Grand Prix, while Ferrari had
              a shocking day. Mercedes seemed unbeatable as the season
              re-started after a four-month delay as a result of the
              coronavirus. The cars, painted black this year to reflect
              Mercedes' support for anti-racism, were half a second clear. The
              fastest Ferrari of Charles Leclerc was in seventh as the sheer
              scale of their lack of performance became clear. Team-mate
              Sebastian Vettel did not even make it into the final part of
              qualifying and the four-time world champion will start 11th.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.bbc.com/sport/formula1/53292525'
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
              href='https://www.motorsport.com/f1/news/2020-f1-austrian-qualifying-gp/4825123/?nrt=54'
              target='_blank'>
              Valtteri Bottas of Mercedes will start the Austrian Grand Prix
              from pole position
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas of Mercedes will start the Austrian Grand Prix
              from pole position, the first race of the delayed 2020 Formula 1
              World Championship season. Bottas set a 1m02.939s on his first run
              in the top-10 qualifying shootout at the Red Bull Ring – a new lap
              record and 0.122s quicker than Hamilton. Bottas went off on the
              exit of Turn 4 and spun on his second run, causing a yellow flag
              that hampered Hamilton, who was just 0.012s slower. Max Verstappen
              will start third, half a second slower than the Mercedes duo,
              ahead of McLaren’s Lando Norris, Alex Albon (Red Bull), Sergio
              Perez (Racing Point), Charles Leclerc (Ferrari), Carlos Sainz
              (McLaren), Lance Stroll (Racing Point) and Daniel Ricciardo
              (Renault).
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.motorsport.com/f1/news/2020-f1-austrian-qualifying-gp/4825123/?nrt=54'
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
              href='https://www.skysports.com/f1/news/12433/12021068/austrian-gp-qualifying-valtteri-bottas-pips-lewis-hamilton-to-pole'
              target='_blank'>
              Austrian GP Qualifying: Valtteri Bottas pips Lewis Hamilton to
              pole
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Bottas hangs on to Austria pole ahead of Hamilton despite big spin
              on his final lap; McLaren's Norris splits Red Bulls with fourth,
              but Ferrari endure a desperate start to season with Vettel out in
              Q2. Valtteri Bottas beat Mercedes team-mate Lewis Hamilton to the
              first pole position of F1's delayed 2020 season at the Austrian GP
              despite a big error on his final lap. But Ferrari's fears about
              their competitiveness at the start of the new season were laid
              bare as Charles Leclerc qualified only seventh and Sebastian
              Vettel was knocked out in Q2. Lando Norris took a stunning fourth
              for McLaren, just behind Red Bull's Max Verstappen.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.skysports.com/f1/news/12433/12021068/austrian-gp-qualifying-valtteri-bottas-pips-lewis-hamilton-to-pole'
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
              href='https://www.autosport.com/f1/news/150333/bottas-beats-hamilton-to-austrian-gp-pole-position'
              target='_blank'>
              Austrian GP: Bottas beats Hamilton to pole position as Ferrari
              struggles
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas turned the tables on his Mercedes Formula 1
              team-mate Lewis Hamilton by claiming pole for the Austrian Grand
              Prix despite skating into the gravel on his final effort. Max
              Verstappen claimed third for Red Bull and will start on alternate
              tyres to the Mercedes drivers, with Lando Norris claiming a
              sensational fourth for McLaren as Racing Point's pace was only
              good enough for sixth for Sergio Perez and Ferrari's form faltered
              further than expected. Bottas broke the track record at the Red
              Bull Ring with a 1m02.939s on his first run in Q3, with Hamilton
              unable to get under 63-seconds on his own first effort in the
              final segment as he lost time in the second and third sectors.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.autosport.com/f1/news/150333/bottas-beats-hamilton-to-austrian-gp-pole-position'
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
              href='https://www.espn.in/f1/story/_/id/29409020/bottas-beats-hamilton-pole-ferrari-flops-austria'
              target='_blank'>
              Bottas beats Hamilton to pole as Ferrari flops in Austria
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas secured pole position for the opening race of the
              2020 Formula One season, beating teammate Lewis Hamilton to pole
              position by 0.012s. Bottas secured pole despite sliding off the
              track and into the gravel on his final flying lap, just as
              Hamilton was on a faster lap behind. Despite yellow flags coming
              out to warn Hamilton about the incident, they did not appear to
              obstruct Hamilton's progress and the reigning champion lost the
              majority of his time to his teammate running wide in the final two
              corners. The qualifying result ignites the battle between the
              Mercedes teammates, but the early signs are that they are in a
              class of their own, with a half second advantage over the rest of
              the field. Speaking about how his lap panned out and Bottas' spin
              in front of him, Hamilton said he did not lose time as a result.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.espn.in/f1/story/_/id/29409020/bottas-beats-hamilton-pole-ferrari-flops-austria'
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
              href='https://the-race.com/formula-1/mercedes-drivers-feel-das-impact-think-theres-more-to-come/'
              target='_blank'>
              Mercedes drivers feel DAS impact, think there’s more to come
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Lewis Hamilton and Valtteri Bottas say they have felt the impact
              of Mercedes’ dual-axis steering system at Formula 1’s Austrian
              Grand Prix and believe it could have more potential. Bottas edged
              Hamilton by 0.012s in qualifying, and the next-best car was Max
              Verstappen’s Red Bull, more than half a second slower. Mercedes
              had already scored a victory over Red Bull when the stewards
              rejected Red Bull’s protest of the Mercedes DAS system following
              Friday practice. Both Bottas and Hamilton then used it in
              qualifying to adjust the toe angle of their front wheels to assist
              the temperature management on their preparation laps.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://the-race.com/formula-1/mercedes-drivers-feel-das-impact-think-theres-more-to-come/'
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
              href='https://www.grandprix247.com/2020/07/04/austria-qualifying/'
              target='_blank'>
              Austria Qualifying: Bottas edges Hamilton, Ferrari flounder
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              The sight off-track might have been alien with no fans, but the
              sight on-track was a familiar one with Valtteri Bottas and
              Mercedes on-top on Saturday and claiming pole position for the
              Austrian Grand Prix tomorrow. His third pole in Austria and 12th
              of his career, Bottas topped the timesheets with a 1:02.939 to get
              his 2020 Formula 1 season off to the best possible start. Setting
              his time with his first run in Q3, the Finn kept his lead despite
              a trip through the gravel in his second run, his teammate Lewis
              Hamilton still 0.012 seconds behind, despite improving in his own
              final effort. Bottas said afterwards, “It feels really good, I’ve
              missed this feeling, I’ve obviously been preparing for this for a
              long time and it feels so good. Our team have done an amazing job,
              we seem to be in our own league. I’m so impressed. It’s truly an
              amazing car to drive.” Teammate Hamilton gave the pole winner a
              congratulatory hug, before adding, “Great job by Valtteri, this is
              a great start to the season. I think we show year on year that we
              continue to be the best team, we’re constantly pushing the
              boundaries and there’s not really any politics within the team.
              That’s why every year we come back.”
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.grandprix247.com/2020/07/04/austria-qualifying/'
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
              href='https://www.planetf1.com/austria/beating-mclaren-main-aim-for-racing-point/'
              target='_blank'>
              Beating McLaren main aim for Racing Point
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              It was a mixed Saturday for the team. They headed it into it
              harbouring hopes that they could take the title of the
              third-fastest team from Ferrari. While they did indeed look to be
              quicker than the Italian outfit, they were taken by surprise by
              McLaren, who look to be as fast if not faster, with Lando Norris
              starting in P4. Beating the British team on Sunday is Racing
              Point’s main aim, and Perez, who starts in P6, says he’ll be
              disappointed if they don’t. “We knew all the way through the
              weekend that the margins were very small around us with the
              McLarens, the Red Bulls and people behind like the Renaults,” he
              said after qualifying. “McLaren showed their true pace right at
              the end there in Q3. My Q3 was okay, I found the track a bit
              slower. “I think we have good race pace, so we should be able to
              fight them from there. We’ll definitely be in the mix. I will be
              disappointed if we don’t beat them tomorrow.”
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.planetf1.com/austria/beating-mclaren-main-aim-for-racing-point/'
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
