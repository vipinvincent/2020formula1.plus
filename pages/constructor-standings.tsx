import Layout from '../components/layout/Layout'
import Schedule from '../components/schedule'
import CompleteList from '../components/team/complete-list'
import TeamChart from '../components/team/chart'
import Driver from '../components/driver'

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-auto flex flex-col items-center content-center justify-center '>
      <div className='w-full h-full rounded-md text-center text-black-70 pl-2 sm:pl-4 pr-2 sm:pr-0'>
        <div className='flex flex-row'>
          <div className='flex flex-col w-full lg:w-2/3 pt-2 pb-2 sm:pb-4 pr-2 sm:pr-4 lg:pr-0'>
            <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
              Constructor Standings (2020)
            </div>
            <div className='hidden md:block'>
              <TeamChart />
            </div>
            <CompleteList />
          </div>
          <div className='hidden lg:block w-1/3 pl-4 pt-2 pb-2 sm:pb-4 pr-4'>
            <Schedule />
            <Driver />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
