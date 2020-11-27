import React from 'react'
import H1 from 'components/heading/H1'

const Archive71: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <div className='h-48 md:h-64 xl:h-104  w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1605447260/contentImages/content/lewis-hamilton_jt3fbq.jpg'
          alt='Race REPORT - Turkish  GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - Turkish GP 2020
          </div>
          <H1>
            Lewis Hamilton wins 2020 Turkish GP and clinches the 2020 Formula 1
            world title, equalling the record of Michael Schumacher
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton claimed the record equalling seventh drivers title
            with a stunning win in a wet and wild Turkish Grand Prix. Starting
            from sixth on the grid, Hamilton with his gut instincts and
            dominating driving shown the world how champions are made. After
            leading the race for most of the laps the pole sitter Lance Stroll
            couldn’t convert his P1 to a race win and eventually ended his race
            in ninth position. Behind Hamilton, Sergio Perez and Sebastian
            Vettel claimed their first podium of the season. A dramatic last lap
            saw Ferrari’s Charles Leclerc overtook Perez for P2, but got it
            wrong at Turn 12, with Perez retaking second as Vettel made it
            through on his team mate and finished third.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Leclerc crossed the line in fourth position ahead of the McLaren of
            Carlos Sainz. Red Bull on their 300 race start only managed P5 and
            P6 with Max Verstappen leading his team mate Alex Albon at the flag.
            Max and Alex who was in podium places during the first stint on race
            later got it wrong during the tricky second pit stop time, assisted
            with multiple spins. The second McLaren of Lando Norris finished P7
            after a brave drive with multiple brave overtaking manoeuvres. The
            Renault duo Riccardo and Ocon behind Norris in P10 and P11.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Daniil Kvyat and Pierre Gasly of Alfa Tauri crosses the line next in
            P12 and P13 ahead of Valtteri Bottas, who had a terrible race with
            multiple spins. Kimi Räikkönen and Geroge Russel in P15 and P16
            rounds off the classified drivers in 2020 Turkey GP. Both Haas
            drivers Kevin Magnussen and Romain Grosjean after suffering mid race
            collisions and multiple spins forced them to retire the race along
            with William’s’ Nicholas Latifi. Giovinazzi is the fisrt person to
            retire the race due to a mechanical issue which bought two-lap
            Virtual Safety Car out on Lap 13, surprisingly was the only VSC/SC
            incident of the race.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive71
