import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive7: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Qualifying Report - Hungarian GP 2020
          </div>
          <H1>
            Hamilton P1 with the lap record set the fastest time in Qualifying
            and Bottas in P2 with two Racing Points in P3 and P4
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Sebastian Vettel and Charles Leclerc finished P5 and P6
            with Max Verstappen of Red Bull Racing only could manage a P7, who
            was last years pole sitter. McLaren teammates Lando Norris Carlos
            Sainz McLaren trails Ferrai at P8 and P9 only able to finish just
            above AlphaTauri's Pierre Gasly who couldn't participate Q3 due to
            ongoing power unit issues.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault's Daniel Ricciardo only could manage P11 with today's
            suprise with George Russell of Williams at P12 with a stromg
            performance. Alexander Albon of Red Bull Racing was furious with his
            team for leaving him in traffic and only coud manage P13
            highlighting RedBull's poor form in Hungry. Esteban Ocon finished
            P14 and Nicolas Latifi finished P15 with both Williams cars in Q2
            after a long period of time.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Two Haas cars finished 15th and 17th with Kevin Magnussen leading
            his team mate Romain Grosjean. AlphaTauri 's Daniil Kvyat finished a
            disappointing 16th. Both Alfa Romeo Racing cars was glued to the
            last spot with Antonio Giovinazzi in 19 and 40 year old veteran Kimi
            Räikkönen in 20th spot.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive7
