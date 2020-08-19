import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive6: React.FC = () => {
  return (
    <div className='relative'>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 Report - Hungarian GP 2020
          </div>
          <H1>
            Bottas leads the final practice session in Hungary with Hamilton and
            Perez in P2 and P3
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes scored another 1-2 in the final practice session for the
            Hungarian Grand Prix under cloude sky. Valtteri Bottas' time of
            1m15.437s set on soft tyres which was just 0.042s quicker than
            Hamilton. The Racing Points were impressive again with just 0.161s
            off Hamilton. His team mate Lance Stroll was fifth in a top five
            split by 0.596s behind Charles Leclerc who was in P4.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red bull's poor form continues as the Red Bull cars struggled to get
            to grips with their car. Max Verstappen finished sixth and his team
            mate Alex Albon was 12th after Friday's running. Best of the McLaren
            was Lando Norris (0.756s off Hamilton) who finished seventh with his
            team mate Carlos Sainz at 11th after Friday practice.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            FP2 leader Sebastian Vettel was eighth overall. He was just ahead of
            ninth-place Pierre Gasly of AlphaTauri, whose team mate Daniil Kvyat
            was down in P17. The top ten list complted with Daniel Ricciardo
            with a late effort and his team mate Esteban Ocon was 13th.
            Williams' George Russell was just behind Ocon with an impressive
            P14. Two Haas cars finished 15th and 16th with Romain Grosjean
            leading his team mate Kevin Magnussen.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive6
