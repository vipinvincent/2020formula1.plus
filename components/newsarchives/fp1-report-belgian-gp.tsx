import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive30: React.FC = () => {
  return (
    <div className='relative'>
      {/* <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595072621/contentImages/content/valtteri_-bottas_m5dgbs.jpg'
          alt='FP1 REPORT - Belgian GP 2020'
        />
      </div> */}
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1 REPORT - Belgian GP 2020
          </div>
          <H1>
            Bottas celebrates his birthday by leading the first practice session
            from Hamilton and Verstappen{' '}
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Bottas managed the top spot in the tight battle from his Mercedes
            team mate Lewis Hamilton by just 0.069s with Red Bulls’s Max
            Verstappen finished third, just 0.012s behind Hamilton. The Finn who
            turned 31 today set the fastest lap of 1m 44.493 on soft tyres. The
            same compound was used by every driver in the top-10 to set their
            respective flying laps. Meanwhile Hamilton couldn’t match Bottas’s
            time due to a mistake in sector three. Verstappen had a very
            impressive run with just 0.012s behind the second Mercedes of
            Hamilton.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sergio Perez was the faster Racing Point driver, with 0.136s off
            Bottas and finished fourth. Team mate Lance Stroll was another
            two-tenths off Perez, rounding out the top five. Alex Albon, who
            made his debut for Red Bull at this track finished P6 with just over
            half a second off his team. Renault and McLaren rounded the top 10
            list with Esteban Ocon in P7, six tenths off top spot. Behind him
            was McLaren’s Carlos Sainz, who shrugged off a brief DRS issue
            finished P8. Daniel Ricciardo finishes in P9 and Lando Norris in
            P10.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            AlphaTauri duo Daniil Kvyat and Pierre Gasly were 11th and 12th,
            respectively, with Alfa Romeo's Kimi Raikkonen an impressive 13th.
            Ferrari had a worrying session only managed 14th and 15th. Charles
            Leclerc won this race for the Scuderia last year, but today he could
            only manage 1.266s off P1. His team mate Sebastian Vettel was 1.686s
            off top spot , ahead only of the two Williams who set a
            representative lap time in the session. Williams’ Nicholas Latifi
            finished 16th, his team mate George Russell just behind in 17th and
            over two-seconds off P1. Neither Haas drivers could set a time after
            Romain Grosjean encountered power issues on his early out lap. Both
            he and Kevin Magnussen were kept in the garage without setting a
            time in FP1 as Haas examined their Ferrari power units. Alfa Romeo’s
            Antonio Giovinazzi also didn’t set a time either, with unexplained
            issues, as dark clouds loomed over Spa-Francorchamps on Friday.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive30
