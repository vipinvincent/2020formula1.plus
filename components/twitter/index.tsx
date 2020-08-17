import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
// import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
function ErrorFallback() {
  return (
    <div className='w-100 h-32 flex flex-col justify-center text-white-100 font-medium text-lg'>
      <h3 className='text-xl font-semibold pb-4'>
        <img
          className='h-6 inline mr-2'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597654462/contentImages/logo/no-ads_pasrr3.png'
          alt='ad blocker'
        />
        Adblocker Detected
      </h3>
      Please disable the Adblocker to view the tweets{' '}
    </div>
  )
}

const Twitter: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='flex flex-col mb-9 flex-grow flex-no-wrap flex-shrink-0'>
        <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
          Tweets from formula 1 world
        </div>
        <div className='w-full grid sm:flex sm:flex-col justify-around py-0 bg-blue-500 rounded-tl-xxl rounded-br-xxl shadow-xs mb-4'>
          <div className='align-middle min-w-full overflow-x-auto rounded-tl-xxl rounded-br-xl border-4 border-blue-500'>
            <TwitterTimelineEmbed
              sourceType='list'
              ownerScreenName='formula1_plus'
              slug='formula1-plus'
              noFooter
              placeholder={
                <div className='w-100 h-32 flex flex-col justify-center text-white-100 font-medium text-lg px-4'>
                  <h3 className='text-xl font-semibold pb-4'>
                    <img
                      className='h-6 inline mr-2'
                      src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597654462/contentImages/logo/no-ads_pasrr3.png'
                      alt='ad blocker'
                    />
                    Adblocker Detected
                  </h3>
                  Please disable the Adblocker to view the tweets{' '}
                </div>
              }
              options={{ height: 600 }}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
export default Twitter
