import React from 'react'
import { motion } from 'framer-motion'
import { fadeInDown } from 'lib/animations'

export const Content: React.FC = ({ children }) => {
  return <motion.div variants={fadeInDown}>{children}</motion.div>
}

export default Content
