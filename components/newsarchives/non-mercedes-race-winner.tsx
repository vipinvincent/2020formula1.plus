import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive17: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1596029419/contentImages/content/champion_xry6rz.jpg'
          alt='Will 2020 Formula 1 season have a  Non-Mercedes race winner???'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <H1>Will 2020 F1 season have a 'Non-Mercedes' race winner???</H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Just after the initial three races, the picture for 2020 season is
            revealing itself. Again, it will be another Mercedes domination;
            with only question left who (Hamilton or Bottas) going to be the
            campion. It is getting clearer that neither Ferrari nor Red bull can
            offer serious treats for Mercedes. Ironically even after 3 races,
            both teams are still dealing with the design and performance issues,
            only then Ferrari chairman admits that they don’t expect any F1 wins
            until 2022. But Red Bull is still confident to clean up the problems
            and will be competitive soon enough to challenge Mercedes for the
            championship.
          </p>
          <p className='mt-1'>
            What would stop Mercedes’ Midas touch? Checking some (improbable)
            possibilities;
          </p>
          <ul className='list-disc pl-6 mb-1 text-base leading-normal text-gray-700'>
            <li>More wet race weekends</li>
            <li>Red Bull fast tacking its updates</li>
            <li>Ferrari finding a miraculous solution</li>
            <li>Mclaren becoming more powerful</li>
            <li>
              Racing Point getting cleared of allegations and finding the sweat
              spot for the performance
            </li>
            <li>
              But the easiest but unlikely option will be
              Hamilton/Bottas/Mercedes making mistakes or having some setbacks
            </li>
          </ul>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            But the season is getting interesting for “best of the rest”, with
            Ferrari joining the middle pack. After strong performance in first 3
            races, Racing Point is making all headlines. Mclaren is also getting
            stronger when compared to their engine supplier team, Renault. But
            none of the drivers in the “best of the rest” pack is expected to be
            anywhere near the first three places in the 2020 season.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Also, it looks like the tail end won’t have a big change, but the
            casual performance of Alpha Tauri and the improved performance of
            Williams makes the life of Ferrari powered Haas and Alfa Romeo
            unstable. Hopefully the rest of season will bring some
            entertainment.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive17
