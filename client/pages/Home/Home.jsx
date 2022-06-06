import React from 'react'
import { featureData } from '../../components/Grid/gridData'
import SplitScreen from '../../components/SplitScreen/SplitScreen'
import Grid from '../../components/Grid/Grid'
import HomeProjectCarousel from '../../components/Carousel/HomeProjectCarousel'
import SearchBar from '../../components/Search/SearchBar'

export default function Home () {
  return (
    <>
      <SplitScreen
        header="Connecting people"
        tag="to do awesome things"
        message='One thing we have in common, we got involved in building tech because we liked to create unique things that can make a positive impact. Co_lab was brought together to leverage tech skills to bring ideas to life.'

        buttonOne="Pitch your idea"
        navOne='./projects/new'
        buttonTwo="How it works"
        navTwo='./'
        image={'images/pexels-fauxels-3184297.jpg'}

      />
      <SearchBar/>
      <HomeProjectCarousel/>
      <Grid
        features = {featureData}
        headline="We're building a unique collective of"
        tag="people, passion and skills."
        following="Dreams are for free but where can you find the people that can help to make them happen? Co_lab was built to connect people and turn ideas into reality."
      />
    </>
  )
}
