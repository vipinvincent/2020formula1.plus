import Layout from '../components/layout/Layout'
import News from '../components/maincontent/news'
import Race from '../components/race/quick-look'
import Qualifying from 'components/qualifying/quick-look'
import Schedule from '../components/schedule'
import Recent from '../components/schedule/recent'
import Turkish from '../components/schedule/turkish'
import Imola from '../components/schedule/imola'
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
      <div className='w-full h-full rounded-md text-center text-black-70 pl-2 sm:pl-4 '>
        <div className='flex flex-row'>
          <div className='flex flex-col lg:w-8/12 xl:w-8/12 pt-2 pb-2 sm:pb-4 pr-2 sm:pr-4 lg:pr-0'>
            <News />
          </div>
          <div className='hidden lg:block w-4/12 xl:w-4/12 pl-4 pt-2 pb-2 sm:pb-4 pr-4'>
            <Schedule />
            <Race />
            <Qualifying />
            <Driver />
            <Team />
            <Recent />
            <Turkish />
            <Imola />
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
