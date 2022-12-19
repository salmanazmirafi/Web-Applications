import React from 'react'
import Announcement from '../../components/Announcement'
import Categories from '../../components/Categories'
import Navbar from '../../components/Navbar'
import Product from '../../components/Product'
import Slider from '../../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Product/>
    </div>
  )
}

export default Home