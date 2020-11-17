import Layout from '../components/layout/Layout'
import Circuit from '../components/circuit/istambul'
import Driver from '../components/driver'
import Team from '../components/team'

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-auto flex flex-col items-center content-center justify-center '>
      <div className='w-full h-full rounded-md text-center text-black-70 pl-2 sm:pl-4'>
        <div className='flex flex-row'>
          <div className='flex flex-col w-full lg:w-2/3 pt-2 pb-2 sm:pb-4 pr-2 sm:pr-4 lg:pr-0'>
            <Circuit />
          </div>
          <div className='hidden lg:block w-1/3 pl-4 pt-2 pb-2 sm:pb-4 pr-4'>
            <Driver />
            <Team />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
