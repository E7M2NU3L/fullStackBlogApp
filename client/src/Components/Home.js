import React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import FeaturedVids from './FeaturedVids/FeaturedVids'
import ProductLaunch from './ProductLaunch.js/ProductLaunch'
import Connect from './Connect/Connect'

const Home = () => {
  return (
    <div>
        <Header />
        <Main />
        <FeaturedVids />
        <ProductLaunch />
        <Connect />
    </div>
  )
}

export default Home