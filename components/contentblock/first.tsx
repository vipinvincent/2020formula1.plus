import React from 'react'
import H1 from 'components/heading/H1'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1598629313/contentImages/content/max-verstappen-red-bull-racing_qufnjn.jpg'
          alt='FP2 REPORT - Belgian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP2 REPORT - Belgian GP 2020
          </div>
          <H1>
            Red Bull’s Max Verstappen tops in Free Practice 2 with Renault’s
            Daniel Ricciardo taking a surprising P2, just ahead of the Mercedes
            of Lewis Hamilton
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen become P1 inn FP2 with a time of 1m 43.744s around the
            7.004km Spa-Francorchamps track. Surprisingly the Renault of
            Ricciardo crossed the line in second place, while Hamilton took
            third, just 0.096s behind Verstappen, due to a slight error at the
            final chicane on his fastest push lap. However, Ricciardo joy was
            short lived as an issue which forced him to park up his R.S.20 on
            the Kemmel Straight with 20 minutes of the session left to run, his
            Renault suffering a loss of hydraulic pressure
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Once again, the second Red Bull of Alex Albon wasn’t quite able to
            match the one-lap pace of his team matebut put in a decent effort to
            go fourth, 0.390s off Verstappen, and just 0.003s up on the Racing
            Point of Sergio Perez in fifth. Birth day boy Valtteri Bottas was
            sixth for Mercedes, while Lando Norris overcame an early power unit
            worry to take seventh for McLaren. The second Renault of Esteban
            Ocon finished eighth with Carlos Sainz of McLaren finished ninth
            while AlphaTauri’s Pierre Gasly completes the top 10 list.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The second Racing Point of Lance Stroll was 11th on mediums, having
            failed to improve on his time on his soft tyre run, while the second
            AlphaTauri of Daniil Kvyat was 12th. Alfa Romeo’s Antonio Giovinazzi
            and Kimi Räikkönen finishes 13th and 14th respectively ahead of the
            best Ferrari of Charles Leclerc. George Russell of Williams finishes
            ahead of second Ferrari of Sebastian Vettel at 16th with Vettel in
            17th. Nicholas Latifi in second Williams finishes ahead of two Haas
            cars. Following their failure to set a lap this morning in FP1 after
            unrelated power unit issues struck both cars, Haas’ Romain Grosjean
            and Kevin Magnussen could join the Belgian GP weekend after 55
            minutes into the session, having both had engine changes, ended up
            P19 and P20.
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
