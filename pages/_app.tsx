import React from 'react'
import App from 'next/app'
import '../styles/index.css'

class Formula1Plus extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default Formula1Plus
