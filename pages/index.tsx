import Layout from '../components/layout/Layout'
import Main from '../components/maincontent'
import Schedule from '../components/schedule'
// import Grid from '../components/grid'
import Recent from '../components/schedule/recent'
import Driver from '../components/driver'
import Team from '../components/team'
// import Qualifying from 'components/qualifying/quick-look'
// import Race from '../components/race/quick-look'
import VideosPodcasts from 'components/maincontent/videos-podcasts'
import FirstPodcast from 'components/podcastblock/first'
import SecondPodcast from 'components/podcastblock/second'
import ThirdPodcast from 'components/podcastblock/third'
import FourthPodcast from 'components/podcastblock/fourth'

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-auto flex flex-col items-center content-center justify-center '>
      <div className='w-full h-full rounded-tl-xxl rounded-br-xxl text-center text-black-70 my-2 sm:my-4 px-2 sm:px-4 pb-0'>
        <div className='flex flex-row'>
          <div className='flex flex-col lg:w-8/12 xl:w-8/12'>
            {/* <Qualifying /> */}
            <Main />
            <VideosPodcasts />
          </div>
          <div className='hidden lg:block w-4/12 xl:w-4/12 pl-4'>
            {/* <Race /> */}
            {/* <Grid /> */}
            <Schedule />
            <Driver />
            <Team />
            <Recent />
            <div className='w-100 text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-0 mb-1 px-2'>
              Latest Podcasts from Youtube
            </div>
            <div className='w-100  mt-0'>
              <FirstPodcast />
            </div>
            <div className='w-100 mt-4'>
              <SecondPodcast />
            </div>
            <div className='w-100 mt-4'>
              <ThirdPodcast />
            </div>
            <div className='w-100 mt-4'>
              <FourthPodcast />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row px-4'></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
