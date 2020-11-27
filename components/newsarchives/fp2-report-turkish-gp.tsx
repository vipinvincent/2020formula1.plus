import React from 'react'
import H1 from 'components/heading/H1'

const Archive68: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1598629313/contentImages/content/max-verstappen-red-bull-racing_qufnjn.jpg'
          alt='FP2 REPORT - Turkish GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP2 REPORT - Turkish GP 2020
          </div>
          <H1>
            Verstappen clean sweep the Friday sessions with Leclerc in second
            and Bottas in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull’s Max Verstappen heads the FP2 session in Istambul park, as
            Formula 1 revisits Turkey, RedBull’s one of the favourite circuits
            since 2011 Ferrari’s Charles Leclerc good run continues as he
            finised P2 after having finished P3 this morning highlighting the
            Ferrari’s come back. The best Mercedes was Valtteri Bottas which is
            0.575s adrift of Verstappen but ahead of Lewis Hamilton in P4.Having
            let the timesheets for most of the time in FP2, Red Bull’s Alex
            Albon, eventully finished in P5, the Thai driver finishing ahead of
            the AlphaTauri pair of Daniil Kvyat and Pierre Gasly in sixth and
            seventh, as the Italian team once again confirmed the strong
            performance in an AT01 for which the team have brought new barge
            boards and a new floor this weekend.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sebastian Vettel in second Ferrari once again slotted in top ten
            list as he finished P8 ahead of Lance Stroll and Lando Norris in
            Racing Point and McLaren. Sergio Perez in the second Racing Point
            was P11 with Esteban Ocon in Reanult once again out performed his
            teammate on Friday. Antonio Giovinazzi comes next in P13 with Carlos
            Sainz in second McLaren in P14. Daniel Ricciardo for Reanult only
            managed P15 as he finds it difficult to find the sweet spot in his
            R.S.2.0.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Veteran Kimi Räikkönen comes next at P16 in the second Alfa Romeo
            ahead of George Russell in Williams. The Haas duo Romain Grosjean
            and Kevin Magnussen finishes P18 and P19 ahead of the second Willams
            of Nicholas Latifi who completes the list. As both the sessions in
            Friday comes to an end, it is advantage to Red Bull. The return of
            Ferrari to the top ten list indicates the upgrades are finally
            working for them and the prospect of the Ferrari coming back to the
            “best of the rest” battle in constructor standings. But the biggest
            surprise was from the second Italian team, AlfaTauri as they could
            slot both their car in top ten list.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive68
