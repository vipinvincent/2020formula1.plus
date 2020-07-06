import React from 'react'
import { motion } from 'framer-motion'

export const SvgContainer: React.FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 1 }}>
      {children}
    </motion.div>
  )
}

export default SvgContainer
