import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Navigation from './Navigation'
import NavBar from './NavBar'
import Footer from './Footer'
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
        <div className='w-full flex flex-row justify-start 4xl:flex-col flex-grow bg-white-100 container'>
          <div
            role='navigation'
            className='flex flex-col flex-grow 4xl:flex-grow-0 justify-between'>
            <Navigation />
          </div>
          <div
            role='main'
            className='flex flex-col flex-grow justify-between w-full main-content bg-black-20 '>
            {children}
          </div>
        </div>
        <Footer />
        <div className='fixed bottom-0 w-full lg:hidden z-10'>
          <NavBar />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
