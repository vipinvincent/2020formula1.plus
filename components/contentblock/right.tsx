import React from 'react'
import H1 from 'components/heading/H1'
import ActionLink from 'components/link/ActionLink'

const Right: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595851663/contentImages/content/race-grid_xnnuqd.jpg'
          alt='Hamilton clinches his EIGHTH Hungarian Grand Prix win, with Verstappen in second and Bothas in third'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Analysis
          </div>
          <H1>How Triple-header races impact 2020 season</H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            F1 is all set to begin its second triple-header of the season at
            Silverstone, after running races on three consecutive weekends in
            Austria and Hungary earlier this season. Due to the COVID-19
            pandemic, the F1 season is currently planned to have 13 races
            including multiple triple headers. This includes the season opener
            races with two races in Austria and one in Hungary, which is now
            followed by a week off, with a second leg to begin this week with
            two races at Silverstone, followed by the Spanish GP.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            After the first triple-header in F1 history in 2018, F1 consciously
            decided that it would be better if they don't try it again. But the
            current scenario forced the F1 to rethink this strategy and decided
            to have multiple triple header races. But this time they have a
            difference with two races in the triple headers will be hosted in
            one venue which helps the teams and the officials altogether and
            most importantly being able to bring something cheerful to people
            around the world during this worse condition.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Meanwhile McLaren team principal Andreas Seidl has alerted that
            triple-header races should not become the new routine for Formula
            1’s future calendars. Although Seidl welcomes the financial boost
            they provide during the pandemic], but he insists they are not worth
            since it take serious toll on the people who are part of F1 like
            officials, team members, drivers, support staff etc. “We’re going
            now into the triple-header with these two races in the UK, which is
            obviously for the UK teams is not as bad as for some other teams,”
            said Seidl. “At least we have the possibility to arrive at the track
            as late as possible with only a short travel, and having a break
            between these two Silverstone races. “Then we go into another
            triple-header, and then at the moment I think on the schedule there
            is another triple-header later on, which I think then is tough.
            Given the special circumstances we are in this year, it’s something
            we simply have to get through this year. “But at the same time, this
            cannot be the new standard going forward also in future seasons.”
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            In some instances, the new approach has made life a bit easier. As
            per Tom Clarkson, there was a certain degree of the old days about
            the new ways. The inability for excess had led to a stripped down
            and simple version of the sport, one that many of us remembered as a
            distant memory from our past and some had only ever heard about in
            dinner tales or grumbles from their more experienced colleagues.
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
        <div className='flex flex-col justify-start border-t border-gray-200 mt-1 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.formula1.com/en/latest/article.buxton-why-my-admiration-for-the-teams-has-never-been-higher-after-f1s.pAWHgNXi6qMlS2qQZmCVt.html'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-300'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/formula1_qd0yzg.jpg'
                  alt='f1.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53377338'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div> */}
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/mclaren-triple-header-races-standard/4844013/'
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
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150565/red-bull-expects-to-close-gap-on-mercedes-in-hungary'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
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
            <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/27/seidl-triple-headers-cant-be-the-new-standard/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/grandprix247_yj6fcw.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>
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
export default Right
