import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Right: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826962/contentImages/content/styrian-gp_hcvdog.jpg'
          alt='Styrian Grand Prix - How team sees the teammates battles?'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-6 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Latest News
          </div>
          <H1>Styrian Grand Prix - How team sees the teammates battles?</H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong className='italic'>Ferrari</strong> - After started the race
            10th(Vettel) and 14th(Leclerc) respectively, Ferrari’s Styrian Grand
            Prix lasted just three corners before Charles Leclerc lost control
            of his SF1000, wiping out his team mate Sebastian Vettel’s rear wing
            and causing race-ending damage to himself. Ferrari Team Principal
            Mattia Binotto alo blammed the car performance as much as his
            drivers for the crash. ‘We can’t hide behind the collision’ says
            Binotto after ‘worst conclusion to a very bad weekend’
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong className='italic'>Racing Point</strong> -Driver of The Day
            Sergio Perez, from P17 on the grid to P6 at the flag, pulled off a
            masterful recovery drive in the Styrian Grand Prix. Later Perez
            admitted that he was 'very lucky' to only lose one position on final
            lap after Albon clash apologised to the team over the radio, saying
            “sorry guys”. In the end Stroll drag-raced him to the line with only
            0.066s split the two racing point drivers.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong className='italic'>McLaren</strong> - “Great teamwork
            between the two drivers swapping on track when it was needed,” said
            McLaren Team Principal Andreas Seidl after the race. “Carlos didn’t
            give up and did a great job securing the fastest lap – the second
            time in a row for us. McLaren Racing CEO, Zak Brown, has said the
            team will keep the relationship “healthy” between Carlos Sainz and
            Lando Norris.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong className='italic'>Renault</strong> - Daniel Ricciardo
            believes the Renault Formula 1 team would have told Ocon to let him
            by. After several laps stuck behind Ocon, Ricciardo communicated his
            engineer that he was faster than the cars ahead, but no attempt was
            made to swap positions before Ricciardo made his own move. "I asked
            a bit of a general question," said Ricciardo. "As I was, I felt,
            being held up by by that group. So I just said, 'Look, guys, I'm
            quite a bit quicker at the moment.'
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            <strong className='italic'>Haas</strong> - Steiner pleased to see
            Haas drivers cooperating and remarked ‘It took a few years too long
            and a few crashes too many’. Haas boss Guenther Steiner said he was
            encouraged to see Kevin Magnussen and Romain Grosjean fight for
            position at the Styrian Grand Prix without incident. The pair fought
            for position at the Styrian Grand Prix without contact, with
            Magnussen eventually finished at 12th place.
          </p>
          {/* <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.we-havent-seen-the-full-potential-of-mercedes-or-red-bull-yet-says-wolff.4hSJsAzStntPh9H8WI6fDQ.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p> */}
        </div>
        {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53377338'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/binotto-ferrari-qualifying-struggles-styria/4831883/'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
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
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150518/binotto-styria-qualifying-not-good-enough-for-ferrari'
                target='_blank'>
                <img
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
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
                  className='w-auto h-8 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
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
                  className='w-auto h-8 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg bg-gray-800'
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
                  className='w-auto h-8 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
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
                  className='w-auto h-8 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
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
export default Right
