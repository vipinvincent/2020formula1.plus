import Layout from '../components/layout/Layout'
import Schedule from '../components/schedule'
import DriverList from '../components/driver/complete-list'
import Team from '../components/team'

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-auto flex flex-col items-center content-center justify-center '>
      <div className='w-full h-full rounded text-center text-black-70 my-4 px-4 pb-0'>
        <div className='flex flex-row'>
          <div className='flex flex-col lg:w-2/3'>
            <DriverList />
          </div>
          <div className='hidden lg:block w-1/3 pl-4'>
            <Schedule />
            <Team />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
