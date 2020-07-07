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
              href='https://www.formula1.com/en/latest/article.bottas-beats-leclerc-and-norris-to-win-dramatic-austrian-gp-as-hamilton-is.4hTWtVVkWLxgPKSqkmKfYF.html'
              target='_blank'>
              Bottas beats Leclerc and Norris to win dramatic Austrian GP as
              Hamilton is penalised
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas has struck the first blow in the 2020 season,
              winning the Austrian Grand Prix from Ferrari’s Charles Leclerc, as
              Lewis Hamilton was demoted from a second place finish on the road
              to P4 after a five-second penalty for contact with Alex Albon –
              handing McLaren’s Lando Norris his first F1 podium for finishing
              P3. The Mercedes duo of Bottas and Hamilton enjoyed a comfortable
              performance advantage throughout the 71-lap encounter. But with 10
              laps to go, the race exploded into life, with Hamilton handed his
              penalty after nerfing Albon into a spin on a Safety Car restart on
              Lap 61. A late surge for Ferrari’s Charles Leclerc after a
              difficult weekend for Ferrari saw him climb to third by the flag,
              meaning he inherited second after the Hamilton penalty, while a
              late pass on the Racing Point of Sergio Perez was enough to give
              Norris the net P3, meaning McLaren begin a season with a podium
              for the first time since 2014.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.formula1.com/en/latest/article.bottas-beats-leclerc-and-norris-to-win-dramatic-austrian-gp-as-hamilton-is.4hTWtVVkWLxgPKSqkmKfYF.html'
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
              href='https://www.bbc.com/sport/formula1/53299094'
              target='_blank'>
              Lewis Hamilton penalised for collision as Valtteri Bottas wins in
              Austrian GP
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas survived reliability worries to win an
              incident-packed Austrian Grand Prix as Lewis Hamilton took fourth
              after a penalty. Four months after the scheduled first race,
              called off because of the coronavirus crisis, Mercedes' win was
              anything but the cruise that had been expected. Gearbox concerns
              slowed the cars and Hamilton was penalised five seconds for a
              collision with Red Bull's Alex Albon. Charles Leclerc came second
              after a stirring drive in the uncompetitive Ferrari while
              McLaren's Lando Norris took his first podium finish, just holding
              off Hamilton.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.bbc.com/sport/formula1/53299094'
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
              href='https://www.motorsport.com/f1/news/2020-f1-austrian-grand-prix-race-results/4826130/'
              target='_blank'>
              Valtteri Bottas won an incident-packed Austrian Grand Prix, the
              first race of the delayed 2020 Formula 1 season, for Mercedes at
              the Red Bull Ring.
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Mercedes’ dominance was challenged by Red Bull but Max Verstappen,
              who was running second behind Bottas, was forced out with an
              electrical failure early on. Towards the end of the race, Alex
              Albon took fresh soft tyres during a safety car period and was
              passing Lewis Hamilton for second when they made contact, and
              Albon was spun around. Ahead of the race Hamilton was moved back
              on the starting grid from second to fifth, for not lifting off
              under yellow flags in qualifying when Bottas went off ahead of
              him. Bottas led from the start, McLaren’s Lando Norris briefly
              grabbing second before Verstappen retook the place by Turn 3.
              Hamilton tried to pass Albon at Turn 4, but was rebuffed. Albon
              passed Norris for third when DRS was enabled on Lap 3, and
              Hamilton followed suit a lap later at Turn 1. Hamilton then used
              DRS to power past Albon for third on the run to Turn 4 on Lap 9.
              Verstappen was 3s behind Bottas when his car slowed with an
              electrical problem at the start of Lap 12. He toured back to the
              pits, where Red Bull tried to fix it with no avail
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.motorsport.com/f1/news/2020-f1-austrian-grand-prix-race-results/4826130/'
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
              href='https://www.skysports.com/f1/news/12433/12021679/austrian-gp-valtteri-bottas-wins-wild-f1-opener-lewis-hamilton-loses-podium'
              target='_blank'>
              Austrian GP: Valtteri Bottas wins wild F1 opener; Lewis Hamilton
              loses podium
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              F1 is back: and back with a bang; Bottas wins for Mercedes but
              Hamilton dropped to fourth after penalty for Albon tangle; Leclerc
              takes second with Norris claiming first podium of career on final
              lap. Valtteri Bottas won an astonishing Austrian GP, as a
              penalised Lewis Hamilton was relegated off the podium to fourth,
              in a hugely-dramatic return for Formula 1 in the first race of the
              delayed 2020 season. Hamilton finished second to Bottas on the
              road as otherwise-dominant Mercedes nursed gearbox problems but
              slipped to fourth in the final result after being handed a late
              five-second time penalty for a collision with Red Bull's Alex
              Albon at Turn Five. A charging Charles Leclerc inherited second as
              a result after an unexpected late surge for struggling Ferrari,
              with Lando Norris capping a brilliant weekend for him by claiming
              the first podium of his young career for McLaren.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.skysports.com/f1/news/12433/12021679/austrian-gp-valtteri-bottas-wins-wild-f1-opener-lewis-hamilton-loses-podium'
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
              href='https://www.autosport.com/f1/news/150360/bottas-wins-eventful-austrian-gp-from-leclerc'
              target='_blank'>
              Bottas wins eventful Austrian GP from Leclerc after Hamilton
              penalty
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas won a dramatic Formula 1 Austrian Grand Prix from
              Charles Leclerc, after Lewis Hamilton's penalty for contact with
              Alex Albon dropped him from second to fourth. Bottas crossed the
              line as the winner of an attritional race 0.6-seconds clear of his
              team-mate, but Hamilton was immediately demoted, which boosted
              McLaren's Lando Norris to first F1 career podium in third.
              Hamilton's incident with Albon happened after the end of the
              race's third safety car period and after Mercedes had had to
              intervene with its drivers due to critical reliability warnings.
              At the start, Bottas easily held the lead off the line and blasted
              to a two-second lead at the end of the opening tour, as Red Bull's
              Max Verstappen - the only top-10 starter on the medium tyres -
              soaked up pressure from Norris after several cars including
              Norris, Hamilton and Leclerc shot across the runoff at the exit of
              Turn 1.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.autosport.com/f1/news/150360/bottas-wins-eventful-austrian-gp-from-leclerc'
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
              href='https://www.espn.in/f1/report?id=28130'
              target='_blank'>
              Bottas wins wild Austrian GP, Leclerc and Norris on podium
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas won a wild Austrian Grand Prix ahead of Ferrari's
              Charles Leclerc and McLaren's Lando Norris, who claimed the first
              podium finish of his Formula One career. Bottas led from the start
              of the race and kept his cool through three Safety Car periods as
              remarkable drama unfolded behind him. Reigning world champion
              Lewis Hamilton crossed the line in second position but was
              relegated to fourth after the race with a time penalty for an
              incident with Alexander Albon, who had looked like a contender for
              victory in the closing stages. Albon and Hamilton collided at Turn
              4 while vying for position, and the stewards deemed the reigning
              world champion to be at fault. Mercedes' race was not without
              other drama, with Bottas and Hamilton both told to keep their cars
              off the Red Bull Ring's kerbs as concerns grew about the gearbox
              in each driver's car. Ferrari's dismal weekend was turned on its
              head in the closing stages as Leclerc charged through the field
              after a flurry of late Safety Car periods. Norris did similar,
              barging past Racing Point's Sergio Perez a handful of laps from
              the finish.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.espn.in/f1/report?id=28130'
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
              href='https://the-race.com/formula-1/bottas-wins-in-austria-leclerc-norris-get-surprise-podiums/'
              target='_blank'>
              Bottas wins in Austria, Leclerc/Norris get surprise podiums
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas won a thrilling Formula 1 season-opening Austrian
              Grand Prix as a penalty for clashing with Alex Albon dropped Lewis
              Hamilton from second to fourth. That meant Charles Leclerc
              snatched a surprise second place for Ferrari with Lando Norris
              claiming a maiden F1 podium in third, while Max Verstappen retired
              early while chasing Bottas. Sebastian Vettel only finished 10th
              after a spin while battling with his 2021 Ferrari replacement
              Carlos Sainz Jr. The race was already taking dramatic twists even
              before it started, with Red Bull’s call for a review of new video
              evidence leading to the stewards penalising Hamilton for a
              qualifying yellow flag infringement after all – dropping him from
              second to fifth, where he remained in the opening laps.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://the-race.com/formula-1/bottas-wins-in-austria-leclerc-norris-get-surprise-podiums/'
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
              href='https://www.grandprix247.com/2020/07/05/austrian-grand-prix-bottas-holds-firm-in-drama-filled-race/'
              target='_blank'>
              Austrian Grand Prix: Bottas holds firm in drama-filled race
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Mercedes driver Valtteri Bottas put in a steady shift out-front
              while excitement abounded behind him to win the Austrian Grand
              Prix on Sunday, the first race of the 2020 Formula 1 World
              Championship season at Red Bull Ring. Backing-up his pole position
              from Saturday, the Finn led throughout the afternoon, with
              Ferrari’s Charles Leclerc and McLaren’s Lando Norris making-up the
              podium spots after a chaotic final act to the race. The Finn said
              after the race, “That was definitely quite a bit of pressure on
              through the race one safety car was still ok with the last one I
              was like ‘come on’ there were so many chances for Lewis to come
              through if made a small mistake. “I managed to keep it together
              and control the race from my side and it’s a good start to the
              season. We had to manage the car quite a lot so we couldn’t use
              all the kerbs but I’m glad all the cars managed to finish, and the
              team standings we are leading so that’s a very good start.”
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.grandprix247.com/2020/07/05/austrian-grand-prix-bottas-holds-firm-in-drama-filled-race/'
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
              href='https://www.planetf1.com/news/austrian-gp-race-report-2020/'
              target='_blank'>
              Bottas beats Leclerc in dramatic Austrian GP
            </ActionLink>
            <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
              Valtteri Bottas survived the kerbs, three SC restarts and a crazy
              Austrian GP to beat Charles Leclerc with Lando Norris P3. Blue
              skies, hot asphalt and controversy awaited Formula 1 at the start
              of the Austrian Grand Prix as Red Bull, clearly not done with its
              right to protest, protested the stewards’ decision not to penalise
              Lewis Hamilton for ignoring yellow flags in Q3 on Saturday. Red
              Bull claimed to have new footage of the flag situation, which was
              caused when pole sitter Valtteri Bottas ran off the track on his
              final hot lap. Unlike Friday’s DAS protest, Red Bull won this one
              and, 41 minutes before the formation lap was set to leave the
              grid, Mercedes were informed that Hamilton had a three-place grid
              penalty, dropping him from second to fifth. The top six: Bottas,
              Max Verstappen, Lando Norris, Alex Albon, Hamilton and Sergio
              Perez. Ferrari drivers Charles Leclerc and Sebastian Vettel were
              P7 and 11. The lights went out some 100 days after they were
              initially expected to with the season beginning in Austria with a
              flying fast start from Bottas. The Finn was helped by Norris, who
              challenged Verstappen in every corner on the opening lap before
              the Dutchman finally dropped the McLaren driver and went off in
              search of Bottas. Albon did the same with Hamilton, refusing to
              give while Perez kept Leclerc at bay. Vettel made up just one
              place, passing Daniel Ricciardo.
            </p>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.planetf1.com/news/austrian-gp-race-report-2020/'
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
