import React from 'react'
import ContentLink from 'components/link/ContentLink'
import Zoom from 'react-medium-image-zoom'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Circuit Facts - Nürburgring
      </div>
      <div className='relative bg-white-100 rounded-md mb-6'>
        <div className='h-64 sm:h-84 py-4 w-full text-center zoom-image'>
          <Zoom>
            <img
              className='w-full h-64 sm:h-84 object-contain rounded-t-md rounded-b-md py-4 px-2 text-center'
              src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1601533556/contentImages/circuit/Nu%CC%88rburgring_-_Grand-Prix_ozbjpo.png'
              alt='2020 Eifel Grand Prix'
            />
          </Zoom>
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <p className='mt-1 text-normal leading-normal text-gray-700'>
              Formula 1 Aramco Grosser Preis Der Eifel 2020, the 2020 Eifel
              Grand Prix, which takes place over 60 laps of the 5.148-kilometre
              Nurburgring, former host of the German Grand Prix, on Sunday,
              October 11th.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The Nürburgring is a 150,000 person capacity motorsports complex
              located in the town of Nürburg, Rhineland-Palatinate, Germany. It
              features a Grand Prix race track built in 1984, and a much longer
              Nordschleife "North loop" track which was built in the 1920s
              around the village and medieval castle of Nürburg in the Eifel
              mountains. The north loop is 20.8 km (12.9 mi) long and has more
              than 300 metres (1,000 feet) of elevation change from its lowest
              to highest points. Jackie Stewart nicknamed the old track "The
              Green Hell".
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              Originally, the track featured four configurations: the 28.265 km
              (17.563 mi)-long Gesamtstrecke ("Whole Course"), which in turn
              consisted of the 22.810 km (14.173 mi) Nordschleife ("North
              Loop"), and the 7.747 km (4.814 mi) Südschleife ("South Loop").
              There also was a 2.281 km (1.417 mi) warm-up loop called
              Zielschleife ("Finish Loop") or Betonschleife ("Concrete Loop"),
              around the pit area.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              In 1907, the first Eifelrennen race was held on the one-off Taunus
              circuit, a 117 km (73 mi) made up of public roads starting between
              the towns of Wehrleim and Saalburg just north of Frankfurt. In the
              early 1920s, ADAC Eifelrennen races were held on the twisty 33.2
              km (20.6 mi) Nideggen public road circuit near Cologne and Bonn.
              Sometime around 1925, the construction of a dedicated race track
              was proposed just south of the Nideggen circuit around the ancient
              castle of the town of Nürburg, following the examples of Italy's
              Monza and Targa Florio courses, and Berlin's AVUS, yet with a
              different character. The layout of the circuit in the mountains
              was similar to the Targa Florio event, one of the most important
              motor races at that time. The original Nürburgring was to be a
              showcase for German automotive engineering and racing talent.
              Construction of the track, designed by the Eichler Architekturbüro
              from Ravensburg (led by architect Gustav Eichler), began in
              October 1925.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The track was completed in spring of 1927, and the ADAC
              Eifelrennen races were continued there. The first races to take
              place on 18 June 1927 showed motorcycles and sidecars. The first
              motorcycle race was won by Toni Ulmen on an English 350 cc
              Velocette. The cars followed a day later, and Rudolf Caracciola
              was the winner of the over 5000 cc class in a Mercedes-Benz
              Compressor. In addition, the track was opened to the public in the
              evenings and on weekends, as a one-way toll road.[3] The whole
              track consisted of 174 bends (prior to 1971 changes), and averaged
              8 to 9 metres (26 to 30 ft) in width. The fastest time ever around
              the full Gesamtstrecke was by Louis Chiron, at an average speed of
              112.31 km/h (72 mph) in his Bugatti.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The big, scary Nordschleife version of the Nurburgring was
              completed in 1927. But after eventually proving too big and too
              scary for F1, Niki Lauda’s 1976 horror crash in the German Grand
              Prix forced a re-think, with the more manageable, more modern
              Grand Prix circuit opened in 1984, with a star-studded roll-call
              of F1 drivers – including Ayrton Senna, James Hunt, Lauda and
              Stirling Moss – racing around the track in Mercedes 190 saloon
              cars to mark the occasion. The track was completed in spring of
              1927, and the ADAC Eifelrennen races were continued there. The
              first races to take place on 18 June 1927 showed motorcycles and
              sidecars. The first motorcycle race was won by Toni Ulmen on an
              English 350 cc Velocette. The cars followed a day later, and
              Rudolf Caracciola was the winner of the over 5000 cc class in a
              Mercedes-Benz Compressor. In addition, the track was opened to the
              public in the evenings and on weekends, as a one-way toll road.[3]
              The whole track consisted of 174 bends (prior to 1971 changes),
              and averaged 8 to 9 metres (26 to 30 ft) in width. The fastest
              time ever around the full Gesamtstrecke was by Louis Chiron, at an
              average speed of 112.31 km/h (72 mph) in his Bugatti.
            </p>
            <p className='mt-2 text-normal leading-normal text-gray-700'>
              The modern circuit got off the mark with the 1984 European Grand
              Prix and the 1985 German Grand Prix. Falling off the calendar
              until 1995, it then hosted various races in German, European and
              Luxembourg Grand Prix guise – up until 2013, before its 2020
              return. The Nordschleife it ain’t – but then that’s probably for
              the best. The modern circuit utilises the start-finish straight of
              the old Sudschleife track, before the drivers then tackle the
              tight right-hander at Turn 1 (Haug-Haken) and go on an enjoyable
              high-speed plunge down to the Dunlop-Kehre hairpin. From there,
              the track shoots back uphill, with some fantastic high-speed
              corners leading back to the slow, Hungaroring-esque right-hander
              that ends the lap.
            </p>
          </div>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
          <ContentLink href='/' target='_self'>
            Latest News...
          </ContentLink>
        </p>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        2020 German Grand Prix weekend{' '}
        <span className='font-light'>(Track Time)</span>
      </div>
      <div className='relative bg-white-100 rounded-md mb-4'>
        <div className='relative max-w-screen-xl mx-auto rounded-t-md rounded-b-md'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200 rounded-t-md rounded-b-md'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 1
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  09 - October ( 11:00 - 12:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 2
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  09 - October ( 15:00 - 16:30 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Practice 3
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  10 - October ( 12:00 - 13:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Qualifying
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  10 - October ( 15:00 - 16:00 )
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  11 - October ( 14:10 - 16:10 )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        German Grand Prix Facts
      </div>
      <div className='relative bg-white-100 rounded-md'>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Circuit Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Nürburgring
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  5.148 km (3.199 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  15 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  60 laps (308.617 km - 191.766mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  F1 Races Held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  78
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  First GP held
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  1926
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most Wins (drivers)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Rudolf Caracciola (6)
                  <br />
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Most wins (constructors)
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Ferrari (22)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  Michael Schumacher (<span className='text'>Ferrari</span>){' '}
                  <br />
                  1:29.468 (2004)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2020 Race Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      I<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:35:49.641
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>)
                      <br />
                      +4.470s
                    </div>
                  </div>
                  <div className='inine-block'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block renault'>
                      Daniel Ricciardo (
                      <span className='text three-d-text'>Renault</span>)
                      <br />
                      +14.613s
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2020 Qualifying Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P1
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:25.269
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P2
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:25.525
                    </div>
                  </div>
                  <div className='inine-block'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P3
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:25.562
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2013 Race Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      I<sup>st</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Sebastian Vettel (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:33:38.992
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      II<sup>nd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block'>
                      Kimi Räikkönen (<span className='text'>Lotus</span>){' '}
                      <br />
                      +1.008s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      III<sup>rd</sup>
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block '>
                      Romain Grosjean (<span className='text'>Lotus</span>){' '}
                      <br />
                      +5.830s
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2013 Qualifying Results
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P1
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:29.398
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P2
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Sebastian Vettel (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:29.501
                    </div>
                  </div>
                  <div className='inine-block'>
                    <div className='text-primary-on text-lg font-bold leading-5 w-12 inline-block'>
                      P3
                      <br />
                      &nbsp;
                    </div>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Mark Webber (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:29.608
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Schedule
