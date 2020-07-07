import React from 'react'
import { motion } from 'framer-motion'
import { stagger } from 'lib/animations'

export const Container: React.FC = ({ children }) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      className='w-full h-full flex flex-col items-center content-center justify-center px-4 md:px-6'>
      <motion.div
        variants={stagger}
        className='w-full h-full max-w-5xl xl:max-w-6xl bg-white-100 rounded-tl-xxl rounded-br-xl-md text-center text-black-70 my-4 md:my-6 lg:my-8 mx-24 px-4 md:px-8 pb-8'>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Container
