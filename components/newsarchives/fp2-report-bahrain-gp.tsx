import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive73: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490309/contentImages/content/lewis-hamilton_oavnow.jpg'
          alt='FP2 REPORT - Bahrain GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP2 REPORT - Bahrain GP 2020
          </div>
          <H1>
            Hamilton heads the second practice session under lights with
            Verstappen in second and Bottas in Third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’ Lewis Hamilton continues his impeccable form to Friday
            night at Bahrain International Circuit as he sets the fastest time
            in the second practice session. Red Bull’s Max Verstappen finishes
            second +0.347s behind the leader with Medium compounds, as most of
            the fast runners opted for softs. The second Mercedes of Valtteri
            Bottas managed second which is a couple hundredth from the
            Verstappen’s time. Sergio Perez for racing point finishes fourth
            ahead of Renault’s Daniel Ricaardo and keeps third place battle in
            the constructors title alive. Pierre Gasly for AlphaTauri was sixth
            with his team mate Danil Kvyat in ninth. Lando Norris finished
            seventh after improving his performace from the first practice
            session.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lance Stroll in the second Racing Point crossed the line in eight as
            Racing Point managed slotting both their cars in top ten. Alex Albon
            in the second Red Bull crashes heavily through the final corner
            during the session bringing the red flags. Albon, who fortunately
            emerged seemingly unhurt from the incident managed tenth spot before
            the accident has given the Red Bull mechanics a long night with the
            front and rear wing and right-side wheels ripped from the car. After
            a red flag stoppage, followed by another one when a dog found its
            way onto the track, many drivers rushed to complete their
            interrupted qualifying simulations.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault’s Esteban Ocon was 11th, finishing narrowly ahead of the
            Ferrari of Sebastian Vettel, with the McLaren of Carlos Sainz in
            13th. Charles Leclerc found himself outpaced by Ferrari team mate
            Vettel after a small error on his fastest lap, finishing 14th and
            ahead of the Alfa Romeo of Antonio Giovinazzi and the Haas of Kevin
            Magnussen, who also set his best time on the mediums. Kimi Raikkonen
            was back in his Alfa Romeo, having given it to Robert Kubica this
            morning, going 17th fastest on the mediums, ahead of the Williams of
            Nicholas Latifi. Romain Grosjean finished P19 in an “undriveable”
            Haas, as per the Frenchmen ahead of the second Williams of George
            Russell in P20. Earlier the Briton had missed his FP1 session
            allowing Roy Nissany another F1 practice run.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive73
