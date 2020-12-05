import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive75: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490683/contentImages/content/lewis-hamilton3_za9deq.jpg'
          alt='Qualifying REPORT - Bahrain GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Qualifying REPORT - Bahrain GP 2020
          </div>
          <H1>
            Lewis Hamilton grabs his third pole in Bahrain with Bottas in second
            and Verstappen in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Hamilton beats Bottas and Verstappen and takes 98th pole at Bahrain
            International Circuit with a new track record. His team mate
            Valtteri Bottas finished second ensuring a Mercedes 1-2 finish at
            Bahrain. Red Bull’s Max Verstappen stood no chance in front of
            Mercedes power and had to settle for third. Alex Albon in the second
            Red Bull manages a second row start with a P4 finish with half a
            second behind his team mate Max and nearly 1 second behind the pole
            sitter. Racing Point's Sergio Perez managed a respectful fifth with
            both Renault cars of Daniel Ricciardo and Esteban Ocon in P6 and P7
            respectvely.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Both Alpha Tauris managed a top ten finish with Pierre Gasly
            finishing ahead of Daniil Kvyat in P8 and P10 respectively,
            sandwiching McLaren’s Lando Norris in P9. Both Ferrari’s got knocked
            out in Q2 and only managed P11 and P12 with Sebastian Vettel
            finishing ahead of his team mate Charles Leclerc. Last race pole
            sitter Lance Stroll only manged P13 as the team got it wrong by
            using the used set of medium for the red flag interpreted Q2
            session. Mr. Saturday, George Russell once gain outclassed his team
            mate and ensured yet another Q2 appearance with a P14 finish. Carlos
            Sainz in second McLaren suffered a mechanical problem that caused a
            spin and ended his qualifying early in Q2 and will start in
            fifteenth, without a time plotted against him in Q2.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Both Alfa Romeos and Haas couldn’t make into Q3 with Antonio
            Giovinazzi finishing ahead of his veteran team mate Kimi Raikkonen
            in p16 and P17 respectively. Kevin Magnussen finished ahead of
            Romain Grosjean again in the season with the Danish driver in P18
            and the French driver in P19. Nicholas Latifi of Williams rounded of
            the classified driver list in P20. With Mercedes locking the front
            row of the grid and the Red Bull with better tyre management, the
            race on Sunday seems to be the battle of strategies as the track is
            bound to fill with overtakes and action packed racing. With tyre
            degradation expected to be crucial on Sunday evening, the team with
            better tyre management will fancy their chances to alter the race
            results.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive75
