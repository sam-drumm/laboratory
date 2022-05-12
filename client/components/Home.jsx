import React from 'react'
import SplitScreen from './SplitScreen/SplitScreen'
import Grid from './Grid/Grid'
import HomeProjectCarousel from './Carousel/HomeProjectCarousel'
import { FcGlobe, FcBinoculars, FcAdvertising, FcBullish } from 'react-icons/fc'

const features = [
  {
    id: 1,
    title: 'Pitch your idea',
    text: 'That idea you\'ve been sitting on for far too long, the one that brings your community together, the one that speaks truth to power, the one that helps people comprehend difficult issues. Now\'s the time to make it happen.',
    icon: FcGlobe
  },
  {
    id: 2,
    title: 'Share it',
    text: 'Your pitch will get shared over 14 days with our members and your networks. Don\'t stress if you don\'t know all the details just yet, share your vision for what you think is possible and see what\'s possible.',
    icon: FcAdvertising
  },
  {
    id: 3,
    title: 'Review connections',
    text: 'Members have contributed info about themselves, their values, work style and some of the skills that they have. Our personality feature helps give you a little more insight into how you might connect with others.',
    icon: FcBinoculars
  },
  {
    id: 4,
    title: 'Make it happen',
    text: 'We have a bunch of free tools available to help you collaborate with others and build the product that you dream of. Both educational and practical resources that help with decision making and process towards your end goal.',
    icon: FcBullish
  }
]

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
        features = {features}
        headline="We're building a unique collective of"
        tag="people, passion and skills."
        following="Dreams are for free but where can you find the people that can help to make them happen? Co_lab was built to connect people and turn ideas into reality."
      />
    </>
  )
}
