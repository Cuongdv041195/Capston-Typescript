import React from 'react'
import { useParams } from 'react-router-dom'

import CourseCatalogProfile from './CourseCatalogProfile'
import ShowCourse from './ShowCourse/ShowCourse'

const CourseCatalog: React.FC = (): JSX.Element => {
  const { courseID } = useParams()
  return (
    <div>
      <CourseCatalogProfile courseID={courseID} />
      <ShowCourse courseID={courseID} />
    </div>
  )
}

export default CourseCatalog
