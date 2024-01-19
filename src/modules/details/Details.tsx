import React from 'react'
import { useParams } from 'react-router-dom'
import CourseProfile from './CourseProfile'
import ShowTimes from './ShowTimes/ShowTimes'

const Details: React.FC = (): JSX.Element => {
  const { courseID }: any = useParams()
  return (
    <div>
      <CourseProfile courseID={courseID} />
      <ShowTimes courseID={courseID} />
    </div>
  )
}

export default Details
