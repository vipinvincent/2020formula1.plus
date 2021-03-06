import Layout from '../components/layout/Layout'
import Qualifying from '../components/qualifying'
import Driver from '../components/driver'
import Team from '../components/team'

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-auto flex flex-col items-center content-center justify-center '>
      <div className='w-full h-full rounded-md text-center text-black-70 my-2 sm:my-4 px-2 sm:px-4 pb-0'>
        <div className='flex flex-row'>
          <div className='flex flex-col w-full lg:w-8/12 xl:w-8/12 -mt-2'>
            <Qualifying />
          </div>
          <div className='hidden lg:block w-4/12 xl:w-4/12 pl-4 -mt-2'>
            <Driver />
            <Team />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
