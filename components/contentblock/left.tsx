import React from 'react'
import H1 from 'components/heading/H1'
import ActionLink from 'components/link/ActionLink'

const Left: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594990598/contentImages/content/ferarri_gxis2s.jpg'
          alt='Ferrari restructures Formula 1 technical department'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-1 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <H1>
            Ferrari chairman Elkann John Elkann admits “We are aware of the
            structural weaknesses with which we have been living for a decade”
          </H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Elkann, speaking at length to Italian newspaper Gazzetta dello Sport
            about Ferrari's form, admits that it will not be until new rules
            come into play in 2022 that they can't expect returning regularly to
            the front. Elkann also says that he has “total trust” in Team
            Principal Mattia Binotto despite their tough start to 2020.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Elkann acknowledges "Ferrari is going through a difficult period
            that starts far back. We have not won a constructors' world
            championship since 2008 nor a drivers' one since 2007. "There has
            been Red Bull's winning cycle thanks to aerodynamic capacity and
            then Mercedes for their great ability in hybrid engine technologies.
            "This year we are not competitive thanks to project errors. We have
            had a number of structural weaknesses that have existed for some
            time in aerodynamics and in the dynamics of the vehicle. We have
            also lost out in engine power. "The reality is that our car is not
            competitive. You saw it on the track and you will see it again.
            "Today we are laying the foundations for being competitive and
            returning to winning when the rules change in 2022. I am convinced
            of this."
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Elkann has also highlighted that he has “total trust” in Team
            Principal Mattia Binotto despite their tough start to 2020. "Today
            we are laying the foundations for being competitive and returning to
            winning when the rules change in 2022,” said Elkann. “I am convinced
            of it. "Also because Mattia Binotto, who has taken the helm of the
            Scuderia for a year, has all the skills and characteristics to start
            a new winning cycle. He was in Ferrari with Todt and Schumi. "He
            knows how to win and from next year he will work with two drivers
            who are young and ambitious like us."
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            "In the past 10 years we have had champions such as (Fernando)
            Alonso and Vettel, who have been world champions," Elkann said. "But
            it is undoubtedly more difficult to rebuild a cycle and ask patience
            to those who have already won compared to those who have the future
            ahead of them. "We are laying the foundations for building something
            important and lasting, and the contract we signed with Charles
            proves it: five years, never so long in Ferrari's history. "Leclerc
            and Sainz will make Maranello their home, will be close to our
            engineers. The new machine will be born with them.
          </p>
          {/* <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.we-havent-seen-the-full-potential-of-mercedes-or-red-bull-yet-says-wolff.4hSJsAzStntPh9H8WI6fDQ.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for More Details...
          </p> */}
        </div>
        <div className='flex flex-col justify-start border-t border-gray-200 mt-2 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.formula1.com/en/latest/article.ferrari-chairman-admits-scuderia-will-have-to-wait-until-2022-for-return-to.UOViZyylSU8Rqamj8JxBj.html'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-300'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/formula1_qd0yzg.jpg'
                  alt='f1.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53564603'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/ferrari-no-wins-2022-elkann/4845193/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12030674/hungarian-gp-practice-two-sebastian-vettel-fastest-in-wet-running'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
            <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150871/ferrari-chairman-elkann-doesnt-expect-wins-until-2022'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
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
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg bg-gray-800'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>*/}
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/14/horner-i-hope-well-be-more-competitive-in-hungary/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
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
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Left
