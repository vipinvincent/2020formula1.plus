import React from 'react'
import YouTube from 'react-youtube-embed'
import ContentLink from 'components/link/ContentLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube id='A71aqufiNtQ' />
        </div>
        <div className='px-2 py-2'>
          <ContentLink
            href='https://www.bbc.com/sport/formula-one/53387307'
            target='_blank'>
            Ross Brawn says Ferrari face a 'long road ahead' to rediscover
            competitiveness
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Meanwhile, Mercedes admitted Hamilton was managing his pace at the
            front, given they were comfortable with their performance and they
            were keen not too push the limits too hard after they struggled with
            gearbox issues from the kerbs at the previous race at the same
            track. Red Bull hit back from a double non-points finish in round
            one, to finish third and fourth with Verstappen and Albon
            respectively.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Courtesy{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.we-havent-seen-the-full-potential-of-mercedes-or-red-bull-yet-says-wolff.4hSJsAzStntPh9H8WI6fDQ.html'
              target='_blank'>
              website
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
