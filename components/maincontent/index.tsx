import React from 'react'

import LatestNews from 'components/maincontent/latest-news'
import VideosPodcasts from 'components/maincontent/videos-podcasts'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <LatestNews />
      <VideosPodcasts />
    </div>
  )
}
export default Main
