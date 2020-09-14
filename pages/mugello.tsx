import Layout from '../components/layout/Layout'
import Circuit from '../components/circuit/mugello'
import Driver from '../components/driver'
import Team from '../components/team'

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-auto flex flex-col items-center content-center justify-center '>
      <div className='w-full h-full rounded-tl-xxl rounded-br-xxl text-center text-black-70 my-2 sm:my-4 px-2 sm:px-4 pb-0'>
        <div className='flex flex-row'>
          <div className='flex flex-col lg:w-2/3'>
            <Circuit />
          </div>
          <div className='hidden lg:block w-1/3 pl-4'>
            <Driver />
            <Team />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
