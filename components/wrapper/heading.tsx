import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from 'lib/animations'

export const Heading: React.FC = ({ children }) => {
  return (
    <motion.h1
      variants={fadeInUp}
      className='text-3xl sm:text-4xl md:text-5xl font-black leading-none pt-8 md:pt-12 pb-4 md:pb-6 lg:py-12'>
      {children}
    </motion.h1>
  )
}

export default Heading
