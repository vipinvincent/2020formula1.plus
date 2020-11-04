import Layout from '../components/layout/Layout'
import News from '../components/maincontent/news'
import Race from '../components/race/quick-look'
import Qualifying from 'components/qualifying/quick-look'
import Schedule from '../components/schedule'
import Recent from '../components/schedule/recent'
import Portugal from '../components/schedule/portugal'
import Eifel from '../components/schedule/nurburgring'
import Russian from '../components/schedule/russian'
import Tuscan from '../components/schedule/tuscan'
import Italian from '../components/schedule/italian'
import Belgian from '../components/schedule/belgian'
import Spanish from '../components/schedule/spanish'
import Anniversary from '../components/schedule/70-anniversary'
import British from '../components/schedule/british'
import Hungarian from '../components/schedule/hungarian'
import Styrian from '../components/schedule/styrian'
import Austrian from '../components/schedule/austrian'
import Driver from '../components/driver'
import Team from '../components/team'

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-auto flex flex-col items-center content-center justify-center '>
      <div className='w-full h-full rounded-tl-xxl rounded-br-xxl text-center text-black-70 my-2 sm:my-4 px-2 sm:px-4 pb-0'>
        <div className='flex flex-row'>
          <div className='flex flex-col lg:w-8/12 xl:w-8/12'>
            <News />
          </div>
          <div className='hidden lg:block w-4/12 xl:w-4/12 pl-4'>
            <Schedule />
            <Race />
            <Qualifying />
            <Driver />
            <Team />
            <Recent />
            <Portugal />
            <Eifel />
            <Russian />
            <Tuscan />
            <Italian />
            <Belgian />
            <Spanish />
            <Anniversary />
            <British />
            <Hungarian />
            <Styrian />
            <Austrian />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
