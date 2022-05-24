import { FcGlobe, FcBinoculars, FcAdvertising, FcBullish, FcCollaboration, FcLike, FcInfo, FcProcess } from 'react-icons/fc'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

export const featureData = [
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

export const userHomeData = [
  {
    id: 1,
    title: 'Messages',
    text: 'This is where your receive access to other members profile data, and connect with other members to bring ideas to life.',
    icon: FcCollaboration
  },
  {
    id: 2,
    title: 'Follow pitches for later',
    text: 'Not sure if it\'s for you? You can always follow any pitches for later, and find them in this section to follow up.',
    icon: FcLike
  },
  {
    id: 3,
    title: 'Your Projects',
    text: 'All your live pitches are here for you to edit or share. Don\'t have any yet? Then it\'s time to get that big idea online!',
    icon: FcProcess
  },
  {
    id: 4,
    title: 'Profile',
    text: 'Review and update your profile data. Don\'t forget to look at the personality features to get an insight into your work style.',
    icon: FcInfo
  },
  {
    id: 5,
    title: 'Share',
    text: "When you click on a pitch that your interested in supporting we'll share your anonymised* profile details with the pitcher. This helps to better see if your skills, personality and interests fit with the project and the team.",
    icon: RiNumber1
  },
  {
    id: 6,
    title: 'Pitcher details',
    text: "You'll also get the pitchers profile details, to build a better sense of if you think you would work well together. This includes some information on personality, working style and values. It's anonymised, but will help you to see if it's a project for you.",
    icon: RiNumber2
  },
  {
    id: 7,
    title: 'Review',
    text: "If you both indicate that you're keen to move forward, then we'll unlock profile information so you can meet up online or in real life. At this point you can decide how to take things forward and the best work-style for you.",
    icon: RiNumber3
  },
  {
    id: 8,
    title: 'Make it happen',
    text: "Don't forget We have a bunch of free tools available to help you collaborate with others and build the product that you dream of. Both educational and practical resources that help with decision making and process towards your end goal.",
    icon: RiNumber4
  }
]
