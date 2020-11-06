import React from 'react'
import H1 from 'components/heading/H1'

const Archive55: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <div className='h-48 md:h-64 xl:h-104  w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1602239921/contentImages/content/eifel-gp-fp1_oomdvc.jpg'
          alt='Eifel Grand Prix FP1 cancelled due to bad weather at Nurburgring'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1 & FP2 REPORT - Eifel GP 2020
          </div>
          <H1>
            Eifel Grand Prix FP1 and FP2 cancelled due to bad weather at
            Nurburgring
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The start of the Round 11 of the 2020 season from the Nurburgring,
            Germany has been called off due to the weather. This means the Eifel
            Grand Prix weekend will be delayed till FP3. Due to a fog and misty
            condition at the Nurburgring on Friday morning, it looked too bad
            for the medical helicopter to be able to fly in case needed, which
            means that the Race Control would not allow cars on track. Even
            though the FP1 session did technically start at 11am local time, the
            Race Control advised the teams that the pit lane would remain
            closed. After waiting for 60 more minutes in both sessions, the race
            control informed that the pit lane would remain closed as the
            conditions were not changing. With rain expected throughout the day,
            attention will now turn to Free Practice 3 and whether conditions of
            the race weekend.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "With the fog that's come in, the medical helicopter is not able to
            take off and fly to the hospital," FIA race director Michael Masi
            said during the session. "The distance by road is too far, should
            something occur. "With the region that we're in, it's probably not
            dissimilar to Austria earlier in the year when we had a similar
            situation. It's just the nature of the area and the location. "The
            fog's come in, and it's all been going up slightly but coming down
            more dramatically, so we'll just judge at the time [if it is safe to
            start]. "From an FIA perspective, the safety of all the participants
            and the drivers hopefully going out is paramount, and that's not
            something we will compromise."
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The cancellation of FP1 will be particularly disappointing for Mick
            Schumacher and Calum Ilott, the Ferrari junior drivers who were set
            to make their F1 free practice debuts in this session for Alfa Romeo
            and Haas respectively. Mick Schumacher, the 21-year-old F2 title
            leader, was due to drive the Alfa Romeo in place of Antonio
            Giovinazzi, while Ilott due to run with Haas in place of Romain
            Grosjean. Currently both are members of the Ferrari Driver Academy
            and both are potential candidates for a seat in F1 next season.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive55
