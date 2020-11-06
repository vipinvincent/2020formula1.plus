import React from 'react'
import H1 from 'components/heading/H1'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <div className='h-48 md:h-64 xl:h-104  w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1599834663/contentImages/content/valteri-bottas_kvx19p.jpg'
          alt='FP3 REPORT - Eifel GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Eifel GP 2020
          </div>
          <H1>
            Bottas leads FP3 from Hamilton and Leclerc with Vettel in P5, as
            unwell Stroll misses the session
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Valtteri Bottas for Mercedes leads the only practice session at the
            Nurburgring for the Eifel Grand Prix on Saturday from his teammate
            Hamilton in P2 and Ferrari’s Charles Leclerc in P3. Having lost both
            the practice sessions of Friday due to fog and mist, the field made
            ample use of the final practice session with most of the drivers
            clocking more than 20 laps. Even though it was a much busier than
            normal FP3 sessions, the drivers and cars featured a much greater
            variety of different programmes with several drivers performing
            multi-lap runs. Meanwhile one driver missed all the actions of FP3
            was Lance Stroll. Racing Point revealed that Stoll is unwell and
            will not be participating FP3, just before the session, which raises
            question marks about whether he will be able to take part in
            qualifying. It is not confirmed that Nico Hulkenberg is to make yet
            another last-minute return to as he was drafted in to replace an
            unwell Lance Stroll at Racing Point for the remainder of the Eifel
            Grand Prix weekend.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Max Verstappen only managed P4 after topping the time sheets in the
            early part of the session. Sebastian Vettel finished P5 in the
            second Ferrari, which is one of the most encouraging practice
            showings for the team in some time. McLarens’ Lando Norris finished
            P6 ahead of Sergio Perez, the Sole Racing Point driver . Daniel
            Ricciardo finsied P8 in the Reanult, as Alex Albon in the second Red
            Bull was ninth quickest with Pierre Gasly in AlphaTauri rounded of
            top 10. Esteban Ocon in the second Renault finished P11 with the
            second Alpha Tauri of Daniil Kvyat in P12. McLaren’s Carlos Sainz
            finished P13.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Kimi Raikkonen in the Alfa Romeo took P14, as he becomes the most
            experienced F1 driver ever this weekend with his 323rd start. Haas
            duo, Romain Grosjean and Kevin Magnussen finished 15th and 16th
            respectively. William’s George Russell managed P17 ahead of Antonio
            Giovinazzi in the second Alfa Romeo who finished in 18th. Nicholas
            Latifi in the second Williams finished P19 as he spun late on at the
            final corner and made a hash of rejoining, rounded of the drivers
            who participated in FP3. The fog that had hung over the circuit all
            day on Friday had lifted, but conditions were still chilly when the
            pit lane exit opened for the first time at this race weekend. It is
            expected to rain on Sunday, but not during the race, so expecting a
            clean sunny Sunday race.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
