import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive69: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1605276462/contentImages/content/max_wubeqo.jpg'
          alt='FP3 REPORT - Turkish GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Turkish GP 2020
          </div>
          <H1>
            FP3 session interrupted by heavy rain as Verstappen goes quickest
            with Leclerc in second and Albon in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull’s Max Verstappen heads the timesheets in the rain
            intervened FP3 session as many drivers failed to perform the quali
            like simulations. Some of the drivers only managed few out laps with
            only 3 drivers could make more than 10 laps in the final practice
            session. Ferrari’s Charles Leclarc managed secons as Max’s teammate
            Alex Albon finished in third with his 5 hands laps in the session.
            Renault’s Esteban Ocon who tipped Leclerc causing him to spin in
            early session, finished fourth fastest with McLaren’s Lando Norris
            finished fifth. The second Ferrari of Sebastian Vettel managed P6 as
            he managed the most mileage in his SF1000 in the FP3 session with 14
            laps. Sergio Perez became the best of the Racing Points with seventh
            place finish.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The best of Mercedes was Valtteri Bottas who managed 4 laps 1 better
            than his teammate Lewis Hamilton who failed to post a meaningful
            time in the session classified last in the leaders chart. Bottas is
            followed by Kevin Magnussen in Hass and Lance Stroll in the second
            Racing Point with P9 and P10 positions. Daniel Ricciardo of Renault
            managed eleventh who is the last driver in 10 second margin from the
            leader. The second McLaren of Carlos Sainz finished P12 as Antonio
            Giovinazzi of Alfa Romeo finished P13.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Pierre Gasly was the highest-placed AlphaTauri, just behind
            Giovinazzi while his team mate Daniil Kvyat was 17th, who spun
            numerous times. And was the last driver to cross the linen with
            wets. Romain Grosjean who remarked to run rental cars on track for
            laying some rubber on the surface on Friday night, that’s exactly
            what happened, albeit in vain thanks to the deluge that followed
            this morning finished P15. Kimi Räikkönen in Alfa Romeo managed the
            second best mileage of 13 laps corssed the line on P16 with the
            Williams Duo George Russell and Nicholas Latifi only managed one
            installation lap also couldn’t post a meaningful time.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            {' '}
            As there are predictions for rain in qualifying sessions in the
            evening which will big implications for the re-laid circuit, since
            drivers were finding it even difficult to get the best grip out of
            the slicks. It looks like the drivers will be doubtful for
            unleashing the full wrath of the modern hybrid f1 cars on Saturday
            afternoon.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive69
