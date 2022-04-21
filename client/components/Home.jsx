import React from 'react'
import SplitScreen from './SplitScreen/SplitScreen'
import Grid from './Grid/Grid'
import HomeProjectCarousel from './Carousel/HomeProjectCarousel'

export default function Home () {
  return (
    <>
      <SplitScreen
        header="Connecting people"
        tag="to do awesome things"
        message="Co_lab was made to connect people who to work with people who take cool ideas and make them happen"
        buttonOne="Pitch your idea"
        navOne='./projects/new'
        buttonTwo="How it works"
        navTwo='./'
        image='https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      />
      <HomeProjectCarousel/>
      <Grid/>
    </>
  )
}
