import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive1: React.FC = () => {
  return (
    <div className='relative'>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Analysis
          </div>
          <H1>Styrian Grand Prix - How team sees the teammates battles?</H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 ferrari'>
            <strong className='text italic'>Ferrari</strong> - After started the
            race 10th(Vettel) and 14th(Leclerc) respectively, Ferrari’s Styrian
            Grand Prix lasted just three corners before Charles Leclerc lost
            control of his SF1000, wiping out his team mate Sebastian Vettel’s
            rear wing and causing race-ending damage to himself. Ferrari Team
            Principal Mattia Binotto alo blammed the car performance as much as
            his drivers for the crash. ‘We can’t hide behind the collision’ says
            Binotto after ‘worst conclusion to a very bad weekend’
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 racingpoint'>
            <strong className='text italic'>Racing Point</strong> -Driver of The
            Day Sergio Perez, from P17 on the grid to P6 at the flag, pulled off
            a masterful recovery drive in the Styrian Grand Prix. Later Perez
            admitted that he was 'very lucky' to only lose one position on final
            lap after Albon clash apologised to the team over the radio, saying
            “sorry guys”. In the end Stroll drag-raced him to the line with only
            0.066s split the two racing point drivers.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 mclaren'>
            <strong className='text italic'>McLaren</strong> - “Great teamwork
            between the two drivers swapping on track when it was needed,” said
            McLaren Team Principal Andreas Seidl after the race. “Carlos didn’t
            give up and did a great job securing the fastest lap – the second
            time in a row for us. McLaren Racing CEO, Zak Brown, has said the
            team will keep the relationship “healthy” between Carlos Sainz and
            Lando Norris.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 renault'>
            <strong className='text italic three-d-text'>Renault</strong> -
            Daniel Ricciardo believes the Renault Formula 1 team would have told
            Ocon to let him by. After several laps stuck behind Ocon, Ricciardo
            communicated his engineer that he was faster than the cars ahead,
            but no attempt was made to swap positions before Ricciardo made his
            own move. "I asked a bit of a general question," said Ricciardo. "As
            I was, I felt, being held up by by that group. So I just said,
            'Look, guys, I'm quite a bit quicker at the moment.'
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 haas'>
            <strong className='text italic'>Haas</strong> - Steiner pleased to
            see Haas drivers cooperating and remarked ‘It took a few years too
            long and a few crashes too many’. Haas boss Guenther Steiner said he
            was encouraged to see Kevin Magnussen and Romain Grosjean fight for
            position at the Styrian Grand Prix without incident. The pair fought
            for position at the Styrian Grand Prix without contact, with
            Magnussen eventually finished at 12th place.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Archive1
