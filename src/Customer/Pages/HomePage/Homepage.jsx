import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { Mens_kurta } from '../../../Data/Mens_kurta'
import { Mens_shoes } from '../../../Data/Mens_shoes'
import { Mens_shirt } from '../../../Data/Mens_shirt'
import { womens_kurta } from '../../../Data/womens_kurta'

const Homepage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className=' space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={Mens_kurta} sectionName={"Mens Shrit"}/>
            <HomeSectionCarousel data={Mens_shoes} sectionName={"Mens Shoes"}/>
            <HomeSectionCarousel data={Mens_shirt} sectionName={"Mens Kurta"}/>
            <HomeSectionCarousel data={womens_kurta} sectionName={"Womens Kurta"}/>
           
           </div>
    </div>
  )
}

export default Homepage