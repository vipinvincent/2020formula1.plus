import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const MotorSport: React.FC = () => {
  return (
    <div className='relative  mt-0'>
      <div className='h-32 sm:h-48 w-full bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-lg rounded-br-lg-tl-xl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
          alt='motorsport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.motorsport.com/f1/news/verstappen-belgian-gp/4866019/'
            target='_blank'>
            Verstappen: Managing tyres made Belgian GP "boring"
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Max Verstappen found Sunday's Belgian Grand Prix "pretty boring",
            believing he spent 38 of the 44 laps at Spa managing his tyres en
            route to third place.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen spent every single lap of the race running third as he
            struggled to take the fight to the Mercedes pair of Lewis Hamilton
            and Valtteri Bottas ahead. Verstappen made an earlier than planned
            switch to the hard compound tyre following an early safety car,
            forcing him to then manage his pace for the remainder of the race to
            pull off a one-stop strategy. The option Red Bull had to switch to a
            two-stop strategy was compromised by Renault's Daniel Ricciardo, who
            sat within Verstappen's pit stop window in fourth place.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen explained after the race that he was forced to manage his
            tyres for the majority of the race, something he found disappointing
            at a track as exciting as Spa. "On the hard tyre I was trying to
            follow Valtteri a bit, and then they told him to speed up, so I lost
            of a bit of ground," Verstappen said. "From then on, at one point
            with 10 laps to go, I started to have really bad vibrations on the
            tyres, and then I started to have a lot of understeer.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.motorsport.com/f1/news/verstappen-belgian-gp/4866019/'
              target='_blank'>
              motorsport.com
            </ContentLink>{' '}
            for More Details...
          </p>
        </div>
        {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'> */}
        {/*     <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53377338'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/binotto-ferrari-qualifying-struggles-styria/4831883/'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150857/fia-explains-how-honda-worked-through-f1-lockdown'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826931/contentImages/logo/espn_av2iv1.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/hamiltons-not-from-this-world-pole-lap-explained/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-2 object-contain rounded-tl-lg rounded-br-lg bg-gray-800'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/14/wolff-we-havent-seen-the-full-potential-of-mercedes-or-red-bull/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-3 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/grandprix247_yj6fcw.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/qualifying-report-styrian-gp-2020/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div> */}
        {/* </div>
        </div> */}
      </div>
    </div>
  )
}
export default MotorSport
