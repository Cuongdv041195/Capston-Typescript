import React from 'react'
import Carousel from './Carousel'
import Course from './Course'
import Teach from './Teach'
import Number from './Number'

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Carousel />
      <Number />
      <Course />
      <Teach />
    </div>
  )
}

export default Home
