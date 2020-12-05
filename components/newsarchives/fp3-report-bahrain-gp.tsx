import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive74: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1598629313/contentImages/content/max-verstappen-red-bull-racing_qufnjn.jpg'
          alt='FP3 REPORT - Bahrain GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Bahrain GP 2020
          </div>
          <H1>
            Verstappen goes fastest in the final practice session ahead of
            Hamilton and Bottas
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull’s Max Verstappen set the fastest lap of FP3 in Bahrain,
            ahead of Mercedes duo Lewis Hamilton in P2 and Valtteri Bottas in
            P3. Ahead of evening qualification, all teams and drivers opted to
            run on red softs rather than any other compounds. At mid-session,
            Verstappen went to the lead and set the benchmark time of 1m28.355s.
            Hamilton managed P2 and finished 0.263s off Verstappen, and just a
            tenth faster than his Mercedes team mate Bottas. Once again a big
            job by the top class red Bull mechanics rebuilding Alex Albon’s
            RB16, who had a chassis change overnight after crashing heavily out
            of FP2 on Friday. The Thai driver finished in P4 with six-tenths
            behind his team mate. Fifth fastest was McLaren's Carlos Sainz,
            while his team mate Lando Norris was seventh.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sandwiched by McLarens, AlphaTauri's Pierre Gasly finished P6 with
            his team mate Daniil Kvyat in eighth making all the Honda powered
            card in top 10 list. Kvyat had a power unit change, though he is
            still within his limit for the season so won't get a grid penalty.
            Racing Point followed up in ninth and 10th with Lance Stroll ahead
            of Sergio Perez who made clear that the team would sacrifice one-lap
            pace for race gains. Behind Perez, both Renaults placed both their
            cars with Daniel Ricciardo in 11th and Esteban Ocon 12th
            respectively. Last year’s pole sitter Ferrari were out of the top
            10, with Sebastian Vettel 13th and his team mate Charles Leclerc
            15th.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Alfa Romeo's Antonio Giovinazzi splits the Ferraris, taking P14 with
            his veteran team mate Kimi Raikkonen only managed P19. Giovinazzi
            was followed by the Williams of George Russell in 16th. Haas
            finished in 17th and 18th with Romain Grosjean just in front of
            Kevin Magnussen. Russell's team mate Nicholas Latifi finished 20th,
            with his power unit's fuel system replaced overnight as the Williams
            mechanics burned the midnight oil. As the practice sessions drawn
            close with Verstappen ahead of the Mercedes in the final practice
            session of Bahrain, qualifying will be interesting along with the
            battle for the third spot in the constructors title.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive74
