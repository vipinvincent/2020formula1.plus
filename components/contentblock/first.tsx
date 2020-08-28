import React from 'react'
import H1 from 'components/heading/H1'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595072621/contentImages/content/valtteri_-bottas_m5dgbs.jpg'
          alt='FP2 REPORT - Belgian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP2 REPORT - Belgian GP 2020
          </div>
          <H1>Team-mate battles in 2020 after 6 races!!! </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After months and months of deliberations and discussions, all 10
            Formula 1 teams have signed up to the new Concorde Agreement that
            will cover 2021-2025. The Concorde Agreement binds the teams,
            commercial rights holder Liberty Media and the FIA together and
            formalises the governance of Formula 1, also effectively committing
            the teams to continuing in the world championship for another five
            years.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            A statement from Formula 1 remarks: "The agreement will secure the
            long-term sustainable future for Formula 1 and combined with the new
            regulations, announced in October 2019 that come into force in 2022,
            will reduce the financial and on track disparities between the
            teams, helping to level the playing field, creating closer racing on
            the track that our fans want to see more of. "With closer racing we
            will attract more fans to our sport, benefitting every team, and
            continue to increase the global growth of Formula 1." Chase Carey,
            F1's Chairman and CEO, said: “This year has been unprecedented for
            the world and we are proud that Formula 1 has come together in
            recent months to return to racing in a safe way.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Despite some concerns by Mercedes in recent weeks over where
            negotiations stood, most teams confirmed during the Spanish Grand
            Prix weekend they were close to being in a position to sign the new
            agreement. Later Ferrari, McLaren and Williams on Tuesday they had
            signed up to the new Concorde Agreement, confirming their places on
            the grid for next year. The FIA and F1 announced on Wednesday
            morning that all 10 teams have met the early-sign deadline,
            completing the Concorde Agreement arrangements for the 2021-25
            period. With the 10 teams signed up for the next five years, and the
            regulations and cost cap defined, Formula 1 can finally embark on a
            new era.
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
