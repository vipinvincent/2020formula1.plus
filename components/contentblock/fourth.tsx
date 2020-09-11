import React from 'react'
import H1 from 'components/heading/H1'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595851663/contentImages/content/race-grid_xnnuqd.jpg'
          alt='Italian GP set sparks to revisit reverse grid sprint race plans'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <H1>
            Italian GP set sparks to revisit reverse grid sprint race plans
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            AlphaTauri driver Pierre Gasly scored his first F1 victory in the
            dramatic Italian Grand Prix at Monza on Sunday, readdresses new
            thoughts for reverse grid sprint race plans instead of Saturday
            qualifying to make F1 more interesting. Formula One's managing
            director, Ross Brawn believes reverse grid sprint races will be
            considered, as it glimpses how fascinating reverse grid qualifying
            races could be. The idea was proposed as an alternative to
            qualifying at select races in 2020, but Mercedes knock off the move
            as it required unanimous approval.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The idea of sprint race like qualifying was to line up the cars in
            reverse championship order for a short qualifying race on Saturday
            and use the finishing order of that race to determine the grid for
            Sunday's full-length grand prix. But there won’t be any points
            awarded for the qualifying race, but the hope was that it would
            create unpredictable results, more excitement and a break from the
            existing race weekend format. The idea needed unanimous support from
            all 10 teams to be introduced this year, but reigning champions
            Mercedes made clear it would block the proposal. F1 accepted
            Mercedes' objections and did not put the idea to a vote, but said it
            would continue to analyze the idea for future seasons.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Writing in a column on the official F1 website, Brawn said Sunday's
            Italian Grand Prix, which was stopped midway through and saw Pierre
            Gasly emerge as an unlikely winner after Lewis Hamilton was hit with
            a stop-go penalty, is proof that reverse-grid racing could be
            exciting. He said that Sunday's race(Italian GP) proved the kind of
            excitement a mixed-up order could offer, and that it was the perfect
            opportunity to revisit the proposal for the future. "Monza was a
            candidate for a reverse grid sprint race when we were considering
            testing the format this year," Brawn said. "Unfortunately, we could
            not move forward with it, but the concept is still something we and
            the FIA want to work through in the coming months and discuss with
            the teams for next year. "We believe that yesterday's race showed
            the excitement a mixed-up pack can deliver and with next year's cars
            remaining the same as this year - our fans could be treated to the
            similar drama we saw this weekend at Monza. "Of course, with a
            reverse grid sprint race, teams will set their cars up differently.
            Right now, Mercedes set their cars up to achieve the fastest lap and
            then to control the race from the front. "If they know they have to
            overtake, they will have to change that approach. "We will continue
            to evaluate new formats with the aim of improving the show but
            always maintaining the DNA of Formula 1." "It was astonishing how
            such a dominant car struggled in traffic. It's why we believe the
            new generation of revolutionary cars, set to arrive in Formula One
            in 2022, will be so much better for close racing."
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            But Brawn believes that there are still difficulties for some cars
            to overtake due to multiple factors like engine modes, track
            behavior, track configuration, etc. which will not be solved until
            F1's new rules package is introduced in 2022. He also said "What was
            fascinating was watching how the Mercedes -- with such superior
            aerodynamics over its rivals -- had such difficulties overtaking,"
            he added. "You could see Lewis Hamilton and Valtteri Bottas'
            performance was compromised by being out of position in the pack.
            "It was astonishing how such a dominant car struggled in traffic.
            It's why we believe the new generation of revolutionary cars, set to
            arrive in Formula One in 2022, will be so much better for close
            racing."
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
