import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Navigation from './Navigation'
import NavBar from './NavBar'
import Footer from './Footer'
import ScrollToTop from 'react-scroll-to-top'
type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Xtrios - eXperience, eXpertise and eXcellence.',
}) => {
  return (
    <React.Fragment>
      <div className='w-full min-h-screen flex flex-col justify-center flex-grow'>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <div className='w-full flex flex-row justify-start 4xl:flex-col flex-grow bg-white-100 container '>
          <div
            role='navigation'
            className='flex flex-col flex-grow 4xl:flex-grow-0 justify-between bg-white-90 md:-md h-full'>
            <Navigation />
          </div>
          <div
            role='main'
            className='flex flex-col flex-grow justify-between w-full main-content bg-gray-200 mt-16 xs:mt-0'>
            {children}
          </div>
        </div>
        <Footer />
        <div className='fixed bottom-0 w-full lg:hidden z-10'>
          <NavBar />
        </div>
        <ScrollToTop smooth className='py-2 grow' />
      </div>
    </React.Fragment>
  )
}

export default Layout
