import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive5: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP2 REPORT - HUNGARIAN GP 2020
          </div>
          <H1>
            Vettel leads the timesheets in Hungarian GP Second Practice under
            wet conditions
          </H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari’s Sebastian Vettel set the fastest time in Free Practice 2
            for the 2020 Hungarian Grand Prix with a 1m 40.464s, 0.272s ahead of
            the Mercedes of Valtteri Bottas.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            McLaren of Carlos Sainz finishes in third and the two Racing Points
            of Lance Stroll and Sergio Perez occupies the remaining top 5 spots.
            AlphaTauri’s Pierre Gasly being the first driver out in the session
            on full wets only could manage just seven laps only to complain a
            smell of burning in his AT01 right at the end of the session, as he
            ended up in P6.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            With only 13 drivers setting a time, Red Bull’s Max Verstappen was
            seventh, 2.3s behind Vettel, but ahead of the Haas of Romain
            Grosjean. Alfa Romeo’s Kimi Raikkonen complained of having “zero
            grip” and endured a number of off-track excursions, but complted the
            most number(16) of laps in FP2. Kimi finished in P9, one place in
            front of Charles Leclerc, who also complained of lack of rear grip
            on his Ferrari as he finished 10th, ahead of Antonio Giovinazzi,
            Lando Norris and Daniil Kvyat.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive5
