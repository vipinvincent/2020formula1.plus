import React from 'react'
import H1 from 'components/heading/H1'

const QualifyingReport: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490309/contentImages/content/lewis-hamilton_oavnow.jpg'
          alt='Qualifying REPORT - Italian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Qualifying REPORT - Italian GP 2020
          </div>
          <H1>
            Mercedes dominates Monza without “Party” modes as Lewis Hamilton’s
            breaks the lap record for P1 with Bottas in second and Carlos Sainz
            third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton grabs pole position with a new track record at Monza
            in the Italian Grand Prix qualifying ahead of Valtteri Bottas
            claiming yet another 1-2 for Mercedes. It was a private affair for
            pole position at Monza between the two Mercedes cars as Lewis
            Hamilton, leading his team mate Valtteri Bottas only by 0.069s as
            Ferrari failed to get a car in the top 10 at their home race for the
            first time in 36 years. Carlos Sainz for McLaren was the best of the
            rest with an impressive third, which was McLaren’s third of the
            season, with Sergio Perez in the Racing Point at fourth. It’s also
            McLaren’s first top-three start at Monza since they locked out the
            front row in 2012. Perez will start fourth for the eighth time in
            his F1 career, with Max Verstappen pushed down to fifth. Since the
            turbo hybrid era began in 2014, this is for the first time Red Bull
            have failed to start on the front two rows of the grid at Monza.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The second McLaren of Lando Norris crossed the line in sixth with
            Daniel Ricciardo in seventh. Lance Stroll in the second Racing point
            finished eighth and Alexander Albon, who had three laps deleted for
            exceeding track limits finished in ninth. AlphaTauri’s Pierre Gasly
            rounded out the top 10 as his teammate Daniil Kvyat finished 11th.
            Meanwhile, Esteban Ocon had to settle for P12 as he got knocked out
            despite running behind teammate Ricciardo early in his final Q2 lap
            to try and take advantage of the tow. But, Ricciardo made a mistake
            and put his left-side wheels off into the gravel as he was exiting
            the second chicane and he later slowed and abandoned his lap, with
            Ocon not improving his final flyer in Q2.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Charles Leclerc of Ferrari ended up in P13, calling his Q2 lap "the
            best I can do", as Ferrari was again exposed by its straightline
            speed issues with the SF100. Kimi Raikkonen for Alfa Romeo and Kevin
            Magnussen for Haas made it through to Q2, but Magnussen ran very
            wide into the gravel as he flew through the second Lesmo, which
            ruined his final lap in the middle segment as they finished 14th and
            15th respectively. The second Haas of Romain Grosjean ended up in
            P16, ahead of Vettel, who abandoned his final Q1 run, as there were
            race-like scenes on the final runs in the opening segment, where
            backing-up at the Parabolica meant several drivers including Vettel
            fought for space at the right-hander and down the main straight.
            Behind Vettel came Antonio Giovinazzi and George Russell, who
            criticized his Williams team over his radio for getting involved in
            the chaotic scenes. Meanwhile the second Williams driver Nicholas
            Latifi, who was also involved, was the only driver to set a personal
            best, although he still ended up 20th and last.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
export default QualifyingReport
