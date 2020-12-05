import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive72: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490683/contentImages/content/lewis-hamilton1_bzargd.jpg'
          alt='FP1 REPORT - Bahrain GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1 REPORT - Bahrain GP 2020
          </div>
          <H1>
            Hamilton set the fastest time in first practice session at Bahrain
            with Bottas in second and Perez in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes duo Lewis Hamilton and Valtteri Bottas finished 1 and 2 in
            the in first practice session at Bahrain GP. Hamilton, the
            newly-crowned world champion headed the timesheets with a time of
            1m29.033s on medium compounds which was 0.449s ahead of his team
            mate Bottas’ pace. Later both drivers switched to Pirelli’s
            prototype tyres for the 2021 season without using the softs in the
            FP1. Racing Point in the fierce fight for the third in the
            constructors’ championship finished just ahead of McLaren, Renault
            and Ferrari as the Turkish GP podium-finisher Sergio Perez third
            quickest in this session - nearly a second off Hamilton on softs.
            McLaren's Carlos Sainz was fourth overall, just behind Perez, as the
            last driver within a second of Hamilton.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            AlphaTauri’s Pierre Gasly went briefly top in the session on medium
            compounds before falling to fifth overall was the best of Honda
            powered cars. Red Bull's Max Verstappen took sixth and finished just
            0.007s ahead of seventh-place team mate Alex Albon. Max was only
            able to clock 18 laps which made him the least driven front runner.
            The Renaults were split by Racing Point's Stroll, with Esteban Ocon
            a late improver to P8 on softs and Daniel Ricciardo rounding out the
            top 10 on mediums. Last year’s Bahrain GP pole-sitter Charles
            Leclerc ran wide at Turn 3 but continued on to finish 11th as
            Ferrari tested various parts throughout the session. His team mate
            Sebastian Vettel finished P12 as both Ferrari drivers having used
            softs to set their fastest laps.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Robert Kubica, replaced Kimi Raikkonen for FP1 at Alfa Romeo and
            finished 13th, ahead of both Haas of Romain Grosjean and Kevin
            Magnussen in P14 and P15 respectively. The second Alfa Romeo of
            Antonio Giovinazzi finished next in P16 ahead of Daniil Kvyat in P17
            in AlphaTauri and Lando Norris in McLaren at P18. Williams duo of
            Nicholas Latifi and FP1 stand-in Roy Nissany rounded out the
            standings. George Russell will return for FP2 session ahead of
            qualifying in Bahrain.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive72
