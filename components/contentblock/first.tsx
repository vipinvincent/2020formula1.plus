import React from 'react'
import H1 from 'components/heading/H1'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595072621/contentImages/content/valtteri_-bottas_m5dgbs.jpg'
          alt='FP3 REPORT - Italian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Italian GP 2020
          </div>
          <H1>
            Mercedes’s Valtteri Bottas top FP3 ahead of the McLarens of Carlos
            Sainz and Lando Norris, with Daniel Ricciardo’s Renault in fourth
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Valtteri Bottas topped the third practice session as McLaren’s
            Carlos Sainz and Lando Norris finishes in P2 and P3 respectively as
            Hamilton narrowly avoided a heart stopping accident at speeds
            approaching 200mph towards the end of session from the slow-moving
            traffic, which is going to be a big issue during Qualifying. The
            Mercedes was denied of a clean sweep of 1-2s as the session red
            flagged intermittently when Ricciardo was forced to pull over at the
            side of the track with a mechanical issue just after setting the
            fourth quickest time. The Australian already has taken a new power
            unit for this weekend; with 10 minutes remaining as he crawled to a
            halt after the Della Roggia chicane. Lewis Hamilton finished fifth
            behind Ricciardo after failing to set a time on the first lap on his
            final run on the soft tyres as the third practice session was full
            of slipstreaming action.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull’s Max Verstappen managed sixth on medium tyres, as he is
            the only driver to do so in the session. Alex Albon took sixth on
            softs behind his Red Bull team mate, with the second Renault of
            Esteban Ocon crossed the line in seventh. The Racing Points rounded
            up top 10 with ninth and 10th ahead of last year's Italian GP winner
            Charles Leclerc in the final seconds of the session. Even though
            they had impressed on Friday, the AlphaTauris were down in 12th and
            13th in FP3, with Pierre Gasly narrowly ahead of Daniil Kvyat. All
            the top 13 cars were only separated by 0.9s from the leader Bottas,
            the qualifying will be so close with lots of slipstreaming and tow
            blagging action reminiscing of last year qualifying.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Romain Grosjean of Haas beat Ferrari's Sebasitan Vettel to 14th.
            Meanwhile the problems for Sebastian Vettel continues as his pace
            nowhere near to the top drivers, sparking fears for his
            participation in Q2 nad Q3 sessions of qualifying. Kevin Magnussen
            in the second Haas took 16th, just behind Vettel, while Kimi
            Raikkonen was 17th for Alfa Romeo. The two Williams drivers were led
            by George Russell in 18th, his team mate Nicholas Latifi 19th,
            spitted the Alfa Romeos, as Antonio Giovinazzi rounded out the
            standings two seconds off top spot. With the “party” modes now
            outlawed from this weekend and a heavy Monza traffic as drivers look
            for a tow, we’re set for a captivating shootout for pole in
            qualifying.
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
