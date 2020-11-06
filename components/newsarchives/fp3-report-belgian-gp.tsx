import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive32: React.FC = () => {
  return (
    <div className='relative'>
      {/* <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490683/contentImages/content/lewis-hamilton2_x4c01p.jpg'
          alt='FP3 REPORT - Belgian GP 2020'
        />
      </div> */}
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Belgian GP 2020
          </div>
          <H1>
            Hamilton leads final practice from Ocon and Norris as Ferrari's
            Vettel deep-rooted at last spot
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton set the fastest time in the final practice session of
            the Belgian Grand Prix with Renault’s Esteban Ocon P2 and McLaren’s
            Lando Norris in P3. Meanwhile at the rear end Ferrari’s struggles
            continued at Spa with Sebastian Vettel posted the slowest time and
            Charles Leclerc managed 17th. Hamilton set his fastest time of
            1m43.255s, but his team mate Valtteri Bottas sliding at La Source on
            his way only managed P5, 0.558s off the pace. Notably, Bottas had
            set the pace on medium tyres with a fastest time of 1m43.813s on
            medium tyres.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Second-place Renault driver Esteban Ocon ed 0.230s off Hamilton with
            a fast first sector to and ahead of McLaren’s Lando Norris, with
            Redbull’s Alex Albon in fourth. His teammate, Max Verstappen was
            second-fastest on medium tyres but when he switched to softs, he
            could only manage sixth, 0.641s off the pace. The second Renault of
            Daniel Ricciardo only could manage P7 under a tenth slower to finish
            P7. Lance Stroll, eighth, with 0.733s off the pace and 0.02s faster
            than McLaren’s Carlos Sainz, who split the Racing Points in ninth.
            Sergio Perez was 10th on softs having made a mistake on his final
            flying effort. Later Perez was summoned to the stewards and given a
            warning for impeding Romain Grosjean.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The AlphaTauris were competitive on mediums with Pierre Gasly and
            Daniil Kvyat lining up 11th and 12th, respectively, ahead of
            Williams’ Nicholas Latifi in P13. Kevin Magnussen and Romain
            Grosjean finished 14th and 15th, Magnussen 0.003s faster than
            Grosjean. Ex-Belgian Grand Prix winner Kimi Raikkonen finished 16th
            for Alfa Romeo.The Ferrari of Charles Leclerc, the winnner the 2019
            Belgian Grand Prix only could manage 17th. The last year champions'
            tumble is desolate. Williams’ George Russell and Alfa Romeo’s
            Antonio Giovinazzi both finished ahead of Vettel in 18th and 19th.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive32
