import React from 'react'
import H1 from 'components/heading/H1'

const Archive67: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/v1605276462/contentImages/content/max-v_hjrfgd.jpg'
          alt='FP1 REPORT - Turkish GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1 REPORT - Turkish GP 2020
          </div>
          <H1>
            Verstappen quickest in FP1 with Albon in second and Leclerc in third
            as drivers find the resurfaced Istanbul Park “icy”
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            F1 is back in Turkey since 2011, as the new “Hybrid” Formula 1 cars
            struggles to find the grip in the recently re-laid asphalt at
            Turkey’s Istanbul Park. RedBulls’s Max Verstappen takes the P1 spot
            with his teammate Alex Albon come home in second making Red Bull
            one-two. Surprisingly both Mercedes cars couldn’t find the top 5
            spots in a session, which is quite rare. Ferrari’s Charles Leclerc
            finished P3 as his team mate Sebastian Vettel in P5 sandwiching
            AlfaTauri’s Pierre Gasly in P4. Daniil Kvyat in the second AlfaTauri
            finished P6 bringing all the Honda powered in top 10 list.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Birthday boy Lando Norris managed P7 in Mclaren with Antonio
            Giovinazzi surprised every one with P8 performance in P8. The best
            of Merecdes was Valtteri Bottas who crossed the line in P9 with
            Esteban Ocon inn P10 for Renault rounding off the top 10 list.
            Nicholas Latifi impressed everyone with P11 with the Racing Point
            duo Sergio Perez and Lance Stroll in P12 and P13 respectively.
            Romain Grosjean for Hass comes next with current world champion
            Lewis Hamilton only scrapped P15.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Kimi Räikkönen and Kevin Magnussen follows in P16 and P17 as
            Renault’s Daniel Ricciardo only managed P18. McLaren’s Carlos Sainz
            had to park his MCL35 in the green as the team discovered a small
            electrical issue with his power unit. George Russell rounded off the
            list in P20. But the session charts do not represent the actual
            performances of the cars/drivers as the re-laid track along with the
            wetness made the session tricky. More over the session was briefly
            red-flagged after Charles Leclerc knocked over a bollard. However,
            the lack of grip down in part to the surface having only been
            re-laid a few weeks ago and Pirelli bringing their hardest tyre
            compounds, the Sunday race might bring some surprises.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive67
