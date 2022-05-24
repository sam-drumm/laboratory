import React from 'react'
import SplitScreen from './SplitScreen/SplitScreen'
import Grid from './Grid/Grid'
import HomeProjectCarousel from './Carousel/HomeProjectCarousel'
import { featureData } from './Grid/gridData'

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
        image='https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      />
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
