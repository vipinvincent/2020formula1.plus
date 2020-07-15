import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-2'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/Testing2020/Day1/GettyImages-1201880467.jpg.transform/9col-retina/image.jpg'
          alt='We have not seen the full potential of Mercedes or Red Bull yet, says Wolff'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.tech-tuesday-under-the-skin-of-renaults-protest-of-racing-points-rp20.1iay3S4IVHDLSxgYhSf1P2.html'
            target='_blank'>
            Tech Tuesday: Under the skin of Renault's protest of Racing Point's
            RP20
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            There was drama on Sunday evening at the Red Bull Ring after the
            Styrian Grand Prix when Renault submitted a formal protest against
            Racing Point about the legality of their RP20 cars.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Silverstone-based team’s new car – which uses the Mercedes power
            unit and gearbox – drew a lot of attention at pre-season testing
            back in February when it was dubbed ‘the pink Mercedes’ for its
            apparent similarities to the Silver Arrows W10 car which won the
            championship in 2019.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Racing Point insisted at the time that while they had followed the
            same design philosophy as Mercedes – and even used photographs to
            try to mimic some parts of the car – the RP20 was designed in house,
            and they had not broken any rules.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.tech-tuesday-under-the-skin-of-renaults-protest-of-racing-points-rp20.1iay3S4IVHDLSxgYhSf1P2.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-4 md:pb-0 md:pr-4 leading-tight pt-2 md:pt-6'>
            Follow this topic on -
          </div>
          <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53384460'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/explained-why-renault-launched-a-racing-point-protest/4833433/'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
            <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150550/why-racing-point-brake-ducts-are-key-to-renault-protest'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/hamiltons-not-from-this-world-pole-lap-explained/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-2 object-contain rounded bg-gray-800'
                  src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>*/}
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/14/wolff-we-havent-seen-the-full-potential-of-mercedes-or-red-bull/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-3 object-contain rounded border border-gray-200'
                  src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div> */}
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/qualifying-report-styrian-gp-2020/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-2 object-contain rounded border border-gray-200'
                  src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
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
export default F1
